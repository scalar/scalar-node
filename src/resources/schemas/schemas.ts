// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";
import { Version, type VersionRetrieveSchemaParams, type VersionDeleteSchemaParams, type VersionCreateSchemaParams } from "./version";
import { AccessGroup, type AccessGroupCreateSchemaParams, type AccessGroupDeleteSchemaParams } from "./access-group";

export class Schemas extends APIResource {
  version: Version = new Version(this._client);
  accessGroup: AccessGroup = new AccessGroup(this._client);

  /**
   * List schemas in a namespace.
   *
   * @param {string} namespace
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SchemaListResponse>} Default Response
   *
   * @example
   * ```ts
   * const list = await client.schemas.list("namespace");
   * ```
   */
  list(namespace: string, options?: RequestOptions): APIPromise<SchemaListResponse> {
    return this._client.get(__scalarPath`/v1/schemas/${namespace}`, options);
  }

  /**
   * Create a schema in a namespace.
   *
   * @param {string} namespace
   * @param {SchemaCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UID>} Default Response
   *
   * @example
   * ```ts
   * const uID = await client.schemas.create("namespace", {
   *   title: "",
   *   version: "",
   *   slug: "",
   *   document: "",
   * });
   * ```
   */
  create(namespace: string, body: SchemaCreateParams, options?: RequestOptions): APIPromise<UID> {
    return this._client.post(__scalarPath`/v1/schemas/${namespace}`, { body: body, ...options });
  }

  /**
   * Update schema metadata.
   *
   * @param {string} slug
   * @param {SchemaUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<null>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.update("slug", {
   *   namespace: "namespace",
   * });
   * ```
   */
  update(slug: string, params: SchemaUpdateParams, options?: RequestOptions): APIPromise<null> {
    const { namespace, ...body } = params ?? {};
    return this._client.patch(__scalarPath`/v1/schemas/${namespace}/${slug}`, { body: body, ...options });
  }

  /**
   * Delete a schema and all related versions.
   *
   * @param {string} slug
   * @param {SchemaDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<null>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.delete("slug", {
   *   namespace: "namespace",
   * });
   * ```
   */
  delete(slug: string, params: SchemaDeleteParams, options?: RequestOptions): APIPromise<null> {
    const { namespace } = params ?? {};
    return this._client.delete(__scalarPath`/v1/schemas/${namespace}/${slug}`, options);
  }
}

export interface Schema {
  uid: Nanoid;
  title: string;
  description: string;
  slug: Slug;
  namespace: Namespace;
  isPrivate: boolean;
  versions: Array<ManagedSchemaVersion>;
}

export type Nanoid = string;

export type Slug = string;

export type Namespace = string;

export interface ManagedSchemaVersion {
  uid: Nanoid;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  version: Version2;
}

export type Timestamp = number;

export type Version2 = string;

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

export type SchemaListResponse = Array<Schema>;

export interface SchemaCreateParams {
  title: string;
  version: Version;
  slug: string;
  document: string;
  description?: string;
  isPrivate?: boolean;
}

export interface SchemaUpdateParams {
  namespace: string;
  title?: string;
  description?: string;
  isPrivate?: boolean;
}

export interface SchemaDeleteParams {
  namespace: string;
}
Schemas.Version = Version;
Schemas.AccessGroup = AccessGroup;

export declare namespace Schemas {
  export {
    type SchemaListResponse as SchemaListResponse,
    type UID as UID,
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaUpdateParams as SchemaUpdateParams,
    type SchemaDeleteParams as SchemaDeleteParams,
  };

  export {
    Version as Version,
    type VersionRetrieveSchemaParams as VersionRetrieveSchemaParams,
    type VersionDeleteSchemaParams as VersionDeleteSchemaParams,
    type VersionCreateSchemaParams as VersionCreateSchemaParams,
  };

  export {
    AccessGroup as AccessGroup,
    type AccessGroupCreateSchemaParams as AccessGroupCreateSchemaParams,
    type AccessGroupDeleteSchemaParams as AccessGroupDeleteSchemaParams,
  };
}
export { Schemas as SchemaResource };
