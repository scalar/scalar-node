// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class AccessGroup extends APIResource {
  /**
   * Add an access group to a schema.
   */
  createSchema(namespace: string, slug: string, body: AccessGroupCreateSchemaParams, options?: RequestOptions): APIPromise<null> {
    return this._client.post(__scalarPath`/v1/schemas/${namespace}/${slug}/access-group`, { body: body, ...options });
  }
  /**
   * Remove an access group from a schema.
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
  export { type AccessGroup2 as AccessGroup, type Slug as Slug, type Value400 as Value400, type Value401 as Value401, type Value403 as Value403, type Value404 as Value404, type Value422 as Value422, type Value500 as Value500, type AccessGroupCreateSchemaParams as AccessGroupCreateSchemaParams, type AccessGroupDeleteSchemaParams as AccessGroupDeleteSchemaParams };
}
export { AccessGroup as AccessGroupResource };
