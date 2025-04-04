import * as aws from '@pulumi/aws';
import { PolicyPack, validateResourceOfType } from '@pulumi/policy';
import { isTaggable } from './taggable';

new PolicyPack('aws-typescript', {
  policies: [
    {
      name: 's3-no-public-read',
      description: 'Prohibits setting the publicRead or publicReadWrite permission on AWS S3 buckets.',
      enforcementLevel: 'mandatory',
      validateResource: validateResourceOfType(aws.s3.Bucket, (bucket, args, reportViolation) => {
        if (bucket.acl === 'public-read' || bucket.acl === 'public-read-write') {
          reportViolation(
            'You cannot set public-read or public-read-write on an S3 bucket. ' +
              'Read more about ACLs here: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html',
          );
        }
      }),
    },
    {
      name: 'check-required-tags',
      description: 'Ensure required tags are present on all taggable resources.',
      configSchema: {
        properties: {
          requiredTags: {
            type: 'array',
            items: { type: 'string' },
          },
        },
      },
      validateResource: (args, reportViolation) => {
        const config = args.getConfig<AwsTagsPolicyConfig>();
        const requiredTags = config.requiredTags;
        if (requiredTags && isTaggable(args.type)) {
          const ts = args.props['tags'];
          for (const rt of requiredTags) {
            if (!ts || !ts[rt]) {
              reportViolation(`Taggable resource '${args.urn}' is missing required tag '${rt}'`);
            }
          }
        }
      },
    },
  ],
});

interface AwsTagsPolicyConfig {
  requiredTags?: string[];
}
