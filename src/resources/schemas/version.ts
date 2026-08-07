// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as RegistryAPI from '../registry';

export class Version extends APIResource {
  /**
   * Get a specific schema version document.
   *
   * @param {string} semver
   * @param {VersionRetrieveSchemaParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VersionRetrieveSchemaResponse>} Default Response
   *
   * @example
   * ```ts
   * const string_ = await client.schemas.version.retrieveSchema('semver', {
   *   namespace: 'namespace',
   *   slug: 'slug',
   * });
   * ```
   */
  retrieveSchema(
    semver: string,
    params: VersionRetrieveSchemaParams,
    options?: RequestOptions,
  ): APIPromise<VersionRetrieveSchemaResponse> {
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
   * @param {VersionDeleteSchemaParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VersionDeleteSchemaResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.version.deleteSchema('semver', {
   *   namespace: 'namespace',
   *   slug: 'slug',
   * });
   * ```
   */
  deleteSchema(
    semver: string,
    params: VersionDeleteSchemaParams,
    options?: RequestOptions,
  ): APIPromise<VersionDeleteSchemaResponse> {
    const { namespace, slug } = params;
    return this._client.delete(__scalarPath`/v1/schemas/${namespace}/${slug}/version/${semver}`, options);
  }

  /**
   * Create a schema version.
   *
   * @param {string} slug
   * @param {VersionCreateSchemaParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VersionCreateSchemaResponse>} Default Response
   *
   * @example
   * ```ts
   * const createSchema = await client.schemas.version.createSchema('slug', {
   *   namespace: 'namespace',
   *   version: 'x',
   *   document: '',
   * });
   * ```
   */
  createSchema(
    slug: string,
    params: VersionCreateSchemaParams,
    options?: RequestOptions,
  ): APIPromise<VersionCreateSchemaResponse> {
    const { namespace, ...body } = params;
    return this._client.post(__scalarPath`/v1/schemas/${namespace}/${slug}/version`, { body, ...options });
  }
}

export interface VersionRetrieveSchemaParams {
  namespace: string;
  slug: string;
}

export type VersionRetrieveSchemaResponse = string;

export interface VersionDeleteSchemaParams {
  namespace: string;
  slug: string;
}

export type VersionDeleteSchemaResponse = null;

export interface VersionCreateSchemaParams {
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

export interface VersionCreateSchemaResponse {
  /**
   * @minLength 5
   */
  uid: string;
}
export declare namespace Version {
  export {
    type VersionRetrieveSchemaResponse as VersionRetrieveSchemaResponse,
    type VersionDeleteSchemaResponse as VersionDeleteSchemaResponse,
    type VersionCreateSchemaResponse as VersionCreateSchemaResponse,
    type VersionRetrieveSchemaParams as VersionRetrieveSchemaParams,
    type VersionDeleteSchemaParams as VersionDeleteSchemaParams,
    type VersionCreateSchemaParams as VersionCreateSchemaParams,
  };
}
