// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class LoginPortals extends APIResource {
  /**
   * Get a login portal by slug.
   *
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LoginPortalRetrieveResponse>} Default Response
   *
   * @example
   * ```ts
   * const retrieve = await client.loginPortals.retrieve("slug");
   * ```
   */
  retrieve(slug: string, options?: RequestOptions): APIPromise<LoginPortalRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/login-portals/${slug}`, options);
  }

  /**
   * Update metadata for a login portal.
   *
   * @param {string} slug
   * @param {LoginPortalUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<null>} Default Response
   *
   * @example
   * ```ts
   * await client.loginPortals.update("slug", {});
   * ```
   */
  update(slug: string, body: LoginPortalUpdateParams, options?: RequestOptions): APIPromise<null> {
    return this._client.patch(__scalarPath`/v1/login-portals/${slug}`, { body: body, ...options });
  }

  /**
   * Delete a login portal.
   *
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<null>} Default Response
   *
   * @example
   * ```ts
   * await client.loginPortals.delete("slug");
   * ```
   */
  delete(slug: string, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/login-portals/${slug}`, options);
  }

  /**
   * Create a login portal for the current team.
   *
   * @param {LoginPortalCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UID>} Default Response
   *
   * @example
   * ```ts
   * const uID = await client.loginPortals.create({
   *   title: "",
   *   slug: "",
   *   email: {
   *     logo: "",
   *     logoSize: "100",
   *     buttonText: "Login",
   *     message: "Click to access private documentation hosted by scalar.com",
   *     title: "Private Docs",
   *     mainColor: "#2a2f45",
   *     mainBackground: "#f6f6f6",
   *     cardColor: "2a2f45",
   *     cardBackground: "#fff",
   *     buttonColor: "#fff",
   *     buttonBackground: "#0f0f0f",
   *   },
   *   page: {
   *     title: "Scalar Private Docs",
   *     description: "Login to access your documentation",
   *     head: "",
   *     script: "",
   *     theme: "",
   *     companyName: "",
   *     logo: "",
   *     logoURL: "",
   *     favicon: "",
   *     termsLink: "",
   *     privacyLink: "",
   *     formTitle: "Scalar Private Docs",
   *     formDescription: "Login to access your documentation",
   *     formImage: "",
   *   },
   * });
   * ```
   */
  create(body: LoginPortalCreateParams, options?: RequestOptions): APIPromise<UID> {
    return this._client.post("/v1/login-portals", { body: body, ...options });
  }

  /**
   * List all login portals for the current team.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LoginPortalListResponse>} Default Response
   *
   * @example
   * ```ts
   * const list = await client.loginPortals.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<LoginPortalListResponse> {
    return this._client.get("/v1/login-portals", options);
  }
}

export interface LoginPortalEmail {
  logo: string;
  logoSize: string;
  buttonText: string;
  message: string;
  title: string;
  mainColor: string;
  mainBackground: string;
  cardColor: string;
  cardBackground: string;
  buttonColor: string;
  buttonBackground: string;
}

export interface LoginPortalPage {
  title: string;
  description: string;
  head: string;
  script: string;
  theme: string;
  companyName: string;
  logo: string;
  logoURL: string;
  favicon: string;
  termsLink: string;
  privacyLink: string;
  formTitle: string;
  formDescription: string;
  formImage: string;
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

export interface LoginPortal {
  uid: Nanoid;
  title: string;
  slug: Slug;
}

export type Slug = string;

export type LoginPortalRetrieveResponse = { uid: string; title: string; slug: string; email: LoginPortalEmail; page: LoginPortalPage };

export interface LoginPortalUpdateParams {
  title?: string;
}

export interface LoginPortalCreateParams {
  title: string;
  slug: string;
  email: LoginPortalEmail;
  page: LoginPortalPage;
}

export type LoginPortalListResponse = Array<LoginPortal>;
export declare namespace LoginPortals {
  export {
    type LoginPortalEmail as LoginPortalEmail,
    type LoginPortalPage as LoginPortalPage,
    type LoginPortalRetrieveResponse as LoginPortalRetrieveResponse,
    type UID as UID,
    type LoginPortalListResponse as LoginPortalListResponse,
    type LoginPortalUpdateParams as LoginPortalUpdateParams,
    type LoginPortalCreateParams as LoginPortalCreateParams,
  };
}
export { LoginPortals as LoginPortalResource };
