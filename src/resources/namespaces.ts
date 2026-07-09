// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

export class Namespaces extends APIResource {
  /**
   * Get all namespaces for the current team
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<NamespaceListResponse>} Default Response
   *
   * @example
   * ```ts
   * const list = await client.namespaces.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<NamespaceListResponse> {
    return this._client.get("/v1/namespaces", options);
  }
}

export type NamespaceListResponse = Array<string>;
export declare namespace Namespaces {
  export {
    type NamespaceListResponse as NamespaceListResponse,
  };
}
