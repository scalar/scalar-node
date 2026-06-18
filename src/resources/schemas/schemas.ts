// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";
import { Version } from "./version";
import { AccessGroup } from "./access-group";

export class Schemas extends APIResource {
  version: Version = new Version(this._client);
  accessGroup: AccessGroup = new AccessGroup(this._client);

  /**
   * List schemas in a namespace.
   */
  list(namespace: string, options?: RequestOptions): APIPromise<SchemaListResponse> {
    return this._client.get(__scalarPath`/v1/schemas/${namespace}`, options);
  }
  /**
   * Create a schema in a namespace.
   */
  create(namespace: string, body: SchemaCreateParams, options?: RequestOptions): APIPromise<UID> {
    return this._client.post(__scalarPath`/v1/schemas/${namespace}`, { body: body, ...options });
  }
  /**
   * Update schema metadata.
   */
  update(namespace: string, slug: string, body: SchemaUpdateParams, options?: RequestOptions): APIPromise<null> {
    return this._client.patch(__scalarPath`/v1/schemas/${namespace}/${slug}`, { body: body, ...options });
  }
  /**
   * Delete a schema and all related versions.
   */
  delete(namespace: string, slug: string, options?: RequestOptions): APIPromise<null> {
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
  title?: string;
  description?: string;
  isPrivate?: boolean;
}
export declare namespace Schemas {
  export { Version as Version, AccessGroup as AccessGroup };
  export { type Schema as Schema, type Nanoid as Nanoid, type Slug as Slug, type Namespace as Namespace, type ManagedSchemaVersion as ManagedSchemaVersion, type Timestamp as Timestamp, type Version2 as Version, type Value400 as Value400, type Value401 as Value401, type Value403 as Value403, type Value404 as Value404, type Value422 as Value422, type Value500 as Value500, type UID as UID, type SchemaListResponse as SchemaListResponse, type SchemaCreateParams as SchemaCreateParams, type SchemaUpdateParams as SchemaUpdateParams };
}
export { Schemas as SchemaResource };
