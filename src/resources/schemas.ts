// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { buildHeaders } from "../internal/headers";
import { path as __scalarPath } from "../internal/utils/path";
import type * as ScalarDocsAPI from "./scalar-docs";
import type * as RegistryAPI from "./registry";

export class Schemas extends APIResource {
  /**
   * List schemas in a namespace.
   *
   * @param {string} namespace_
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SchemaListResponse>} Default Response
   *
   * @example
   * ```ts
   * const list = await client.schemas.list("namespace");
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
   * @returns {APIPromise<SchemaCreateResponse>} Default Response
   *
   * @example
   * ```ts
   * const create = await client.schemas.create("namespace", {
   *   title: "",
   *   version: "",
   *   slug: "",
   *   document: "",
   * });
   * ```
   */
  create(namespace_: string, body: SchemaCreateParams, options?: RequestOptions): APIPromise<SchemaCreateResponse> {
    return this._client.post(__scalarPath`/v1/schemas/${namespace_}`, { body: body, ...options });
  }

  /**
   * Update schema metadata.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {SchemaUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SchemaUpdateResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.update("namespace", "slug", {});
   * ```
   */
  update(namespace_: string, slug: string, body: SchemaUpdateParams, options?: RequestOptions): APIPromise<SchemaUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/schemas/${namespace_}/${slug}`, { body: body, ...options });
  }

  /**
   * Delete a schema and all related versions.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SchemaDeleteResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.delete("namespace", "slug");
   * ```
   */
  delete(namespace_: string, slug: string, options?: RequestOptions): APIPromise<SchemaDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/schemas/${namespace_}/${slug}`, options);
  }

  /**
   * Get a specific schema version document.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {string} semver
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SchemaRetrieveVersionResponse>} Default Response
   *
   * @example
   * ```ts
   * const string_ = await client.schemas.retrieveVersion("namespace", "slug", "semver");
   * ```
   */
  retrieveVersion(namespace_: string, slug: string, semver: string, options?: RequestOptions): APIPromise<SchemaRetrieveVersionResponse> {
    return this._client.get(__scalarPath`/v1/schemas/${namespace_}/${slug}/version/${semver}`, { ...options, headers: buildHeaders([{ Accept: "text/plain" }, options?.headers]) });
  }

  /**
   * Delete a schema version.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {string} semver
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SchemaDeleteVersionResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.deleteVersion("namespace", "slug", "semver");
   * ```
   */
  deleteVersion(namespace_: string, slug: string, semver: string, options?: RequestOptions): APIPromise<SchemaDeleteVersionResponse> {
    return this._client.delete(__scalarPath`/v1/schemas/${namespace_}/${slug}/version/${semver}`, options);
  }

  /**
   * Create a schema version.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {SchemaCreateVersionParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SchemaCreateVersionResponse>} Default Response
   *
   * @example
   * ```ts
   * const createVersion = await client.schemas.createVersion("namespace", "slug", {
   *   version: "",
   *   document: "",
   * });
   * ```
   */
  createVersion(namespace_: string, slug: string, body: SchemaCreateVersionParams, options?: RequestOptions): APIPromise<SchemaCreateVersionResponse> {
    return this._client.post(__scalarPath`/v1/schemas/${namespace_}/${slug}/version`, { body: body, ...options });
  }

  /**
   * Add an access group to a schema.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {SchemaCreateAccessGroupParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SchemaCreateAccessGroupResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.createAccessGroup("namespace", "slug", {
   *   accessGroupSlug: "",
   * });
   * ```
   */
  createAccessGroup(namespace_: string, slug: string, body: SchemaCreateAccessGroupParams, options?: RequestOptions): APIPromise<SchemaCreateAccessGroupResponse> {
    return this._client.post(__scalarPath`/v1/schemas/${namespace_}/${slug}/access-group`, { body: body, ...options });
  }

  /**
   * Remove an access group from a schema.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {SchemaDeleteAccessGroupParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SchemaDeleteAccessGroupResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.deleteAccessGroup("namespace", "slug", {
   *   accessGroupSlug: "",
   * });
   * ```
   */
  deleteAccessGroup(namespace_: string, slug: string, body: SchemaDeleteAccessGroupParams, options?: RequestOptions): APIPromise<SchemaDeleteAccessGroupResponse> {
    return this._client.delete(__scalarPath`/v1/schemas/${namespace_}/${slug}/access-group`, { body: body, ...options });
  }
}

export type SchemaListResponse = Array<SchemaListResponse.SchemaListResponseItem>;

export namespace SchemaListResponse {
  export interface SchemaListResponseItem {
    /**
     * @default nanoid()
     * @minLength 5
     */
    uid: string;
    /**
     * @default ""
     * @maxLength 100
     */
    title: string;
    /**
     * @default ""
     */
    description: string;
    /**
     * @default randomManagedDocSlug()
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
    namespace: string;
    /**
     * @default false
     */
    isPrivate: boolean;
    versions: Array<SchemaListResponseItem.Version>;
  }

  export namespace SchemaListResponseItem {
    export interface Version {
      /**
       * @default nanoid()
       * @minLength 5
       */
      uid: string;
      /**
       * @default unixTimestamp()
       * @minimum 0
       * @maximum 9007199254740991
       */
      createdAt: number;
      /**
       * @default unixTimestamp()
       * @minimum 0
       * @maximum 9007199254740991
       */
      updatedAt: number;
      /**
       * @default 0.0.1
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

export interface SchemaCreateResponse {
  /**
   * @minLength 5
   */
  uid: string;
}

export interface SchemaUpdateParams {
  title?: string;
  description?: string;
  isPrivate?: boolean;
}

export type SchemaUpdateResponse = null;

export type SchemaDeleteResponse = null;

export type SchemaRetrieveVersionResponse = string;

export type SchemaDeleteVersionResponse = null;

export interface SchemaCreateVersionParams {
  /**
   * @minLength 1
   */
  version: RegistryAPI.Version;
  document: string;
}

export interface SchemaCreateVersionResponse {
  /**
   * @minLength 5
   */
  uid: string;
}

export interface SchemaCreateAccessGroupParams {
  /**
   * @minLength 3
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  accessGroupSlug: ScalarDocsAPI.Slug;
}

export type SchemaCreateAccessGroupResponse = null;

export interface SchemaDeleteAccessGroupParams {
  /**
   * @minLength 3
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  accessGroupSlug: ScalarDocsAPI.Slug;
}

export type SchemaDeleteAccessGroupResponse = null;
export declare namespace Schemas {
  export {
    type SchemaListResponse as SchemaListResponse,
    type SchemaCreateResponse as SchemaCreateResponse,
    type SchemaUpdateResponse as SchemaUpdateResponse,
    type SchemaDeleteResponse as SchemaDeleteResponse,
    type SchemaRetrieveVersionResponse as SchemaRetrieveVersionResponse,
    type SchemaDeleteVersionResponse as SchemaDeleteVersionResponse,
    type SchemaCreateVersionResponse as SchemaCreateVersionResponse,
    type SchemaCreateAccessGroupResponse as SchemaCreateAccessGroupResponse,
    type SchemaDeleteAccessGroupResponse as SchemaDeleteAccessGroupResponse,
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaCreateVersionParams as SchemaCreateVersionParams,
    type SchemaCreateAccessGroupParams as SchemaCreateAccessGroupParams,
    type SchemaDeleteAccessGroupParams as SchemaDeleteAccessGroupParams,
  };
}
