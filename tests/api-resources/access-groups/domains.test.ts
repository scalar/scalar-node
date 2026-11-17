// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource domains', () => {
  smokeCase(
    'accessGroups.domains.create:single',
    { operation: 'create', path: '/v1/access-groups/{slug}/domains' },
    'create',
    async () => {
      await client.accessGroups.domains.create('acme-api', {
        domain: 'example.com',
      });
    },
  );
  smokeCase(
    'accessGroups.domains.delete:single',
    { operation: 'delete', path: '/v1/access-groups/{slug}/domains' },
    'delete',
    async () => {
      await client.accessGroups.domains.delete('acme-api', {
        domain: 'example.com',
      });
    },
  );
});
