// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource registry', () => {
  smokeCase(
    'registry.listAllApiDocuments:single',
    { operation: 'listAllApiDocuments', path: '/v1/apis' },
    'listAllApiDocuments',
    async () => {
      const registry = await client.registry.listAllAPIDocuments();
    },
  );
  smokeCase(
    'registry.listApiDocuments:single',
    { operation: 'listApiDocuments', path: '/v1/apis/{namespace}' },
    'listApiDocuments',
    async () => {
      const registry = await client.registry.listAPIDocuments('acme');
    },
  );
  smokeCase(
    'registry.createApiDocument:required',
    { operation: 'createApiDocument', path: '/v1/apis/{namespace}' },
    'createApiDocument: only required params',
    async () => {
      const registry = await client.registry.createAPIDocument('acme', {
        title: 'Acme API',
        version: '1.2.0',
        slug: 'acme-api',
        document: '{"openapi":"3.1.0","info":{"title":"Acme API","version":"1.2.0"},"paths":{}}',
      });
    },
  );
  smokeCase(
    'registry.createApiDocument:all',
    { operation: 'createApiDocument', path: '/v1/apis/{namespace}' },
    'createApiDocument: required and optional params',
    async () => {
      const registry = await client.registry.createAPIDocument('acme', {
        title: 'Acme API',
        description: 'API for managing Acme products and orders.',
        version: '1.2.0',
        slug: 'acme-api',
        ruleset: 'extends: ["spectral:oas"]',
        isPrivate: false,
        document: '{"openapi":"3.1.0","info":{"title":"Acme API","version":"1.2.0"},"paths":{}}',
      });
    },
  );
  smokeCase(
    'registry.updateApiDocument:required',
    { operation: 'updateApiDocument', path: '/v1/apis/{namespace}/{slug}' },
    'updateApiDocument: only required params',
    async () => {
      await client.registry.updateAPIDocument('acme-api', {
        namespace: 'acme',
      });
    },
  );
  smokeCase(
    'registry.updateApiDocument:all',
    { operation: 'updateApiDocument', path: '/v1/apis/{namespace}/{slug}' },
    'updateApiDocument: required and optional params',
    async () => {
      await client.registry.updateAPIDocument('acme-api', {
        namespace: 'acme',
        title: 'Acme API',
        description: 'API for managing Acme products and orders.',
        isPrivate: false,
        ruleset: 'extends: ["spectral:oas"]',
      });
    },
  );
  smokeCase(
    'registry.deleteApiDocument:single',
    { operation: 'deleteApiDocument', path: '/v1/apis/{namespace}/{slug}' },
    'deleteApiDocument',
    async () => {
      await client.registry.deleteAPIDocument('acme-api', {
        namespace: 'acme',
      });
    },
  );
  smokeCase(
    'registry.retrieveApiDocumentVersion:single',
    { operation: 'retrieveApiDocumentVersion', path: '/v1/apis/{namespace}/{slug}/version/{semver}' },
    'retrieveApiDocumentVersion',
    async () => {
      const response = await client.registry.retrieveAPIDocumentVersion('1.2.0', {
        namespace: 'acme',
        slug: 'acme-api',
      });
    },
  );
  smokeCase(
    'registry.updateApiDocumentVersion:single',
    { operation: 'updateApiDocumentVersion', path: '/v1/apis/{namespace}/{slug}/version/{semver}' },
    'updateApiDocumentVersion',
    async () => {
      const registry = await client.registry.updateAPIDocumentVersion('1.2.0', {
        namespace: 'acme',
        slug: 'acme-api',
        document: '{"openapi":"3.1.0","info":{"title":"Acme API","version":"1.2.0"},"paths":{}}',
      });
    },
  );
  smokeCase(
    'registry.deleteApiDocumentVersion:single',
    { operation: 'deleteApiDocumentVersion', path: '/v1/apis/{namespace}/{slug}/version/{semver}' },
    'deleteApiDocumentVersion',
    async () => {
      await client.registry.deleteAPIDocumentVersion('1.2.0', {
        namespace: 'acme',
        slug: 'acme-api',
      });
    },
  );
  smokeCase(
    'registry.listApiDocumentVersionMetadata:single',
    {
      operation: 'listApiDocumentVersionMetadata',
      path: '/v1/apis/{namespace}/{slug}/version/{semver}/metadata',
    },
    'listApiDocumentVersionMetadata',
    async () => {
      const managedDocVersion = await client.registry.listAPIDocumentVersionMetadata('1.2.0', {
        namespace: 'acme',
        slug: 'acme-api',
      });
    },
  );
  smokeCase(
    'registry.createApiDocumentVersion:required',
    { operation: 'createApiDocumentVersion', path: '/v1/apis/{namespace}/{slug}/version' },
    'createApiDocumentVersion: only required params',
    async () => {
      const managedDocVersion = await client.registry.createAPIDocumentVersion('acme-api', {
        namespace: 'acme',
        version: '1.2.0',
        document: '{"openapi":"3.1.0","info":{"title":"Acme API","version":"1.2.0"},"paths":{}}',
      });
    },
  );
  smokeCase(
    'registry.createApiDocumentVersion:all',
    { operation: 'createApiDocumentVersion', path: '/v1/apis/{namespace}/{slug}/version' },
    'createApiDocumentVersion: required and optional params',
    async () => {
      const managedDocVersion = await client.registry.createAPIDocumentVersion('acme-api', {
        namespace: 'acme',
        version: '1.2.0',
        document: '{"openapi":"3.1.0","info":{"title":"Acme API","version":"1.2.0"},"paths":{}}',
        force: false,
      });
    },
  );
  smokeCase(
    'registry.createApiDocumentAccessGroup:single',
    { operation: 'createApiDocumentAccessGroup', path: '/v1/apis/{namespace}/{slug}/access-group' },
    'createApiDocumentAccessGroup',
    async () => {
      await client.registry.createAPIDocumentAccessGroup('acme-api', {
        namespace: 'acme',
        accessGroupSlug: 'acme-api',
      });
    },
  );
  smokeCase(
    'registry.deleteApiDocumentAccessGroup:single',
    { operation: 'deleteApiDocumentAccessGroup', path: '/v1/apis/{namespace}/{slug}/access-group' },
    'deleteApiDocumentAccessGroup',
    async () => {
      await client.registry.deleteAPIDocumentAccessGroup('acme-api', {
        namespace: 'acme',
        accessGroupSlug: 'acme-api',
      });
    },
  );
});
