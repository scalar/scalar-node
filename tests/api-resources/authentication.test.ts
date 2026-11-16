// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource authentication', () => {
  smokeCase(
    'authentication.exchangePersonalToken:single',
    { operation: 'exchangePersonalToken', path: '/v1/auth/exchange' },
    'exchangePersonalToken',
    async () => {
      const authentication = await client.authentication.exchangePersonalToken({
        personalToken: 'scalar_example_personal_token',
      });
    },
  );
  smokeCase(
    'authentication.listCurrentUser:single',
    { operation: 'listCurrentUser', path: '/v1/auth/me' },
    'listCurrentUser',
    async () => {
      const user = await client.authentication.listCurrentUser();
    },
  );
});
