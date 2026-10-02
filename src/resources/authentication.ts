// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import type * as Shared from './shared';
import type * as InvitesAPI from './teams/invites';
import type * as TeamsAPI from './teams/teams';

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
   * const authentication = await client.authentication.exchangePersonalToken({
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
   * @returns {APIPromise<User>} Default Response
   *
   * @example
   * ```ts
   * const user = await client.authentication.listCurrentUser();
   * ```
   */
  listCurrentUser(options?: RequestOptions): APIPromise<User> {
    return this._client.get('/v1/auth/me', options);
  }
}

export interface User {
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
  email: InvitesAPI.Email;
  activeTeamId: string | null;
  hasGithub: boolean;
  teams: Array<TeamSummary>;
  theme?: string;
}

export interface TeamSummary {
  /**
   * @minLength 5
   */
  uid: Shared.Nanoid;
  name: TeamsAPI.TeamName;
  imageUri?: TeamsAPI.TeamImage;
}

export interface AuthenticationExchangePersonalTokenParams {
  personalToken: string;
}

export interface AuthenticationExchangePersonalTokenResponse {
  accessToken: string;
}
export declare namespace Authentication {
  export {
    type User as User,
    type TeamSummary as TeamSummary,
    type AuthenticationExchangePersonalTokenResponse as AuthenticationExchangePersonalTokenResponse,
    type AuthenticationExchangePersonalTokenParams as AuthenticationExchangePersonalTokenParams,
  };
}
