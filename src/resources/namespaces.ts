// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

export class Namespaces extends APIResource {
  /**
   * Get all namespaces for the current team
   */
  list(options?: RequestOptions): APIPromise<NamespaceListResponse> {
    return this._client.get("/v1/namespaces", options);
  }
}

export interface Value400 {
  message: string;
  code: string;
}

export interface Value401 {
  message: string;
  code: string;
}

export interface Value403 {
  message: string;
  code: string;
}

export interface Value404 {
  message: string;
  code: string;
}

export interface Value422 {
  message: string;
  code: string;
}

export interface Value500 {
  message: string;
  code: string;
}

export type NamespaceListResponse = Array<string>;
export declare namespace Namespaces {
  export { type Value400 as Value400, type Value401 as Value401, type Value403 as Value403, type Value404 as Value404, type Value422 as Value422, type Value500 as Value500, type NamespaceListResponse as NamespaceListResponse };
}
export { Namespaces as NamespaceResource };
