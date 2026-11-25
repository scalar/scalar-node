// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

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
});
