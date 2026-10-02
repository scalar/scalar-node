// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as ScalarDocsAPI from '../scalar-docs';
import type * as Shared from '../shared';

export class Domains extends APIResource {
  /**
   * Allow an exact email domain in a group. Requires docs edit permission. A group supports up to 1000 domains.
   *
   * @param {ScalarDocsAPI.Slug} slug
   * @param {DomainCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DomainCreateResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.accessGroups.domains.create('slug', {
   *   domain: '',
   * });
   * ```
   */
  create(
    slug: ScalarDocsAPI.Slug,
    body: DomainCreateParams,
    options?: RequestOptions,
  ): APIPromise<DomainCreateResponse> {
    return this._client.post(__scalarPath`/v1/access-groups/${slug}/domains`, { body, ...options });
  }

  /**
   * Remove an exact email domain from a group. Requires docs edit permission. Other allowed domains and emails are preserved.
   *
   * @param {ScalarDocsAPI.Slug} slug
   * @param {DomainDeleteParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DomainDeleteResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.accessGroups.domains.delete('slug', {
   *   domain: '',
   * });
   * ```
   */
  delete(
    slug: ScalarDocsAPI.Slug,
    body: DomainDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DomainDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/access-groups/${slug}/domains`, { body, ...options });
  }
}

export type EmailDomain = string;

export interface DomainCreateParams {
  /**
   * @maxLength 253
   * @pattern ^([A-Za-z0-9]+(-[A-Za-z0-9]+)*\.)+[A-Za-z]{2,}$
   */
  domain: EmailDomain;
}

export type DomainCreateResponse = null;

export interface DomainDeleteParams {
  /**
   * @maxLength 253
   * @pattern ^([A-Za-z0-9]+(-[A-Za-z0-9]+)*\.)+[A-Za-z]{2,}$
   */
  domain: EmailDomain;
}

export type DomainDeleteResponse = null;
export declare namespace Domains {
  export {
    type EmailDomain as EmailDomain,
    type DomainCreateResponse as DomainCreateResponse,
    type DomainDeleteResponse as DomainDeleteResponse,
    type DomainCreateParams as DomainCreateParams,
    type DomainDeleteParams as DomainDeleteParams,
  };
}
