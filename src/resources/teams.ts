// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

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

export interface Team {
  uid: Nanoid;
  name: TeamName;
  slug: Slug;
  theme: string;
  imageUri?: TeamImage;
}

export type Nanoid = string;

export type TeamName = string;

export type TeamImage = string;

export type Slug = string;

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

export type TeamListResponse = Array<Team>;
export declare namespace Teams {
  export {
    type TeamListResponse as TeamListResponse,
  };
}
export { Teams as TeamResource };
