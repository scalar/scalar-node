// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import type * as ScalarDocsAPI from "./scalar-docs";

export class Teams extends APIResource {
  /**
   * List all available teams
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TeamListResponse>} Default Response
   *
   * @example
   * ```ts
   * const list = await client.teams.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<TeamListResponse> {
    return this._client.get("/v1/teams", options);
  }
}

export type TeamListResponse = Array<TeamListResponse.TeamListResponseItem>;

export namespace TeamListResponse {
  export interface TeamListResponseItem {
    /**
     * @minLength 5
     */
    uid: string;
    name: string;
    /**
     * @minLength 3
     * @maxLength 60
     * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
     */
    slug: ScalarDocsAPI.Slug;
    theme: string;
    imageUri?: string;
  }
}
export declare namespace Teams {
  export {
    type TeamListResponse as TeamListResponse,
  };
}
