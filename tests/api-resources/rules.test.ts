// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource rules', () => {
  smokeCase(
    'rules.listRulesets:single',
    { operation: 'listRulesets', path: '/v1/rulesets/{namespace}' },
    'listRulesets',
    async () => {
      const rule = await client.rules.listRulesets('acme');
    },
  );
  smokeCase(
    'rules.createRuleset:required',
    { operation: 'createRuleset', path: '/v1/rulesets/{namespace}' },
    'createRuleset: only required params',
    async () => {
      const uid = await client.rules.createRuleset('acme', {
        title: 'Acme API Rules',
        slug: 'acme-rules',
        document: 'extends: ["spectral:oas"]\nrules:\n  info-contact: warn\n',
      });
    },
  );
  smokeCase(
    'rules.createRuleset:all',
    { operation: 'createRuleset', path: '/v1/rulesets/{namespace}' },
    'createRuleset: required and optional params',
    async () => {
      const uid = await client.rules.createRuleset('acme', {
        title: 'Acme API Rules',
        description: 'API for managing Acme products and orders.',
        slug: 'acme-rules',
        isPrivate: false,
        document: 'extends: ["spectral:oas"]\nrules:\n  info-contact: warn\n',
      });
    },
  );
  smokeCase(
    'rules.updateRuleset:required',
    { operation: 'updateRuleset', path: '/v1/rulesets/{namespace}/{slug}' },
    'updateRuleset: only required params',
    async () => {
      await client.rules.updateRuleset('acme-rules', {
        namespace: 'acme',
      });
    },
  );
  smokeCase(
    'rules.updateRuleset:all',
    { operation: 'updateRuleset', path: '/v1/rulesets/{namespace}/{slug}' },
    'updateRuleset: required and optional params',
    async () => {
      await client.rules.updateRuleset('acme-rules', {
        namespace: 'acme',
        slug: 'acme-rules',
        title: 'Acme API Rules',
        description: 'API for managing Acme products and orders.',
        isPrivate: false,
      });
    },
  );
  smokeCase(
    'rules.deleteRuleset:single',
    { operation: 'deleteRuleset', path: '/v1/rulesets/{namespace}/{slug}' },
    'deleteRuleset',
    async () => {
      await client.rules.deleteRuleset('acme-rules', {
        namespace: 'acme',
      });
    },
  );
  smokeCase(
    'rules.retrieveRulesetDocument:single',
    { operation: 'retrieveRulesetDocument', path: '/v1/rulesets/{namespace}/{slug}' },
    'retrieveRulesetDocument',
    async () => {
      const response = await client.rules.retrieveRulesetDocument('acme-rules', {
        namespace: 'acme',
      });
    },
  );
  smokeCase(
    'rules.createRulesetAccessGroup:single',
    { operation: 'createRulesetAccessGroup', path: '/v1/rulesets/{namespace}/{slug}/access-group' },
    'createRulesetAccessGroup',
    async () => {
      await client.rules.createRulesetAccessGroup('acme-rules', {
        namespace: 'acme',
        accessGroupSlug: 'acme-api',
      });
    },
  );
  smokeCase(
    'rules.deleteRulesetAccessGroup:single',
    { operation: 'deleteRulesetAccessGroup', path: '/v1/rulesets/{namespace}/{slug}/access-group' },
    'deleteRulesetAccessGroup',
    async () => {
      await client.rules.deleteRulesetAccessGroup('acme-rules', {
        namespace: 'acme',
        accessGroupSlug: 'acme-api',
      });
    },
  );
});
