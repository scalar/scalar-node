// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';
<<<<<<< HEAD
=======
import type * as Shared from './shared';
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85
import type * as ScalarDocsAPI from './scalar-docs';

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
    return this._client.get('/v1/apis', options);
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
   * const listAPIDocuments = await client.registry.listAPIDocuments('namespace');
   * ```
   */
  listAPIDocuments(
    namespace_: string,
    options?: RequestOptions,
  ): APIPromise<RegistryListAPIDocumentsResponse> {
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
   * const createAPIDocument = await client.registry.createAPIDocument('namespace', {
   *   title: '',
   *   version: 'x',
   *   slug: '',
   *   document: '',
   * });
   * ```
   */
  createAPIDocument(
    namespace_: string,
    body: RegistryCreateAPIDocumentParams,
    options?: RequestOptions,
  ): APIPromise<RegistryCreateAPIDocumentResponse> {
    return this._client.post(__scalarPath`/v1/apis/${namespace_}`, { body, ...options });
  }

  /**
   * Update metadata for an API document.
   *
   * @param {string} slug
   * @param {RegistryUpdateAPIDocumentParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryUpdateAPIDocumentResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.registry.updateAPIDocument('slug', {
   *   namespace: 'namespace',
   * });
   * ```
   */
  updateAPIDocument(
    slug: string,
    params: RegistryUpdateAPIDocumentParams,
    options?: RequestOptions,
  ): APIPromise<RegistryUpdateAPIDocumentResponse> {
    const { namespace, ...body } = params;
    return this._client.patch(__scalarPath`/v1/apis/${namespace}/${slug}`, { body, ...options });
  }

  /**
   * Delete an API document and all versions.
   *
   * @param {string} slug
   * @param {RegistryDeleteAPIDocumentParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryDeleteAPIDocumentResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.registry.deleteAPIDocument('slug', {
   *   namespace: 'namespace',
   * });
   * ```
   */
  deleteAPIDocument(
    slug: string,
    params: RegistryDeleteAPIDocumentParams,
    options?: RequestOptions,
  ): APIPromise<RegistryDeleteAPIDocumentResponse> {
    const { namespace } = params;
    return this._client.delete(__scalarPath`/v1/apis/${namespace}/${slug}`, options);
  }

  /**
   * Get a specific API document version.
   *
   * @param {string} semver
   * @param {RegistryRetrieveAPIDocumentVersionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryRetrieveAPIDocumentVersionResponse>} Default Response
   *
   * @example
   * ```ts
   * const string_ = await client.registry.retrieveAPIDocumentVersion('semver', {
   *   namespace: 'namespace',
   *   slug: 'slug',
   * });
   * ```
   */
  retrieveAPIDocumentVersion(
    semver: string,
    params: RegistryRetrieveAPIDocumentVersionParams,
    options?: RequestOptions,
  ): APIPromise<RegistryRetrieveAPIDocumentVersionResponse> {
    const { namespace, slug } = params;
    return this._client.get(__scalarPath`/v1/apis/${namespace}/${slug}/version/${semver}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
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
   * const updateAPIDocumentVersion = await client.registry.updateAPIDocumentVersion('semver', {
   *   namespace: 'namespace',
   *   slug: 'slug',
   *   document: '',
   * });
   * ```
   */
  updateAPIDocumentVersion(
    semver: string,
    params: RegistryUpdateAPIDocumentVersionParams,
    options?: RequestOptions,
  ): APIPromise<RegistryUpdateAPIDocumentVersionResponse> {
    const { namespace, slug, ...body } = params;
    return this._client.patch(__scalarPath`/v1/apis/${namespace}/${slug}/version/${semver}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a specific API document version.
   *
   * @param {string} semver
   * @param {RegistryDeleteAPIDocumentVersionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryDeleteAPIDocumentVersionResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.registry.deleteAPIDocumentVersion('semver', {
   *   namespace: 'namespace',
   *   slug: 'slug',
   * });
   * ```
   */
  deleteAPIDocumentVersion(
    semver: string,
    params: RegistryDeleteAPIDocumentVersionParams,
    options?: RequestOptions,
  ): APIPromise<RegistryDeleteAPIDocumentVersionResponse> {
    const { namespace, slug } = params;
    return this._client.delete(__scalarPath`/v1/apis/${namespace}/${slug}/version/${semver}`, options);
  }

  /**
   * Get metadata (uid, content shas, version sha, tags) for a specific API document version.
   *
   * @param {string} semver
   * @param {RegistryListAPIDocumentVersionMetadataParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.ManagedDocVersion>} Default Response
   *
   * @example
   * ```ts
<<<<<<< HEAD
   * const listAPIDocumentVersionMetadata = await client.registry.listAPIDocumentVersionMetadata('semver', {
=======
   * const managedDocVersion = await client.registry.listAPIDocumentVersionMetadata('semver', {
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85
   *   namespace: 'namespace',
   *   slug: 'slug',
   * });
   * ```
   */
  listAPIDocumentVersionMetadata(
    semver: string,
    params: RegistryListAPIDocumentVersionMetadataParams,
    options?: RequestOptions,
<<<<<<< HEAD
  ): APIPromise<RegistryListAPIDocumentVersionMetadataResponse> {
=======
  ): APIPromise<Shared.ManagedDocVersion> {
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85
    const { namespace, slug } = params;
    return this._client.get(__scalarPath`/v1/apis/${namespace}/${slug}/version/${semver}/metadata`, options);
  }

  /**
   * Create a new API document version.
   *
   * @param {string} slug
   * @param {RegistryCreateAPIDocumentVersionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.ManagedDocVersion>} Default Response
   *
   * @example
   * ```ts
<<<<<<< HEAD
   * const createAPIDocumentVersion = await client.registry.createAPIDocumentVersion('slug', {
=======
   * const managedDocVersion = await client.registry.createAPIDocumentVersion('slug', {
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85
   *   namespace: 'namespace',
   *   version: 'x',
   *   document: '',
   * });
   * ```
   */
  createAPIDocumentVersion(
    slug: string,
    params: RegistryCreateAPIDocumentVersionParams,
    options?: RequestOptions,
<<<<<<< HEAD
  ): APIPromise<RegistryCreateAPIDocumentVersionResponse> {
=======
  ): APIPromise<Shared.ManagedDocVersion> {
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85
    const { namespace, ...body } = params;
    return this._client.post(__scalarPath`/v1/apis/${namespace}/${slug}/version`, { body, ...options });
  }

  /**
   * Add an access group to an API document.
   *
   * @param {string} slug
   * @param {RegistryCreateAPIDocumentAccessGroupParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryCreateAPIDocumentAccessGroupResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.registry.createAPIDocumentAccessGroup('slug', {
   *   namespace: 'namespace',
   *   accessGroupSlug: 'xxx',
   * });
   * ```
   */
  createAPIDocumentAccessGroup(
    slug: string,
    params: RegistryCreateAPIDocumentAccessGroupParams,
    options?: RequestOptions,
  ): APIPromise<RegistryCreateAPIDocumentAccessGroupResponse> {
    const { namespace, ...body } = params;
    return this._client.post(__scalarPath`/v1/apis/${namespace}/${slug}/access-group`, { body, ...options });
  }

  /**
   * Remove an access group from an API document.
   *
   * @param {string} slug
   * @param {RegistryDeleteAPIDocumentAccessGroupParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RegistryDeleteAPIDocumentAccessGroupResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.registry.deleteAPIDocumentAccessGroup('slug', {
   *   namespace: 'namespace',
   *   accessGroupSlug: 'xxx',
   * });
   * ```
   */
  deleteAPIDocumentAccessGroup(
    slug: string,
    params: RegistryDeleteAPIDocumentAccessGroupParams,
    options?: RequestOptions,
  ): APIPromise<RegistryDeleteAPIDocumentAccessGroupResponse> {
    const { namespace, ...body } = params;
    return this._client.delete(__scalarPath`/v1/apis/${namespace}/${slug}/access-group`, {
      body,
      ...options,
    });
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

export type RegistryListAllAPIDocumentsResponse =
  Array<RegistryListAllAPIDocumentsResponse.RegistryListAllAPIDocumentsResponseItem>;

export namespace RegistryListAllAPIDocumentsResponse {
  export interface RegistryListAllAPIDocumentsResponseItem {
    /**
     * @minLength 5
     */
    uid: Shared.Nanoid;
    /**
     * @minLength 1
     */
    version: Version;
    /**
     * @maxLength 100
     */
    title: string;
    /**
     * @minLength 3
     * @maxLength 60
     * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
     */
    slug: ScalarDocsAPI.Slug;
    description: string;
    /**
     * @minLength 3
     * @maxLength 50
     * @pattern ^[a-zA-Z0-9-_]+$
     */
<<<<<<< HEAD
    namespace: string;
    isPrivate: boolean;
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
      upgraded: boolean;
      embedStatus: 'complete' | 'failed' | null;
      tags: Array<string>;
      tools?: Array<Version.Tool>;
      yamlSha?: string;
      jsonSha?: string;
      versionSha?: string;
    }

    export namespace Version {
      export interface Tool {
        path: string;
        method: 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put' | 'trace';
        enabledTools: Array<'execute-request' | 'get-mini-openapi-spec'>;
      }
    }
=======
    namespace: Shared.Namespace;
    isPrivate: boolean;
    tags: unknown;
    versions: Array<Shared.ManagedDocVersion>;
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85
  }
}

export type RegistryListAPIDocumentsResponse =
  Array<RegistryListAPIDocumentsResponse.RegistryListAPIDocumentsResponseItem>;

export namespace RegistryListAPIDocumentsResponse {
  export interface RegistryListAPIDocumentsResponseItem {
    /**
     * @minLength 5
     */
    uid: Shared.Nanoid;
    /**
     * @minLength 1
     */
    version: Version;
    /**
     * @maxLength 100
     */
    title: string;
    /**
     * @minLength 3
     * @maxLength 60
     * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
     */
    slug: ScalarDocsAPI.Slug;
    description: string;
    /**
     * @minLength 3
     * @maxLength 50
     * @pattern ^[a-zA-Z0-9-_]+$
     */
<<<<<<< HEAD
    namespace: string;
    isPrivate: boolean;
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
      upgraded: boolean;
      embedStatus: 'complete' | 'failed' | null;
      tags: Array<string>;
      tools?: Array<Version.Tool>;
      yamlSha?: string;
      jsonSha?: string;
      versionSha?: string;
    }

    export namespace Version {
      export interface Tool {
        path: string;
        method: 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put' | 'trace';
        enabledTools: Array<'execute-request' | 'get-mini-openapi-spec'>;
      }
    }
=======
    namespace: Shared.Namespace;
    isPrivate: boolean;
    tags: unknown;
    versions: Array<Shared.ManagedDocVersion>;
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85
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
  /**
   * Body param
   */
  ruleset?: string;
}

export type RegistryUpdateAPIDocumentResponse = null;

export interface RegistryDeleteAPIDocumentParams {
  namespace: string;
}

export type RegistryDeleteAPIDocumentResponse = null;

export interface RegistryRetrieveAPIDocumentVersionParams {
  namespace: string;
  slug: string;
}

export type RegistryRetrieveAPIDocumentVersionResponse = string;

export interface RegistryUpdateAPIDocumentVersionParams {
  /**
   * Path param
   */
  namespace: string;
  /**
   * Path param
   */
  slug: string;
  /**
   * Body param
   */
  document: string;
  /**
   * Body param
   */
  lastKnownVersionSha?: string;
}

export interface RegistryUpdateAPIDocumentVersionResponse {
  jsonSha: string;
  yamlSha: string;
  versionSha: string;
}

export interface RegistryDeleteAPIDocumentVersionParams {
  namespace: string;
  slug: string;
}

export type RegistryDeleteAPIDocumentVersionResponse = null;

export interface RegistryListAPIDocumentVersionMetadataParams {
  namespace: string;
  slug: string;
}

<<<<<<< HEAD
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
  upgraded: boolean;
  embedStatus: 'complete' | 'failed' | null;
  tags: Array<string>;
  tools?: Array<RegistryListAPIDocumentVersionMetadataResponse.Tool>;
  yamlSha?: string;
  jsonSha?: string;
  versionSha?: string;
}

export namespace RegistryListAPIDocumentVersionMetadataResponse {
  export interface Tool {
    path: string;
    method: 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put' | 'trace';
    enabledTools: Array<'execute-request' | 'get-mini-openapi-spec'>;
  }
}

=======
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85
export interface RegistryCreateAPIDocumentVersionParams {
  /**
   * Path param
   */
  namespace: string;
  /**
   * Body param
   * @minLength 1
   */
  version: Version;
  /**
   * Body param
   */
  document: string;
  /**
   * Body param
   */
  force?: boolean;
  /**
   * Body param
   */
  lastKnownVersionSha?: string;
}

<<<<<<< HEAD
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
  upgraded: boolean;
  embedStatus: 'complete' | 'failed' | null;
  tags: Array<string>;
  tools?: Array<RegistryCreateAPIDocumentVersionResponse.Tool>;
  yamlSha?: string;
  jsonSha?: string;
  versionSha?: string;
}

export namespace RegistryCreateAPIDocumentVersionResponse {
  export interface Tool {
    path: string;
    method: 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put' | 'trace';
    enabledTools: Array<'execute-request' | 'get-mini-openapi-spec'>;
  }
}

=======
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85
export interface RegistryCreateAPIDocumentAccessGroupParams {
  /**
   * Path param
   */
  namespace: string;
  /**
   * Body param
   * @minLength 3
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  accessGroupSlug: ScalarDocsAPI.Slug;
}

export type RegistryCreateAPIDocumentAccessGroupResponse = null;

export interface RegistryDeleteAPIDocumentAccessGroupParams {
  /**
   * Path param
   */
  namespace: string;
  /**
   * Body param
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
    type RegistryCreateAPIDocumentAccessGroupResponse as RegistryCreateAPIDocumentAccessGroupResponse,
    type RegistryDeleteAPIDocumentAccessGroupResponse as RegistryDeleteAPIDocumentAccessGroupResponse,
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
