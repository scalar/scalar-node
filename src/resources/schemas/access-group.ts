// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class AccessGroup extends APIResource {
  /**
   * Add an access group to a schema.
   *
   * @param {string} namespace
   * @param {string} slug
   * @param {AccessGroupCreateSchemaParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<null>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.accessGroup.createSchema("namespace", "slug", {
   *   accessGroupSlug: "",
   * });
   * ```
   */
  createSchema(namespace: string, slug: string, body: AccessGroupCreateSchemaParams, options?: RequestOptions): APIPromise<null> {
    return this._client.post(__scalarPath`/v1/schemas/${namespace}/${slug}/access-group`, { body: body, ...options });
  }

  /**
   * Remove an access group from a schema.
   *
   * @param {string} namespace
   * @param {string} slug
   * @param {AccessGroupDeleteSchemaParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<null>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.accessGroup.deleteSchema("namespace", "slug", {
   *   accessGroupSlug: "",
   * });
   * ```
   */
  deleteSchema(namespace: string, slug: string, body: AccessGroupDeleteSchemaParams, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/schemas/${namespace}/${slug}/access-group`, { body: body, ...options });
  }
}

export interface AccessGroup2 {
  accessGroupSlug: Slug;
}

export type Slug = string;

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

export interface AccessGroupCreateSchemaParams {
  accessGroupSlug: Slug;
}

export interface AccessGroupDeleteSchemaParams {
  accessGroupSlug: Slug;
}
export declare namespace AccessGroup {
  export {
    type AccessGroupCreateSchemaParams as AccessGroupCreateSchemaParams,
    type AccessGroupDeleteSchemaParams as AccessGroupDeleteSchemaParams,
  };
}
export { AccessGroup as AccessGroupResource };
