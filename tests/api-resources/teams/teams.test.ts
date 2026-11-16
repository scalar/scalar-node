// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource teams', () => {
  smokeCase('teams.list:single', { operation: 'list', path: '/v1/teams' }, 'list', async () => {
    const team = await client.teams.list();
  });
});
