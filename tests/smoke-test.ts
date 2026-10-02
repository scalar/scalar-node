// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke test: calls every generated operation once to confirm the SDK can reach each endpoint.
// Run it from this repo with `bun tests/smoke-test.ts`. Each case below calls one SDK method
// exactly the way the SDK exposes it (positional params, request body, pagination, streaming).
//
// Two environment variables tune a run:
//   - SCALAR_SMOKE_FILTER: comma-separated needles; only operations whose name or path contains
//     one of them run, so you can smoke-test a subset without editing this file.
//   - SCALAR_SMOKE_REPORT: a file path; when set, the run writes a JSON report there instead of
//     printing a table. The generator uses this to collect per-operation results.
import { writeFileSync } from 'node:fs';

// The package exports the client class. The client reads auth and the base URL from the
// environment, so it needs no constructor options to point at a server.
import Scalar from '@scalar/sdk';

// One shared client runs every case.
const client = new Scalar({ maxRetries: 2, timeout: 10_000 });

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string;
  method: string;
  path: string;
  label?: string;
  status: 'passed' | 'failed';
  durationMs: number;
  error?: string;
};

// One or two entries per generated operation: the first passes only the arguments the method
// requires, the second also fills every optional parameter and body property. `label` says which
// is which, and is absent when the operation has no optional argument and so has only one case.
// `run` performs the real SDK call; the other fields are metadata used for filtering and
// reporting. This list is generated, so it stays in sync with the SDK surface.
const cases: {
  operation: string;
  method: string;
  path: string;
  label?: string;
  run: () => Promise<unknown>;
}[] = [
  {
    operation: 'listAllApiDocuments',
    method: 'GET',
    path: '/v1/apis',
    run: async () => {
      const registry = await client.registry.listAllAPIDocuments();
    },
  },

  {
    operation: 'listApiDocuments',
    method: 'GET',
    path: '/v1/apis/{namespace}',
    run: async () => {
      const registry = await client.registry.listAPIDocuments('acme');
    },
  },

  {
    operation: 'createApiDocument',
    method: 'POST',
    path: '/v1/apis/{namespace}',
    label: 'required params',
    run: async () => {
      const registry = await client.registry.createAPIDocument('acme', {
        title: 'Acme API',
        version: '1.2.0',
        slug: 'acme-api',
        document: '{"openapi":"3.1.0","info":{"title":"Acme API","version":"1.2.0"},"paths":{}}',
      });
    },
  },

  {
    operation: 'createApiDocument',
    method: 'POST',
    path: '/v1/apis/{namespace}',
    label: 'all params',
    run: async () => {
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
  },

  {
    operation: 'updateApiDocument',
    method: 'PATCH',
    path: '/v1/apis/{namespace}/{slug}',
    label: 'required params',
    run: async () => {
      await client.registry.updateAPIDocument('acme-api', {
        namespace: 'acme',
      });
    },
  },

  {
    operation: 'updateApiDocument',
    method: 'PATCH',
    path: '/v1/apis/{namespace}/{slug}',
    label: 'all params',
    run: async () => {
      await client.registry.updateAPIDocument('acme-api', {
        namespace: 'acme',
        title: 'Acme API',
        description: 'API for managing Acme products and orders.',
        isPrivate: false,
        ruleset: 'extends: ["spectral:oas"]',
      });
    },
  },

  {
    operation: 'deleteApiDocument',
    method: 'DELETE',
    path: '/v1/apis/{namespace}/{slug}',
    run: async () => {
      await client.registry.deleteAPIDocument('acme-api', {
        namespace: 'acme',
      });
    },
  },

  {
    operation: 'retrieveApiDocumentVersion',
    method: 'GET',
    path: '/v1/apis/{namespace}/{slug}/version/{semver}',
    run: async () => {
      const response = await client.registry.retrieveAPIDocumentVersion('1.2.0', {
        namespace: 'acme',
        slug: 'acme-api',
      });
    },
  },

  {
    operation: 'updateApiDocumentVersion',
    method: 'PATCH',
    path: '/v1/apis/{namespace}/{slug}/version/{semver}',
    run: async () => {
      const registry = await client.registry.updateAPIDocumentVersion('1.2.0', {
        namespace: 'acme',
        slug: 'acme-api',
        document: '{"openapi":"3.1.0","info":{"title":"Acme API","version":"1.2.0"},"paths":{}}',
      });
    },
  },

  {
    operation: 'deleteApiDocumentVersion',
    method: 'DELETE',
    path: '/v1/apis/{namespace}/{slug}/version/{semver}',
    run: async () => {
      await client.registry.deleteAPIDocumentVersion('1.2.0', {
        namespace: 'acme',
        slug: 'acme-api',
      });
    },
  },

  {
    operation: 'listApiDocumentVersionMetadata',
    method: 'GET',
    path: '/v1/apis/{namespace}/{slug}/version/{semver}/metadata',
    run: async () => {
      const managedDocVersion = await client.registry.listAPIDocumentVersionMetadata('1.2.0', {
        namespace: 'acme',
        slug: 'acme-api',
      });
    },
  },

  {
    operation: 'createApiDocumentVersion',
    method: 'POST',
    path: '/v1/apis/{namespace}/{slug}/version',
    label: 'required params',
    run: async () => {
      const managedDocVersion = await client.registry.createAPIDocumentVersion('acme-api', {
        namespace: 'acme',
        version: '1.2.0',
        document: '{"openapi":"3.1.0","info":{"title":"Acme API","version":"1.2.0"},"paths":{}}',
      });
    },
  },

  {
    operation: 'createApiDocumentVersion',
    method: 'POST',
    path: '/v1/apis/{namespace}/{slug}/version',
    label: 'all params',
    run: async () => {
      const managedDocVersion = await client.registry.createAPIDocumentVersion('acme-api', {
        namespace: 'acme',
        version: '1.2.0',
        document: '{"openapi":"3.1.0","info":{"title":"Acme API","version":"1.2.0"},"paths":{}}',
        force: false,
      });
    },
  },

  {
    operation: 'createApiDocumentAccessGroup',
    method: 'POST',
    path: '/v1/apis/{namespace}/{slug}/access-group',
    run: async () => {
      await client.registry.createAPIDocumentAccessGroup('acme-api', {
        namespace: 'acme',
        accessGroupSlug: 'acme-api',
      });
    },
  },

  {
    operation: 'deleteApiDocumentAccessGroup',
    method: 'DELETE',
    path: '/v1/apis/{namespace}/{slug}/access-group',
    run: async () => {
      await client.registry.deleteAPIDocumentAccessGroup('acme-api', {
        namespace: 'acme',
        accessGroupSlug: 'acme-api',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/schemas/{namespace}',
    run: async () => {
      const schema = await client.schemas.list('acme');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/schemas/{namespace}',
    label: 'required params',
    run: async () => {
      const uid = await client.schemas.create('acme', {
        title: 'Customer',
        version: '1.2.0',
        slug: 'customer',
        document: '{"type":"object","properties":{"name":{"type":"string","examples":["Acme"]}}}',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/schemas/{namespace}',
    label: 'all params',
    run: async () => {
      const uid = await client.schemas.create('acme', {
        title: 'Customer',
        description: 'API for managing Acme products and orders.',
        version: '1.2.0',
        slug: 'customer',
        isPrivate: false,
        document: '{"type":"object","properties":{"name":{"type":"string","examples":["Acme"]}}}',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/schemas/{namespace}/{slug}',
    label: 'required params',
    run: async () => {
      await client.schemas.update('customer', {
        namespace: 'acme',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/schemas/{namespace}/{slug}',
    label: 'all params',
    run: async () => {
      await client.schemas.update('customer', {
        namespace: 'acme',
        title: 'Customer',
        description: 'API for managing Acme products and orders.',
        isPrivate: false,
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/schemas/{namespace}/{slug}',
    run: async () => {
      await client.schemas.delete('customer', {
        namespace: 'acme',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/schemas/{namespace}/{slug}/version/{semver}',
    run: async () => {
      const response = await client.schemas.version.retrieve('1.2.0', {
        namespace: 'acme',
        slug: 'customer',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/schemas/{namespace}/{slug}/version/{semver}',
    run: async () => {
      await client.schemas.version.delete('1.2.0', {
        namespace: 'acme',
        slug: 'customer',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/schemas/{namespace}/{slug}/version',
    label: 'required params',
    run: async () => {
      const version = await client.schemas.version.create('customer', {
        namespace: 'acme',
        version: '1.2.0',
        document: '{"type":"object","properties":{"name":{"type":"string","examples":["Acme"]}}}',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/schemas/{namespace}/{slug}/version',
    label: 'all params',
    run: async () => {
      const version = await client.schemas.version.create('customer', {
        namespace: 'acme',
        version: '1.2.0',
        document: '{"type":"object","properties":{"name":{"type":"string","examples":["Acme"]}}}',
        force: false,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/schemas/{namespace}/{slug}/access-group',
    run: async () => {
      await client.schemas.accessGroup.create('customer', {
        namespace: 'acme',
        accessGroupSlug: 'acme-api',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/schemas/{namespace}/{slug}/access-group',
    run: async () => {
      await client.schemas.accessGroup.delete('customer', {
        namespace: 'acme',
        accessGroupSlug: 'acme-api',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/login-portals/{slug}',
    run: async () => {
      const loginPortal = await client.loginPortals.retrieve('acme-login');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/login-portals/{slug}',
    label: 'required params',
    run: async () => {
      await client.loginPortals.update('acme-login', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/login-portals/{slug}',
    label: 'all params',
    run: async () => {
      await client.loginPortals.update('acme-login', {
        title: 'Acme Private Documentation',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/login-portals/{slug}',
    run: async () => {
      await client.loginPortals.delete('acme-login');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/login-portals',
    run: async () => {
      const uid = await client.loginPortals.create({
        title: 'Acme Private Documentation',
        slug: 'acme-login',
        email: {
          logo: '',
          logoSize: '100',
          buttonText: 'Login',
          message: 'Click to access private documentation hosted by scalar.com',
          title: 'Private Docs',
          mainColor: '#2a2f45',
          mainBackground: '#f6f6f6',
          cardColor: '#2a2f45',
          cardBackground: '#fff',
          buttonColor: '#fff',
          buttonBackground: '#0f0f0f',
        },
        page: {
          title: 'Scalar Private Docs',
          description: 'Login to access your documentation',
          head: '',
          script: '',
          theme: '',
          companyName: '',
          logo: '',
          logoURL: '',
          favicon: '',
          termsLink: '',
          privacyLink: '',
          formTitle: 'Scalar Private Docs',
          formDescription: 'Login to access your documentation',
          formImage: '',
        },
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/login-portals',
    run: async () => {
      const loginPortal = await client.loginPortals.list();
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/access-groups',
    label: 'required params',
    run: async () => {
      const accessGroup = await client.accessGroups.create({});
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/access-groups',
    label: 'all params',
    run: async () => {
      const accessGroup = await client.accessGroups.create({
        name: 'Engineering',
        slug: 'engineering',
        allowedDomains: 'example.com',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/access-groups/{slug}',
    run: async () => {
      const accessGroup = await client.accessGroups.retrieve('acme-api');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/access-groups/{slug}',
    label: 'required params',
    run: async () => {
      await client.accessGroups.update('acme-api', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/access-groups/{slug}',
    label: 'all params',
    run: async () => {
      await client.accessGroups.update('acme-api', {
        name: 'Engineering',
        slug: 'engineering',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/access-groups/{slug}',
    run: async () => {
      await client.accessGroups.delete('acme-api');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/access-groups/{slug}/domains',
    run: async () => {
      await client.accessGroups.domains.create('acme-api', {
        domain: 'example.com',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/access-groups/{slug}/domains',
    run: async () => {
      await client.accessGroups.domains.delete('acme-api', {
        domain: 'example.com',
      });
    },
  },

  {
    operation: 'listRulesets',
    method: 'GET',
    path: '/v1/rulesets/{namespace}',
    run: async () => {
      const rule = await client.rules.listRulesets('acme');
    },
  },

  {
    operation: 'createRuleset',
    method: 'POST',
    path: '/v1/rulesets/{namespace}',
    label: 'required params',
    run: async () => {
      const uid = await client.rules.createRuleset('acme', {
        title: 'Acme API Rules',
        slug: 'acme-rules',
        document: 'extends: ["spectral:oas"]\nrules:\n  info-contact: warn\n',
      });
    },
  },

  {
    operation: 'createRuleset',
    method: 'POST',
    path: '/v1/rulesets/{namespace}',
    label: 'all params',
    run: async () => {
      const uid = await client.rules.createRuleset('acme', {
        title: 'Acme API Rules',
        description: 'API for managing Acme products and orders.',
        slug: 'acme-rules',
        isPrivate: false,
        document: 'extends: ["spectral:oas"]\nrules:\n  info-contact: warn\n',
      });
    },
  },

  {
    operation: 'updateRuleset',
    method: 'PATCH',
    path: '/v1/rulesets/{namespace}/{slug}',
    label: 'required params',
    run: async () => {
      await client.rules.updateRuleset('acme-rules', {
        namespace: 'acme',
      });
    },
  },

  {
    operation: 'updateRuleset',
    method: 'PATCH',
    path: '/v1/rulesets/{namespace}/{slug}',
    label: 'all params',
    run: async () => {
      await client.rules.updateRuleset('acme-rules', {
        namespace: 'acme',
        slug: 'acme-rules',
        title: 'Acme API Rules',
        description: 'API for managing Acme products and orders.',
        isPrivate: false,
      });
    },
  },

  {
    operation: 'deleteRuleset',
    method: 'DELETE',
    path: '/v1/rulesets/{namespace}/{slug}',
    run: async () => {
      await client.rules.deleteRuleset('acme-rules', {
        namespace: 'acme',
      });
    },
  },

  {
    operation: 'retrieveRulesetDocument',
    method: 'GET',
    path: '/v1/rulesets/{namespace}/{slug}',
    run: async () => {
      const response = await client.rules.retrieveRulesetDocument('acme-rules', {
        namespace: 'acme',
      });
    },
  },

  {
    operation: 'createRulesetAccessGroup',
    method: 'POST',
    path: '/v1/rulesets/{namespace}/{slug}/access-group',
    run: async () => {
      await client.rules.createRulesetAccessGroup('acme-rules', {
        namespace: 'acme',
        accessGroupSlug: 'acme-api',
      });
    },
  },

  {
    operation: 'deleteRulesetAccessGroup',
    method: 'DELETE',
    path: '/v1/rulesets/{namespace}/{slug}/access-group',
    run: async () => {
      await client.rules.deleteRulesetAccessGroup('acme-rules', {
        namespace: 'acme',
        accessGroupSlug: 'acme-api',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/themes',
    run: async () => {
      const theme = await client.themes.list();
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/themes',
    label: 'required params',
    run: async () => {
      const uid = await client.themes.create({
        name: 'Acme Theme',
        slug: 'acme-theme',
        document: ':root { --scalar-color-1: #1f2937; }',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/themes',
    label: 'all params',
    run: async () => {
      const uid = await client.themes.create({
        name: 'Acme Theme',
        description: 'API for managing Acme products and orders.',
        slug: 'acme-theme',
        document: ':root { --scalar-color-1: #1f2937; }',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/themes/{slug}',
    label: 'required params',
    run: async () => {
      await client.themes.update('acme-theme', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/themes/{slug}',
    label: 'all params',
    run: async () => {
      await client.themes.update('acme-theme', {
        name: 'Acme Theme',
        description: 'API for managing Acme products and orders.',
      });
    },
  },

  {
    operation: 'replaceDocument',
    method: 'PUT',
    path: '/v1/themes/{slug}',
    run: async () => {
      await client.themes.replaceDocument('acme-theme', {
        document: ':root { --scalar-color-1: #1f2937; }',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/themes/{slug}',
    run: async () => {
      await client.themes.delete('acme-theme');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/themes/{slug}',
    run: async () => {
      const response = await client.themes.retrieve('acme-theme');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/teams',
    run: async () => {
      const team = await client.teams.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/teams/members',
    run: async () => {
      const member = await client.teams.members.list();
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/teams/members/{uid}',
    run: async () => {
      await client.teams.members.update('UakgbKJ5m9gl0JDMbcJqL', {
        role: 'owner',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/teams/members/{uid}',
    run: async () => {
      await client.teams.members.delete('UakgbKJ5m9gl0JDMbcJqL');
    },
  },

  {
    operation: 'member',
    method: 'POST',
    path: '/v1/teams/invites',
    run: async () => {
      await client.teams.invites.member({
        email: 'alex@example.com',
        role: 'owner',
      });
    },
  },

  {
    operation: 'resend',
    method: 'PATCH',
    path: '/v1/teams/invites/{uid}',
    run: async () => {
      await client.teams.invites.resend('UakgbKJ5m9gl0JDMbcJqL');
    },
  },

  {
    operation: 'cancel',
    method: 'DELETE',
    path: '/v1/teams/invites/{uid}',
    run: async () => {
      await client.teams.invites.cancel('UakgbKJ5m9gl0JDMbcJqL');
    },
  },

  {
    operation: 'listGuides',
    method: 'GET',
    path: '/v1/guides',
    run: async () => {
      const scalarDoc = await client.scalarDocs.listGuides();
    },
  },

  {
    operation: 'createGuide',
    method: 'POST',
    path: '/v1/guides',
    label: 'required params',
    run: async () => {
      const scalarDoc = await client.scalarDocs.createGuide({
        name: 'Acme Documentation',
        isPrivate: false,
        allowedUsers: [],
        allowedDomains: [],
      });
    },
  },

  {
    operation: 'createGuide',
    method: 'POST',
    path: '/v1/guides',
    label: 'all params',
    run: async () => {
      const scalarDoc = await client.scalarDocs.createGuide({
        name: 'Acme Documentation',
        slug: 'acme-docs',
        isPrivate: false,
        allowedUsers: [],
        allowedDomains: [],
      });
    },
  },

  {
    operation: 'publishGuide',
    method: 'POST',
    path: '/v1/guides/{slug}/publish',
    run: async () => {
      const scalarDoc = await client.scalarDocs.publishGuide('acme-docs');
    },
  },

  {
    operation: 'listProjects',
    method: 'GET',
    path: '/v1/docs',
    label: 'required params',
    run: async () => {
      const scalarDoc = await client.scalarDocs.listProjects();
    },
  },

  {
    operation: 'listProjects',
    method: 'GET',
    path: '/v1/docs',
    label: 'all params',
    run: async () => {
      const scalarDoc = await client.scalarDocs.listProjects({
        limit: 20,
      });
    },
  },

  {
    operation: 'createProject',
    method: 'POST',
    path: '/v1/docs',
    label: 'required params',
    run: async () => {
      const docsProject = await client.scalarDocs.createProject({
        name: 'Acme Documentation',
        provider: 'forgejo',
      });
    },
  },

  {
    operation: 'createProject',
    method: 'POST',
    path: '/v1/docs',
    label: 'all params',
    run: async () => {
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
  },

  {
    operation: 'retrieveProject',
    method: 'GET',
    path: '/v1/docs/{slug}',
    run: async () => {
      const docsProject = await client.scalarDocs.retrieveProject('acme-docs');
    },
  },

  {
    operation: 'updateProject',
    method: 'PATCH',
    path: '/v1/docs/{slug}',
    label: 'required params',
    run: async () => {
      await client.scalarDocs.updateProject('acme-docs', {});
    },
  },

  {
    operation: 'updateProject',
    method: 'PATCH',
    path: '/v1/docs/{slug}',
    label: 'all params',
    run: async () => {
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
  },

  {
    operation: 'deleteProject',
    method: 'DELETE',
    path: '/v1/docs/{slug}',
    run: async () => {
      await client.scalarDocs.deleteProject('acme-docs');
    },
  },

  {
    operation: 'publishProject',
    method: 'POST',
    path: '/v1/docs/{slug}/publish',
    label: 'required params',
    run: async () => {
      const scalarDoc = await client.scalarDocs.publishProject('acme-docs', {});
    },
  },

  {
    operation: 'publishProject',
    method: 'POST',
    path: '/v1/docs/{slug}/publish',
    label: 'all params',
    run: async () => {
      const scalarDoc = await client.scalarDocs.publishProject('acme-docs', {
        commitSha: '0123456789abcdef0123456789abcdef01234567',
        preview: false,
        configPath: 'scalar.config.json',
      });
    },
  },

  {
    operation: 'listProjectConfig',
    method: 'GET',
    path: '/v1/docs/{slug}/config',
    label: 'required params',
    run: async () => {
      const scalarDoc = await client.scalarDocs.listProjectConfig('acme-docs');
    },
  },

  {
    operation: 'listProjectConfig',
    method: 'GET',
    path: '/v1/docs/{slug}/config',
    label: 'all params',
    run: async () => {
      const scalarDoc = await client.scalarDocs.listProjectConfig('acme-docs', {
        ref: 'main',
      });
    },
  },

  {
    operation: 'updateProjectConfig',
    method: 'PUT',
    path: '/v1/docs/{slug}/config',
    label: 'required params',
    run: async () => {
      const scalarDoc = await client.scalarDocs.updateProjectConfig('acme-docs', {
        content: '{"name":"Acme Documentation"}',
      });
    },
  },

  {
    operation: 'updateProjectConfig',
    method: 'PUT',
    path: '/v1/docs/{slug}/config',
    label: 'all params',
    run: async () => {
      const scalarDoc = await client.scalarDocs.updateProjectConfig('acme-docs', {
        content: '{"name":"Acme Documentation"}',
        ref: 'main',
        baseToken: 'example-edit-token',
        message: 'Update documentation configuration',
        path: 'scalar.config.json',
      });
    },
  },

  {
    operation: 'listProjectDomain',
    method: 'GET',
    path: '/v1/docs/{slug}/domain',
    run: async () => {
      const scalarDoc = await client.scalarDocs.listProjectDomain('acme-docs');
    },
  },

  {
    operation: 'listProjectDomainStatus',
    method: 'GET',
    path: '/v1/docs/{slug}/domain/status',
    run: async () => {
      const scalarDoc = await client.scalarDocs.listProjectDomainStatus('acme-docs');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/namespaces',
    run: async () => {
      const response = await client.namespaces.list();
    },
  },

  {
    operation: 'exchangePersonalToken',
    method: 'POST',
    path: '/v1/auth/exchange',
    run: async () => {
      const authentication = await client.authentication.exchangePersonalToken({
        personalToken: 'scalar_example_personal_token',
      });
    },
  },

  {
    operation: 'listCurrentUser',
    method: 'GET',
    path: '/v1/auth/me',
    run: async () => {
      const user = await client.authentication.listCurrentUser();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/sdks',
    label: 'required params',
    run: async () => {
      const sdk = await client.sdks.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/sdks',
    label: 'all params',
    run: async () => {
      const sdk = await client.sdks.list({
        limit: 20,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/sdks',
    label: 'required params',
    run: async () => {
      const uid = await client.sdks.create({
        apiUid: 'UakgbKJ5m9gl0JDMbcJqL',
        languages: ['typescript'],
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/sdks',
    label: 'all params',
    run: async () => {
      const uid = await client.sdks.create({
        apiUid: 'UakgbKJ5m9gl0JDMbcJqL',
        languages: ['typescript'],
        title: 'Acme SDK',
        slug: 'acme-sdk',
        className: 'Acme',
        config: '{"targets":{"typescript":{"packageName":"@acme/sdk"}}}',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/sdks/{uid}',
    run: async () => {
      const sdk = await client.sdks.retrieve('UakgbKJ5m9gl0JDMbcJqL');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/sdks/{uid}',
    label: 'required params',
    run: async () => {
      await client.sdks.update('UakgbKJ5m9gl0JDMbcJqL', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/sdks/{uid}',
    label: 'all params',
    run: async () => {
      await client.sdks.update('UakgbKJ5m9gl0JDMbcJqL', {
        title: 'Acme SDK',
        slug: 'acme-sdk',
        isPrivate: false,
        config: '{"targets":{"typescript":{"packageName":"@acme/sdk"}}}',
        apiUid: 'UakgbKJ5m9gl0JDMbcJqL',
        apiVersion: '1.2.0',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/sdks/{uid}',
    run: async () => {
      await client.sdks.delete('UakgbKJ5m9gl0JDMbcJqL');
    },
  },

  {
    operation: 'build',
    method: 'POST',
    path: '/v1/sdks/{uid}/build',
    label: 'required params',
    run: async () => {
      const sdk = await client.sdks.build('UakgbKJ5m9gl0JDMbcJqL', {});
    },
  },

  {
    operation: 'build',
    method: 'POST',
    path: '/v1/sdks/{uid}/build',
    label: 'all params',
    run: async () => {
      const sdk = await client.sdks.build('UakgbKJ5m9gl0JDMbcJqL', {
        version: '1.2.0',
        languages: ['typescript'],
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/sdks/{uid}/versions',
    run: async () => {
      await client.sdks.versions.create('UakgbKJ5m9gl0JDMbcJqL', {
        version: '1.2.0',
        apiVersion: '1.2.0',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/sdks/{uid}/versions/{version}',
    run: async () => {
      await client.sdks.versions.delete('1.2.0', {
        uid: 'UakgbKJ5m9gl0JDMbcJqL',
      });
    },
  },

  {
    operation: 'link',
    method: 'POST',
    path: '/v1/sdks/{uid}/repositories',
    label: 'required params',
    run: async () => {
      const repository = await client.sdks.repositories.link('UakgbKJ5m9gl0JDMbcJqL', {
        language: 'typescript',
        repositoryId: 123456789,
        baseBranch: 'main',
      });
    },
  },

  {
    operation: 'link',
    method: 'POST',
    path: '/v1/sdks/{uid}/repositories',
    label: 'all params',
    run: async () => {
      const repository = await client.sdks.repositories.link('UakgbKJ5m9gl0JDMbcJqL', {
        language: 'typescript',
        repositoryId: 123456789,
        baseBranch: 'main',
        prereleaseType: 'beta',
      });
    },
  },

  {
    operation: 'unlink',
    method: 'DELETE',
    path: '/v1/sdks/{uid}/repositories/{language}',
    run: async () => {
      await client.sdks.repositories.unlink('typescript', {
        uid: 'UakgbKJ5m9gl0JDMbcJqL',
      });
    },
  },

  {
    operation: 'updatePublishing',
    method: 'POST',
    path: '/v1/sdks/{uid}/repositories/{language}/publishing',
    label: 'required params',
    run: async () => {
      await client.sdks.repositories.updatePublishing('typescript', {
        uid: 'UakgbKJ5m9gl0JDMbcJqL',
        publishOnMerge: true,
      });
    },
  },

  {
    operation: 'updatePublishing',
    method: 'POST',
    path: '/v1/sdks/{uid}/repositories/{language}/publishing',
    label: 'all params',
    run: async () => {
      await client.sdks.repositories.updatePublishing('typescript', {
        uid: 'UakgbKJ5m9gl0JDMbcJqL',
        publishOnMerge: true,
        authMethod: 'oidc',
        access: 'public',
        tag: 'latest',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/mcp/servers',
    run: async () => {
      const server = await client.mcp.servers.list();
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/mcp/servers',
    label: 'required params',
    run: async () => {
      const server = await client.mcp.servers.create({
        name: 'Acme MCP',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/mcp/servers',
    label: 'all params',
    run: async () => {
      const server = await client.mcp.servers.create({
        name: 'Acme MCP',
        slug: 'acme-mcp',
        versionUids: ['VakgbKJ5m9gl0JDMbcJqL'],
        projectUids: ['PakgbKJ5m9gl0JDMbcJqL'],
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/mcp/servers/{id}',
    run: async () => {
      const mcpServer = await client.mcp.servers.retrieve('42');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/mcp/servers/{id}',
    label: 'required params',
    run: async () => {
      const mcpServer = await client.mcp.servers.update('42', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/mcp/servers/{id}',
    label: 'all params',
    run: async () => {
      const mcpServer = await client.mcp.servers.update('42', {
        name: 'Acme MCP',
        slug: 'acme-mcp',
        autoAddOperations: true,
        operations: ['42'],
        docsPages: ['getting-started'],
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/mcp/servers/{id}',
    run: async () => {
      await client.mcp.servers.delete('42');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/mcp/servers/{id}/installations',
    run: async () => {
      const installation = await client.mcp.servers.installations.list('42');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/mcp/servers/{id}/installations',
    label: 'required params',
    run: async () => {
      const mcpInstallation = await client.mcp.servers.installations.create('42', {
        name: 'Acme MCP',
        documentAuth: {},
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/mcp/servers/{id}/installations',
    label: 'all params',
    run: async () => {
      const mcpInstallation = await client.mcp.servers.installations.create('42', {
        name: 'Acme MCP',
        slug: 'acme-mcp',
        documentAuth: {},
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/mcp/servers/{id}/installations/{installationId}',
    run: async () => {
      const mcpInstallation = await client.mcp.servers.installations.retrieve('84', {
        id: '42',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/mcp/servers/{id}/installations/{installationId}',
    label: 'required params',
    run: async () => {
      const mcpInstallation = await client.mcp.servers.installations.update('84', {
        id: '42',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/mcp/servers/{id}/installations/{installationId}',
    label: 'all params',
    run: async () => {
      const mcpInstallation = await client.mcp.servers.installations.update('84', {
        id: '42',
        name: 'Acme MCP',
        slug: 'acme-api',
        isPrivate: false,
        loginPortalUid: '',
        documentAuth: {},
        mcpVersion: '',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/mcp/servers/{id}/installations/{installationId}',
    run: async () => {
      await client.mcp.servers.installations.delete('84', {
        id: '42',
      });
    },
  },

  {
    operation: 'createAccessGroup',
    method: 'POST',
    path: '/v1/mcp/servers/{id}/installations/{installationId}/access-group',
    run: async () => {
      await client.mcp.servers.installations.createAccessGroup('84', {
        id: '42',
        accessGroupUid: 'UakgbKJ5m9gl0JDMbcJqL',
      });
    },
  },

  {
    operation: 'deleteAccessGroup',
    method: 'DELETE',
    path: '/v1/mcp/servers/{id}/installations/{installationId}/access-group',
    run: async () => {
      await client.mcp.servers.installations.deleteAccessGroup('84', {
        id: '42',
        accessGroupUid: 'UakgbKJ5m9gl0JDMbcJqL',
      });
    },
  },
];

/**
 * How many cases run at once, capped at the number of cases there are.
 *
 * SCALAR_SMOKE_CONCURRENCY overrides the default; anything unparseable falls back to it.
 */
const smokeConcurrency = (caseCount: number): number => {
  const override = Number.parseInt(process.env['SCALAR_SMOKE_CONCURRENCY'] ?? '', 10);
  const limit = Number.isInteger(override) && override > 0 ? override : 32;
  return Math.min(limit, caseCount);
};

const main = async (): Promise<void> => {
  // SCALAR_SMOKE_FILTER (comma-separated) keeps only cases whose operation name or path matches
  // one of the needles, so a caller can smoke-test a subset. With no filter, every case runs.
  const filter = process.env['SCALAR_SMOKE_FILTER'];
  const needles = filter
    ? filter
        .split(',')
        .map((needle) => needle.trim())
        .filter(Boolean)
    : [];
  const selected =
    needles.length > 0
      ? cases.filter((testCase) =>
          needles.some((needle) => testCase.operation.includes(needle) || testCase.path.includes(needle)),
        )
      : cases;

  // Run the selected cases under a bounded worker pool rather than all at once. A large SDK has
  // hundreds of operations, and firing every request together exceeds what the client's transport
  // keeps connections for while the runner is already busy with other targets. Each worker pulls
  // the next index off a shared cursor and writes into a pre-sized array, so results stay in case
  // order however the workers interleave. The per-case body catches everything and never rejects,
  // so one failing operation still cannot block the others.
  const results: SmokeResult[] = new Array<SmokeResult>(selected.length);
  let cursor = 0;
  const runNext = async (): Promise<void> => {
    for (let index = cursor++; index < selected.length; index = cursor++) {
      const testCase = selected[index];
      if (!testCase) continue;
      const startedAt = Date.now();
      // `label` distinguishes the required-params run from the all-params run of the same
      // operation; it is omitted entirely when the operation contributed only one case.
      const identity = {
        operation: testCase.operation,
        method: testCase.method,
        path: testCase.path,
        ...(testCase.label ? { label: testCase.label } : {}),
      };
      try {
        await testCase.run();
        results[index] = { ...identity, status: 'passed', durationMs: Date.now() - startedAt };
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error);
        results[index] = {
          ...identity,
          status: 'failed',
          durationMs: Date.now() - startedAt,
          error: message,
        };
      }
    }
  };
  await Promise.all(Array.from({ length: smokeConcurrency(selected.length) }, runNext));
  const failed = results.filter((result) => result.status === 'failed');

  // With SCALAR_SMOKE_REPORT set, write a machine-readable report; otherwise print a table.
  const reportPath = process.env['SCALAR_SMOKE_REPORT'];
  if (reportPath) {
    writeFileSync(reportPath, JSON.stringify({ total: results.length, failed: failed.length, results }));
  } else {
    for (const result of results) {
      const suffix = result.label ? ` [${result.label}]` : '';
      if (result.status === 'passed')
        console.log(
          `\u2714 ${result.operation}${suffix} (${result.method} ${result.path}) ${result.durationMs}ms`,
        );
      else
        console.error(
          `\u2718 ${result.operation}${suffix} (${result.method} ${result.path})\n${result.error ?? ''}`,
        );
    }
    if (results.length === 0) {
      console.error('No code samples ran (empty SDK or a SCALAR_SMOKE_FILTER that matched nothing).');
    } else {
      console.log(`\n${results.length - failed.length}/${results.length} samples passed`);
    }
  }

  // An empty run (no operations, or a filter that matched nothing) is a failure, not a vacuous pass.
  if (failed.length > 0 || results.length === 0) process.exitCode = 1;
};

void main();
