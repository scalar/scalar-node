// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../../smoke-support';

describe.concurrent('resource installations', () => {
  smokeCase(
    'mcp.servers.installations.list:single',
    { operation: 'list', path: '/v1/mcp/servers/{id}/installations' },
    'list',
    async () => {
      const installation = await client.mcp.servers.installations.list('42');
    },
  );
  smokeCase(
    'mcp.servers.installations.retrieve:single',
    { operation: 'retrieve', path: '/v1/mcp/servers/{id}/installations/{installationId}' },
    'retrieve',
    async () => {
      const mcpInstallation = await client.mcp.servers.installations.retrieve('84', {
        id: '42',
      });
    },
  );
  smokeCase(
    'mcp.servers.installations.update:required',
    { operation: 'update', path: '/v1/mcp/servers/{id}/installations/{installationId}' },
    'update: only required params',
    async () => {
      const mcpInstallation = await client.mcp.servers.installations.update('84', {
        id: '42',
      });
    },
  );
  smokeCase(
    'mcp.servers.installations.update:all',
    { operation: 'update', path: '/v1/mcp/servers/{id}/installations/{installationId}' },
    'update: required and optional params',
    async () => {
      const mcpInstallation = await client.mcp.servers.installations.update('84', {
        id: '42',
        name: 'Acme MCP',
        slug: 'acme-api',
        mcpVersion: '',
      });
    },
  );
  smokeCase(
    'mcp.servers.installations.delete:single',
    { operation: 'delete', path: '/v1/mcp/servers/{id}/installations/{installationId}' },
    'delete',
    async () => {
      await client.mcp.servers.installations.delete('84', {
        id: '42',
      });
    },
  );
  smokeCase(
    'mcp.servers.installations.createAccessGroup:single',
    {
      operation: 'createAccessGroup',
      path: '/v1/mcp/servers/{id}/installations/{installationId}/access-group',
    },
    'createAccessGroup',
    async () => {
      await client.mcp.servers.installations.createAccessGroup('84', {
        id: '42',
        accessGroupUid: 'UakgbKJ5m9gl0JDMbcJqL',
      });
    },
  );
  smokeCase(
    'mcp.servers.installations.deleteAccessGroup:single',
    {
      operation: 'deleteAccessGroup',
      path: '/v1/mcp/servers/{id}/installations/{installationId}/access-group',
    },
    'deleteAccessGroup',
    async () => {
      await client.mcp.servers.installations.deleteAccessGroup('84', {
        id: '42',
        accessGroupUid: 'UakgbKJ5m9gl0JDMbcJqL',
      });
    },
  );
});
