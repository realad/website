import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import { registerAutoTags } from './autotag';

// Automatically inject tags.
const config = new pulumi.Config();

registerAutoTags({
  'user:Organization': config.require('organization'),
  'user:Service': pulumi.getProject(),
  'user:Environment': pulumi.getStack(),
});

const zone = new aws.route53.Zone('zone', { name: config.require('domain') }, { protect: true });

const cert = new aws.acm.Certificate('cert', {
  domainName: config.require('domain'),
  validationMethod: 'DNS',
  subjectAlternativeNames: [`www.${config.require('domain')}`],
});

const validationRecords = cert.domainValidationOptions.apply(options => {
  const uniqueOptions = new Map();
  options.forEach(option => {
    uniqueOptions.set(option.resourceRecordName, option);
  });
  return Array.from(uniqueOptions.values()).map(
    (option, i) =>
      new aws.route53.Record(`validation-${i}`, {
        zoneId: zone.id,
        name: option.resourceRecordName,
        type: option.resourceRecordType,
        records: [option.resourceRecordValue],
        ttl: 60,
      }),
  );
});

const certValidation = new aws.acm.CertificateValidation('cert-validation', {
  certificateArn: cert.arn,
  validationRecordFqdns: validationRecords.apply(records => records.map(record => record.fqdn)),
});

const website = new aws.amplify.App(
  'website',
  {
    name: config.require('domain'),
    platform: 'WEB_COMPUTE',
    buildSpec: `version: 1
applications:
  - frontend:
      phases:
        preBuild:
          commands:
            - npm install -g pnpm
            - pnpm install --filter ./nextjs --prod
        build:
          commands:
            - pnpm --filter ./nextjs build
      artifacts:
        baseDirectory: nextjs/.next/standalone
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
          - ~/.pnpm-store/**/*
      buildPath: /
    appRoot: "nextjs"`,
    enableAutoBranchCreation: true,
    autoBranchCreationPatterns: ['main', 'feature/*'],
    autoBranchCreationConfig: {
      framework: 'Next.js - SSR',
      enableAutoBuild: true,
      enablePullRequestPreview: true,
    },
    environmentVariables: {
      AMPLIFY_DIFF_DEPLOY: 'false',
      AMPLIFY_MONOREPO_APP_ROOT: 'nextjs',
      _LIVE_UPDATES: pulumi.jsonStringify([
        {
          name: 'Node.js version',
          pkg: 'node',
          type: 'nvm',
          version: '22',
        },
        {
          name: 'Next.js version',
          pkg: 'next-version',
          type: 'internal',
          version: '15',
        },
      ]),
    },
  },
  {
    ignoreChanges: ['repository'],
  },
);

const main = new aws.amplify.Branch('main', {
  appId: website.id,
  branchName: 'main',
  displayName: 'main',
  enablePullRequestPreview: true,
  framework: 'Next.js - SSR',
  stage: 'PRODUCTION',
  ttl: '5',
});

const domainAssociation = new aws.amplify.DomainAssociation(
  'domain-association',
  {
    appId: website.id,
    domainName: zone.name,
    certificateSettings: {
      type: 'CUSTOM',
      customCertificateArn: cert.arn,
    },
    subDomains: [
      {
        branchName: main.branchName,
        prefix: '',
      },
      {
        branchName: main.branchName,
        prefix: 'www',
      },
    ],
  },
  { dependsOn: [certValidation] },
);

// Export the website URL.
export const websiteDefaultDomain = website.defaultDomain;
