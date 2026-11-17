// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource schemas', () => {
  smokeCase(
    'schemas.list:single',
    { operation: 'list', path: '/v1/schemas/{namespace}' },
    'list',
    async () => {
      const schema = await client.schemas.list('acme');
    },
  );
  smokeCase(
    'schemas.create:required',
    { operation: 'create', path: '/v1/schemas/{namespace}' },
    'create: only required params',
    async () => {
      const uid = await client.schemas.create('acme', {
        title: 'Customer',
        version: '1.2.0',
        slug: 'customer',
        document: '{"type":"object","properties":{"name":{"type":"string","examples":["Acme"]}}}',
      });
    },
  );
  smokeCase(
    'schemas.create:all',
    { operation: 'create', path: '/v1/schemas/{namespace}' },
    'create: required and optional params',
    async () => {
      const uid = await client.schemas.create('acme', {
        title: 'Customer',
        description: 'API for managing Acme products and orders.',
        version: '1.2.0',
        slug: 'customer',
        isPrivate: false,
        document: '{"type":"object","properties":{"name":{"type":"string","examples":["Acme"]}}}',
      });
    },
  );
  smokeCase(
    'schemas.update:required',
    { operation: 'update', path: '/v1/schemas/{namespace}/{slug}' },
    'update: only required params',
    async () => {
      await client.schemas.update('customer', {
        namespace: 'acme',
      });
    },
  );
  smokeCase(
    'schemas.update:all',
    { operation: 'update', path: '/v1/schemas/{namespace}/{slug}' },
    'update: required and optional params',
    async () => {
      await client.schemas.update('customer', {
        namespace: 'acme',
        title: 'Customer',
        description: 'API for managing Acme products and orders.',
        isPrivate: false,
      });
    },
  );
  smokeCase(
    'schemas.delete:single',
    { operation: 'delete', path: '/v1/schemas/{namespace}/{slug}' },
    'delete',
    async () => {
      await client.schemas.delete('customer', {
        namespace: 'acme',
      });
    },
  );
});
