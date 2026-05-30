// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class RegistryResource extends APIResource {
  /**
   * List all API documents across every namespace the caller can access.
   */
  listAllApiDocuments(options?: RequestOptions): APIPromise<RegistryListAllApiDocumentsResponse> {
    return this._client.get("/v1/apis", options);
  }
  /**
   * List API documents in a namespace.
   */
  listApiDocuments(namespace_: string, options?: RequestOptions): APIPromise<RegistryListApiDocumentsResponse> {
    return this._client.get(__scalarPath`/v1/apis/${namespace_}`, options);
  }
  /**
   * Create an API document.
   */
  createApiDocument(namespace_: string, body: RegistryCreateApiDocumentParams, options?: RequestOptions): APIPromise<RegistryCreateApiDocumentResponse> {
    return this._client.post(__scalarPath`/v1/apis/${namespace_}`, { body: body, ...options });
  }
  /**
   * Delete an API document and all versions.
   */
  deleteApiDocument(namespace_: string, slug: string, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/apis/${namespace_}/${slug}`, options);
  }
  /**
   * Update metadata for an API document.
   */
  updateApiDocument(namespace_: string, slug: string, body: RegistryUpdateApiDocumentParams, options?: RequestOptions): APIPromise<null> {
    return this._client.patch(__scalarPath`/v1/apis/${namespace_}/${slug}`, { body: body, ...options });
  }
  /**
   * Get a specific API document version.
   */
  retrieveApiDocumentVersion(namespace_: string, slug: string, semver: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(__scalarPath`/v1/apis/${namespace_}/${slug}/version/${semver}`, options);
  }
  /**
   * Delete a specific API document version.
   */
  deleteApiDocumentVersion(namespace_: string, slug: string, semver: string, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/apis/${namespace_}/${slug}/version/${semver}`, options);
  }
  /**
   * Update the registry file content for an API document version.
   */
  updateApiDocumentVersion(namespace_: string, slug: string, semver: string, body: RegistryUpdateApiDocumentVersionParams, options?: RequestOptions): APIPromise<RegistryUpdateApiDocumentVersionResponse> {
    return this._client.patch(__scalarPath`/v1/apis/${namespace_}/${slug}/version/${semver}`, { body: body, ...options });
  }
  /**
   * Get metadata (uid, content shas, version sha, tags) for a specific API document version.
   */
  listApiDocumentVersionMetadata(namespace_: string, slug: string, semver: string, options?: RequestOptions): APIPromise<ManagedDocVersion> {
    return this._client.get(__scalarPath`/v1/apis/${namespace_}/${slug}/version/${semver}/metadata`, options);
  }
  /**
   * Create a new API document version.
   */
  createApiDocumentVersion(namespace_: string, slug: string, body: RegistryCreateApiDocumentVersionParams, options?: RequestOptions): APIPromise<ManagedDocVersion> {
    return this._client.post(__scalarPath`/v1/apis/${namespace_}/${slug}/version`, { body: body, ...options });
  }
  /**
   * Add an access group to an API document.
   */
  createApiDocumentAccessGroup(namespace_: string, slug: string, body: AccessGroup, options?: RequestOptions): APIPromise<null> {
    return this._client.post(__scalarPath`/v1/apis/${namespace_}/${slug}/access-group`, { body: body, ...options });
  }
  /**
   * Remove an access group from an API document.
   */
  deleteApiDocumentAccessGroup(namespace_: string, slug: string, body: AccessGroup, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/apis/${namespace_}/${slug}/access-group`, { body: body, ...options });
  }
}

/**
 * Semantic or display version string.
 */
export type Version = string;

/**
 * Access group assignment payload.
 */
export interface AccessGroup {
  /**
   * URL-safe slug identifier.
   */
  accessGroupSlug: Slug;
}

/**
 * API document metadata.
 */
export interface ApiDocument {
  /**
   * Unique Nano ID identifier.
   */
  uid: Nanoid;
  /**
   * Semantic or display version string.
   */
  version: Version;
  title: string;
  /**
   * URL-safe slug identifier.
   */
  slug: Slug;
  description: string;
  /**
   * Workspace namespace identifier.
   */
  namespace: Namespace;
  /**
   * Whether the resource is private.
   */
  isPrivate: boolean;
  /**
   * Tags associated with the resource.
   */
  tags: string;
  /**
   * Available versions for the resource.
   */
  versions: Array<ManagedDocVersion>;
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
 * Managed API document version metadata.
 */
export interface ManagedDocVersion {
  /**
   * Unique Nano ID identifier.
   */
  uid: Nanoid;
  /**
   * Timestamp when the resource was created.
   */
  createdAt: number;
  /**
   * Semantic or display version string.
   */
  version: Version;
  /**
   * Whether the version was upgraded.
   */
  upgraded: boolean;
  /**
   * Current embedding status.
   */
  embedStatus: "complete" | "failed" | null;
  /**
   * Tags associated with the resource.
   */
  tags: Array<string>;
  /**
   * Tool configuration for documented operations.
   */
  tools?: Array<{ path: string; method: Method; enabledTools: Array<"execute-request" | "get-mini-openapi-spec"> }>;
  /**
   * SHA hash of the YAML document.
   */
  yamlSha?: string;
  /**
   * SHA hash of the JSON document.
   */
  jsonSha?: string;
  /**
   * SHA hash of the version contents.
   */
  versionSha?: string;
}

/**
 * HTTP method.
 */
export type Method = "delete" | "get" | "head" | "options" | "patch" | "post" | "put" | "trace";

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

export type RegistryListAllApiDocumentsResponse = Array<ApiDocument>;

export type RegistryListApiDocumentsResponse = Array<ApiDocument>;

export interface RegistryCreateApiDocumentParams {
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
   * Ruleset contents.
   */
  ruleset?: string;
  /**
   * Whether the resource is private.
   */
  isPrivate?: boolean;
}

export type RegistryCreateApiDocumentResponse = { uid: string; versionUid: string; title: string; jsonSha: string; yamlSha: string; versionSha: string };

export interface RegistryUpdateApiDocumentParams {
  title?: string;
  description?: string;
  /**
   * Whether the resource is private.
   */
  isPrivate?: boolean;
  /**
   * Ruleset contents.
   */
  ruleset?: string;
}

export interface RegistryUpdateApiDocumentVersionParams {
  /**
   * OpenAPI, schema, theme, or guide document contents.
   */
  document: string;
  /**
   * Last known version SHA used for optimistic concurrency.
   */
  lastKnownVersionSha?: string;
}

export type RegistryUpdateApiDocumentVersionResponse = { jsonSha: string; yamlSha: string; versionSha: string };

export interface RegistryCreateApiDocumentVersionParams {
  /**
   * Semantic or display version string.
   */
  version: Version;
  /**
   * OpenAPI, schema, theme, or guide document contents.
   */
  document: string;
  /**
   * Whether to force the operation.
   */
  force?: boolean;
  /**
   * Last known version SHA used for optimistic concurrency.
   */
  lastKnownVersionSha?: string;
}

export interface RegistryCreateApiDocumentAccessGroupParams {
  /**
   * URL-safe slug identifier.
   */
  accessGroupSlug: Slug;
}

export interface RegistryDeleteApiDocumentAccessGroupParams {
  /**
   * URL-safe slug identifier.
   */
  accessGroupSlug: Slug;
}

