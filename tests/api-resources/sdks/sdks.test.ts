// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource sdks', () => {
  smokeCase(
    'sdks.list:required',
    { operation: 'list', path: '/v1/sdks' },
    'list: only required params',
    async () => {
      const sdk = await client.sdks.list();
    },
  );
  smokeCase(
    'sdks.list:all',
    { operation: 'list', path: '/v1/sdks' },
    'list: required and optional params',
    async () => {
      const sdk = await client.sdks.list({
        limit: 20,
      });
    },
  );
  smokeCase(
    'sdks.create:required',
    { operation: 'create', path: '/v1/sdks' },
    'create: only required params',
    async () => {
      const uid = await client.sdks.create({
        apiUid: 'UakgbKJ5m9gl0JDMbcJqL',
      });
    },
  );
  smokeCase(
    'sdks.create:all',
    { operation: 'create', path: '/v1/sdks' },
    'create: required and optional params',
    async () => {
      const uid = await client.sdks.create({
        apiUid: 'UakgbKJ5m9gl0JDMbcJqL',
        languages: ['typescript'],
        title: 'Acme SDK',
        slug: 'acme-sdk',
        className: 'Acme',
        config: '{"targets":{"typescript":{"packageName":"@acme/sdk"}}}',
      });
    },
  );
  smokeCase(
    'sdks.retrieve:single',
    { operation: 'retrieve', path: '/v1/sdks/{uid}' },
    'retrieve',
    async () => {
      const sdk = await client.sdks.retrieve('UakgbKJ5m9gl0JDMbcJqL');
    },
  );
  smokeCase(
    'sdks.update:required',
    { operation: 'update', path: '/v1/sdks/{uid}' },
    'update: only required params',
    async () => {
      await client.sdks.update('UakgbKJ5m9gl0JDMbcJqL', {});
    },
  );
  smokeCase(
    'sdks.update:all',
    { operation: 'update', path: '/v1/sdks/{uid}' },
    'update: required and optional params',
    async () => {
      await client.sdks.update('UakgbKJ5m9gl0JDMbcJqL', {
        title: 'Acme SDK',
        slug: 'acme-sdk',
        isPrivate: false,
        config: '{"targets":{"typescript":{"packageName":"@acme/sdk"}}}',
        apiUid: 'UakgbKJ5m9gl0JDMbcJqL',
        apiVersion: {},
      });
    },
  );
  smokeCase('sdks.delete:single', { operation: 'delete', path: '/v1/sdks/{uid}' }, 'delete', async () => {
    await client.sdks.delete('UakgbKJ5m9gl0JDMbcJqL');
  });
  smokeCase(
    'sdks.build:required',
    { operation: 'build', path: '/v1/sdks/{uid}/build' },
    'build: only required params',
    async () => {
      const sdk = await client.sdks.build('UakgbKJ5m9gl0JDMbcJqL', {});
    },
  );
  smokeCase(
    'sdks.build:all',
    { operation: 'build', path: '/v1/sdks/{uid}/build' },
    'build: required and optional params',
    async () => {
      const sdk = await client.sdks.build('UakgbKJ5m9gl0JDMbcJqL', {
        version: '1.2.0',
        customCodeRef: 'scalar-next',
        languages: ['typescript'],
      });
    },
  );
});
