// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';

export class Invites extends APIResource {
  /**
   * Invite someone to the current team by email.
   *
   * @param {InviteMemberParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InviteMemberResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.teams.invites.member({
   *   email: 'alex@example.com',
   *   role: 'owner',
   * });
   * ```
   */
  member(body: InviteMemberParams, options?: RequestOptions): APIPromise<InviteMemberResponse> {
    return this._client.post('/v1/teams/invites', { body, ...options });
  }

  /**
   * Send the invite email again.
   *
   * @param {Shared.Nanoid} uid
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InviteResendResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.teams.invites.resend('UakgbKJ5m9gl0JDMbcJqL');
   * ```
   */
  resend(uid: Shared.Nanoid, options?: RequestOptions): APIPromise<InviteResendResponse> {
    return this._client.patch(__scalarPath`/v1/teams/invites/${uid}`, options);
  }

  /**
   * Withdraw an invite that has not been accepted.
   *
   * @param {Shared.Nanoid} uid
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InviteCancelResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.teams.invites.cancel('UakgbKJ5m9gl0JDMbcJqL');
   * ```
   */
  cancel(uid: Shared.Nanoid, options?: RequestOptions): APIPromise<InviteCancelResponse> {
    return this._client.delete(__scalarPath`/v1/teams/invites/${uid}`, options);
  }
}

export type Email = string;

export type Role = 'owner' | 'admin' | 'editor' | 'viewer';

export interface InviteMemberParams {
  /**
   * @format email
   * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
   */
  email: Email;
  role: Role;
}

export type InviteMemberResponse = null;

export type InviteResendResponse = null;

export type InviteCancelResponse = null;
export declare namespace Invites {
  export {
    type Email as Email,
    type Role as Role,
    type InviteMemberResponse as InviteMemberResponse,
    type InviteResendResponse as InviteResendResponse,
    type InviteCancelResponse as InviteCancelResponse,
    type InviteMemberParams as InviteMemberParams,
  };
}
