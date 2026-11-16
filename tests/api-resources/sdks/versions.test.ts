// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource versions', () => {
  smokeCase(
    'sdks.versions.create:required',
    { operation: 'create', path: '/v1/sdks/{uid}/versions' },
    'create: only required params',
    async () => {
      await client.sdks.versions.create('UakgbKJ5m9gl0JDMbcJqL', {
        version: '1.2.0',
      });
    },
  );
  smokeCase(
    'sdks.versions.create:all',
    { operation: 'create', path: '/v1/sdks/{uid}/versions' },
    'create: required and optional params',
    async () => {
      await client.sdks.versions.create('UakgbKJ5m9gl0JDMbcJqL', {
        version: '1.2.0',
        apiVersion: {},
      });
    },
  );
  smokeCase(
    'sdks.versions.delete:single',
    { operation: 'delete', path: '/v1/sdks/{uid}/versions/{version}' },
    'delete',
    async () => {
      await client.sdks.versions.delete('1.2.0', {
        uid: 'UakgbKJ5m9gl0JDMbcJqL',
      });
    },
  );
});
