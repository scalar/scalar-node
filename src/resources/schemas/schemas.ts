// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';
import type * as ScalarDocsAPI from '../scalar-docs';
import type * as RegistryAPI from '../registry';
import * as VersionAPI from './version';
import {
  Version,
  type VersionRetrieveResponse,
  type VersionDeleteResponse,
  type VersionRetrieveParams,
  type VersionDeleteParams,
  type VersionCreateParams,
} from './version';
import * as AccessGroupAPI from './access-group';
import {
  AccessGroup,
  type AccessGroupCreateResponse,
  type AccessGroupDeleteResponse,
  type AccessGroupCreateParams,
  type AccessGroupDeleteParams,
} from './access-group';

export class Schemas extends APIResource {
  version: VersionAPI.Version = new VersionAPI.Version(this._client);
  accessGroup: AccessGroupAPI.AccessGroup = new AccessGroupAPI.AccessGroup(this._client);

  /**
   * List schemas in a namespace.
   *
   * @param {string} namespace_
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SchemaListResponse>} Default Response
   *
   * @example
   * ```ts
   * const schema = await client.schemas.list('namespace');
   * ```
   */
  list(namespace_: string, options?: RequestOptions): APIPromise<SchemaListResponse> {
    return this._client.get(__scalarPath`/v1/schemas/${namespace_}`, options);
  }

  /**
   * Create a schema in a namespace.
   *
   * @param {string} namespace_
   * @param {SchemaCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.UID>} Default Response
   *
   * @example
   * ```ts
   * const uid = await client.schemas.create('namespace', {
   *   title: '',
   *   version: 'x',
   *   slug: '',
   *   document: '',
   * });
   * ```
   */
  create(namespace_: string, body: SchemaCreateParams, options?: RequestOptions): APIPromise<Shared.UID> {
    return this._client.post(__scalarPath`/v1/schemas/${namespace_}`, { body, ...options });
  }

  /**
   * Update schema metadata.
   *
   * @param {string} slug
   * @param {SchemaUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SchemaUpdateResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.update('slug', {
   *   namespace: 'namespace',
   * });
   * ```
   */
  update(
    slug: string,
    params: SchemaUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SchemaUpdateResponse> {
    const { namespace, ...body } = params;
    return this._client.patch(__scalarPath`/v1/schemas/${namespace}/${slug}`, { body, ...options });
  }

  /**
   * Delete a schema and all related versions.
   *
   * @param {string} slug
   * @param {SchemaDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SchemaDeleteResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.delete('slug', {
   *   namespace: 'namespace',
   * });
   * ```
   */
  delete(
    slug: string,
    params: SchemaDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SchemaDeleteResponse> {
    const { namespace } = params;
    return this._client.delete(__scalarPath`/v1/schemas/${namespace}/${slug}`, options);
  }
}

export type SchemaListResponse = Array<SchemaListResponse.SchemaListResponseItem>;

export namespace SchemaListResponse {
  export interface SchemaListResponseItem {
    /**
     * @minLength 5
     */
    uid: Shared.Nanoid;
    /**
     * @maxLength 100
     */
    title: string;
    description: string;
    /**
     * @minLength 3
     * @maxLength 60
     * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
     */
    slug: ScalarDocsAPI.Slug;
    /**
     * @minLength 3
     * @maxLength 50
     * @pattern ^[a-zA-Z0-9-_]+$
     */
    namespace: Shared.Namespace;
    isPrivate: boolean;
    versions: Array<SchemaListResponseItem.Version>;
  }

  export namespace SchemaListResponseItem {
    export interface Version {
      /**
       * @minLength 5
       */
      uid: Shared.Nanoid;
      /**
       * @minimum 0
       * @maximum 9007199254740991
       */
      createdAt: Shared.Timestamp;
      /**
       * @minimum 0
       * @maximum 9007199254740991
       */
      updatedAt: Shared.Timestamp;
      /**
       * @minLength 1
       */
      version: RegistryAPI.Version;
    }
  }
}

export interface SchemaCreateParams {
  title: string;
  /**
   * @minLength 1
   */
  version: RegistryAPI.Version;
  slug: string;
  document: string;
  description?: string;
  isPrivate?: boolean;
}

export interface SchemaUpdateParams {
  /**
   * Path param
   */
  namespace: string;
  /**
   * Body param
   */
  title?: string;
  /**
   * Body param
   */
  description?: string;
  /**
   * Body param
   */
  isPrivate?: boolean;
}

export type SchemaUpdateResponse = null;

export interface SchemaDeleteParams {
  namespace: string;
}

export type SchemaDeleteResponse = null;
Schemas.Version = Version;
Schemas.AccessGroup = AccessGroup;

export declare namespace Schemas {
  export {
    type SchemaListResponse as SchemaListResponse,
    type SchemaUpdateResponse as SchemaUpdateResponse,
    type SchemaDeleteResponse as SchemaDeleteResponse,
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaDeleteParams as SchemaDeleteParams,
  };

  export {
    Version as Version,
    type VersionRetrieveResponse as VersionRetrieveResponse,
    type VersionDeleteResponse as VersionDeleteResponse,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionDeleteParams as VersionDeleteParams,
    type VersionCreateParams as VersionCreateParams,
  };

  export {
    AccessGroup as AccessGroup,
    type AccessGroupCreateResponse as AccessGroupCreateResponse,
    type AccessGroupDeleteResponse as AccessGroupDeleteResponse,
    type AccessGroupCreateParams as AccessGroupCreateParams,
    type AccessGroupDeleteParams as AccessGroupDeleteParams,
  };
}
