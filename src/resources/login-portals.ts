// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class LoginPortalResource extends APIResource {
  /**
   * Get a login portal by slug.
   */
  loginPortals(slug: string, options?: RequestOptions): APIPromise<LoginPortalsResponse> {
    return this._client.get(__scalarPath`/v1/login-portals/${slug}`, options);
  }
  /**
   * Delete a login portal.
   */
  loginPortals3(slug: string, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/login-portals/${slug}`, options);
  }
  /**
   * Update metadata for a login portal.
   */
  loginPortals2(slug: string, body: LoginPortals2Params, options?: RequestOptions): APIPromise<null> {
    return this._client.patch(__scalarPath`/v1/login-portals/${slug}`, { body: body, ...options });
  }
  /**
   * List all login portals for the current team.
   */
  loginPortals5(options?: RequestOptions): APIPromise<LoginPortals5Response> {
    return this._client.get("/v1/login-portals", options);
  }
  /**
   * Create a login portal for the current team.
   */
  loginPortals4(body: LoginPortals4Params, options?: RequestOptions): APIPromise<Uid> {
    return this._client.post("/v1/login-portals", { body: body, ...options });
  }
}

/**
 * Login portal email appearance settings.
 */
export interface LoginPortalEmail {
  /**
   * Logo image URL or data URI.
   */
  logo: string;
  /**
   * Rendered logo size.
   */
  logoSize: string;
  /**
   * Call-to-action button text.
   */
  buttonText: string;
  message: string;
  title: string;
  /**
   * Primary foreground color.
   */
  mainColor: string;
  /**
   * Primary background color.
   */
  mainBackground: string;
  /**
   * Card foreground color.
   */
  cardColor: string;
  /**
   * Card background color.
   */
  cardBackground: string;
  /**
   * Button foreground color.
   */
  buttonColor: string;
  /**
   * Button background color.
   */
  buttonBackground: string;
}

/**
 * Login portal page appearance and content settings.
 */
export interface LoginPortalPage {
  title: string;
  description: string;
  /**
   * Custom HTML inserted into the page head.
   */
  head: string;
  /**
   * Custom script content for the page.
   */
  script: string;
  /**
   * Theme identifier or theme settings.
   */
  theme: string;
  /**
   * Company name shown on the page.
   */
  companyName: string;
  /**
   * Logo image URL or data URI.
   */
  logo: string;
  /**
   * URL the logo links to.
   */
  logoURL: string;
  /**
   * Favicon URL.
   */
  favicon: string;
  /**
   * Terms of service URL.
   */
  termsLink: string;
  /**
   * Privacy policy URL.
   */
  privacyLink: string;
  /**
   * Title shown above the form.
   */
  formTitle: string;
  /**
   * Description shown above the form.
   */
  formDescription: string;
  /**
   * Image shown with the form.
   */
  formImage: string;
}

/**
 * Bad request error response.
 */
export interface Value400 {
  message: string;
  code: string;
}

/**
 * Unauthorized error response.
 */
export interface Value401 {
  message: string;
  code: string;
}

/**
 * Forbidden error response.
 */
export interface Value403 {
  message: string;
  code: string;
}

/**
 * Not found error response.
 */
export interface Value404 {
  message: string;
  code: string;
}

/**
 * Validation error response.
 */
export interface Value422 {
  message: string;
  code: string;
}

/**
 * Internal server error response.
 */
export interface Value500 {
  message: string;
  code: string;
}

/**
 * Login portal summary.
 */
export interface LoginPortal {
  /**
   * Unique Nano ID identifier.
   */
  uid: Nanoid;
  title: string;
  /**
   * URL-safe slug identifier.
   */
  slug: Slug;
}

/**
 * Unique Nano ID identifier.
 */
export type Nanoid = string;

/**
 * URL-safe slug identifier.
 */
export type Slug = string;

/**
 * Object UID wrapper.
 */
export interface Uid {
  /**
   * Unique Nano ID identifier.
   */
  uid: Nanoid;
}

export type LoginPortalsResponse = { uid: string; title: string; slug: string; email: LoginPortalEmail; page: LoginPortalPage };

export interface LoginPortals2Params {
  title?: string;
}

export type LoginPortals5Response = Array<LoginPortal>;

export interface LoginPortals4Params {
  title: string;
  /**
   * URL-safe resource slug.
   */
  slug: string;
  /**
   * Login portal email appearance settings.
   */
  email: LoginPortalEmail;
  /**
   * Login portal page appearance and content settings.
   */
  page: LoginPortalPage;
}

