// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class Themes extends APIResource {
  /**
   * List all team themes.
   */
  list(options?: RequestOptions): APIPromise<ThemeListResponse> {
    return this._client.get("/v1/themes", options);
  }
  /**
   * Create a team theme.
   */
  create(body: ThemeCreateParams, options?: RequestOptions): APIPromise<UID> {
    return this._client.post("/v1/themes", { body: body, ...options });
  }
  /**
   * Update theme metadata.
   */
  update(slug: string, body: ThemeUpdateParams, options?: RequestOptions): APIPromise<null> {
    return this._client.patch(__scalarPath`/v1/themes/${slug}`, { body: body, ...options });
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
   * Get the theme document by slug.
   */
  retrieve(slug: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(__scalarPath`/v1/themes/${slug}`, options);
  }
}

export interface Theme {
  uid: Nanoid;
  name: string;
  description: string;
  slug: Slug;
}

export type Nanoid = string;

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

export interface UID {
  uid: Nanoid;
}

export type ThemeListResponse = Array<Theme>;

export interface ThemeCreateParams {
  name: string;
  slug: string;
  document: string;
  description?: string;
}

export interface ThemeUpdateParams {
  name?: string;
  description?: string;
}

export interface ThemeReplaceDocumentParams {
  document: string;
}
export declare namespace Themes {
  export { type Theme as Theme, type Nanoid as Nanoid, type Slug as Slug, type Value400 as Value400, type Value401 as Value401, type Value403 as Value403, type Value404 as Value404, type Value422 as Value422, type Value500 as Value500, type UID as UID, type ThemeListResponse as ThemeListResponse, type ThemeCreateParams as ThemeCreateParams, type ThemeUpdateParams as ThemeUpdateParams, type ThemeReplaceDocumentParams as ThemeReplaceDocumentParams };
}
export { Themes as ThemeResource };
