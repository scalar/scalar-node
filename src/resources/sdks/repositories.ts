// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';

export class Repositories extends APIResource {
  /**
   * Link one language target to a GitHub repository, so builds sync there.
   *
   * @param {Shared.Nanoid} uid
   * @param {RepositoryLinkParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RepositoryLinkResponse>} Default Response
   *
   * @example
   * ```ts
   * const repository = await client.sdks.repositories.link('uidxx', {
   *   language: 'typescript',
   *   repositoryId: 0,
   *   baseBranch: '',
   * });
   * ```
   */
  link(
    uid: Shared.Nanoid,
    body: RepositoryLinkParams,
    options?: RequestOptions,
  ): APIPromise<RepositoryLinkResponse> {
    return this._client.post(__scalarPath`/v1/sdks/${uid}/repositories`, { body, ...options });
  }

  /**
   * Unlink one language target from its repository.
   *
   * @param {"typescript" | "python" | "cli" | "csharp" | "java" | "ruby" | "php" | "go" | "rust" | "kotlin" | "swift" | "cpp" | "dart"} language
   * @param {RepositoryUnlinkParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RepositoryUnlinkResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.sdks.repositories.unlink('typescript', {
   *   uid: 'uidxx',
   * });
   * ```
   */
  unlink(
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
      | 'dart',
    params: RepositoryUnlinkParams,
    options?: RequestOptions,
  ): APIPromise<RepositoryUnlinkResponse> {
    const { uid } = params;
    return this._client.delete(__scalarPath`/v1/sdks/${uid}/repositories/${language}`, options);
  }

  /**
   * Toggle publish-on-merge and the release settings for a linked target.
   *
   * @param {"typescript" | "python" | "cli" | "csharp" | "java" | "ruby" | "php" | "go" | "rust" | "kotlin" | "swift" | "cpp" | "dart"} language
   * @param {RepositoryUpdatePublishingParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RepositoryUpdatePublishingResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.sdks.repositories.updatePublishing('typescript', {
   *   uid: 'uidxx',
   *   publishOnMerge: false,
   * });
   * ```
   */
  updatePublishing(
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
      | 'dart',
    params: RepositoryUpdatePublishingParams,
    options?: RequestOptions,
  ): APIPromise<RepositoryUpdatePublishingResponse> {
    const { uid, ...body } = params;
    return this._client.post(__scalarPath`/v1/sdks/${uid}/repositories/${language}/publishing`, {
      body,
      ...options,
    });
  }
}

export interface RepositoryLinkParams {
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
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  repositoryId: number;
  baseBranch: string;
  prereleaseType?: string;
}

export interface RepositoryLinkResponse {
  repo: string;
  branch: string;
}

export interface RepositoryUnlinkParams {
  /**
   * @minLength 5
   */
  uid: Shared.Nanoid;
}

export type RepositoryUnlinkResponse = null;

export interface RepositoryUpdatePublishingParams {
  /**
   * Path param
   * @minLength 5
   */
  uid: Shared.Nanoid;
  /**
   * Body param
   */
  publishOnMerge: boolean;
  /**
   * Body param
   */
  authMethod?: 'oidc' | 'access-token';
  /**
   * Body param
   */
  access?: 'public' | 'restricted';
  /**
   * Body param
   */
  tag?: string;
}

export type RepositoryUpdatePublishingResponse = null;
export declare namespace Repositories {
  export {
    type RepositoryLinkResponse as RepositoryLinkResponse,
    type RepositoryUnlinkResponse as RepositoryUnlinkResponse,
    type RepositoryUpdatePublishingResponse as RepositoryUpdatePublishingResponse,
    type RepositoryLinkParams as RepositoryLinkParams,
    type RepositoryUnlinkParams as RepositoryUnlinkParams,
    type RepositoryUpdatePublishingParams as RepositoryUpdatePublishingParams,
  };
}
