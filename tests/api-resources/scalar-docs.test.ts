// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource scalarDocs', () => {
  smokeCase(
    'scalarDocs.listGuides:single',
    { operation: 'listGuides', path: '/v1/guides' },
    'listGuides',
    async () => {
      const scalarDoc = await client.scalarDocs.listGuides();
    },
  );
  smokeCase(
    'scalarDocs.createGuide:required',
    { operation: 'createGuide', path: '/v1/guides' },
    'createGuide: only required params',
    async () => {
      const scalarDoc = await client.scalarDocs.createGuide({
        name: 'Acme Documentation',
        isPrivate: false,
        allowedUsers: [],
        allowedDomains: [],
      });
    },
  );
  smokeCase(
    'scalarDocs.createGuide:all',
    { operation: 'createGuide', path: '/v1/guides' },
    'createGuide: required and optional params',
    async () => {
      const scalarDoc = await client.scalarDocs.createGuide({
        name: 'Acme Documentation',
        slug: 'acme-docs',
        isPrivate: false,
        allowedUsers: [],
        allowedDomains: [],
      });
    },
  );
  smokeCase(
    'scalarDocs.publishGuide:single',
    { operation: 'publishGuide', path: '/v1/guides/{slug}/publish' },
    'publishGuide',
    async () => {
      const scalarDoc = await client.scalarDocs.publishGuide('acme-docs');
    },
  );
  smokeCase(
    'scalarDocs.listProjects:required',
    { operation: 'listProjects', path: '/v1/docs' },
    'listProjects: only required params',
    async () => {
      const scalarDoc = await client.scalarDocs.listProjects();
    },
  );
  smokeCase(
    'scalarDocs.listProjects:all',
    { operation: 'listProjects', path: '/v1/docs' },
    'listProjects: required and optional params',
    async () => {
      const scalarDoc = await client.scalarDocs.listProjects({
        limit: 20,
      });
    },
  );
  smokeCase(
    'scalarDocs.createProject:required',
    { operation: 'createProject', path: '/v1/docs' },
    'createProject: only required params',
    async () => {
      const docsProject = await client.scalarDocs.createProject({
        name: 'Acme Documentation',
        provider: 'forgejo',
      });
    },
  );
  smokeCase(
    'scalarDocs.createProject:all',
    { operation: 'createProject', path: '/v1/docs' },
    'createProject: required and optional params',
    async () => {
      const docsProject = await client.scalarDocs.createProject({
        name: 'Acme Documentation',
        slug: 'acme-docs',
        isPrivate: false,
        blank: true,
        provider: 'forgejo',
        githubRepository: {
          installationId: 84,
          repoId: 123456789,
        },
        bitbucketRepository: {
          workspaceUuid: '{12345678-1234-4234-8234-123456789abc}',
          repoUuid: '{abcdef01-1234-4234-8234-123456789abc}',
        },
      });
    },
  );
  smokeCase(
    'scalarDocs.retrieveProject:single',
    { operation: 'retrieveProject', path: '/v1/docs/{slug}' },
    'retrieveProject',
    async () => {
      const docsProject = await client.scalarDocs.retrieveProject('acme-docs');
    },
  );
  smokeCase(
    'scalarDocs.updateProject:required',
    { operation: 'updateProject', path: '/v1/docs/{slug}' },
    'updateProject: only required params',
    async () => {
      await client.scalarDocs.updateProject('acme-docs', {});
    },
  );
  smokeCase(
    'scalarDocs.updateProject:all',
    { operation: 'updateProject', path: '/v1/docs/{slug}' },
    'updateProject: required and optional params',
    async () => {
      await client.scalarDocs.updateProject('acme-docs', {
        name: 'Acme Documentation',
        isPrivate: false,
        accessGroups: ['UakgbKJ5m9gl0JDMbcJqL'],
        loginPortalUid: 'LakgbKJ5m9gl0JDMbcJqL',
        activeThemeId: 'TakgbKJ5m9gl0JDMbcJqL',
        agentEnabled: true,
        analyticsEnabled: true,
      });
    },
  );
  smokeCase(
    'scalarDocs.deleteProject:single',
    { operation: 'deleteProject', path: '/v1/docs/{slug}' },
    'deleteProject',
    async () => {
      await client.scalarDocs.deleteProject('acme-docs');
    },
  );
  smokeCase(
    'scalarDocs.publishProject:required',
    { operation: 'publishProject', path: '/v1/docs/{slug}/publish' },
    'publishProject: only required params',
    async () => {
      const scalarDoc = await client.scalarDocs.publishProject('acme-docs', {});
    },
  );
  smokeCase(
    'scalarDocs.publishProject:all',
    { operation: 'publishProject', path: '/v1/docs/{slug}/publish' },
    'publishProject: required and optional params',
    async () => {
      const scalarDoc = await client.scalarDocs.publishProject('acme-docs', {
        commitSha: '0123456789abcdef0123456789abcdef01234567',
        preview: false,
        configPath: 'scalar.config.json',
      });
    },
  );
  smokeCase(
    'scalarDocs.listProjectConfig:required',
    { operation: 'listProjectConfig', path: '/v1/docs/{slug}/config' },
    'listProjectConfig: only required params',
    async () => {
      const scalarDoc = await client.scalarDocs.listProjectConfig('acme-docs');
    },
  );
  smokeCase(
    'scalarDocs.listProjectConfig:all',
    { operation: 'listProjectConfig', path: '/v1/docs/{slug}/config' },
    'listProjectConfig: required and optional params',
    async () => {
      const scalarDoc = await client.scalarDocs.listProjectConfig('acme-docs', {
        ref: 'main',
      });
    },
  );
  smokeCase(
    'scalarDocs.updateProjectConfig:required',
    { operation: 'updateProjectConfig', path: '/v1/docs/{slug}/config' },
    'updateProjectConfig: only required params',
    async () => {
      const scalarDoc = await client.scalarDocs.updateProjectConfig('acme-docs', {
        content: '{"name":"Acme Documentation"}',
      });
    },
  );
  smokeCase(
    'scalarDocs.updateProjectConfig:all',
    { operation: 'updateProjectConfig', path: '/v1/docs/{slug}/config' },
    'updateProjectConfig: required and optional params',
    async () => {
      const scalarDoc = await client.scalarDocs.updateProjectConfig('acme-docs', {
        content: '{"name":"Acme Documentation"}',
        ref: 'main',
        baseToken: 'example-edit-token',
        message: 'Update documentation configuration',
        path: 'scalar.config.json',
      });
    },
  );
  smokeCase(
    'scalarDocs.listProjectDomain:single',
    { operation: 'listProjectDomain', path: '/v1/docs/{slug}/domain' },
    'listProjectDomain',
    async () => {
      const scalarDoc = await client.scalarDocs.listProjectDomain('acme-docs');
    },
  );
  smokeCase(
    'scalarDocs.listProjectDomainStatus:single',
    { operation: 'listProjectDomainStatus', path: '/v1/docs/{slug}/domain/status' },
    'listProjectDomainStatus',
    async () => {
      const scalarDoc = await client.scalarDocs.listProjectDomainStatus('acme-docs');
    },
  );
});
