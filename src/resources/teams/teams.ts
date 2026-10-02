// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import type * as Shared from '../shared';
import type * as ScalarDocsAPI from '../scalar-docs';
import * as MembersAPI from './members';
import {
  Members,
  type TeamMember,
  type TeamInvite,
  type MemberListResponse,
  type MemberUpdateResponse,
  type MemberDeleteResponse,
  type MemberUpdateParams,
} from './members';
import * as InvitesAPI from './invites';
import {
  Invites,
  type Email,
  type Role,
  type InviteMemberResponse,
  type InviteResendResponse,
  type InviteCancelResponse,
  type InviteMemberParams,
} from './invites';

export class Teams extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);

  /**
   * List all available teams
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TeamListResponse>} Default Response
   *
   * @example
   * ```ts
   * const team = await client.teams.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<TeamListResponse> {
    return this._client.get('/v1/teams', options);
  }
}

export interface Team {
  /**
   * @minLength 5
   */
  uid: Shared.Nanoid;
  name: TeamName;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug: ScalarDocsAPI.Slug;
  theme: string;
  imageUri?: TeamImage;
}

export type TeamName = string;

export type TeamImage = string;

export type TeamListResponse = Array<Team>;
Teams.Members = Members;
Teams.Invites = Invites;

export declare namespace Teams {
  export {
    type Team as Team,
    type TeamName as TeamName,
    type TeamImage as TeamImage,
    type TeamListResponse as TeamListResponse,
  };

  export {
    Members as Members,
    type TeamMember as TeamMember,
    type TeamInvite as TeamInvite,
    type MemberListResponse as MemberListResponse,
    type MemberUpdateResponse as MemberUpdateResponse,
    type MemberDeleteResponse as MemberDeleteResponse,
    type MemberUpdateParams as MemberUpdateParams,
  };

  export {
    Invites as Invites,
    type Email as Email,
    type Role as Role,
    type InviteMemberResponse as InviteMemberResponse,
    type InviteResendResponse as InviteResendResponse,
    type InviteCancelResponse as InviteCancelResponse,
    type InviteMemberParams as InviteMemberParams,
  };
}
