// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';
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
   * const response = await client.schemas.version.retrieve('semver', {
   *   namespace: 'namespace',
   *   slug: 'slug',
   * });
   * ```
   */
  retrieve(
    semver: string,
    params: VersionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<VersionRetrieveResponse> {
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
   * await client.schemas.version.delete('semver', {
   *   namespace: 'namespace',
   *   slug: 'slug',
   * });
   * ```
   */
  delete(
    semver: string,
    params: VersionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<VersionDeleteResponse> {
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
   * const uid = await client.schemas.version.create('slug', {
   *   namespace: 'namespace',
   *   version: 'x',
   *   document: '',
   * });
   * ```
   */
  create(slug: string, params: VersionCreateParams, options?: RequestOptions): APIPromise<Shared.UID> {
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
