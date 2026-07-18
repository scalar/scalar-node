// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { Scalar } from './client';

export abstract class APIResource {
  protected _client: Scalar;

  constructor(client: Scalar) {
    this._client = client;
  }
}
