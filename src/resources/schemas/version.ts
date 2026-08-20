// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import { path as __scalarPath } from '../../internal/utils/path';
<<<<<<< HEAD
=======
import type * as Shared from '../shared';
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85
import type * as RegistryAPI from '../registry';

export class Version extends APIResource {
  /**
   * Get a specific schema version document.
   *
   * @param {string} semver
   * @param {VersionRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VersionRetrieveResponse>} Default Response
   *
   * @example
   * ```ts
<<<<<<< HEAD
   * const string_ = await client.schemas.version.retrieveSchema('semver', {
=======
   * const string_ = await client.schemas.version.retrieve('semver', {
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85
   *   namespace: 'namespace',
   *   slug: 'slug',
   * });
   * ```
   */
<<<<<<< HEAD
  retrieveSchema(
    semver: string,
    params: VersionRetrieveSchemaParams,
    options?: RequestOptions,
  ): APIPromise<VersionRetrieveSchemaResponse> {
=======
  retrieve(
    semver: string,
    params: VersionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<VersionRetrieveResponse> {
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85
    const { namespace, slug } = params;
    return this._client.get(__scalarPath`/v1/schemas/${namespace}/${slug}/version/${semver}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Delete a schema version.
   *
   * @param {string} semver
   * @param {VersionDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VersionDeleteResponse>} Default Response
   *
   * @example
   * ```ts
<<<<<<< HEAD
   * await client.schemas.version.deleteSchema('semver', {
=======
   * await client.schemas.version.delete('semver', {
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85
   *   namespace: 'namespace',
   *   slug: 'slug',
   * });
   * ```
   */
<<<<<<< HEAD
  deleteSchema(
    semver: string,
    params: VersionDeleteSchemaParams,
    options?: RequestOptions,
  ): APIPromise<VersionDeleteSchemaResponse> {
=======
  delete(
    semver: string,
    params: VersionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<VersionDeleteResponse> {
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85
    const { namespace, slug } = params;
    return this._client.delete(__scalarPath`/v1/schemas/${namespace}/${slug}/version/${semver}`, options);
  }

  /**
   * Create a schema version.
   *
   * @param {string} slug
   * @param {VersionCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.UID>} Default Response
   *
   * @example
   * ```ts
<<<<<<< HEAD
   * const createSchema = await client.schemas.version.createSchema('slug', {
=======
   * const uID = await client.schemas.version.create('slug', {
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85
   *   namespace: 'namespace',
   *   version: 'x',
   *   document: '',
   * });
   * ```
   */
<<<<<<< HEAD
  createSchema(
    slug: string,
    params: VersionCreateSchemaParams,
    options?: RequestOptions,
  ): APIPromise<VersionCreateSchemaResponse> {
=======
  create(slug: string, params: VersionCreateParams, options?: RequestOptions): APIPromise<Shared.UID> {
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85
    const { namespace, ...body } = params;
    return this._client.post(__scalarPath`/v1/schemas/${namespace}/${slug}/version`, { body, ...options });
  }
}

export interface VersionRetrieveParams {
  namespace: string;
  slug: string;
}

export type VersionRetrieveResponse = string;

export interface VersionDeleteParams {
  namespace: string;
  slug: string;
}

export type VersionDeleteResponse = null;

export interface VersionCreateParams {
  /**
   * Path param
   */
  namespace: string;
  /**
   * Body param
   * @minLength 1
   */
  version: RegistryAPI.Version;
  /**
   * Body param
   */
  document: string;
}
export declare namespace Version {
  export {
    type VersionRetrieveResponse as VersionRetrieveResponse,
    type VersionDeleteResponse as VersionDeleteResponse,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionDeleteParams as VersionDeleteParams,
    type VersionCreateParams as VersionCreateParams,
  };
}
