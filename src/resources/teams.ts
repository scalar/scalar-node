// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

export class TeamResource extends APIResource {
  /**
   * List all available teams
   */
  list(options?: RequestOptions): APIPromise<TeamListResponse> {
    return this._client.get("/v1/teams", options);
  }
}

/**
 * Team metadata.
 */
export interface Team {
  /**
   * Unique Nano ID identifier.
   */
  uid: Nanoid;
  /**
   * Team display name.
   */
  name: TeamName;
  /**
   * URL-safe slug identifier.
   */
  slug: Slug;
  /**
   * Theme identifier or theme settings.
   */
  theme: string;
  /**
   * Team image URL.
   */
  imageUri?: TeamImage;
}

/**
 * Unique Nano ID identifier.
 */
export type Nanoid = string;

/**
 * Team display name.
 */
export type TeamName = string;

/**
 * Team image URL.
 */
export type TeamImage = string;

/**
 * URL-safe slug identifier.
 */
export type Slug = string;

/**
 * Bad request error response.
 */
export interface Value400 {
  message: string;
  code: string;
}

/**
 * Unauthorized error response.
 */
export interface Value401 {
  message: string;
  code: string;
}

/**
 * Forbidden error response.
 */
export interface Value403 {
  message: string;
  code: string;
}

/**
 * Not found error response.
 */
export interface Value404 {
  message: string;
  code: string;
}

/**
 * Validation error response.
 */
export interface Value422 {
  message: string;
  code: string;
}

/**
 * Internal server error response.
 */
export interface Value500 {
  message: string;
  code: string;
}

export type TeamListResponse = Array<Team>;

