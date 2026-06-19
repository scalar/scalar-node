// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class Version extends APIResource {
  /**
   * Get a specific schema version document.
   *
   * @param {string} semver
   * @param {VersionRetrieveSchemaParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Default Response
   *
   * @example
   * ```ts
   * const string_ = await client.schemas.version.retrieveSchema("semver", {
   *   namespace: "namespace",
   *   slug: "slug",
   * });
   * ```
   */
  retrieveSchema(semver: string, params: VersionRetrieveSchemaParams, options?: RequestOptions): APIPromise<string> {
    const { namespace, slug } = params ?? {};
    return this._client.get(__scalarPath`/v1/schemas/${namespace}/${slug}/version/${semver}`, options);
  }

  /**
   * Delete a schema version.
   *
   * @param {string} semver
   * @param {VersionDeleteSchemaParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<null>} Default Response
   *
   * @example
   * ```ts
   * await client.schemas.version.deleteSchema("semver", {
   *   namespace: "namespace",
   *   slug: "slug",
   * });
   * ```
   */
  deleteSchema(semver: string, params: VersionDeleteSchemaParams, options?: RequestOptions): APIPromise<null> {
    const { namespace, slug } = params ?? {};
    return this._client.delete(__scalarPath`/v1/schemas/${namespace}/${slug}/version/${semver}`, options);
  }

  /**
   * Create a schema version.
   *
   * @param {string} slug
   * @param {VersionCreateSchemaParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UID>} Default Response
   *
   * @example
   * ```ts
   * const uID = await client.schemas.version.createSchema("slug", {
   *   namespace: "namespace",
   *   version: "",
   *   document: "",
   * });
   * ```
   */
  createSchema(slug: string, params: VersionCreateSchemaParams, options?: RequestOptions): APIPromise<UID> {
    const { namespace, ...body } = params ?? {};
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

export interface VersionRetrieveSchemaParams {
  namespace: string;
  slug: string;
}

export interface VersionDeleteSchemaParams {
  namespace: string;
  slug: string;
}

export interface VersionCreateSchemaParams {
  namespace: string;
  version: Version2;
  document: string;
}
export declare namespace Version {
  export {
    type UID as UID,
    type VersionRetrieveSchemaParams as VersionRetrieveSchemaParams,
    type VersionDeleteSchemaParams as VersionDeleteSchemaParams,
    type VersionCreateSchemaParams as VersionCreateSchemaParams,
  };
}
export { Version as VersionResource };
