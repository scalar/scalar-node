// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { buildHeaders } from "../internal/headers";
import { path as __scalarPath } from "../internal/utils/path";
import type * as ScalarDocsAPI from "./scalar-docs";

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
   * @param {string} namespace_
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryListAPIDocumentsResponse>} Default Response
   *
   * @example
   * ```ts
   * const listAPIDocuments = await client.registry.listAPIDocuments("namespace");
   * ```
   */
  listAPIDocuments(namespace_: string, options?: RequestOptions): APIPromise<RegistryListAPIDocumentsResponse> {
    return this._client.get(__scalarPath`/v1/apis/${namespace_}`, options);
  }

  /**
   * Create an API document.
   *
   * @param {string} namespace_
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
  createAPIDocument(namespace_: string, body: RegistryCreateAPIDocumentParams, options?: RequestOptions): APIPromise<RegistryCreateAPIDocumentResponse> {
    return this._client.post(__scalarPath`/v1/apis/${namespace_}`, { body: body, ...options });
  }

  /**
   * Update metadata for an API document.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {RegistryUpdateAPIDocumentParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryUpdateAPIDocumentResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.registry.updateAPIDocument("namespace", "slug", {});
   * ```
   */
  updateAPIDocument(namespace_: string, slug: string, body: RegistryUpdateAPIDocumentParams, options?: RequestOptions): APIPromise<RegistryUpdateAPIDocumentResponse> {
    return this._client.patch(__scalarPath`/v1/apis/${namespace_}/${slug}`, { body: body, ...options });
  }

  /**
   * Delete an API document and all versions.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryDeleteAPIDocumentResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.registry.deleteAPIDocument("namespace", "slug");
   * ```
   */
  deleteAPIDocument(namespace_: string, slug: string, options?: RequestOptions): APIPromise<RegistryDeleteAPIDocumentResponse> {
    return this._client.delete(__scalarPath`/v1/apis/${namespace_}/${slug}`, options);
  }

  /**
   * Get a specific API document version.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {string} semver
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryRetrieveAPIDocumentVersionResponse>} Default Response
   *
   * @example
   * ```ts
   * const string_ = await client.registry.retrieveAPIDocumentVersion("namespace", "slug", "semver");
   * ```
   */
  retrieveAPIDocumentVersion(namespace_: string, slug: string, semver: string, options?: RequestOptions): APIPromise<RegistryRetrieveAPIDocumentVersionResponse> {
    return this._client.get(__scalarPath`/v1/apis/${namespace_}/${slug}/version/${semver}`, { ...options, headers: buildHeaders([{ Accept: "text/plain" }, options?.headers]) });
  }

  /**
   * Update the registry file content for an API document version.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {string} semver
   * @param {RegistryUpdateAPIDocumentVersionParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryUpdateAPIDocumentVersionResponse>} Default Response
   *
   * @example
   * ```ts
   * const updateAPIDocumentVersion = await client.registry.updateAPIDocumentVersion("namespace", "slug", "semver", {
   *   document: "",
   * });
   * ```
   */
  updateAPIDocumentVersion(namespace_: string, slug: string, semver: string, body: RegistryUpdateAPIDocumentVersionParams, options?: RequestOptions): APIPromise<RegistryUpdateAPIDocumentVersionResponse> {
    return this._client.patch(__scalarPath`/v1/apis/${namespace_}/${slug}/version/${semver}`, { body: body, ...options });
  }

  /**
   * Delete a specific API document version.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {string} semver
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryDeleteAPIDocumentVersionResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.registry.deleteAPIDocumentVersion("namespace", "slug", "semver");
   * ```
   */
  deleteAPIDocumentVersion(namespace_: string, slug: string, semver: string, options?: RequestOptions): APIPromise<RegistryDeleteAPIDocumentVersionResponse> {
    return this._client.delete(__scalarPath`/v1/apis/${namespace_}/${slug}/version/${semver}`, options);
  }

  /**
   * Get metadata (uid, content shas, version sha, tags) for a specific API document version.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {string} semver
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryListAPIDocumentVersionMetadataResponse>} Default Response
   *
   * @example
   * ```ts
   * const listAPIDocumentVersionMetadata = await client.registry.listAPIDocumentVersionMetadata("namespace", "slug", "semver");
   * ```
   */
  listAPIDocumentVersionMetadata(namespace_: string, slug: string, semver: string, options?: RequestOptions): APIPromise<RegistryListAPIDocumentVersionMetadataResponse> {
    return this._client.get(__scalarPath`/v1/apis/${namespace_}/${slug}/version/${semver}/metadata`, options);
  }

  /**
   * Create a new API document version.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {RegistryCreateAPIDocumentVersionParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryCreateAPIDocumentVersionResponse>} Default Response
   *
   * @example
   * ```ts
   * const createAPIDocumentVersion = await client.registry.createAPIDocumentVersion("namespace", "slug", {
   *   version: "",
   *   document: "",
   * });
   * ```
   */
  createAPIDocumentVersion(namespace_: string, slug: string, body: RegistryCreateAPIDocumentVersionParams, options?: RequestOptions): APIPromise<RegistryCreateAPIDocumentVersionResponse> {
    return this._client.post(__scalarPath`/v1/apis/${namespace_}/${slug}/version`, { body: body, ...options });
  }

  /**
   * Add an access group to an API document.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {RegistryCreateAPIDocumentAccessGroupParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryCreateAPIDocumentAccessGroupResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.registry.createAPIDocumentAccessGroup("namespace", "slug", {
   *   accessGroupSlug: "",
   * });
   * ```
   */
  createAPIDocumentAccessGroup(namespace_: string, slug: string, body: RegistryCreateAPIDocumentAccessGroupParams, options?: RequestOptions): APIPromise<RegistryCreateAPIDocumentAccessGroupResponse> {
    return this._client.post(__scalarPath`/v1/apis/${namespace_}/${slug}/access-group`, { body: body, ...options });
  }

  /**
   * Remove an access group from an API document.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {RegistryDeleteAPIDocumentAccessGroupParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryDeleteAPIDocumentAccessGroupResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.registry.deleteAPIDocumentAccessGroup("namespace", "slug", {
   *   accessGroupSlug: "",
   * });
   * ```
   */
  deleteAPIDocumentAccessGroup(namespace_: string, slug: string, body: RegistryDeleteAPIDocumentAccessGroupParams, options?: RequestOptions): APIPromise<RegistryDeleteAPIDocumentAccessGroupResponse> {
    return this._client.delete(__scalarPath`/v1/apis/${namespace_}/${slug}/access-group`, { body: body, ...options });
  }
}

export type Version = string;

export interface AccessGroup {
  /**
   * @minLength 3
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  accessGroupSlug: ScalarDocsAPI.Slug;
}

export type RegistryListAllAPIDocumentsResponse = Array<RegistryListAllAPIDocumentsResponse.RegistryListAllAPIDocumentsResponseItem>;

export namespace RegistryListAllAPIDocumentsResponse {
  export interface RegistryListAllAPIDocumentsResponseItem {
    /**
     * @default nanoid()
     * @minLength 5
     */
    uid: string;
    /**
     * @minLength 1
     */
    version: Version;
    /**
     * @default ""
     * @maxLength 100
     */
    title: string;
    /**
     * @default randomManagedDocSlug()
     * @minLength 3
     * @maxLength 60
     * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
     */
    slug: ScalarDocsAPI.Slug;
    /**
     * @default ""
     */
    description: string;
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
    /**
     * @default []
     */
    tags: unknown;
    versions: Array<RegistryListAllAPIDocumentsResponseItem.Version>;
  }

  export namespace RegistryListAllAPIDocumentsResponseItem {
    export interface Version {
      /**
       * @minLength 5
       */
      uid: string;
      createdAt: number;
      /**
       * @minLength 1
       */
      version: Version;
      /**
       * @default false
       */
      upgraded: boolean;
      /**
       * @default null
       */
      embedStatus: "complete" | "failed" | null;
      /**
       * @default []
       */
      tags: Array<string>;
      tools?: Array<Version.Tool>;
      yamlSha?: string;
      jsonSha?: string;
      versionSha?: string;
    }

    export namespace Version {
      export interface Tool {
        path: string;
        method: "delete" | "get" | "head" | "options" | "patch" | "post" | "put" | "trace";
        enabledTools: Array<"execute-request" | "get-mini-openapi-spec">;
      }
    }
  }
}

export type RegistryListAPIDocumentsResponse = Array<RegistryListAPIDocumentsResponse.RegistryListAPIDocumentsResponseItem>;

export namespace RegistryListAPIDocumentsResponse {
  export interface RegistryListAPIDocumentsResponseItem {
    /**
     * @default nanoid()
     * @minLength 5
     */
    uid: string;
    /**
     * @minLength 1
     */
    version: Version;
    /**
     * @default ""
     * @maxLength 100
     */
    title: string;
    /**
     * @default randomManagedDocSlug()
     * @minLength 3
     * @maxLength 60
     * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
     */
    slug: ScalarDocsAPI.Slug;
    /**
     * @default ""
     */
    description: string;
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
    /**
     * @default []
     */
    tags: unknown;
    versions: Array<RegistryListAPIDocumentsResponseItem.Version>;
  }

  export namespace RegistryListAPIDocumentsResponseItem {
    export interface Version {
      /**
       * @minLength 5
       */
      uid: string;
      createdAt: number;
      /**
       * @minLength 1
       */
      version: Version;
      /**
       * @default false
       */
      upgraded: boolean;
      /**
       * @default null
       */
      embedStatus: "complete" | "failed" | null;
      /**
       * @default []
       */
      tags: Array<string>;
      tools?: Array<Version.Tool>;
      yamlSha?: string;
      jsonSha?: string;
      versionSha?: string;
    }

    export namespace Version {
      export interface Tool {
        path: string;
        method: "delete" | "get" | "head" | "options" | "patch" | "post" | "put" | "trace";
        enabledTools: Array<"execute-request" | "get-mini-openapi-spec">;
      }
    }
  }
}

export interface RegistryCreateAPIDocumentParams {
  title: string;
  /**
   * @minLength 1
   */
  version: Version;
  slug: string;
  document: string;
  description?: string;
  ruleset?: string;
  isPrivate?: boolean;
}

export interface RegistryCreateAPIDocumentResponse {
  uid: string;
  versionUid: string;
  title: string;
  jsonSha: string;
  yamlSha: string;
  versionSha: string;
}

export interface RegistryUpdateAPIDocumentParams {
  title?: string;
  description?: string;
  isPrivate?: boolean;
  ruleset?: string;
}

export type RegistryUpdateAPIDocumentResponse = null;

export type RegistryDeleteAPIDocumentResponse = null;

export type RegistryRetrieveAPIDocumentVersionResponse = string;

export interface RegistryUpdateAPIDocumentVersionParams {
  document: string;
  lastKnownVersionSha?: string;
}

export interface RegistryUpdateAPIDocumentVersionResponse {
  jsonSha: string;
  yamlSha: string;
  versionSha: string;
}

export type RegistryDeleteAPIDocumentVersionResponse = null;

export interface RegistryListAPIDocumentVersionMetadataResponse {
  /**
   * @minLength 5
   */
  uid: string;
  createdAt: number;
  /**
   * @minLength 1
   */
  version: Version;
  /**
   * @default false
   */
  upgraded: boolean;
  /**
   * @default null
   */
  embedStatus: "complete" | "failed" | null;
  /**
   * @default []
   */
  tags: Array<string>;
  tools?: Array<RegistryListAPIDocumentVersionMetadataResponse.Tool>;
  yamlSha?: string;
  jsonSha?: string;
  versionSha?: string;
}

export namespace RegistryListAPIDocumentVersionMetadataResponse {
  export interface Tool {
    path: string;
    method: "delete" | "get" | "head" | "options" | "patch" | "post" | "put" | "trace";
    enabledTools: Array<"execute-request" | "get-mini-openapi-spec">;
  }
}

export interface RegistryCreateAPIDocumentVersionParams {
  /**
   * @minLength 1
   */
  version: Version;
  document: string;
  force?: boolean;
  lastKnownVersionSha?: string;
}

export interface RegistryCreateAPIDocumentVersionResponse {
  /**
   * @minLength 5
   */
  uid: string;
  createdAt: number;
  /**
   * @minLength 1
   */
  version: Version;
  /**
   * @default false
   */
  upgraded: boolean;
  /**
   * @default null
   */
  embedStatus: "complete" | "failed" | null;
  /**
   * @default []
   */
  tags: Array<string>;
  tools?: Array<RegistryCreateAPIDocumentVersionResponse.Tool>;
  yamlSha?: string;
  jsonSha?: string;
  versionSha?: string;
}

export namespace RegistryCreateAPIDocumentVersionResponse {
  export interface Tool {
    path: string;
    method: "delete" | "get" | "head" | "options" | "patch" | "post" | "put" | "trace";
    enabledTools: Array<"execute-request" | "get-mini-openapi-spec">;
  }
}

export interface RegistryCreateAPIDocumentAccessGroupParams {
  /**
   * @minLength 3
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  accessGroupSlug: ScalarDocsAPI.Slug;
}

export type RegistryCreateAPIDocumentAccessGroupResponse = null;

export interface RegistryDeleteAPIDocumentAccessGroupParams {
  /**
   * @minLength 3
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  accessGroupSlug: ScalarDocsAPI.Slug;
}

export type RegistryDeleteAPIDocumentAccessGroupResponse = null;
export declare namespace Registry {
  export {
    type Version as Version,
    type AccessGroup as AccessGroup,
    type RegistryListAllAPIDocumentsResponse as RegistryListAllAPIDocumentsResponse,
    type RegistryListAPIDocumentsResponse as RegistryListAPIDocumentsResponse,
    type RegistryCreateAPIDocumentResponse as RegistryCreateAPIDocumentResponse,
    type RegistryUpdateAPIDocumentResponse as RegistryUpdateAPIDocumentResponse,
    type RegistryDeleteAPIDocumentResponse as RegistryDeleteAPIDocumentResponse,
    type RegistryRetrieveAPIDocumentVersionResponse as RegistryRetrieveAPIDocumentVersionResponse,
    type RegistryUpdateAPIDocumentVersionResponse as RegistryUpdateAPIDocumentVersionResponse,
    type RegistryDeleteAPIDocumentVersionResponse as RegistryDeleteAPIDocumentVersionResponse,
    type RegistryListAPIDocumentVersionMetadataResponse as RegistryListAPIDocumentVersionMetadataResponse,
    type RegistryCreateAPIDocumentVersionResponse as RegistryCreateAPIDocumentVersionResponse,
    type RegistryCreateAPIDocumentAccessGroupResponse as RegistryCreateAPIDocumentAccessGroupResponse,
    type RegistryDeleteAPIDocumentAccessGroupResponse as RegistryDeleteAPIDocumentAccessGroupResponse,
    type RegistryCreateAPIDocumentParams as RegistryCreateAPIDocumentParams,
    type RegistryUpdateAPIDocumentParams as RegistryUpdateAPIDocumentParams,
    type RegistryUpdateAPIDocumentVersionParams as RegistryUpdateAPIDocumentVersionParams,
    type RegistryCreateAPIDocumentVersionParams as RegistryCreateAPIDocumentVersionParams,
    type RegistryCreateAPIDocumentAccessGroupParams as RegistryCreateAPIDocumentAccessGroupParams,
    type RegistryDeleteAPIDocumentAccessGroupParams as RegistryDeleteAPIDocumentAccessGroupParams,
  };
}
