import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import { registerAutoTags } from './autotag';

const current = aws.getCallerIdentity({});
const config = new pulumi.Config();
const domain = config.require('domain');

// Automatically inject tags.
registerAutoTags({
  'user:Organization': config.require('organization'),
  'user:Service': pulumi.getProject(),
  'user:Environment': pulumi.getStack(),
});

const role = new aws.iam.Role('role', {
  assumeRolePolicy: JSON.stringify({
    Version: '2012-10-17',
    Statement: [
      {
        Action: 'sts:AssumeRole',
        Effect: 'Allow',
        Principal: {
          Service: 'amplify.amazonaws.com',
        },
      },
    ],
  }),
});

const policy = new aws.iam.Policy('policy', {
  policy: current.then(current =>
    JSON.stringify({
      Version: '2012-10-17',
      Statement: [
        {
          Effect: 'Allow',
          Action: ['logs:CreateLogStream', 'logs:PutLogEvents'],
          Resource: `arn:aws:logs:eu-central-1:${current.accountId}:log-group:/aws/amplify/*:log-stream:*`,
        },
        {
          Effect: 'Allow',
          Action: 'logs:CreateLogGroup',
          Resource: `arn:aws:logs:eu-central-1:${current.accountId}:log-group:/aws/amplify/*`,
        },
        {
          Effect: 'Allow',
          Action: 'logs:DescribeLogGroups',
          Resource: `arn:aws:logs:eu-central-1:${current.accountId}:log-group:*`,
        },
      ],
    }),
  ),
});

const rolePolicyAttachment = new aws.iam.RolePolicyAttachment('role-policy-attachment', {
  policyArn: policy.arn,
  role: role.name,
});

const zone = new aws.route53.Zone('zone', { name: domain }, { protect: true });

const cert = new aws.acm.Certificate('cert', {
  domainName: domain,
  validationMethod: 'DNS',
  subjectAlternativeNames: [`www.${domain}`],
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
    iamServiceRoleArn: role.arn,
    customRules: [
      {
        source: `www.${domain}`,
        target: domain,
        status: '301',
      },
    ],
    buildSpec: `version: 1
applications:
  - frontend:
      buildPath: '/'
      phases:
        preBuild:
          commands:
            - npm install -g pnpm
            - pnpm install
        build:
          commands:
            - pnpm nextjs:build
      artifacts:
        baseDirectory: nextjs/.next
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
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

const webAcl = new aws.wafv2.WebAcl('web-acl', {
  defaultAction: {
    allow: {},
  },
  scope: 'CLOUDFRONT',
  description: website.id.apply(id => `WebACL for Amplify App ${id}`),
  visibilityConfig: {
    sampledRequestsEnabled: true,
    cloudwatchMetricsEnabled: true,
    metricName: 'web-acl',
  },
  customResponseBodies: [
    {
      key: 'forbiddenRedirect',
      contentType: 'TEXT_HTML',
      content: "<script>window.location.href='/forbidden'</script>",
    },
  ],
  rules: [
    {
      name: 'AWS-AWSManagedRulesAmazonIpReputationList',
      priority: 0,
      overrideAction: {
        none: {},
      },
      statement: {
        managedRuleGroupStatement: {
          name: 'AWSManagedRulesAmazonIpReputationList',
          vendorName: 'AWS',
        },
      },
      visibilityConfig: {
        sampledRequestsEnabled: true,
        cloudwatchMetricsEnabled: true,
        metricName: 'aws-managed-rules-amazon-ip-reputation-list',
      },
    },
    {
      name: 'AWS-AWSManagedRulesCommonRuleSet',
      priority: 1,
      overrideAction: {
        none: {},
      },
      statement: {
        managedRuleGroupStatement: {
          name: 'AWSManagedRulesCommonRuleSet',
          vendorName: 'AWS',
        },
      },
      visibilityConfig: {
        sampledRequestsEnabled: true,
        cloudwatchMetricsEnabled: true,
        metricName: 'aws-managed-rules-common-rule-set',
      },
    },
    {
      name: 'AWS-AWSManagedRulesKnownBadInputsRuleSet',
      priority: 2,
      overrideAction: {
        none: {},
      },
      statement: {
        managedRuleGroupStatement: {
          name: 'AWSManagedRulesKnownBadInputsRuleSet',
          vendorName: 'AWS',
        },
      },
      visibilityConfig: {
        sampledRequestsEnabled: true,
        cloudwatchMetricsEnabled: true,
        metricName: 'aws-managed-rules-known-bad-inputs-rule-set',
      },
    },
    {
      name: 'BlockAmplifyDomain',
      priority: 3,
      action: {
        block: {},
      },
      statement: {
        byteMatchStatement: {
          searchString: 'amplifyapp.com',
          fieldToMatch: {
            singleHeader: {
              name: 'host',
            },
          },
          textTransformations: [
            {
              priority: 0,
              type: 'NONE',
            },
          ],
          positionalConstraint: 'ENDS_WITH',
        },
      },
      visibilityConfig: {
        sampledRequestsEnabled: true,
        cloudwatchMetricsEnabled: true,
        metricName: 'block-amplify-domain',
      },
    },
  ],
});

const webAclAssociation = new aws.wafv2.WebAclAssociation('web-acl-association', {
  resourceArn: website.arn,
  webAclArn: webAcl.arn,
});

// Export the website URL.
export const websiteDefaultDomain = website.defaultDomain;
