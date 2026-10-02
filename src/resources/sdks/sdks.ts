// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';
import type * as ScalarDocsAPI from '../scalar-docs';
import type * as RegistryAPI from '../registry';
import * as VersionsAPI from './versions';
import {
  Versions,
  type VersionCreateResponse,
  type VersionDeleteResponse,
  type VersionCreateParams,
  type VersionDeleteParams,
} from './versions';
import * as RepositoriesAPI from './repositories';
import {
  Repositories,
  type RepositoryLinkResponse,
  type RepositoryUnlinkResponse,
  type RepositoryUpdatePublishingResponse,
  type RepositoryLinkParams,
  type RepositoryUnlinkParams,
  type RepositoryUpdatePublishingParams,
} from './repositories';

export class Sdks extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
  repositories: RepositoriesAPI.Repositories = new RepositoriesAPI.Repositories(this._client);

  /**
   * List every SDK on the team.
   *
   * @param {SdkListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SdkListResponse>} Default Response
   *
   * @example
   * ```ts
   * const sdk = await client.sdks.list();
   * ```
   */
  list(query: SdkListParams | null | undefined = {}, options?: RequestOptions): APIPromise<SdkListResponse> {
    return this._client.get('/v1/sdks', { query, ...options });
  }

  /**
   * Create an SDK from an API document, targeting one or more languages.
   *
   * @param {SdkCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.UID>} Default Response
   *
   * @example
   * ```ts
   * const uid = await client.sdks.create({
   *   apiUid: 'UakgbKJ5m9gl0JDMbcJqL',
   *   languages: ['typescript'],
   * });
   * ```
   */
  create(body: SdkCreateParams, options?: RequestOptions): APIPromise<Shared.UID> {
    return this._client.post('/v1/sdks', { body, ...options });
  }

  /**
   * Get a single SDK by its uid.
   *
   * @param {Shared.Nanoid} uid
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Sdk>} Default Response
   *
   * @example
   * ```ts
   * const sdk = await client.sdks.retrieve('UakgbKJ5m9gl0JDMbcJqL');
   * ```
   */
  retrieve(uid: Shared.Nanoid, options?: RequestOptions): APIPromise<Sdk> {
    return this._client.get(__scalarPath`/v1/sdks/${uid}`, options);
  }

  /**
   * Update SDK metadata, its linked API, or its config.
   *
   * @param {Shared.Nanoid} uid
   * @param {SdkUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SdkUpdateResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.sdks.update('UakgbKJ5m9gl0JDMbcJqL', {});
   * ```
   */
  update(uid: Shared.Nanoid, body: SdkUpdateParams, options?: RequestOptions): APIPromise<SdkUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/sdks/${uid}`, { body, ...options });
  }

  /**
   * Delete an SDK and every version it holds.
   *
   * @param {Shared.Nanoid} uid
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SdkDeleteResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.sdks.delete('UakgbKJ5m9gl0JDMbcJqL');
   * ```
   */
  delete(uid: Shared.Nanoid, options?: RequestOptions): APIPromise<SdkDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/sdks/${uid}`, options);
  }

  /**
   * Start a build. Omit `version` to build the current work — the open draft, else the latest version — and the resolved version comes back in the response.
   *
   * @param {Shared.Nanoid} uid
   * @param {SdkBuildParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SdkBuildResponse>} Default Response
   *
   * @example
   * ```ts
   * const sdk = await client.sdks.build('UakgbKJ5m9gl0JDMbcJqL', {});
   * ```
   */
  build(uid: Shared.Nanoid, body: SdkBuildParams, options?: RequestOptions): APIPromise<SdkBuildResponse> {
    return this._client.post(__scalarPath`/v1/sdks/${uid}/build`, { body, ...options });
  }
}

export interface Sdk {
  /**
   * @minLength 5
   */
  uid: Shared.Nanoid;
  /**
   * @maxLength 100
   */
  title: string;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug: ScalarDocsAPI.Slug;
  /**
   * @minLength 2
   * @maxLength 50
   * @pattern ^[a-zA-Z0-9-_]+$
   */
  namespace: Shared.Namespace;
  description: string;
  isPrivate: boolean;
  /**
   * @minLength 5
   */
  apiUid: Shared.Nanoid | null;
  /**
   * @minLength 1
   */
  currentVersion: RegistryAPI.Version;
  targets: Array<SdkTargetSummary>;
  versions: Array<SdkVersion>;
  /**
   * @minLength 1
   */
  apiVersion?: RegistryAPI.Version | null;
}

export interface SdkTargetSummary {
  language:
    | 'typescript'
    | 'python'
    | 'cli'
    | 'csharp'
    | 'java'
    | 'ruby'
    | 'php'
    | 'go'
    | 'rust'
    | 'kotlin'
    | 'swift'
    | 'cpp'
    | 'dart';
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug: ScalarDocsAPI.Slug;
}

export interface SdkVersion {
  /**
   * @minLength 1
   */
  version: RegistryAPI.Version;
  /**
   * @minLength 1
   */
  apiVersion: RegistryAPI.Version;
  status: 'draft' | 'published';
  languages: Array<
    | 'typescript'
    | 'python'
    | 'cli'
    | 'csharp'
    | 'java'
    | 'ruby'
    | 'php'
    | 'go'
    | 'rust'
    | 'kotlin'
    | 'swift'
    | 'cpp'
    | 'dart'
  >;
  /**
   * @minimum 0
   * @maximum 9007199254740991
   */
  publishedAt?: Shared.Timestamp;
  /**
   * @minimum 0
   * @maximum 9007199254740991
   */
  createdAt?: Shared.Timestamp;
}

export interface SdkListParams {
  /**
   * @minimum 1
   * @maximum 200
   */
  limit?: number;
}

export interface SdkListResponse {
  data: Array<Sdk>;
  hasMore: boolean;
}

export interface SdkCreateParams {
  /**
   * @minLength 5
   */
  apiUid: Shared.Nanoid;
  /**
   * @minItems 1
   */
  languages: Array<
    | 'typescript'
    | 'python'
    | 'cli'
    | 'csharp'
    | 'java'
    | 'ruby'
    | 'php'
    | 'go'
    | 'rust'
    | 'kotlin'
    | 'swift'
    | 'cpp'
    | 'dart'
  >;
  title?: string;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug?: ScalarDocsAPI.Slug;
  className?: string;
  config?: string;
}

export interface SdkUpdateParams {
  title?: string;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug?: ScalarDocsAPI.Slug;
  isPrivate?: boolean;
  config?: string;
  /**
   * @minLength 5
   */
  apiUid?: Shared.Nanoid | null;
  apiVersion?: string | null;
}

export type SdkUpdateResponse = null;

export type SdkDeleteResponse = null;

export interface SdkBuildParams {
  version?: string;
  languages?: Array<
    | 'typescript'
    | 'python'
    | 'cli'
    | 'csharp'
    | 'java'
    | 'ruby'
    | 'php'
    | 'go'
    | 'rust'
    | 'kotlin'
    | 'swift'
    | 'cpp'
    | 'dart'
  >;
}

export interface SdkBuildResponse {
  version: string;
}
Sdks.Versions = Versions;
Sdks.Repositories = Repositories;

export declare namespace Sdks {
  export {
    type Sdk as Sdk,
    type SdkTargetSummary as SdkTargetSummary,
    type SdkVersion as SdkVersion,
    type SdkListResponse as SdkListResponse,
    type SdkUpdateResponse as SdkUpdateResponse,
    type SdkDeleteResponse as SdkDeleteResponse,
    type SdkBuildResponse as SdkBuildResponse,
    type SdkListParams as SdkListParams,
    type SdkCreateParams as SdkCreateParams,
    type SdkUpdateParams as SdkUpdateParams,
    type SdkBuildParams as SdkBuildParams,
  };

  export {
    Versions as Versions,
    type VersionCreateResponse as VersionCreateResponse,
    type VersionDeleteResponse as VersionDeleteResponse,
    type VersionCreateParams as VersionCreateParams,
    type VersionDeleteParams as VersionDeleteParams,
  };

  export {
    Repositories as Repositories,
    type RepositoryLinkResponse as RepositoryLinkResponse,
    type RepositoryUnlinkResponse as RepositoryUnlinkResponse,
    type RepositoryUpdatePublishingResponse as RepositoryUpdatePublishingResponse,
    type RepositoryLinkParams as RepositoryLinkParams,
    type RepositoryUnlinkParams as RepositoryUnlinkParams,
    type RepositoryUpdatePublishingParams as RepositoryUpdatePublishingParams,
  };
}
