// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class Version extends APIResource {
  /**
   * Get a specific schema version document.
   *
   * @param {string} namespace
   * @param {string} slug
   * @param {string} semver
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Default Response
   *
   * @example
   * ```ts
   * const string_ = await client.schemas.version.retrieveSchema("namespace", "slug", "semver");
   * ```
   */
  retrieveSchema(namespace: string, slug: string, semver: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(__scalarPath`/v1/schemas/${namespace}/${slug}/version/${semver}`, options);
  }

  /**
   * Delete a schema version.
   *
   * @param {string} namespace
   * @param {string} slug
   * @param {string} semver
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<null>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.version.deleteSchema("namespace", "slug", "semver");
   * ```
   */
  deleteSchema(namespace: string, slug: string, semver: string, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/schemas/${namespace}/${slug}/version/${semver}`, options);
  }

  /**
   * Create a schema version.
   *
   * @param {string} namespace
   * @param {string} slug
   * @param {VersionCreateSchemaParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UID>} Default Response
   *
   * @example
   * ```ts
   * const uID = await client.schemas.version.createSchema("namespace", "slug", {
   *   version: "",
   *   document: "",
   * });
   * ```
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
  export {
    type UID as UID,
    type VersionCreateSchemaParams as VersionCreateSchemaParams,
  };
}
export { Version as VersionResource };
