// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class Registry extends APIResource {
  /**
   * List all API documents across every namespace the caller can access.
   */
  listAllAPIDocuments(options?: RequestOptions): APIPromise<RegistryListAllAPIDocumentsResponse> {
    return this._client.get("/v1/apis", options);
  }
  /**
   * List API documents in a namespace.
   */
  listAPIDocuments(namespace: string, options?: RequestOptions): APIPromise<RegistryListAPIDocumentsResponse> {
    return this._client.get(__scalarPath`/v1/apis/${namespace}`, options);
  }
  /**
   * Create an API document.
   */
  createAPIDocument(namespace: string, body: RegistryCreateAPIDocumentParams, options?: RequestOptions): APIPromise<RegistryCreateAPIDocumentResponse> {
    return this._client.post(__scalarPath`/v1/apis/${namespace}`, { body: body, ...options });
  }
  /**
   * Update metadata for an API document.
   */
  updateAPIDocument(namespace: string, slug: string, body: RegistryUpdateAPIDocumentParams, options?: RequestOptions): APIPromise<null> {
    return this._client.patch(__scalarPath`/v1/apis/${namespace}/${slug}`, { body: body, ...options });
  }
  /**
   * Delete an API document and all versions.
   */
  deleteAPIDocument(namespace: string, slug: string, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/apis/${namespace}/${slug}`, options);
  }
  /**
   * Get a specific API document version.
   */
  retrieveAPIDocumentVersion(namespace: string, slug: string, semver: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(__scalarPath`/v1/apis/${namespace}/${slug}/version/${semver}`, options);
  }
  /**
   * Update the registry file content for an API document version.
   */
  updateAPIDocumentVersion(namespace: string, slug: string, semver: string, body: RegistryUpdateAPIDocumentVersionParams, options?: RequestOptions): APIPromise<RegistryUpdateAPIDocumentVersionResponse> {
    return this._client.patch(__scalarPath`/v1/apis/${namespace}/${slug}/version/${semver}`, { body: body, ...options });
  }
  /**
   * Delete a specific API document version.
   */
  deleteAPIDocumentVersion(namespace: string, slug: string, semver: string, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/apis/${namespace}/${slug}/version/${semver}`, options);
  }
  /**
   * Get metadata (uid, content shas, version sha, tags) for a specific API document version.
   */
  listAPIDocumentVersionMetadata(namespace: string, slug: string, semver: string, options?: RequestOptions): APIPromise<ManagedDocVersion> {
    return this._client.get(__scalarPath`/v1/apis/${namespace}/${slug}/version/${semver}/metadata`, options);
  }
  /**
   * Create a new API document version.
   */
  createAPIDocumentVersion(namespace: string, slug: string, body: RegistryCreateAPIDocumentVersionParams, options?: RequestOptions): APIPromise<ManagedDocVersion> {
    return this._client.post(__scalarPath`/v1/apis/${namespace}/${slug}/version`, { body: body, ...options });
  }
  /**
   * Add an access group to an API document.
   */
  createAPIDocumentAccessGroup(namespace: string, slug: string, body: RegistryCreateAPIDocumentAccessGroupParams, options?: RequestOptions): APIPromise<null> {
    return this._client.post(__scalarPath`/v1/apis/${namespace}/${slug}/access-group`, { body: body, ...options });
  }
  /**
   * Remove an access group from an API document.
   */
  deleteAPIDocumentAccessGroup(namespace: string, slug: string, body: RegistryDeleteAPIDocumentAccessGroupParams, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/apis/${namespace}/${slug}/access-group`, { body: body, ...options });
  }
}

export type Version = string;

export interface AccessGroup {
  accessGroupSlug: Slug;
}

export interface APIDocument {
  uid: Nanoid;
  version: Version;
  title: string;
  slug: Slug;
  description: string;
  namespace: Namespace;
  isPrivate: boolean;
  tags: string;
  versions: Array<ManagedDocVersion>;
}

export type Nanoid = string;

export type Slug = string;

export type Namespace = string;

export interface ManagedDocVersion {
  uid: Nanoid;
  createdAt: number;
  version: Version;
  upgraded: boolean;
  embedStatus: "complete" | "failed" | null;
  tags: Array<string>;
  tools?: Array<{ path: string; method: Method; enabledTools: Array<"execute-request" | "get-mini-openapi-spec"> }>;
  yamlSha?: string;
  jsonSha?: string;
  versionSha?: string;
}

export type Method = "delete" | "get" | "head" | "options" | "patch" | "post" | "put" | "trace";

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

export type RegistryListAllAPIDocumentsResponse = Array<APIDocument>;

export type RegistryListAPIDocumentsResponse = Array<APIDocument>;

export interface RegistryCreateAPIDocumentParams {
  title: string;
  version: Version;
  slug: string;
  document: string;
  description?: string;
  ruleset?: string;
  isPrivate?: boolean;
}

export type RegistryCreateAPIDocumentResponse = { uid: string; versionUid: string; title: string; jsonSha: string; yamlSha: string; versionSha: string };

export interface RegistryUpdateAPIDocumentParams {
  title?: string;
  description?: string;
  isPrivate?: boolean;
  ruleset?: string;
}

export interface RegistryUpdateAPIDocumentVersionParams {
  document: string;
  lastKnownVersionSha?: string;
}

export type RegistryUpdateAPIDocumentVersionResponse = { jsonSha: string; yamlSha: string; versionSha: string };

export interface RegistryCreateAPIDocumentVersionParams {
  version: Version;
  document: string;
  force?: boolean;
  lastKnownVersionSha?: string;
}

export interface RegistryCreateAPIDocumentAccessGroupParams {
  accessGroupSlug: Slug;
}

export interface RegistryDeleteAPIDocumentAccessGroupParams {
  accessGroupSlug: Slug;
}
export declare namespace Registry {
  export { type Version as Version, type AccessGroup as AccessGroup, type APIDocument as APIDocument, type Nanoid as Nanoid, type Slug as Slug, type Namespace as Namespace, type ManagedDocVersion as ManagedDocVersion, type Method as Method, type Value400 as Value400, type Value401 as Value401, type Value403 as Value403, type Value404 as Value404, type Value422 as Value422, type Value500 as Value500, type RegistryListAllAPIDocumentsResponse as RegistryListAllAPIDocumentsResponse, type RegistryListAPIDocumentsResponse as RegistryListAPIDocumentsResponse, type RegistryCreateAPIDocumentParams as RegistryCreateAPIDocumentParams, type RegistryCreateAPIDocumentResponse as RegistryCreateAPIDocumentResponse, type RegistryUpdateAPIDocumentParams as RegistryUpdateAPIDocumentParams, type RegistryUpdateAPIDocumentVersionParams as RegistryUpdateAPIDocumentVersionParams, type RegistryUpdateAPIDocumentVersionResponse as RegistryUpdateAPIDocumentVersionResponse, type RegistryCreateAPIDocumentVersionParams as RegistryCreateAPIDocumentVersionParams, type RegistryCreateAPIDocumentAccessGroupParams as RegistryCreateAPIDocumentAccessGroupParams, type RegistryDeleteAPIDocumentAccessGroupParams as RegistryDeleteAPIDocumentAccessGroupParams };
}
export { Registry as RegistryResource };
