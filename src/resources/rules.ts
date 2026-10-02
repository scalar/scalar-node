// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';
import type * as Shared from './shared';
import type * as ScalarDocsAPI from './scalar-docs';
import type * as RegistryAPI from './registry';

export class Rules extends APIResource {
  /**
   * List all rulesets in a namespace.
   *
   * @param {string} namespace_
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RuleListRulesetsResponse>} Default Response
   *
   * @example
   * ```ts
   * const rule = await client.rules.listRulesets('acme');
   * ```
   */
  listRulesets(namespace_: string, options?: RequestOptions): APIPromise<RuleListRulesetsResponse> {
    return this._client.get(__scalarPath`/v1/rulesets/${namespace_}`, options);
  }

  /**
   * Create a rule in a namespace.
   *
   * @param {string} namespace_
   * @param {RuleCreateRulesetParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.UID>} Default Response
   *
   * @example
   * ```ts
   * const uid = await client.rules.createRuleset('acme', {
   *   title: 'Acme API Rules',
   *   slug: 'acme-rules',
   *   document: 'extends: ["spectral:oas"]\nrules:\n  info-contact: warn\n',
   * });
   * ```
   */
  createRuleset(
    namespace_: string,
    body: RuleCreateRulesetParams,
    options?: RequestOptions,
  ): APIPromise<Shared.UID> {
    return this._client.post(__scalarPath`/v1/rulesets/${namespace_}`, { body, ...options });
  }

  /**
   * Update rule metadata by slug.
   *
   * @param {string} slug2
   * @param {RuleUpdateRulesetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RuleUpdateRulesetResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.rules.updateRuleset('acme-rules', {
   *   namespace: 'acme',
   * });
   * ```
   */
  updateRuleset(
    slug2: string,
    params: RuleUpdateRulesetParams,
    options?: RequestOptions,
  ): APIPromise<RuleUpdateRulesetResponse> {
    const { namespace, ...body } = params;
    return this._client.patch(__scalarPath`/v1/rulesets/${namespace}/${slug2}`, { body, ...options });
  }

  /**
   * Delete a rule by slug.
   *
   * @param {string} slug
   * @param {RuleDeleteRulesetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RuleDeleteRulesetResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.rules.deleteRuleset('acme-rules', {
   *   namespace: 'acme',
   * });
   * ```
   */
  deleteRuleset(
    slug: string,
    params: RuleDeleteRulesetParams,
    options?: RequestOptions,
  ): APIPromise<RuleDeleteRulesetResponse> {
    const { namespace } = params;
    return this._client.delete(__scalarPath`/v1/rulesets/${namespace}/${slug}`, options);
  }

  /**
   * Get a rule document by slug.
   *
   * @param {string} slug
   * @param {RuleRetrieveRulesetDocumentParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RuleRetrieveRulesetDocumentResponse>} Default Response
   *
   * @example
   * ```ts
   * const response = await client.rules.retrieveRulesetDocument('acme-rules', {
   *   namespace: 'acme',
   * });
   * ```
   */
  retrieveRulesetDocument(
    slug: string,
    params: RuleRetrieveRulesetDocumentParams,
    options?: RequestOptions,
  ): APIPromise<RuleRetrieveRulesetDocumentResponse> {
    const { namespace } = params;
    return this._client.get(__scalarPath`/v1/rulesets/${namespace}/${slug}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Grant an access group to a rule.
   *
   * @param {string} slug
   * @param {RuleCreateRulesetAccessGroupParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RuleCreateRulesetAccessGroupResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.rules.createRulesetAccessGroup('acme-rules', {
   *   namespace: 'acme',
   *   accessGroupSlug: 'acme-api',
   * });
   * ```
   */
  createRulesetAccessGroup(
    slug: string,
    params: RuleCreateRulesetAccessGroupParams,
    options?: RequestOptions,
  ): APIPromise<RuleCreateRulesetAccessGroupResponse> {
    const { namespace, ...body } = params;
    return this._client.post(__scalarPath`/v1/rulesets/${namespace}/${slug}/access-group`, {
      body,
      ...options,
    });
  }

  /**
   * Remove an access group from a rule.
   *
   * @param {string} slug
   * @param {RuleDeleteRulesetAccessGroupParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RuleDeleteRulesetAccessGroupResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.rules.deleteRulesetAccessGroup('acme-rules', {
   *   namespace: 'acme',
   *   accessGroupSlug: 'acme-api',
   * });
   * ```
   */
  deleteRulesetAccessGroup(
    slug: string,
    params: RuleDeleteRulesetAccessGroupParams,
    options?: RequestOptions,
  ): APIPromise<RuleDeleteRulesetAccessGroupResponse> {
    const { namespace, ...body } = params;
    return this._client.delete(__scalarPath`/v1/rulesets/${namespace}/${slug}/access-group`, {
      body,
      ...options,
    });
  }
}

export interface Rule {
  /**
   * @minLength 5
   */
  uid: Shared.Nanoid;
  /**
   * @maxLength 100
   */
  title: string;
  description: string;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug: ScalarDocsAPI.Slug;
  /**
   * @minLength 2
   * @maxLength 50
   * @pattern ^[a-zA-Z0-9-_]+$
   */
  namespace: Shared.Namespace;
  isPrivate: boolean;
}

export type RuleListRulesetsResponse = Array<Rule>;

export interface RuleCreateRulesetParams {
  title: string;
  slug: string;
  document: string;
  description?: string;
  isPrivate?: boolean;
}

export interface RuleUpdateRulesetParams {
  /**
   * Path param
   */
  namespace: string;
  /**
   * Body param
   */
  slug?: string;
  /**
   * Body param
   */
  title?: string;
  /**
   * Body param
   */
  description?: string;
  /**
   * Body param
   */
  isPrivate?: boolean;
}

export type RuleUpdateRulesetResponse = null;

export interface RuleDeleteRulesetParams {
  namespace: string;
}

export type RuleDeleteRulesetResponse = null;

export interface RuleRetrieveRulesetDocumentParams {
  namespace: string;
}

export type RuleRetrieveRulesetDocumentResponse = string;

export interface RuleCreateRulesetAccessGroupParams {
  /**
   * Path param
   */
  namespace: string;
  /**
   * Body param
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  accessGroupSlug: ScalarDocsAPI.Slug;
}

export type RuleCreateRulesetAccessGroupResponse = null;

export interface RuleDeleteRulesetAccessGroupParams {
  /**
   * Path param
   */
  namespace: string;
  /**
   * Body param
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  accessGroupSlug: ScalarDocsAPI.Slug;
}

export type RuleDeleteRulesetAccessGroupResponse = null;
export declare namespace Rules {
  export {
    type Rule as Rule,
    type RuleListRulesetsResponse as RuleListRulesetsResponse,
    type RuleUpdateRulesetResponse as RuleUpdateRulesetResponse,
    type RuleDeleteRulesetResponse as RuleDeleteRulesetResponse,
    type RuleRetrieveRulesetDocumentResponse as RuleRetrieveRulesetDocumentResponse,
    type RuleCreateRulesetAccessGroupResponse as RuleCreateRulesetAccessGroupResponse,
    type RuleDeleteRulesetAccessGroupResponse as RuleDeleteRulesetAccessGroupResponse,
    type RuleCreateRulesetParams as RuleCreateRulesetParams,
    type RuleUpdateRulesetParams as RuleUpdateRulesetParams,
    type RuleDeleteRulesetParams as RuleDeleteRulesetParams,
    type RuleRetrieveRulesetDocumentParams as RuleRetrieveRulesetDocumentParams,
    type RuleCreateRulesetAccessGroupParams as RuleCreateRulesetAccessGroupParams,
    type RuleDeleteRulesetAccessGroupParams as RuleDeleteRulesetAccessGroupParams,
  };
}
