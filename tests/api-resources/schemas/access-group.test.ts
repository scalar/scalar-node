// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource accessGroup', () => {
  smokeCase(
    'schemas.accessGroup.create:single',
    { operation: 'create', path: '/v1/schemas/{namespace}/{slug}/access-group' },
    'create',
    async () => {
      await client.schemas.accessGroup.create('customer', {
        namespace: 'acme',
        accessGroupSlug: 'acme-api',
      });
    },
  );
  smokeCase(
    'schemas.accessGroup.delete:single',
    { operation: 'delete', path: '/v1/schemas/{namespace}/{slug}/access-group' },
    'delete',
    async () => {
      await client.schemas.accessGroup.delete('customer', {
        namespace: 'acme',
        accessGroupSlug: 'acme-api',
      });
    },
  );
});
