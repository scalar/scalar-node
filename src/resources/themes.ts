// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class ThemeResource extends APIResource {
  /**
   * List all team themes.
   */
  list(options?: RequestOptions): APIPromise<ThemeListResponse> {
    return this._client.get("/v1/themes", options);
  }
  /**
   * Create a team theme.
   */
  create(body: ThemeCreateParams, options?: RequestOptions): APIPromise<Uid> {
    return this._client.post("/v1/themes", { body: body, ...options });
  }
  /**
   * Get the theme document by slug.
   */
  retrieve(slug: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(__scalarPath`/v1/themes/${slug}`, options);
  }
  /**
   * Replace the theme document.
   */
  replaceDocument(slug: string, body: ThemeReplaceDocumentParams, options?: RequestOptions): APIPromise<null> {
    return this._client.put(__scalarPath`/v1/themes/${slug}`, { body: body, ...options });
  }
  /**
   * Delete a theme by slug.
   */
  delete(slug: string, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/themes/${slug}`, options);
  }
  /**
   * Update theme metadata.
   */
  update(slug: string, body: ThemeUpdateParams, options?: RequestOptions): APIPromise<null> {
    return this._client.patch(__scalarPath`/v1/themes/${slug}`, { body: body, ...options });
  }
}

/**
 * Theme metadata.
 */
export interface Theme {
  /**
   * Unique Nano ID identifier.
   */
  uid: Nanoid;
  name: string;
  description: string;
  /**
   * URL-safe slug identifier.
   */
  slug: Slug;
}

/**
 * Unique Nano ID identifier.
 */
export type Nanoid = string;

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

/**
 * Object UID wrapper.
 */
export interface Uid {
  /**
   * Unique Nano ID identifier.
   */
  uid: Nanoid;
}

export type ThemeListResponse = Array<Theme>;

export interface ThemeCreateParams {
  name: string;
  /**
   * URL-safe resource slug.
   */
  slug: string;
  /**
   * OpenAPI, schema, theme, or guide document contents.
   */
  document: string;
  description?: string;
}

export interface ThemeReplaceDocumentParams {
  /**
   * OpenAPI, schema, theme, or guide document contents.
   */
  document: string;
}

export interface ThemeUpdateParams {
  name?: string;
  description?: string;
}

