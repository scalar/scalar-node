// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';
import type * as Shared from './shared';

export class ScalarDocs extends APIResource {
  /**
   * List all guide projects.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScalarDocListGuidesResponse>} Default Response
   *
   * @example
   * ```ts
   * const scalarDoc = await client.scalarDocs.listGuides();
   * ```
   */
  listGuides(options?: RequestOptions): APIPromise<ScalarDocListGuidesResponse> {
    return this._client.get('/v1/guides', options);
  }

  /**
   * Create a guide project.
   *
   * @param {ScalarDocCreateGuideParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScalarDocCreateGuideResponse>} Default Response
   *
   * @example
   * ```ts
   * const scalarDoc = await client.scalarDocs.createGuide({
   *   name: '',
   *   isPrivate: false,
   *   allowedUsers: [],
   *   allowedDomains: [],
   * });
   * ```
   */
  createGuide(
    body: ScalarDocCreateGuideParams,
    options?: RequestOptions,
  ): APIPromise<ScalarDocCreateGuideResponse> {
    return this._client.post('/v1/guides', { body, ...options });
  }

  /**
   * Start a new publish process.
   *
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScalarDocPublishGuideResponse>} Default Response
   *
   * @example
   * ```ts
   * const scalarDoc = await client.scalarDocs.publishGuide('slug');
   * ```
   */
  publishGuide(slug: string, options?: RequestOptions): APIPromise<ScalarDocPublishGuideResponse> {
    return this._client.post(__scalarPath`/v1/guides/${slug}/publish`, options);
  }
}

export type Slug = string;

export type ScalarDocListGuidesResponse = Array<ScalarDocListGuidesResponse.ScalarDocListGuidesResponseItem>;

export namespace ScalarDocListGuidesResponse {
  export interface ScalarDocListGuidesResponseItem {
    /**
     * @minLength 5
     */
    uid: Shared.Nanoid;
    /**
     * @minimum 0
     * @maximum 9007199254740991
     */
    createdAt: Shared.Timestamp;
    /**
     * @minimum 0
     * @maximum 9007199254740991
     */
    updatedAt: Shared.Timestamp;
    name: string;
    activeDeployment: ScalarDocListGuidesResponseItem.ActiveDeployment | null;
    /**
     * @minimum 0
     * @maximum 9007199254740991
     */
    lastPublished: Shared.Timestamp | null;
    lastPublishedUid: string | null;
    loginPortalUid: string;
    activeThemeId: string;
    isPrivate: boolean;
    agentEnabled: boolean;
    accessGroups: unknown;
    /**
     * @minLength 3
     * @maxLength 60
     * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
     */
    slug: Slug;
    publishStatus: string;
    publishMessage: string;
    typesenseId?: number;
    repository?: ScalarDocListGuidesResponseItem.Repository | null;
  }

  export namespace ScalarDocListGuidesResponseItem {
    export interface ActiveDeployment {
      uid: string;
      domain: string;
      /**
       * @minimum 0
       * @maximum 9007199254740991
       */
      publishedAt: Shared.Timestamp;
    }

    export interface Repository {
      linkedBy: string;
      id: number;
      /**
       * @minLength 2
       */
      name: string;
      configPath: string;
      branch: string;
      publishOnMerge: boolean;
      publishPreviews: boolean;
      prComments: boolean;
      expired: boolean;
    }
  }
}

export interface ScalarDocCreateGuideParams {
  name: string;
  isPrivate: boolean;
  allowedUsers: Array<string>;
  allowedDomains: Array<string>;
  /**
   * @minLength 3
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug?: Slug;
}

export interface ScalarDocCreateGuideResponse {
  uid: string;
  slug: string;
}

export interface ScalarDocPublishGuideResponse {
  publishUid: string;
}
export declare namespace ScalarDocs {
  export {
    type Slug as Slug,
    type ScalarDocListGuidesResponse as ScalarDocListGuidesResponse,
    type ScalarDocCreateGuideResponse as ScalarDocCreateGuideResponse,
    type ScalarDocPublishGuideResponse as ScalarDocPublishGuideResponse,
    type ScalarDocCreateGuideParams as ScalarDocCreateGuideParams,
  };
}
