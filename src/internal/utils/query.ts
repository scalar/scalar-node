// File generated from our OpenAPI spec by Scalar. See README.md for details.

import * as qs from '../qs/stringify';

export function stringifyQuery(query: object | Record<string, unknown>): string {
  return qs.stringify(query, { arrayFormat: 'repeat' });
}
