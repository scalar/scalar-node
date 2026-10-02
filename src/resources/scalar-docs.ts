// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';
import type * as Shared from './shared';

export class ScalarDocs extends APIResource {
  /**
   * List all guide projects.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScalarDocListGuidesResponse>} Default Response
   *
   * @example
   * ```ts
   * const scalarDoc = await client.scalarDocs.listGuides();
   * ```
   */
  listGuides(options?: RequestOptions): APIPromise<ScalarDocListGuidesResponse> {
    return this._client.get('/v1/guides', options);
  }

  /**
   * Create a guide project.
   *
   * @param {ScalarDocCreateGuideParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScalarDocCreateGuideResponse>} Default Response
   *
   * @example
   * ```ts
   * const scalarDoc = await client.scalarDocs.createGuide({
   *   name: '',
   *   isPrivate: false,
   *   allowedUsers: [],
   *   allowedDomains: [],
   * });
   * ```
   */
  createGuide(
    body: ScalarDocCreateGuideParams,
    options?: RequestOptions,
  ): APIPromise<ScalarDocCreateGuideResponse> {
    return this._client.post('/v1/guides', { body, ...options });
  }

  /**
   * Start a new publish process.
   *
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScalarDocPublishGuideResponse>} Default Response
   *
   * @example
   * ```ts
   * const scalarDoc = await client.scalarDocs.publishGuide('slug');
   * ```
   */
  publishGuide(slug: string, options?: RequestOptions): APIPromise<ScalarDocPublishGuideResponse> {
    return this._client.post(__scalarPath`/v1/guides/${slug}/publish`, options);
  }

  /**
   * List every docs project on the team.
   *
   * @param {ScalarDocListProjectsParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScalarDocListProjectsResponse>} Default Response
   *
   * @example
   * ```ts
   * const scalarDoc = await client.scalarDocs.listProjects();
   * ```
   */
  listProjects(
    query: ScalarDocListProjectsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScalarDocListProjectsResponse> {
    return this._client.get('/v1/docs', { query, ...options });
  }

  /**
   * Create a docs project. Omit `provider` to have Scalar host the repository.
   *
   * @param {ScalarDocCreateProjectParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DocsProject>} Default Response
   *
   * @example
   * ```ts
   * const docsProject = await client.scalarDocs.createProject({
   *   name: '',
   *   provider: 'forgejo',
   * });
   * ```
   */
  createProject(body: ScalarDocCreateProjectParams, options?: RequestOptions): APIPromise<DocsProject> {
    return this._client.post('/v1/docs', { body, ...options });
  }

  /**
   * Get a single docs project by its slug.
   *
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DocsProject>} Default Response
   *
   * @example
   * ```ts
   * const docsProject = await client.scalarDocs.retrieveProject('slug');
   * ```
   */
  retrieveProject(slug: string, options?: RequestOptions): APIPromise<DocsProject> {
    return this._client.get(__scalarPath`/v1/docs/${slug}`, options);
  }

  /**
   * Update project settings. Set `isPrivate` with `accessGroups` to put the site behind a login.
   *
   * @param {string} slug
   * @param {ScalarDocUpdateProjectParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScalarDocUpdateProjectResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.scalarDocs.updateProject('slug', {});
   * ```
   */
  updateProject(
    slug: string,
    body: ScalarDocUpdateProjectParams,
    options?: RequestOptions,
  ): APIPromise<ScalarDocUpdateProjectResponse> {
    return this._client.patch(__scalarPath`/v1/docs/${slug}`, { body, ...options });
  }

  /**
   * Delete a docs project, its deploys, its publish records and its cached builds.
   *
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScalarDocDeleteProjectResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.scalarDocs.deleteProject('slug');
   * ```
   */
  deleteProject(slug: string, options?: RequestOptions): APIPromise<ScalarDocDeleteProjectResponse> {
    return this._client.delete(__scalarPath`/v1/docs/${slug}`, options);
  }

  /**
   * Start a build and deploy. The returned `publishUid` identifies the publish record.
   *
   * @param {string} slug
   * @param {ScalarDocPublishProjectParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScalarDocPublishProjectResponse>} Default Response
   *
   * @example
   * ```ts
   * const scalarDoc = await client.scalarDocs.publishProject('slug', {});
   * ```
   */
  publishProject(
    slug: string,
    body: ScalarDocPublishProjectParams,
    options?: RequestOptions,
  ): APIPromise<ScalarDocPublishProjectResponse> {
    return this._client.post(__scalarPath`/v1/docs/${slug}/publish`, { body, ...options });
  }

  /**
   * Read `scalar.config.json` straight from the project repository, without cloning it. `baseToken` is the compare-and-swap handle for a later write.
   *
   * @param {string} slug
   * @param {ScalarDocListProjectConfigParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScalarDocListProjectConfigResponse>} Default Response
   *
   * @example
   * ```ts
   * const scalarDoc = await client.scalarDocs.listProjectConfig('slug');
   * ```
   */
  listProjectConfig(
    slug: string,
    query: ScalarDocListProjectConfigParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScalarDocListProjectConfigResponse> {
    return this._client.get(__scalarPath`/v1/docs/${slug}/config`, { query, ...options });
  }

  /**
   * Commit `scalar.config.json` straight to the project repository. Pass the `baseToken` from the read this edit was based on; a conflict means the file moved underneath it.
   *
   * @param {string} slug
   * @param {ScalarDocUpdateProjectConfigParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScalarDocUpdateProjectConfigResponse>} Default Response
   *
   * @example
   * ```ts
   * const scalarDoc = await client.scalarDocs.updateProjectConfig('slug', {
   *   content: '',
   * });
   * ```
   */
  updateProjectConfig(
    slug: string,
    body: ScalarDocUpdateProjectConfigParams,
    options?: RequestOptions,
  ): APIPromise<ScalarDocUpdateProjectConfigResponse> {
    return this._client.put(__scalarPath`/v1/docs/${slug}/config`, { body, ...options });
  }

  /**
   * The domains the project serves on — the Scalar-hosted one and the custom one, when set.
   *
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScalarDocListProjectDomainResponse>} Default Response
   *
   * @example
   * ```ts
   * const scalarDoc = await client.scalarDocs.listProjectDomain('slug');
   * ```
   */
  listProjectDomain(slug: string, options?: RequestOptions): APIPromise<ScalarDocListProjectDomainResponse> {
    return this._client.get(__scalarPath`/v1/docs/${slug}/domain`, options);
  }

  /**
   * Whether the project custom domain points at Scalar yet. `expected` is the CNAME record to create; `found` is what resolves today. A project with no custom domain reports `verified` with no expected record, because Scalar serves its own subdomain directly.
   *
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ScalarDocListProjectDomainStatusResponse>} Default Response
   *
   * @example
   * ```ts
   * const scalarDoc = await client.scalarDocs.listProjectDomainStatus('slug');
   * ```
   */
  listProjectDomainStatus(
    slug: string,
    options?: RequestOptions,
  ): APIPromise<ScalarDocListProjectDomainStatusResponse> {
    return this._client.get(__scalarPath`/v1/docs/${slug}/domain/status`, options);
  }
}

export interface GithubProject {
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
  name: string;
  activeDeployment: ActiveDeployment | null;
  /**
   * @minimum 0
   * @maximum 9007199254740991
   */
  lastPublished: Shared.Timestamp | null;
  lastPublishedUid: string | null;
  loginPortalUid: string;
  userInfoHookUrl: string;
  activeThemeId: string;
  isPrivate: boolean;
  agentEnabled: boolean;
  analyticsEnabled: boolean;
  accessGroups: unknown;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug: Slug;
  publishStatus: string;
  publishMessage: string;
  typesenseId?: number;
  repository?: GithubProjectRepository | null;
}

export interface DocsProject {
  /**
   * @minLength 5
   */
  uid: Shared.Nanoid;
  name: string;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug: Slug;
  isPrivate: boolean;
  accessGroups: unknown;
  loginPortalUid: string;
  activeThemeId: string;
  agentEnabled: boolean;
  analyticsEnabled: boolean;
  /**
   * @minimum 0
   * @maximum 9007199254740991
   */
  lastPublished: Shared.Timestamp | null;
  publishStatus: string;
}

export interface ActiveDeployment {
  uid: string;
  domain: string;
  /**
   * @minimum 0
   * @maximum 9007199254740991
   */
  publishedAt: Shared.Timestamp;
}

export type Slug = string;

export interface GithubProjectRepository {
  linkedBy: string;
  id: number;
  /**
   * @minLength 2
   */
  name: string;
  configPath: string;
  branch: string;
  publishOnMerge: boolean;
  publishPreviews: boolean;
  prComments: boolean;
  expired: boolean;
}

export type ScalarDocListGuidesResponse = Array<GithubProject>;

export interface ScalarDocCreateGuideParams {
  name: string;
  isPrivate: boolean;
  allowedUsers: Array<string>;
  allowedDomains: Array<string>;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug?: Slug;
}

export interface ScalarDocCreateGuideResponse {
  uid: string;
  slug: string;
}

export interface ScalarDocPublishGuideResponse {
  publishUid: string;
}

export interface ScalarDocListProjectsParams {
  /**
   * @minimum 1
   * @maximum 200
   */
  limit?: number;
}

export interface ScalarDocListProjectsResponse {
  data: Array<DocsProject>;
  hasMore: boolean;
}

export interface ScalarDocCreateProjectParams {
  name: string;
  provider: 'forgejo' | 'github' | 'bitbucket';
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug?: Slug;
  isPrivate?: boolean;
  blank?: boolean;
  githubRepository?: ScalarDocCreateProjectParams.GithubRepository;
  bitbucketRepository?: ScalarDocCreateProjectParams.BitbucketRepository;
}

export namespace ScalarDocCreateProjectParams {
  export interface GithubRepository {
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    installationId: number;
    /**
     * @minimum -9007199254740991
     * @maximum 9007199254740991
     */
    repoId: number;
  }

  export interface BitbucketRepository {
    workspaceUuid: string;
    repoUuid: string;
  }
}

export interface ScalarDocUpdateProjectParams {
  name?: string;
  isPrivate?: boolean;
  /**
   * @maxItems 50
   */
  accessGroups?: Array<Shared.Nanoid>;
  loginPortalUid?: '' | (string & {});
  /**
   * @minLength 5
   */
  activeThemeId?: Shared.Nanoid;
  agentEnabled?: boolean;
  analyticsEnabled?: boolean;
}

export type ScalarDocUpdateProjectResponse = null;

export type ScalarDocDeleteProjectResponse = null;

export interface ScalarDocPublishProjectParams {
  commitSha?: string;
  preview?: boolean;
  configPath?: string;
}

export interface ScalarDocPublishProjectResponse {
  /**
   * @minLength 5
   */
  publishUid: Shared.Nanoid;
}

export interface ScalarDocListProjectConfigParams {
  ref?: string;
}

export interface ScalarDocListProjectConfigResponse {
  path: string;
  content: string;
  ref: string;
  baseToken: string;
}

export interface ScalarDocUpdateProjectConfigParams {
  content: string;
  ref?: string;
  baseToken?: string;
  message?: string;
  path?: string;
}

export interface ScalarDocUpdateProjectConfigResponse {
  commitSha: string | null;
  ref: string;
  baseToken: string;
}

export interface ScalarDocListProjectDomainResponse {
  scalarDomain: string | null;
  customDomain: string | null;
}

export interface ScalarDocListProjectDomainStatusResponse {
  domain: string | null;
  status: 'verified' | 'pending' | 'misconfigured';
  expected: ScalarDocListProjectDomainStatusResponse.Expected | null;
  found: Array<string>;
}

export namespace ScalarDocListProjectDomainStatusResponse {
  export interface Expected {
    type: 'CNAME';
    target: string;
  }
}
export declare namespace ScalarDocs {
  export {
    type GithubProject as GithubProject,
    type DocsProject as DocsProject,
    type ActiveDeployment as ActiveDeployment,
    type Slug as Slug,
    type GithubProjectRepository as GithubProjectRepository,
    type ScalarDocListGuidesResponse as ScalarDocListGuidesResponse,
    type ScalarDocCreateGuideResponse as ScalarDocCreateGuideResponse,
    type ScalarDocPublishGuideResponse as ScalarDocPublishGuideResponse,
    type ScalarDocListProjectsResponse as ScalarDocListProjectsResponse,
    type ScalarDocUpdateProjectResponse as ScalarDocUpdateProjectResponse,
    type ScalarDocDeleteProjectResponse as ScalarDocDeleteProjectResponse,
    type ScalarDocPublishProjectResponse as ScalarDocPublishProjectResponse,
    type ScalarDocListProjectConfigResponse as ScalarDocListProjectConfigResponse,
    type ScalarDocUpdateProjectConfigResponse as ScalarDocUpdateProjectConfigResponse,
    type ScalarDocListProjectDomainResponse as ScalarDocListProjectDomainResponse,
    type ScalarDocListProjectDomainStatusResponse as ScalarDocListProjectDomainStatusResponse,
    type ScalarDocCreateGuideParams as ScalarDocCreateGuideParams,
    type ScalarDocListProjectsParams as ScalarDocListProjectsParams,
    type ScalarDocCreateProjectParams as ScalarDocCreateProjectParams,
    type ScalarDocUpdateProjectParams as ScalarDocUpdateProjectParams,
    type ScalarDocPublishProjectParams as ScalarDocPublishProjectParams,
    type ScalarDocListProjectConfigParams as ScalarDocListProjectConfigParams,
    type ScalarDocUpdateProjectConfigParams as ScalarDocUpdateProjectConfigParams,
  };
}
