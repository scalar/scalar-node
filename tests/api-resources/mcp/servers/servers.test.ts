// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../../smoke-support';

describe.concurrent('resource servers', () => {
  smokeCase('mcp.servers.list:single', { operation: 'list', path: '/v1/mcp/servers' }, 'list', async () => {
    const server = await client.mcp.servers.list();
  });
  smokeCase(
    'mcp.servers.create:required',
    { operation: 'create', path: '/v1/mcp/servers' },
    'create: only required params',
    async () => {
      const server = await client.mcp.servers.create({
        name: 'Acme MCP',
      });
    },
  );
  smokeCase(
    'mcp.servers.create:all',
    { operation: 'create', path: '/v1/mcp/servers' },
    'create: required and optional params',
    async () => {
      const server = await client.mcp.servers.create({
        name: 'Acme MCP',
        slug: 'acme-mcp',
        versionUids: ['VakgbKJ5m9gl0JDMbcJqL'],
        projectUids: ['PakgbKJ5m9gl0JDMbcJqL'],
      });
    },
  );
  smokeCase(
    'mcp.servers.retrieve:single',
    { operation: 'retrieve', path: '/v1/mcp/servers/{id}' },
    'retrieve',
    async () => {
      const mcpServer = await client.mcp.servers.retrieve('42');
    },
  );
  smokeCase(
    'mcp.servers.update:required',
    { operation: 'update', path: '/v1/mcp/servers/{id}' },
    'update: only required params',
    async () => {
      const mcpServer = await client.mcp.servers.update('42', {});
    },
  );
  smokeCase(
    'mcp.servers.update:all',
    { operation: 'update', path: '/v1/mcp/servers/{id}' },
    'update: required and optional params',
    async () => {
      const mcpServer = await client.mcp.servers.update('42', {
        name: 'Acme MCP',
        slug: 'acme-mcp',
        operations: ['42'],
        docsPages: ['getting-started'],
      });
    },
  );
  smokeCase(
    'mcp.servers.delete:single',
    { operation: 'delete', path: '/v1/mcp/servers/{id}' },
    'delete',
    async () => {
      await client.mcp.servers.delete('42');
    },
  );
});
