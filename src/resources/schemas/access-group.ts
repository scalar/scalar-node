// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as RegistryAPI from '../registry';
import type * as ScalarDocsAPI from '../scalar-docs';

export class AccessGroup extends APIResource {
  /**
   * Add an access group to a schema.
   *
   * @param {string} slug
   * @param {AccessGroupCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccessGroupCreateResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.accessGroup.create('slug', {
   *   namespace: 'namespace',
   *   accessGroupSlug: 'xxx',
   * });
   * ```
   */
  create(
    slug: string,
    params: AccessGroupCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccessGroupCreateResponse> {
    const { namespace, ...body } = params;
    return this._client.post(__scalarPath`/v1/schemas/${namespace}/${slug}/access-group`, {
      body,
      ...options,
    });
  }

  /**
   * Remove an access group from a schema.
   *
   * @param {string} slug
   * @param {AccessGroupDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccessGroupDeleteResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.accessGroup.delete('slug', {
   *   namespace: 'namespace',
   *   accessGroupSlug: 'xxx',
   * });
   * ```
   */
  delete(
    slug: string,
    params: AccessGroupDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AccessGroupDeleteResponse> {
    const { namespace, ...body } = params;
    return this._client.delete(__scalarPath`/v1/schemas/${namespace}/${slug}/access-group`, {
      body,
      ...options,
    });
  }
}

export interface AccessGroupCreateParams {
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

export type AccessGroupCreateResponse = null;

export interface AccessGroupDeleteParams {
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

export type AccessGroupDeleteResponse = null;
export declare namespace AccessGroup {
  export {
    type AccessGroupCreateResponse as AccessGroupCreateResponse,
    type AccessGroupDeleteResponse as AccessGroupDeleteResponse,
    type AccessGroupCreateParams as AccessGroupCreateParams,
    type AccessGroupDeleteParams as AccessGroupDeleteParams,
  };
}
