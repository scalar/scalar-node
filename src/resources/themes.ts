// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';
<<<<<<< HEAD
=======
import type * as Shared from './shared';
>>>>>>> 274c23688058bc3cb6b33c2683f15a70e0b314c0
import type * as ScalarDocsAPI from './scalar-docs';

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
    return this._client.get('/v1/themes', options);
  }

  /**
   * Create a team theme.
   *
   * @param {ThemeCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.UID>} Default Response
   *
   * @example
   * ```ts
<<<<<<< HEAD
   * const create = await client.themes.create({
=======
   * const uID = await client.themes.create({
>>>>>>> 274c23688058bc3cb6b33c2683f15a70e0b314c0
   *   name: '',
   *   slug: '',
   *   document: '',
   * });
   * ```
   */
<<<<<<< HEAD
  create(body: ThemeCreateParams, options?: RequestOptions): APIPromise<ThemeCreateResponse> {
=======
  create(body: ThemeCreateParams, options?: RequestOptions): APIPromise<Shared.UID> {
>>>>>>> 274c23688058bc3cb6b33c2683f15a70e0b314c0
    return this._client.post('/v1/themes', { body, ...options });
  }

  /**
   * Update theme metadata.
   *
   * @param {string} slug
   * @param {ThemeUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ThemeUpdateResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.themes.update('slug', {});
   * ```
   */
  update(slug: string, body: ThemeUpdateParams, options?: RequestOptions): APIPromise<ThemeUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/themes/${slug}`, { body, ...options });
  }

  /**
   * Replace the theme document.
   *
   * @param {string} slug
   * @param {ThemeReplaceDocumentParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ThemeReplaceDocumentResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.themes.replaceDocument('slug', {
   *   document: '',
   * });
   * ```
   */
  replaceDocument(
    slug: string,
    body: ThemeReplaceDocumentParams,
    options?: RequestOptions,
  ): APIPromise<ThemeReplaceDocumentResponse> {
    return this._client.put(__scalarPath`/v1/themes/${slug}`, { body, ...options });
  }

  /**
   * Delete a theme by slug.
   *
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ThemeDeleteResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.themes.delete('slug');
   * ```
   */
  delete(slug: string, options?: RequestOptions): APIPromise<ThemeDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/themes/${slug}`, options);
  }

  /**
   * Get the theme document by slug.
   *
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ThemeRetrieveResponse>} Default Response
   *
   * @example
   * ```ts
   * const string_ = await client.themes.retrieve('slug');
   * ```
   */
  retrieve(slug: string, options?: RequestOptions): APIPromise<ThemeRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/themes/${slug}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type ThemeListResponse = Array<ThemeListResponse.ThemeListResponseItem>;

export namespace ThemeListResponse {
  export interface ThemeListResponseItem {
    /**
     * @minLength 5
     */
    uid: Shared.Nanoid;
    name: string;
    description: string;
    /**
     * @minLength 3
     * @maxLength 60
     * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
     */
    slug: ScalarDocsAPI.Slug;
  }
}

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

export type ThemeUpdateResponse = null;

export interface ThemeReplaceDocumentParams {
  document: string;
}

export type ThemeReplaceDocumentResponse = null;

export type ThemeDeleteResponse = null;

export type ThemeRetrieveResponse = string;
export declare namespace Themes {
  export {
    type ThemeListResponse as ThemeListResponse,
    type ThemeUpdateResponse as ThemeUpdateResponse,
    type ThemeReplaceDocumentResponse as ThemeReplaceDocumentResponse,
    type ThemeDeleteResponse as ThemeDeleteResponse,
    type ThemeRetrieveResponse as ThemeRetrieveResponse,
    type ThemeCreateParams as ThemeCreateParams,
    type ThemeUpdateParams as ThemeUpdateParams,
    type ThemeReplaceDocumentParams as ThemeReplaceDocumentParams,
  };
}
