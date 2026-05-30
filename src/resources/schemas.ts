// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class SchemaResource extends APIResource {
  /**
   * List schemas in a namespace.
   */
  list(namespace_: string, options?: RequestOptions): APIPromise<SchemaListResponse> {
    return this._client.get(__scalarPath`/v1/schemas/${namespace_}`, options);
  }
  /**
   * Create a schema in a namespace.
   */
  create(namespace_: string, body: SchemaCreateParams, options?: RequestOptions): APIPromise<Uid> {
    return this._client.post(__scalarPath`/v1/schemas/${namespace_}`, { body: body, ...options });
  }
  /**
   * Delete a schema and all related versions.
   */
  delete(namespace_: string, slug: string, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/schemas/${namespace_}/${slug}`, options);
  }
  /**
   * Update schema metadata.
   */
  update(namespace_: string, slug: string, body: SchemaUpdateParams, options?: RequestOptions): APIPromise<null> {
    return this._client.patch(__scalarPath`/v1/schemas/${namespace_}/${slug}`, { body: body, ...options });
  }
  /**
   * Get a specific schema version document.
   */
  retrieveVersion(namespace_: string, slug: string, semver: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(__scalarPath`/v1/schemas/${namespace_}/${slug}/version/${semver}`, options);
  }
  /**
   * Delete a schema version.
   */
  deleteVersion(namespace_: string, slug: string, semver: string, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/schemas/${namespace_}/${slug}/version/${semver}`, options);
  }
  /**
   * Create a schema version.
   */
  createVersion(namespace_: string, slug: string, body: SchemaCreateVersionParams, options?: RequestOptions): APIPromise<Uid> {
    return this._client.post(__scalarPath`/v1/schemas/${namespace_}/${slug}/version`, { body: body, ...options });
  }
  /**
   * Add an access group to a schema.
   */
  createAccessGroup(namespace_: string, slug: string, body: AccessGroup, options?: RequestOptions): APIPromise<null> {
    return this._client.post(__scalarPath`/v1/schemas/${namespace_}/${slug}/access-group`, { body: body, ...options });
  }
  /**
   * Remove an access group from a schema.
   */
  deleteAccessGroup(namespace_: string, slug: string, body: AccessGroup, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/schemas/${namespace_}/${slug}/access-group`, { body: body, ...options });
  }
}

/**
 * Schema metadata.
 */
export interface Schema {
  /**
   * Unique Nano ID identifier.
   */
  uid: Nanoid;
  title: string;
  description: string;
  /**
   * URL-safe slug identifier.
   */
  slug: Slug;
  /**
   * Workspace namespace identifier.
   */
  namespace: Namespace;
  /**
   * Whether the resource is private.
   */
  isPrivate: boolean;
  /**
   * Available versions for the resource.
   */
  versions: Array<ManagedSchemaVersion>;
}

/**
 * Unique Nano ID identifier.
 */
export type Nanoid = string;

/**
 * URL-safe slug identifier.
 */
export type Slug = string;

/**
 * Workspace namespace identifier.
 */
export type Namespace = string;

/**
 * Managed schema version metadata.
 */
export interface ManagedSchemaVersion {
  /**
   * Unique Nano ID identifier.
   */
  uid: Nanoid;
  /**
   * Unix timestamp in milliseconds.
   */
  createdAt: Timestamp;
  /**
   * Unix timestamp in milliseconds.
   */
  updatedAt: Timestamp;
  /**
   * Semantic or display version string.
   */
  version: Version;
}

/**
 * Unix timestamp in milliseconds.
 */
export type Timestamp = number;

/**
 * Semantic or display version string.
 */
export type Version = string;

/**
 * Bad request error response.
 */
export interface Value400 {
  message: string;
  code: string;
}

/**
 * Unauthorized error response.
 */
export interface Value401 {
  message: string;
  code: string;
}

/**
 * Forbidden error response.
 */
export interface Value403 {
  message: string;
  code: string;
}

/**
 * Not found error response.
 */
export interface Value404 {
  message: string;
  code: string;
}

/**
 * Validation error response.
 */
export interface Value422 {
  message: string;
  code: string;
}

/**
 * Internal server error response.
 */
export interface Value500 {
  message: string;
  code: string;
}

/**
 * Object UID wrapper.
 */
export interface Uid {
  /**
   * Unique Nano ID identifier.
   */
  uid: Nanoid;
}

/**
 * Access group assignment payload.
 */
export interface AccessGroup {
  /**
   * URL-safe slug identifier.
   */
  accessGroupSlug: Slug;
}

export type SchemaListResponse = Array<Schema>;

export interface SchemaCreateParams {
  title: string;
  /**
   * Semantic or display version string.
   */
  version: Version;
  /**
   * URL-safe resource slug.
   */
  slug: string;
  /**
   * OpenAPI, schema, theme, or guide document contents.
   */
  document: string;
  description?: string;
  /**
   * Whether the resource is private.
   */
  isPrivate?: boolean;
}

export interface SchemaUpdateParams {
  title?: string;
  description?: string;
  /**
   * Whether the resource is private.
   */
  isPrivate?: boolean;
}

export interface SchemaCreateVersionParams {
  /**
   * Semantic or display version string.
   */
  version: Version;
  /**
   * OpenAPI, schema, theme, or guide document contents.
   */
  document: string;
}

export interface SchemaCreateAccessGroupParams {
  /**
   * URL-safe slug identifier.
   */
  accessGroupSlug: Slug;
}

export interface SchemaDeleteAccessGroupParams {
  /**
   * URL-safe slug identifier.
   */
  accessGroupSlug: Slug;
}

