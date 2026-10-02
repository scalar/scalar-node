// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import type * as Shared from './shared';

export class OAuth extends APIResource {
  /**
   * Authorization endpoint (RFC 6749 §4.1.1 with PKCE, RFC 7636). Validates the request and sends the user to the Scalar dashboard to approve it; the user returns to `redirect_uri` with a `code` to exchange at the token endpoint. Only `response_type=code` with `code_challenge_method=S256` is supported.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OAuthOauthAuthorizeResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.oAuth.oauthAuthorize();
   * ```
   */
  oauthAuthorize(options?: RequestOptions): APIPromise<OAuthOauthAuthorizeResponse> {
    return this._client.get('/v1/oauth/authorize', options);
  }

  /**
   * Token endpoint (RFC 6749 §4.1.3 and §6). Accepts `application/x-www-form-urlencoded`. Confidential clients authenticate with HTTP Basic or `client_secret` in the body; public clients send `client_id` alone. The `authorization_code` grant needs `code`, `redirect_uri` and `code_verifier`; the `refresh_token` grant needs `refresh_token` and may narrow `scope`.
   *
   * @param {OAuthOauthTokenParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OAuthOauthTokenResponse>} Default Response
   *
   * @example
   * ```ts
   * const oAuth = await client.oAuth.oauthToken({
   *   grant_type: '',
   * });
   * ```
   */
  oauthToken(body: OAuthOauthTokenParams, options?: RequestOptions): APIPromise<OAuthOauthTokenResponse> {
    return this._client.post('/v1/oauth/token', { body, ...options });
  }

  /**
   * Revocation endpoint (RFC 7009). Revokes the refresh token and every token issued alongside it. The client authenticates as it does at the token endpoint. Responds 200 whether or not the token was live, as the RFC requires.
   *
   * @param {OAuthOauthRevokeParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OauthError>} Default Response
   *
   * @example
   * ```ts
   * const oauthError = await client.oAuth.oauthRevoke({
   *   token: '',
   * });
   * ```
   */
  oauthRevoke(body: OAuthOauthRevokeParams, options?: RequestOptions): APIPromise<OauthError> {
    return this._client.post('/v1/oauth/revoke', { body, ...options });
  }

  /**
   * Discovery document for OAuth clients (RFC 8414): where the endpoints are and what they support.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OauthAuthorizationServerMetadata>} Default Response
   *
   * @example
   * ```ts
   * const oauthAuthorizationServerMetadata = await client.oAuth.oauthAuthorizationServerMetadata();
   * ```
   */
  oauthAuthorizationServerMetadata(options?: RequestOptions): APIPromise<OauthAuthorizationServerMetadata> {
    return this._client.get('/.well-known/oauth-authorization-server', options);
  }
}

export interface OauthToken {
  access_token: string;
  token_type: 'Bearer';
  /**
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  expires_in: number;
  refresh_token: string;
  scope: OauthScope;
}

export interface OauthError {
  error: string;
  error_description?: string;
}

export interface OauthAuthorizationServerMetadata {
  issuer: string;
  authorization_endpoint: string;
  token_endpoint: string;
  revocation_endpoint: string;
  response_types_supported: Array<string>;
  grant_types_supported: Array<string>;
  code_challenge_methods_supported: Array<string>;
  token_endpoint_auth_methods_supported: Array<string>;
  revocation_endpoint_auth_methods_supported: Array<string>;
  scopes_supported: Array<string>;
}

export type OauthScope = 'read' | 'write' | 'admin';

export type OAuthOauthAuthorizeResponse = null;

export interface OAuthOauthTokenParams {
  /**
   * @maxLength 64
   */
  grant_type: string;
  /**
   * @maxLength 256
   */
  client_id?: string;
  /**
   * @maxLength 256
   */
  client_secret?: string;
  /**
   * @maxLength 256
   */
  code?: string;
  /**
   * @maxLength 2048
   */
  redirect_uri?: string;
  /**
   * @maxLength 256
   */
  code_verifier?: string;
  /**
   * @maxLength 4096
   */
  refresh_token?: string;
  /**
   * @maxLength 256
   */
  scope?: string;
}

export type OAuthOauthTokenResponse = OAuthOauthTokenResponse.OauthToken | OauthError;

export namespace OAuthOauthTokenResponse {
  export interface OauthToken {
    access_token: string;
    token_type: 'Bearer';
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    expires_in: number;
    refresh_token: string;
    scope: OauthScope;
  }
}

export interface OAuthOauthRevokeParams {
  /**
   * @maxLength 4096
   */
  token: string;
  /**
   * @maxLength 64
   */
  token_type_hint?: string;
  /**
   * @maxLength 256
   */
  client_id?: string;
  /**
   * @maxLength 256
   */
  client_secret?: string;
}
export declare namespace OAuth {
  export {
    type OauthToken as OauthToken,
    type OauthError as OauthError,
    type OauthAuthorizationServerMetadata as OauthAuthorizationServerMetadata,
    type OauthScope as OauthScope,
    type OAuthOauthAuthorizeResponse as OAuthOauthAuthorizeResponse,
    type OAuthOauthTokenResponse as OAuthOauthTokenResponse,
    type OAuthOauthTokenParams as OAuthOauthTokenParams,
    type OAuthOauthRevokeParams as OAuthOauthRevokeParams,
  };
}
