// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource version', () => {
  smokeCase(
    'schemas.version.retrieve:single',
    { operation: 'retrieve', path: '/v1/schemas/{namespace}/{slug}/version/{semver}' },
    'retrieve',
    async () => {
      const response = await client.schemas.version.retrieve('1.2.0', {
        namespace: 'acme',
        slug: 'customer',
      });
    },
  );
  smokeCase(
    'schemas.version.delete:single',
    { operation: 'delete', path: '/v1/schemas/{namespace}/{slug}/version/{semver}' },
    'delete',
    async () => {
      await client.schemas.version.delete('1.2.0', {
        namespace: 'acme',
        slug: 'customer',
      });
    },
  );
  smokeCase(
    'schemas.version.create:required',
    { operation: 'create', path: '/v1/schemas/{namespace}/{slug}/version' },
    'create: only required params',
    async () => {
      const version = await client.schemas.version.create('customer', {
        namespace: 'acme',
        version: '1.2.0',
        document: '{"type":"object","properties":{"name":{"type":"string","examples":["Acme"]}}}',
      });
    },
  );
  smokeCase(
    'schemas.version.create:all',
    { operation: 'create', path: '/v1/schemas/{namespace}/{slug}/version' },
    'create: required and optional params',
    async () => {
      const version = await client.schemas.version.create('customer', {
        namespace: 'acme',
        version: '1.2.0',
        document: '{"type":"object","properties":{"name":{"type":"string","examples":["Acme"]}}}',
        force: false,
      });
    },
  );
});
