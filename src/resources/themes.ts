// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class Themes extends APIResource {
  /**
   * List all team themes.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ThemeListResponse>} Default Response
   *
   * @example
   * ```ts
   * const list = await client.themes.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ThemeListResponse> {
    return this._client.get("/v1/themes", options);
  }

  /**
   * Create a team theme.
   *
   * @param {ThemeCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UID>} Default Response
   *
   * @example
   * ```ts
   * const uID = await client.themes.create({
   *   name: "",
   *   slug: "",
   *   document: "",
   * });
   * ```
   */
  create(body: ThemeCreateParams, options?: RequestOptions): APIPromise<UID> {
    return this._client.post("/v1/themes", { body: body, ...options });
  }

  /**
   * Update theme metadata.
   *
   * @param {string} slug
   * @param {ThemeUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<null>} Default Response
   *
   * @example
   * ```ts
   * await client.themes.update("slug", {});
   * ```
   */
  update(slug: string, body: ThemeUpdateParams, options?: RequestOptions): APIPromise<null> {
    return this._client.patch(__scalarPath`/v1/themes/${slug}`, { body: body, ...options });
  }

  /**
   * Replace the theme document.
   *
   * @param {string} slug
   * @param {ThemeReplaceDocumentParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<null>} Default Response
   *
   * @example
   * ```ts
   * await client.themes.replaceDocument("slug", {
   *   document: "",
   * });
   * ```
   */
  replaceDocument(slug: string, body: ThemeReplaceDocumentParams, options?: RequestOptions): APIPromise<null> {
    return this._client.put(__scalarPath`/v1/themes/${slug}`, { body: body, ...options });
  }

  /**
   * Delete a theme by slug.
   *
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<null>} Default Response
   *
   * @example
   * ```ts
   * await client.themes.delete("slug");
   * ```
   */
  delete(slug: string, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/themes/${slug}`, options);
  }

  /**
   * Get the theme document by slug.
   *
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Default Response
   *
   * @example
   * ```ts
   * const string_ = await client.themes.retrieve("slug");
   * ```
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
  export {
    type ThemeListResponse as ThemeListResponse,
    type UID as UID,
    type ThemeCreateParams as ThemeCreateParams,
    type ThemeUpdateParams as ThemeUpdateParams,
    type ThemeReplaceDocumentParams as ThemeReplaceDocumentParams,
  };
}
export { Themes as ThemeResource };
