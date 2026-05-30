// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

export class AuthenticationResource extends APIResource {
  /**
   * Exchange an API key for an access token.
   */
  exchangePersonalToken(body: AuthenticationExchangePersonalTokenParams, options?: RequestOptions): APIPromise<AuthenticationExchangePersonalTokenResponse> {
    return this._client.post("/v1/auth/exchange", { body: body, ...options });
  }
  /**
   * Get the authenticated user, including their available teams and theme.
   */
  listCurrentUser(options?: RequestOptions): APIPromise<User> {
    return this._client.get("/v1/auth/me", options);
  }
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
 * Authenticated user profile.
 */
export interface User {
  /**
   * Unique Nano ID identifier.
   */
  uid: Nanoid;
  /**
   * Unix timestamp in milliseconds.
   */
  createdAt: Timestamp;
  /**
   * Unix timestamp in milliseconds.
   */
  updatedAt: Timestamp;
  /**
   * Email address.
   */
  email: Email;
  /**
   * Currently active team ID.
   */
  activeTeamId: string | null;
  /**
   * Whether the user has connected GitHub.
   */
  hasGithub: boolean;
  /**
   * Teams available to the user.
   */
  teams: Array<TeamSummary>;
  /**
   * Theme identifier or theme settings.
   */
  theme?: string;
}

/**
 * Unique Nano ID identifier.
 */
export type Nanoid = string;

/**
 * Unix timestamp in milliseconds.
 */
export type Timestamp = number;

/**
 * Email address.
 */
export type Email = string;

/**
 * Team summary.
 */
export interface TeamSummary {
  /**
   * Unique Nano ID identifier.
   */
  uid: Nanoid;
  /**
   * Team display name.
   */
  name: TeamName;
  /**
   * Team image URL.
   */
  imageUri?: TeamImage;
}

/**
 * Team display name.
 */
export type TeamName = string;

/**
 * Team image URL.
 */
export type TeamImage = string;

export interface AuthenticationExchangePersonalTokenParams {
  /**
   * Personal access token to exchange.
   */
  personalToken: string;
}

export type AuthenticationExchangePersonalTokenResponse = { accessToken: string };

