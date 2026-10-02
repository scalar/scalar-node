// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';
import type * as ScalarDocsAPI from '../scalar-docs';
import * as DomainsAPI from './domains';
import {
  Domains,
  type EmailDomain,
  type DomainCreateResponse,
  type DomainDeleteResponse,
  type DomainCreateParams,
  type DomainDeleteParams,
} from './domains';

export class AccessGroups extends APIResource {
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);

  /**
   * Create a group for the current team. Requires docs edit permission and the access groups billing feature. Domains are exact email domains, without wildcards or implicit subdomain matching.
   *
   * @param {AccessGroupCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccessGroupCreateResponse>} Default Response
   *
   * @example
   * ```ts
   * const accessGroup = await client.accessGroups.create({});
   * ```
   */
  create(body: AccessGroupCreateParams, options?: RequestOptions): APIPromise<AccessGroupCreateResponse> {
    return this._client.post('/v1/access-groups', { body, ...options });
  }

  /**
   * Get a group and its email and domain allowlists by slug.
   *
   * @param {ScalarDocsAPI.Slug} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccessGroupRetrieveResponse>} Default Response
   *
   * @example
   * ```ts
   * const accessGroup = await client.accessGroups.retrieve('slug');
   * ```
   */
  retrieve(slug: ScalarDocsAPI.Slug, options?: RequestOptions): APIPromise<AccessGroupRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/access-groups/${slug}`, options);
  }

  /**
   * Update group metadata. Requires docs edit permission. After changing the slug, use the new slug in subsequent requests.
   *
   * @param {ScalarDocsAPI.Slug} slug
   * @param {AccessGroupUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccessGroupUpdateResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.accessGroups.update('slug', {});
   * ```
   */
  update(
    slug: ScalarDocsAPI.Slug,
    body: AccessGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AccessGroupUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/access-groups/${slug}`, { body, ...options });
  }

  /**
   * Delete a group and remove its project assignments. Requires docs edit permission.
   *
   * @param {ScalarDocsAPI.Slug} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccessGroupDeleteResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.accessGroups.delete('slug');
   * ```
   */
  delete(slug: ScalarDocsAPI.Slug, options?: RequestOptions): APIPromise<AccessGroupDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/access-groups/${slug}`, options);
  }
}

export type AccessGroupName = string;

export interface AccessGroupCreateParams {
  /**
   * @maxLength 40
   */
  name?: AccessGroupName;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug?: ScalarDocsAPI.Slug;
  allowedDomains?: unknown;
}

export interface AccessGroupCreateResponse {
  /**
   * @minLength 5
   */
  uid: Shared.Nanoid;
  /**
   * @maxLength 40
   */
  name: AccessGroupName;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug: ScalarDocsAPI.Slug;
  allowedDomains: unknown;
  allowedEmails: unknown;
}

export interface AccessGroupRetrieveResponse {
  /**
   * @minLength 5
   */
  uid: Shared.Nanoid;
  /**
   * @maxLength 40
   */
  name: AccessGroupName;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug: ScalarDocsAPI.Slug;
  allowedDomains: unknown;
  allowedEmails: unknown;
}

export interface AccessGroupUpdateParams {
  /**
   * @maxLength 40
   */
  name?: AccessGroupName;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug?: ScalarDocsAPI.Slug;
}

export type AccessGroupUpdateResponse = null;

export type AccessGroupDeleteResponse = null;
AccessGroups.Domains = Domains;

export declare namespace AccessGroups {
  export {
    type AccessGroupName as AccessGroupName,
    type AccessGroupCreateResponse as AccessGroupCreateResponse,
    type AccessGroupRetrieveResponse as AccessGroupRetrieveResponse,
    type AccessGroupUpdateResponse as AccessGroupUpdateResponse,
    type AccessGroupDeleteResponse as AccessGroupDeleteResponse,
    type AccessGroupCreateParams as AccessGroupCreateParams,
    type AccessGroupUpdateParams as AccessGroupUpdateParams,
  };

  export {
    Domains as Domains,
    type EmailDomain as EmailDomain,
    type DomainCreateResponse as DomainCreateResponse,
    type DomainDeleteResponse as DomainDeleteResponse,
    type DomainCreateParams as DomainCreateParams,
    type DomainDeleteParams as DomainDeleteParams,
  };
}
