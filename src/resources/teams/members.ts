// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';
import type * as InvitesAPI from './invites';

export class Members extends APIResource {
  /**
   * List the members of the current team, along with the invites still outstanding.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberListResponse>} Default Response
   *
   * @example
   * ```ts
   * const member = await client.teams.members.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<MemberListResponse> {
    return this._client.get('/v1/teams/members', options);
  }

  /**
   * Change what a member of the current team is allowed to do.
   *
   * @param {Shared.Nanoid} uid
   * @param {MemberUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberUpdateResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.teams.members.update('UakgbKJ5m9gl0JDMbcJqL', {
   *   role: 'owner',
   * });
   * ```
   */
  update(
    uid: Shared.Nanoid,
    body: MemberUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MemberUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/teams/members/${uid}`, { body, ...options });
  }

  /**
   * Remove someone from the current team.
   *
   * @param {Shared.Nanoid} uid
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MemberDeleteResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.teams.members.delete('UakgbKJ5m9gl0JDMbcJqL');
   * ```
   */
  delete(uid: Shared.Nanoid, options?: RequestOptions): APIPromise<MemberDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/teams/members/${uid}`, options);
  }
}

export interface TeamMember {
  /**
   * @minLength 5
   */
  uid: Shared.Nanoid;
  role: InvitesAPI.Role;
  displayName: string;
  imageUri?: string;
}

export interface TeamInvite {
  /**
   * @minLength 5
   */
  uid: Shared.Nanoid;
  /**
   * @format email
   * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
   */
  email: InvitesAPI.Email;
  role: InvitesAPI.Role;
  expires?: number;
}

export interface MemberListResponse {
  members: Array<TeamMember>;
  pendingInvites: Array<TeamInvite>;
}

export interface MemberUpdateParams {
  role: InvitesAPI.Role;
}

export type MemberUpdateResponse = null;

export type MemberDeleteResponse = null;
export declare namespace Members {
  export {
    type TeamMember as TeamMember,
    type TeamInvite as TeamInvite,
    type MemberListResponse as MemberListResponse,
    type MemberUpdateResponse as MemberUpdateResponse,
    type MemberDeleteResponse as MemberDeleteResponse,
    type MemberUpdateParams as MemberUpdateParams,
  };
}
