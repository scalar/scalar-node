// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class LoginPortals extends APIResource {
  /**
   * Get a login portal by slug.
   */
  retrieve(slug: string, options?: RequestOptions): APIPromise<LoginPortalRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/login-portals/${slug}`, options);
  }
  /**
   * Update metadata for a login portal.
   */
  update(slug: string, body: LoginPortalUpdateParams, options?: RequestOptions): APIPromise<null> {
    return this._client.patch(__scalarPath`/v1/login-portals/${slug}`, { body: body, ...options });
  }
  /**
   * Delete a login portal.
   */
  delete(slug: string, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/login-portals/${slug}`, options);
  }
  /**
   * Create a login portal for the current team.
   */
  create(body: LoginPortalCreateParams, options?: RequestOptions): APIPromise<UID> {
    return this._client.post("/v1/login-portals", { body: body, ...options });
  }
  /**
   * List all login portals for the current team.
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
  export { type LoginPortalEmail as LoginPortalEmail, type LoginPortalPage as LoginPortalPage, type Value400 as Value400, type Value401 as Value401, type Value403 as Value403, type Value404 as Value404, type Value422 as Value422, type Value500 as Value500, type UID as UID, type Nanoid as Nanoid, type LoginPortal as LoginPortal, type Slug as Slug, type LoginPortalRetrieveResponse as LoginPortalRetrieveResponse, type LoginPortalUpdateParams as LoginPortalUpdateParams, type LoginPortalCreateParams as LoginPortalCreateParams, type LoginPortalListResponse as LoginPortalListResponse };
}
export { LoginPortals as LoginPortalResource };
