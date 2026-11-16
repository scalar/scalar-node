// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource accessGroups', () => {
  smokeCase(
    'accessGroups.create:required',
    { operation: 'create', path: '/v1/access-groups' },
    'create: only required params',
    async () => {
      const accessGroup = await client.accessGroups.create({});
    },
  );
  smokeCase(
    'accessGroups.create:all',
    { operation: 'create', path: '/v1/access-groups' },
    'create: required and optional params',
    async () => {
      const accessGroup = await client.accessGroups.create({
        name: 'Engineering',
        slug: 'engineering',
        allowedDomains: 'example.com',
      });
    },
  );
  smokeCase(
    'accessGroups.retrieve:single',
    { operation: 'retrieve', path: '/v1/access-groups/{slug}' },
    'retrieve',
    async () => {
      const accessGroup = await client.accessGroups.retrieve('acme-api');
    },
  );
  smokeCase(
    'accessGroups.update:required',
    { operation: 'update', path: '/v1/access-groups/{slug}' },
    'update: only required params',
    async () => {
      await client.accessGroups.update('acme-api', {});
    },
  );
  smokeCase(
    'accessGroups.update:all',
    { operation: 'update', path: '/v1/access-groups/{slug}' },
    'update: required and optional params',
    async () => {
      await client.accessGroups.update('acme-api', {
        name: 'Engineering',
        slug: 'engineering',
      });
    },
  );
  smokeCase(
    'accessGroups.delete:single',
    { operation: 'delete', path: '/v1/access-groups/{slug}' },
    'delete',
    async () => {
      await client.accessGroups.delete('acme-api');
    },
  );
});
