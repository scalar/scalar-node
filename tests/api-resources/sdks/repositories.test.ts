// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource repositories', () => {
  smokeCase(
    'sdks.repositories.link:required',
    { operation: 'link', path: '/v1/sdks/{uid}/repositories' },
    'link: only required params',
    async () => {
      const repository = await client.sdks.repositories.link('UakgbKJ5m9gl0JDMbcJqL', {
        language: 'typescript',
        repositoryId: 123456789,
        baseBranch: 'main',
      });
    },
  );
  smokeCase(
    'sdks.repositories.link:all',
    { operation: 'link', path: '/v1/sdks/{uid}/repositories' },
    'link: required and optional params',
    async () => {
      const repository = await client.sdks.repositories.link('UakgbKJ5m9gl0JDMbcJqL', {
        language: 'typescript',
        repositoryId: 123456789,
        baseBranch: 'main',
        prereleaseType: 'beta',
      });
    },
  );
  smokeCase(
    'sdks.repositories.unlink:single',
    { operation: 'unlink', path: '/v1/sdks/{uid}/repositories/{language}' },
    'unlink',
    async () => {
      await client.sdks.repositories.unlink('typescript', {
        uid: 'UakgbKJ5m9gl0JDMbcJqL',
      });
    },
  );
  smokeCase(
    'sdks.repositories.updatePublishing:required',
    { operation: 'updatePublishing', path: '/v1/sdks/{uid}/repositories/{language}/publishing' },
    'updatePublishing: only required params',
    async () => {
      await client.sdks.repositories.updatePublishing('typescript', {
        uid: 'UakgbKJ5m9gl0JDMbcJqL',
        publishOnMerge: true,
      });
    },
  );
  smokeCase(
    'sdks.repositories.updatePublishing:all',
    { operation: 'updatePublishing', path: '/v1/sdks/{uid}/repositories/{language}/publishing' },
    'updatePublishing: required and optional params',
    async () => {
      await client.sdks.repositories.updatePublishing('typescript', {
        uid: 'UakgbKJ5m9gl0JDMbcJqL',
        publishOnMerge: true,
        authMethod: 'oidc',
        access: 'public',
        tag: 'latest',
        artifactId: 'scalar-galaxy',
        tapRepo: 'scalar/homebrew-tap',
        cask: true,
        replaceFormula: false,
        registry: 'npm',
      });
    },
  );
});
