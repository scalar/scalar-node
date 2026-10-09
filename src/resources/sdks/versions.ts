// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';

export class Versions extends APIResource {
  /**
   * Create a new SDK version against a specific API version.
   *
   * @param {Shared.Nanoid} uid
   * @param {VersionCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VersionCreateResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.sdks.versions.create('UakgbKJ5m9gl0JDMbcJqL', {
   *   version: '1.2.0',
   *   apiVersion: '1.2.0',
   * });
   * ```
   */
  create(
    uid: Shared.Nanoid,
    body: VersionCreateParams,
    options?: RequestOptions,
  ): APIPromise<VersionCreateResponse> {
    return this._client.post(__scalarPath`/v1/sdks/${uid}/versions`, { body, ...options });
  }

  /**
   * Permanently delete one version of an SDK.
   *
   * @param {string} version
   * @param {VersionDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VersionDeleteResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.sdks.versions.delete('1.2.0', {
   *   uid: 'UakgbKJ5m9gl0JDMbcJqL',
   * });
   * ```
   */
  delete(
    version: string,
    params: VersionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<VersionDeleteResponse> {
    const { uid } = params;
    return this._client.delete(__scalarPath`/v1/sdks/${uid}/versions/${version}`, options);
  }
}

export interface VersionCreateParams {
  version: string;
  apiVersion: string;
}

export type VersionCreateResponse = null;

export interface VersionDeleteParams {
  /**
   * @minLength 5
   */
  uid: Shared.Nanoid;
}

export type VersionDeleteResponse = null;
export declare namespace Versions {
  export {
    type VersionCreateResponse as VersionCreateResponse,
    type VersionDeleteResponse as VersionDeleteResponse,
    type VersionCreateParams as VersionCreateParams,
    type VersionDeleteParams as VersionDeleteParams,
  };
}
