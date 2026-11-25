// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';

export class Repositories extends APIResource {
  /**
   * Link an existing language target to a GitHub repository accessible through the Scalar GitHub App. Requires team edit permission and a paid SDK automation plan. Native delivery writes at the repository root; use a separate repository for each target. Directory fields are unsupported. Linking can immediately sync the current build under automatic promotion; pass promotion: manual to hold it back. If GitHub access is missing, connect GitHub and grant the App access in Scalar Dashboard before retrying.
   *
   * @param {Shared.Nanoid} uid
   * @param {RepositoryLinkParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RepositoryLinkResponse>} Default Response
   *
   * @example
   * ```ts
   * const repository = await client.sdks.repositories.link('UakgbKJ5m9gl0JDMbcJqL', {
   *   language: 'typescript',
   *   repositoryId: 123456789,
   *   baseBranch: 'main',
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
   *   uid: 'UakgbKJ5m9gl0JDMbcJqL',
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
   *   uid: 'UakgbKJ5m9gl0JDMbcJqL',
   *   publishOnMerge: true,
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
   * @maximum 9007199254740991
   * @exclusiveMinimum 0
   */
  repositoryId: number;
  /**
   * Release promote branch. Platform-managed branches such as scalar-next and scalar-generated are reserved.
   * @minLength 1
   */
  baseBranch: string;
  /**
   * Controls when a build becomes current and syncs to GitHub. Omit to preserve the saved policy.
   */
  promotion?: 'automatic' | 'manual';
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
   * @maxLength 120
   */
  tag?: string;
  /**
   * Body param
   * @maxLength 120
   */
  artifactId?: string;
  /**
   * Body param
   * @maxLength 120
   */
  tapRepo?: string;
  /**
   * Body param
   */
  cask?: boolean;
  /**
   * Body param
   */
  replaceFormula?: boolean;
  /**
   * Body param
   * @maxLength 60
   */
  registry?: string;
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
