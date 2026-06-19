// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class Registry extends APIResource {
  /**
   * List all API documents across every namespace the caller can access.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryListAllAPIDocumentsResponse>} Default Response
   *
   * @example
   * ```ts
   * const listAllAPIDocuments = await client.registry.listAllAPIDocuments();
   * ```
   */
  listAllAPIDocuments(options?: RequestOptions): APIPromise<RegistryListAllAPIDocumentsResponse> {
    return this._client.get("/v1/apis", options);
  }

  /**
   * List API documents in a namespace.
   *
   * @param {string} namespace
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryListAPIDocumentsResponse>} Default Response
   *
   * @example
   * ```ts
   * const listAPIDocuments = await client.registry.listAPIDocuments("namespace");
   * ```
   */
  listAPIDocuments(namespace: string, options?: RequestOptions): APIPromise<RegistryListAPIDocumentsResponse> {
    return this._client.get(__scalarPath`/v1/apis/${namespace}`, options);
  }

  /**
   * Create an API document.
   *
   * @param {string} namespace
   * @param {RegistryCreateAPIDocumentParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryCreateAPIDocumentResponse>} Default Response
   *
   * @example
   * ```ts
   * const createAPIDocument = await client.registry.createAPIDocument("namespace", {
   *   title: "",
   *   version: "",
   *   slug: "",
   *   document: "",
   * });
   * ```
   */
  createAPIDocument(namespace: string, body: RegistryCreateAPIDocumentParams, options?: RequestOptions): APIPromise<RegistryCreateAPIDocumentResponse> {
    return this._client.post(__scalarPath`/v1/apis/${namespace}`, { body: body, ...options });
  }

  /**
   * Update metadata for an API document.
   *
   * @param {string} slug
   * @param {RegistryUpdateAPIDocumentParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<null>} Default Response
   *
   * @example
   * ```ts
   * await client.registry.updateAPIDocument("slug", {
   *   namespace: "namespace",
   * });
   * ```
   */
  updateAPIDocument(slug: string, params: RegistryUpdateAPIDocumentParams, options?: RequestOptions): APIPromise<null> {
    const { namespace, ...body } = params ?? {};
    return this._client.patch(__scalarPath`/v1/apis/${namespace}/${slug}`, { body: body, ...options });
  }

  /**
   * Delete an API document and all versions.
   *
   * @param {string} slug
   * @param {RegistryDeleteAPIDocumentParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<null>} Default Response
   *
   * @example
   * ```ts
   * await client.registry.deleteAPIDocument("slug", {
   *   namespace: "namespace",
   * });
   * ```
   */
  deleteAPIDocument(slug: string, params: RegistryDeleteAPIDocumentParams, options?: RequestOptions): APIPromise<null> {
    const { namespace } = params ?? {};
    return this._client.delete(__scalarPath`/v1/apis/${namespace}/${slug}`, options);
  }

  /**
   * Get a specific API document version.
   *
   * @param {string} semver
   * @param {RegistryRetrieveAPIDocumentVersionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Default Response
   *
   * @example
   * ```ts
   * const string_ = await client.registry.retrieveAPIDocumentVersion("semver", {
   *   namespace: "namespace",
   *   slug: "slug",
   * });
   * ```
   */
  retrieveAPIDocumentVersion(semver: string, params: RegistryRetrieveAPIDocumentVersionParams, options?: RequestOptions): APIPromise<string> {
    const { namespace, slug } = params ?? {};
    return this._client.get(__scalarPath`/v1/apis/${namespace}/${slug}/version/${semver}`, options);
  }

  /**
   * Update the registry file content for an API document version.
   *
   * @param {string} semver
   * @param {RegistryUpdateAPIDocumentVersionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryUpdateAPIDocumentVersionResponse>} Default Response
   *
   * @example
   * ```ts
   * const updateAPIDocumentVersion = await client.registry.updateAPIDocumentVersion("semver", {
   *   namespace: "namespace",
   *   slug: "slug",
   *   document: "",
   * });
   * ```
   */
  updateAPIDocumentVersion(semver: string, params: RegistryUpdateAPIDocumentVersionParams, options?: RequestOptions): APIPromise<RegistryUpdateAPIDocumentVersionResponse> {
    const { namespace, slug, ...body } = params ?? {};
    return this._client.patch(__scalarPath`/v1/apis/${namespace}/${slug}/version/${semver}`, { body: body, ...options });
  }

  /**
   * Delete a specific API document version.
   *
   * @param {string} semver
   * @param {RegistryDeleteAPIDocumentVersionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<null>} Default Response
   *
   * @example
   * ```ts
   * await client.registry.deleteAPIDocumentVersion("semver", {
   *   namespace: "namespace",
   *   slug: "slug",
   * });
   * ```
   */
  deleteAPIDocumentVersion(semver: string, params: RegistryDeleteAPIDocumentVersionParams, options?: RequestOptions): APIPromise<null> {
    const { namespace, slug } = params ?? {};
    return this._client.delete(__scalarPath`/v1/apis/${namespace}/${slug}/version/${semver}`, options);
  }

  /**
   * Get metadata (uid, content shas, version sha, tags) for a specific API document version.
   *
   * @param {string} semver
   * @param {RegistryListAPIDocumentVersionMetadataParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ManagedDocVersion>} Default Response
   *
   * @example
   * ```ts
   * const managedDocVersion = await client.registry.listAPIDocumentVersionMetadata("semver", {
   *   namespace: "namespace",
   *   slug: "slug",
   * });
   * ```
   */
  listAPIDocumentVersionMetadata(semver: string, params: RegistryListAPIDocumentVersionMetadataParams, options?: RequestOptions): APIPromise<ManagedDocVersion> {
    const { namespace, slug } = params ?? {};
    return this._client.get(__scalarPath`/v1/apis/${namespace}/${slug}/version/${semver}/metadata`, options);
  }

  /**
   * Create a new API document version.
   *
   * @param {string} slug
   * @param {RegistryCreateAPIDocumentVersionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ManagedDocVersion>} Default Response
   *
   * @example
   * ```ts
   * const managedDocVersion = await client.registry.createAPIDocumentVersion("slug", {
   *   namespace: "namespace",
   *   version: "",
   *   document: "",
   * });
   * ```
   */
  createAPIDocumentVersion(slug: string, params: RegistryCreateAPIDocumentVersionParams, options?: RequestOptions): APIPromise<ManagedDocVersion> {
    const { namespace, ...body } = params ?? {};
    return this._client.post(__scalarPath`/v1/apis/${namespace}/${slug}/version`, { body: body, ...options });
  }

  /**
   * Add an access group to an API document.
   *
   * @param {string} slug
   * @param {RegistryCreateAPIDocumentAccessGroupParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<null>} Default Response
   *
   * @example
   * ```ts
   * await client.registry.createAPIDocumentAccessGroup("slug", {
   *   namespace: "namespace",
   *   accessGroupSlug: "",
   * });
   * ```
   */
  createAPIDocumentAccessGroup(slug: string, params: RegistryCreateAPIDocumentAccessGroupParams, options?: RequestOptions): APIPromise<null> {
    const { namespace, ...body } = params ?? {};
    return this._client.post(__scalarPath`/v1/apis/${namespace}/${slug}/access-group`, { body: body, ...options });
  }

  /**
   * Remove an access group from an API document.
   *
   * @param {string} slug
   * @param {RegistryDeleteAPIDocumentAccessGroupParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<null>} Default Response
   *
   * @example
   * ```ts
   * await client.registry.deleteAPIDocumentAccessGroup("slug", {
   *   namespace: "namespace",
   *   accessGroupSlug: "",
   * });
   * ```
   */
  deleteAPIDocumentAccessGroup(slug: string, params: RegistryDeleteAPIDocumentAccessGroupParams, options?: RequestOptions): APIPromise<null> {
    const { namespace, ...body } = params ?? {};
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
  namespace: string;
  title?: string;
  description?: string;
  isPrivate?: boolean;
  ruleset?: string;
}

export interface RegistryDeleteAPIDocumentParams {
  namespace: string;
}

export interface RegistryRetrieveAPIDocumentVersionParams {
  namespace: string;
  slug: string;
}

export interface RegistryUpdateAPIDocumentVersionParams {
  namespace: string;
  slug: string;
  document: string;
  lastKnownVersionSha?: string;
}

export type RegistryUpdateAPIDocumentVersionResponse = { jsonSha: string; yamlSha: string; versionSha: string };

export interface RegistryDeleteAPIDocumentVersionParams {
  namespace: string;
  slug: string;
}

export interface RegistryListAPIDocumentVersionMetadataParams {
  namespace: string;
  slug: string;
}

export interface RegistryCreateAPIDocumentVersionParams {
  namespace: string;
  version: Version;
  document: string;
  force?: boolean;
  lastKnownVersionSha?: string;
}

export interface RegistryCreateAPIDocumentAccessGroupParams {
  namespace: string;
  accessGroupSlug: Slug;
}

export interface RegistryDeleteAPIDocumentAccessGroupParams {
  namespace: string;
  accessGroupSlug: Slug;
}
export declare namespace Registry {
  export {
    type Version as Version,
    type AccessGroup as AccessGroup,
    type RegistryListAllAPIDocumentsResponse as RegistryListAllAPIDocumentsResponse,
    type RegistryListAPIDocumentsResponse as RegistryListAPIDocumentsResponse,
    type RegistryCreateAPIDocumentResponse as RegistryCreateAPIDocumentResponse,
    type RegistryUpdateAPIDocumentVersionResponse as RegistryUpdateAPIDocumentVersionResponse,
    type ManagedDocVersion as ManagedDocVersion,
    type RegistryCreateAPIDocumentParams as RegistryCreateAPIDocumentParams,
    type RegistryUpdateAPIDocumentParams as RegistryUpdateAPIDocumentParams,
    type RegistryDeleteAPIDocumentParams as RegistryDeleteAPIDocumentParams,
    type RegistryRetrieveAPIDocumentVersionParams as RegistryRetrieveAPIDocumentVersionParams,
    type RegistryUpdateAPIDocumentVersionParams as RegistryUpdateAPIDocumentVersionParams,
    type RegistryDeleteAPIDocumentVersionParams as RegistryDeleteAPIDocumentVersionParams,
    type RegistryListAPIDocumentVersionMetadataParams as RegistryListAPIDocumentVersionMetadataParams,
    type RegistryCreateAPIDocumentVersionParams as RegistryCreateAPIDocumentVersionParams,
    type RegistryCreateAPIDocumentAccessGroupParams as RegistryCreateAPIDocumentAccessGroupParams,
    type RegistryDeleteAPIDocumentAccessGroupParams as RegistryDeleteAPIDocumentAccessGroupParams,
  };
}
export { Registry as RegistryResource };
