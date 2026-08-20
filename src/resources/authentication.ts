// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
<<<<<<< HEAD
=======
import type * as Shared from './shared';
>>>>>>> 72f78c0dd0a354e81ee3618b21191349d0e6fe85

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
   *   personalToken: '',
   * });
   * ```
   */
  exchangePersonalToken(
    body: AuthenticationExchangePersonalTokenParams,
    options?: RequestOptions,
  ): APIPromise<AuthenticationExchangePersonalTokenResponse> {
    return this._client.post('/v1/auth/exchange', { body, ...options });
  }

  /**
   * Get the authenticated user, including their available teams and theme.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AuthenticationListCurrentUserResponse>} Default Response
   *
   * @example
   * ```ts
   * const listCurrentUser = await client.authentication.listCurrentUser();
   * ```
   */
  listCurrentUser(options?: RequestOptions): APIPromise<AuthenticationListCurrentUserResponse> {
    return this._client.get('/v1/auth/me', options);
  }
}

export interface AuthenticationExchangePersonalTokenParams {
  personalToken: string;
}

export interface AuthenticationExchangePersonalTokenResponse {
  accessToken: string;
}

export interface AuthenticationListCurrentUserResponse {
  /**
   * @minLength 5
   */
  uid: Shared.Nanoid;
  /**
   * @minimum 0
   * @maximum 9007199254740991
   */
  createdAt: Shared.Timestamp;
  /**
   * @minimum 0
   * @maximum 9007199254740991
   */
  updatedAt: Shared.Timestamp;
  /**
   * @format email
   * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
   */
  email: string;
  activeTeamId: string | null;
  hasGithub: boolean;
  teams: Array<AuthenticationListCurrentUserResponse.Team>;
  theme?: string;
}

export namespace AuthenticationListCurrentUserResponse {
  export interface Team {
    /**
     * @minLength 5
     */
    uid: Shared.Nanoid;
    name: string;
    imageUri?: string;
  }
}
export declare namespace Authentication {
  export {
    type AuthenticationExchangePersonalTokenResponse as AuthenticationExchangePersonalTokenResponse,
    type AuthenticationListCurrentUserResponse as AuthenticationListCurrentUserResponse,
    type AuthenticationExchangePersonalTokenParams as AuthenticationExchangePersonalTokenParams,
  };
}
