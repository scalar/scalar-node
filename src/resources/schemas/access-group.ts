// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";
import type * as RegistryAPI from "../registry";
import type * as ScalarDocsAPI from "../scalar-docs";

export class AccessGroup extends APIResource {
  /**
   * Add an access group to a schema.
   *
   * @param {string} slug
   * @param {AccessGroupCreateSchemaParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccessGroupCreateSchemaResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.accessGroup.createSchema("slug", {
   *   namespace: "namespace",
   *   accessGroupSlug: "xxx",
   * });
   * ```
   */
  createSchema(slug: string, params: AccessGroupCreateSchemaParams, options?: RequestOptions): APIPromise<AccessGroupCreateSchemaResponse> {
    const { namespace, ...body } = params ?? {};
    return this._client.post(__scalarPath`/v1/schemas/${namespace}/${slug}/access-group`, { body: body, ...options });
  }

  /**
   * Remove an access group from a schema.
   *
   * @param {string} slug
   * @param {AccessGroupDeleteSchemaParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccessGroupDeleteSchemaResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.accessGroup.deleteSchema("slug", {
   *   namespace: "namespace",
   *   accessGroupSlug: "xxx",
   * });
   * ```
   */
  deleteSchema(slug: string, params: AccessGroupDeleteSchemaParams, options?: RequestOptions): APIPromise<AccessGroupDeleteSchemaResponse> {
    const { namespace, ...body } = params ?? {};
    return this._client.delete(__scalarPath`/v1/schemas/${namespace}/${slug}/access-group`, { body: body, ...options });
  }
}

export interface AccessGroupCreateSchemaParams {
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

export type AccessGroupCreateSchemaResponse = null;

export interface AccessGroupDeleteSchemaParams {
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

export type AccessGroupDeleteSchemaResponse = null;
export declare namespace AccessGroup {
  export {
    type AccessGroupCreateSchemaResponse as AccessGroupCreateSchemaResponse,
    type AccessGroupDeleteSchemaResponse as AccessGroupDeleteSchemaResponse,
    type AccessGroupCreateSchemaParams as AccessGroupCreateSchemaParams,
    type AccessGroupDeleteSchemaParams as AccessGroupDeleteSchemaParams,
  };
}
