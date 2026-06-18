// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

export class Teams extends APIResource {
  /**
   * List all available teams
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
  export { type Team as Team, type Nanoid as Nanoid, type TeamName as TeamName, type TeamImage as TeamImage, type Slug as Slug, type Value400 as Value400, type Value401 as Value401, type Value403 as Value403, type Value404 as Value404, type Value422 as Value422, type Value500 as Value500, type TeamListResponse as TeamListResponse };
}
export { Teams as TeamResource };
