// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';
<<<<<<< HEAD
=======
import type * as Shared from './shared';
>>>>>>> 274c23688058bc3cb6b33c2683f15a70e0b314c0
import type * as ScalarDocsAPI from './scalar-docs';

export class LoginPortals extends APIResource {
  /**
   * Get a login portal by slug.
   *
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LoginPortalRetrieveResponse>} Default Response
   *
   * @example
   * ```ts
   * const retrieve = await client.loginPortals.retrieve('slug');
   * ```
   */
  retrieve(slug: string, options?: RequestOptions): APIPromise<LoginPortalRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/login-portals/${slug}`, options);
  }

  /**
   * Update metadata for a login portal.
   *
   * @param {string} slug
   * @param {LoginPortalUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LoginPortalUpdateResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.loginPortals.update('slug', {});
   * ```
   */
  update(
    slug: string,
    body: LoginPortalUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LoginPortalUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/login-portals/${slug}`, { body, ...options });
  }

  /**
   * Delete a login portal.
   *
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LoginPortalDeleteResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.loginPortals.delete('slug');
   * ```
   */
  delete(slug: string, options?: RequestOptions): APIPromise<LoginPortalDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/login-portals/${slug}`, options);
  }

  /**
   * Create a login portal for the current team.
   *
   * @param {LoginPortalCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.UID>} Default Response
   *
   * @example
   * ```ts
<<<<<<< HEAD
   * const create = await client.loginPortals.create({
=======
   * const uID = await client.loginPortals.create({
>>>>>>> 274c23688058bc3cb6b33c2683f15a70e0b314c0
   *   title: '',
   *   slug: '',
   *   email: {
   *     logo: '',
   *     logoSize: '100',
   *     buttonText: 'Login',
   *     message: 'Click to access private documentation hosted by scalar.com',
   *     title: 'Private Docs',
   *     mainColor: '#2a2f45',
   *     mainBackground: '#f6f6f6',
   *     cardColor: '2a2f45',
   *     cardBackground: '#fff',
   *     buttonColor: '#fff',
   *     buttonBackground: '#0f0f0f',
   *   },
   *   page: {
   *     title: 'Scalar Private Docs',
   *     description: 'Login to access your documentation',
   *     head: '',
   *     script: '',
   *     theme: '',
   *     companyName: '',
   *     logo: '',
   *     logoURL: '',
   *     favicon: '',
   *     termsLink: '',
   *     privacyLink: '',
   *     formTitle: 'Scalar Private Docs',
   *     formDescription: 'Login to access your documentation',
   *     formImage: '',
   *   },
   * });
   * ```
   */
<<<<<<< HEAD
  create(body: LoginPortalCreateParams, options?: RequestOptions): APIPromise<LoginPortalCreateResponse> {
=======
  create(body: LoginPortalCreateParams, options?: RequestOptions): APIPromise<Shared.UID> {
>>>>>>> 274c23688058bc3cb6b33c2683f15a70e0b314c0
    return this._client.post('/v1/login-portals', { body, ...options });
  }

  /**
   * List all login portals for the current team.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LoginPortalListResponse>} Default Response
   *
   * @example
   * ```ts
   * const list = await client.loginPortals.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<LoginPortalListResponse> {
    return this._client.get('/v1/login-portals', options);
  }
}

export interface LoginPortalEmail {
  logo: string;
  logoSize: string;
  /**
   * @maxLength 50
   */
  buttonText: string;
  /**
   * @maxLength 1000
   */
  message: string;
  /**
   * @maxLength 100
   */
  title: string;
  /**
   * @maxLength 100
   */
  mainColor: string;
  /**
   * @maxLength 100
   */
  mainBackground: string;
  /**
   * @maxLength 100
   */
  cardColor: string;
  /**
   * @maxLength 100
   */
  cardBackground: string;
  /**
   * @maxLength 100
   */
  buttonColor: string;
  /**
   * @maxLength 100
   */
  buttonBackground: string;
}

export interface LoginPortalPage {
  /**
   * @maxLength 100
   */
  title: string;
  /**
   * @maxLength 500
   */
  description: string;
  head: string;
  script: string;
  theme: string;
  /**
   * @maxLength 100
   */
  companyName: string;
  logo: string;
  logoURL: string;
  favicon: string;
  termsLink: string;
  privacyLink: string;
  /**
   * @maxLength 100
   */
  formTitle: string;
  /**
   * @maxLength 500
   */
  formDescription: string;
  formImage: string;
}

export interface LoginPortalRetrieveResponse {
  uid: string;
  title: string;
  slug: string;
  email: LoginPortalEmail;
  page: LoginPortalPage;
}

export interface LoginPortalUpdateParams {
  title?: string;
}

export type LoginPortalUpdateResponse = null;

export type LoginPortalDeleteResponse = null;

export interface LoginPortalCreateParams {
  title: string;
  slug: string;
  email: LoginPortalEmail;
  page: LoginPortalPage;
}

export type LoginPortalListResponse = Array<LoginPortalListResponse.LoginPortalListResponseItem>;

export namespace LoginPortalListResponse {
  export interface LoginPortalListResponseItem {
    /**
     * @minLength 5
     */
    uid: Shared.Nanoid;
    /**
     * @maxLength 200
     */
    title: string;
    /**
     * @minLength 3
     * @maxLength 60
     * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
     */
    slug: ScalarDocsAPI.Slug;
  }
}
export declare namespace LoginPortals {
  export {
    type LoginPortalEmail as LoginPortalEmail,
    type LoginPortalPage as LoginPortalPage,
    type LoginPortalRetrieveResponse as LoginPortalRetrieveResponse,
    type LoginPortalUpdateResponse as LoginPortalUpdateResponse,
    type LoginPortalDeleteResponse as LoginPortalDeleteResponse,
    type LoginPortalListResponse as LoginPortalListResponse,
    type LoginPortalUpdateParams as LoginPortalUpdateParams,
    type LoginPortalCreateParams as LoginPortalCreateParams,
  };
}
