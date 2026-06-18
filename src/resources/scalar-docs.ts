// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class ScalarDocs extends APIResource {
  /**
   * List all guide projects.
   */
  listGuides(options?: RequestOptions): APIPromise<ScalarDocListGuidesResponse> {
    return this._client.get("/v1/guides", options);
  }
  /**
   * Create a guide project.
   */
  createGuide(body: ScalarDocCreateGuideParams, options?: RequestOptions): APIPromise<ScalarDocCreateGuideResponse> {
    return this._client.post("/v1/guides", { body: body, ...options });
  }
  /**
   * Start a new publish process.
   */
  publishGuide(slug: string, options?: RequestOptions): APIPromise<ScalarDocPublishGuideResponse> {
    return this._client.post(__scalarPath`/v1/guides/${slug}/publish`, options);
  }
}

export type Slug = string;

export interface GithubProject {
  uid: Nanoid;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  name: string;
  activeDeployment: ActiveDeployment | null;
  lastPublished: Timestamp | null;
  lastPublishedUid: string | null;
  loginPortalUid: string;
  activeThemeId: string;
  isPrivate: boolean;
  agentEnabled: boolean;
  accessGroups: string;
  slug: Slug;
  publishStatus: string;
  publishMessage: string;
  typesenseId?: number;
  repository?: GithubProjectRepository | null;
}

export type Nanoid = string;

export type Timestamp = number;

export interface ActiveDeployment {
  uid: string;
  domain: string;
  publishedAt: Timestamp;
}

export interface GithubProjectRepository {
  linkedBy: string;
  id: number;
  name: string;
  configPath: string;
  branch: string;
  publishOnMerge: boolean;
  publishPreviews: boolean;
  prComments: boolean;
  expired: boolean;
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

export type ScalarDocListGuidesResponse = Array<GithubProject>;

export interface ScalarDocCreateGuideParams {
  name: string;
  isPrivate: boolean;
  allowedUsers: Array<string>;
  allowedDomains: Array<string>;
  slug?: Slug;
}

export type ScalarDocCreateGuideResponse = { uid: string; slug: string };

export type ScalarDocPublishGuideResponse = { publishUid: string };
export declare namespace ScalarDocs {
  export { type Slug as Slug, type GithubProject as GithubProject, type Nanoid as Nanoid, type Timestamp as Timestamp, type ActiveDeployment as ActiveDeployment, type GithubProjectRepository as GithubProjectRepository, type Value400 as Value400, type Value401 as Value401, type Value403 as Value403, type Value404 as Value404, type Value422 as Value422, type Value500 as Value500, type ScalarDocListGuidesResponse as ScalarDocListGuidesResponse, type ScalarDocCreateGuideParams as ScalarDocCreateGuideParams, type ScalarDocCreateGuideResponse as ScalarDocCreateGuideResponse, type ScalarDocPublishGuideResponse as ScalarDocPublishGuideResponse };
}
export { ScalarDocs as ScalarDocResource };
