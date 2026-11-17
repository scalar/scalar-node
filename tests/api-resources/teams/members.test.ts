// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource members', () => {
  smokeCase(
    'teams.members.list:single',
    { operation: 'list', path: '/v1/teams/members' },
    'list',
    async () => {
      const member = await client.teams.members.list();
    },
  );
  smokeCase(
    'teams.members.update:single',
    { operation: 'update', path: '/v1/teams/members/{uid}' },
    'update',
    async () => {
      await client.teams.members.update('UakgbKJ5m9gl0JDMbcJqL', {
        role: 'owner',
      });
    },
  );
  smokeCase(
    'teams.members.delete:single',
    { operation: 'delete', path: '/v1/teams/members/{uid}' },
    'delete',
    async () => {
      await client.teams.members.delete('UakgbKJ5m9gl0JDMbcJqL');
    },
  );
});
