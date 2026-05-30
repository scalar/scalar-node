// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class ScalarDocResource extends APIResource {
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

/**
 * URL-safe slug identifier.
 */
export type Slug = string;

/**
 * GitHub-backed project metadata.
 */
export interface GithubProject {
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
  name: string;
  /**
   * Currently active deployment.
   */
  activeDeployment: ActiveDeployment | null;
  /**
   * Timestamp of the most recent publish.
   */
  lastPublished: Timestamp | null;
  /**
   * UID of the most recent publish.
   */
  lastPublishedUid: string | null;
  /**
   * Associated login portal UID.
   */
  loginPortalUid: string;
  /**
   * Active theme identifier.
   */
  activeThemeId: string;
  /**
   * Whether the resource is private.
   */
  isPrivate: boolean;
  /**
   * Whether the agent experience is enabled.
   */
  agentEnabled: boolean;
  /**
   * Access groups allowed to access the resource.
   */
  accessGroups: string;
  /**
   * URL-safe slug identifier.
   */
  slug: Slug;
  /**
   * Current publish status.
   */
  publishStatus: string;
  /**
   * Message describing the latest publish status.
   */
  publishMessage: string;
  /**
   * Typesense search index identifier.
   */
  typesenseId?: number;
  /**
   * Linked GitHub repository.
   */
  repository?: GithubProjectRepository | null;
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
 * Active deployment metadata.
 */
export interface ActiveDeployment {
  /**
   * Unique identifier for the resource.
   */
  uid: string;
  /**
   * Published domain.
   */
  domain: string;
  /**
   * Unix timestamp in milliseconds.
   */
  publishedAt: Timestamp;
}

/**
 * Linked GitHub repository settings.
 */
export interface GithubProjectRepository {
  /**
   * User or integration that linked the repository.
   */
  linkedBy: string;
  /**
   * Provider-specific identifier.
   */
  id: number;
  name: string;
  /**
   * Path to the Scalar configuration file.
   */
  configPath: string;
  /**
   * Git branch used for publishing.
   */
  branch: string;
  /**
   * Whether merges trigger publishing.
   */
  publishOnMerge: boolean;
  /**
   * Whether preview deployments are published.
   */
  publishPreviews: boolean;
  /**
   * Whether pull request comments are enabled.
   */
  prComments: boolean;
  /**
   * Whether the repository link has expired.
   */
  expired: boolean;
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

export type ScalarDocListGuidesResponse = Array<GithubProject>;

export interface ScalarDocCreateGuideParams {
  name: string;
  /**
   * Whether the resource is private.
   */
  isPrivate: boolean;
  /**
   * Email addresses allowed to access the guide.
   */
  allowedUsers: Array<string>;
  /**
   * Email domains allowed to access the guide.
   */
  allowedDomains: Array<string>;
  /**
   * URL-safe slug identifier.
   */
  slug?: Slug;
}

export type ScalarDocCreateGuideResponse = { uid: string; slug: string };

export type ScalarDocPublishGuideResponse = { publishUid: string };

