// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource invites', () => {
  smokeCase(
    'teams.invites.member:single',
    { operation: 'member', path: '/v1/teams/invites' },
    'member',
    async () => {
      await client.teams.invites.member({
        email: 'alex@example.com',
        role: 'owner',
      });
    },
  );
  smokeCase(
    'teams.invites.resend:single',
    { operation: 'resend', path: '/v1/teams/invites/{uid}' },
    'resend',
    async () => {
      await client.teams.invites.resend('UakgbKJ5m9gl0JDMbcJqL');
    },
  );
  smokeCase(
    'teams.invites.cancel:single',
    { operation: 'cancel', path: '/v1/teams/invites/{uid}' },
    'cancel',
    async () => {
      await client.teams.invites.cancel('UakgbKJ5m9gl0JDMbcJqL');
    },
  );
});
