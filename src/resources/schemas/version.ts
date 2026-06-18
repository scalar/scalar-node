// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class Version extends APIResource {
  /**
   * Get a specific schema version document.
   */
  retrieveSchema(namespace: string, slug: string, semver: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(__scalarPath`/v1/schemas/${namespace}/${slug}/version/${semver}`, options);
  }
  /**
   * Delete a schema version.
   */
  deleteSchema(namespace: string, slug: string, semver: string, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/schemas/${namespace}/${slug}/version/${semver}`, options);
  }
  /**
   * Create a schema version.
   */
  createSchema(namespace: string, slug: string, body: VersionCreateSchemaParams, options?: RequestOptions): APIPromise<UID> {
    return this._client.post(__scalarPath`/v1/schemas/${namespace}/${slug}/version`, { body: body, ...options });
  }
}

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

export interface UID {
  uid: Nanoid;
}

export type Nanoid = string;

export type Version2 = string;

export interface VersionCreateSchemaParams {
  version: Version;
  document: string;
}
export declare namespace Version {
  export { type Value400 as Value400, type Value401 as Value401, type Value403 as Value403, type Value404 as Value404, type Value422 as Value422, type Value500 as Value500, type UID as UID, type Nanoid as Nanoid, type Version2 as Version, type VersionCreateSchemaParams as VersionCreateSchemaParams };
}
export { Version as VersionResource };
