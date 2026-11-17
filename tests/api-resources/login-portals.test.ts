// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource loginPortals', () => {
  smokeCase(
    'loginPortals.retrieve:single',
    { operation: 'retrieve', path: '/v1/login-portals/{slug}' },
    'retrieve',
    async () => {
      const loginPortal = await client.loginPortals.retrieve('acme-login');
    },
  );
  smokeCase(
    'loginPortals.update:required',
    { operation: 'update', path: '/v1/login-portals/{slug}' },
    'update: only required params',
    async () => {
      await client.loginPortals.update('acme-login', {});
    },
  );
  smokeCase(
    'loginPortals.update:all',
    { operation: 'update', path: '/v1/login-portals/{slug}' },
    'update: required and optional params',
    async () => {
      await client.loginPortals.update('acme-login', {
        title: 'Acme Private Documentation',
      });
    },
  );
  smokeCase(
    'loginPortals.delete:single',
    { operation: 'delete', path: '/v1/login-portals/{slug}' },
    'delete',
    async () => {
      await client.loginPortals.delete('acme-login');
    },
  );
  smokeCase(
    'loginPortals.create:single',
    { operation: 'create', path: '/v1/login-portals' },
    'create',
    async () => {
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
  );
  smokeCase(
    'loginPortals.list:single',
    { operation: 'list', path: '/v1/login-portals' },
    'list',
    async () => {
      const loginPortal = await client.loginPortals.list();
    },
  );
});
