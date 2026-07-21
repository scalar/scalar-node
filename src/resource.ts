// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { ScalarAPI } from './client';

export abstract class APIResource {
  protected _client: ScalarAPI;

  constructor(client: ScalarAPI) {
    this._client = client;
  }
}
