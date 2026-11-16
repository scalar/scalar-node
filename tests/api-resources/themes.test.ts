// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource themes', () => {
  smokeCase('themes.list:single', { operation: 'list', path: '/v1/themes' }, 'list', async () => {
    const theme = await client.themes.list();
  });
  smokeCase(
    'themes.create:required',
    { operation: 'create', path: '/v1/themes' },
    'create: only required params',
    async () => {
      const uid = await client.themes.create({
        name: 'Acme Theme',
        slug: 'acme-theme',
        document: ':root { --scalar-color-1: #1f2937; }',
      });
    },
  );
  smokeCase(
    'themes.create:all',
    { operation: 'create', path: '/v1/themes' },
    'create: required and optional params',
    async () => {
      const uid = await client.themes.create({
        name: 'Acme Theme',
        description: 'API for managing Acme products and orders.',
        slug: 'acme-theme',
        document: ':root { --scalar-color-1: #1f2937; }',
      });
    },
  );
  smokeCase(
    'themes.update:required',
    { operation: 'update', path: '/v1/themes/{slug}' },
    'update: only required params',
    async () => {
      await client.themes.update('acme-theme', {});
    },
  );
  smokeCase(
    'themes.update:all',
    { operation: 'update', path: '/v1/themes/{slug}' },
    'update: required and optional params',
    async () => {
      await client.themes.update('acme-theme', {
        name: 'Acme Theme',
        description: 'API for managing Acme products and orders.',
      });
    },
  );
  smokeCase(
    'themes.replaceDocument:single',
    { operation: 'replaceDocument', path: '/v1/themes/{slug}' },
    'replaceDocument',
    async () => {
      await client.themes.replaceDocument('acme-theme', {
        document: ':root { --scalar-color-1: #1f2937; }',
      });
    },
  );
  smokeCase(
    'themes.delete:single',
    { operation: 'delete', path: '/v1/themes/{slug}' },
    'delete',
    async () => {
      await client.themes.delete('acme-theme');
    },
  );
  smokeCase(
    'themes.retrieve:single',
    { operation: 'retrieve', path: '/v1/themes/{slug}' },
    'retrieve',
    async () => {
      const response = await client.themes.retrieve('acme-theme');
    },
  );
});
