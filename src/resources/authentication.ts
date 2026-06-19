// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

export class Authentication extends APIResource {
  /**
   * Exchange an API key for an access token.
   *
   * @param {AuthenticationExchangePersonalTokenParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AuthenticationExchangePersonalTokenResponse>} Default Response
   *
   * @example
   * ```ts
   * const exchangePersonalToken = await client.authentication.exchangePersonalToken({
   *   personalToken: "",
   * });
   * ```
   */
  exchangePersonalToken(body: AuthenticationExchangePersonalTokenParams, options?: RequestOptions): APIPromise<AuthenticationExchangePersonalTokenResponse> {
    return this._client.post("/v1/auth/exchange", { body: body, ...options });
  }

  /**
   * Get the authenticated user, including their available teams and theme.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<User>} Default Response
   *
   * @example
   * ```ts
   * const user = await client.authentication.listCurrentUser();
   * ```
   */
  listCurrentUser(options?: RequestOptions): APIPromise<User> {
    return this._client.get("/v1/auth/me", options);
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

export interface User {
  uid: Nanoid;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  email: Email;
  activeTeamId: string | null;
  hasGithub: boolean;
  teams: Array<TeamSummary>;
  theme?: string;
}

export type Nanoid = string;

export type Timestamp = number;

export type Email = string;

export interface TeamSummary {
  uid: Nanoid;
  name: TeamName;
  imageUri?: TeamImage;
}

export type TeamName = string;

export type TeamImage = string;

export interface AuthenticationExchangePersonalTokenParams {
  personalToken: string;
}

export type AuthenticationExchangePersonalTokenResponse = { accessToken: string };
export declare namespace Authentication {
  export {
    type AuthenticationExchangePersonalTokenResponse as AuthenticationExchangePersonalTokenResponse,
    type User as User,
    type AuthenticationExchangePersonalTokenParams as AuthenticationExchangePersonalTokenParams,
  };
}
export { Authentication as AuthenticationResource };
