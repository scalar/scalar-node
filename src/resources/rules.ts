// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { buildHeaders } from "../internal/headers";
import { path as __scalarPath } from "../internal/utils/path";
import type * as ScalarDocsAPI from "./scalar-docs";
import type * as RegistryAPI from "./registry";

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
   * const listRulesets = await client.rules.listRulesets("namespace");
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
   * @returns {APIPromise<RuleCreateRulesetResponse>} Default Response
   *
   * @example
   * ```ts
   * const createRuleset = await client.rules.createRuleset("namespace", {
   *   title: "",
   *   slug: "",
   *   document: "",
   * });
   * ```
   */
  createRuleset(namespace_: string, body: RuleCreateRulesetParams, options?: RequestOptions): APIPromise<RuleCreateRulesetResponse> {
    return this._client.post(__scalarPath`/v1/rulesets/${namespace_}`, { body: body, ...options });
  }

  /**
   * Update rule metadata by slug.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {RuleUpdateRulesetParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RuleUpdateRulesetResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.rules.updateRuleset("namespace", "slug", {});
   * ```
   */
  updateRuleset(namespace_: string, slug: string, body: RuleUpdateRulesetParams, options?: RequestOptions): APIPromise<RuleUpdateRulesetResponse> {
    return this._client.patch(__scalarPath`/v1/rulesets/${namespace_}/${slug}`, { body: body, ...options });
  }

  /**
   * Delete a rule by slug.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RuleDeleteRulesetResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.rules.deleteRuleset("namespace", "slug");
   * ```
   */
  deleteRuleset(namespace_: string, slug: string, options?: RequestOptions): APIPromise<RuleDeleteRulesetResponse> {
    return this._client.delete(__scalarPath`/v1/rulesets/${namespace_}/${slug}`, options);
  }

  /**
   * Get a rule document by slug.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RuleRetrieveRulesetDocumentResponse>} Default Response
   *
   * @example
   * ```ts
   * const string_ = await client.rules.retrieveRulesetDocument("namespace", "slug");
   * ```
   */
  retrieveRulesetDocument(namespace_: string, slug: string, options?: RequestOptions): APIPromise<RuleRetrieveRulesetDocumentResponse> {
    return this._client.get(__scalarPath`/v1/rulesets/${namespace_}/${slug}`, { ...options, headers: buildHeaders([{ Accept: "text/plain" }, options?.headers]) });
  }

  /**
   * Grant an access group to a rule.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {RuleCreateRulesetAccessGroupParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RuleCreateRulesetAccessGroupResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.rules.createRulesetAccessGroup("namespace", "slug", {
   *   accessGroupSlug: "",
   * });
   * ```
   */
  createRulesetAccessGroup(namespace_: string, slug: string, body: RuleCreateRulesetAccessGroupParams, options?: RequestOptions): APIPromise<RuleCreateRulesetAccessGroupResponse> {
    return this._client.post(__scalarPath`/v1/rulesets/${namespace_}/${slug}/access-group`, { body: body, ...options });
  }

  /**
   * Remove an access group from a rule.
   *
   * @param {string} namespace_
   * @param {string} slug
   * @param {RuleDeleteRulesetAccessGroupParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RuleDeleteRulesetAccessGroupResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.rules.deleteRulesetAccessGroup("namespace", "slug", {
   *   accessGroupSlug: "",
   * });
   * ```
   */
  deleteRulesetAccessGroup(namespace_: string, slug: string, body: RuleDeleteRulesetAccessGroupParams, options?: RequestOptions): APIPromise<RuleDeleteRulesetAccessGroupResponse> {
    return this._client.delete(__scalarPath`/v1/rulesets/${namespace_}/${slug}/access-group`, { body: body, ...options });
  }
}

export type RuleListRulesetsResponse = Array<RuleListRulesetsResponse.RuleListRulesetsResponseItem>;

export namespace RuleListRulesetsResponse {
  export interface RuleListRulesetsResponseItem {
    /**
     * @default nanoid()
     * @minLength 5
     */
    uid: string;
    /**
     * @default ""
     * @maxLength 100
     */
    title: string;
    /**
     * @default ""
     */
    description: string;
    /**
     * @default randomManagedDocSlug()
     * @minLength 3
     * @maxLength 60
     * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
     */
    slug: ScalarDocsAPI.Slug;
    /**
     * @minLength 3
     * @maxLength 50
     * @pattern ^[a-zA-Z0-9-_]+$
     */
    namespace: string;
    /**
     * @default false
     */
    isPrivate: boolean;
  }
}

export interface RuleCreateRulesetParams {
  title: string;
  slug: string;
  document: string;
  description?: string;
  isPrivate?: boolean;
}

export interface RuleCreateRulesetResponse {
  /**
   * @minLength 5
   */
  uid: string;
}

export interface RuleUpdateRulesetParams {
  namespace?: string;
  slug?: string;
  title?: string;
  description?: string;
  isPrivate?: boolean;
}

export type RuleUpdateRulesetResponse = null;

export type RuleDeleteRulesetResponse = null;

export type RuleRetrieveRulesetDocumentResponse = string;

export interface RuleCreateRulesetAccessGroupParams {
  /**
   * @minLength 3
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  accessGroupSlug: ScalarDocsAPI.Slug;
}

export type RuleCreateRulesetAccessGroupResponse = null;

export interface RuleDeleteRulesetAccessGroupParams {
  /**
   * @minLength 3
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  accessGroupSlug: ScalarDocsAPI.Slug;
}

export type RuleDeleteRulesetAccessGroupResponse = null;
export declare namespace Rules {
  export {
    type RuleListRulesetsResponse as RuleListRulesetsResponse,
    type RuleCreateRulesetResponse as RuleCreateRulesetResponse,
    type RuleUpdateRulesetResponse as RuleUpdateRulesetResponse,
    type RuleDeleteRulesetResponse as RuleDeleteRulesetResponse,
    type RuleRetrieveRulesetDocumentResponse as RuleRetrieveRulesetDocumentResponse,
    type RuleCreateRulesetAccessGroupResponse as RuleCreateRulesetAccessGroupResponse,
    type RuleDeleteRulesetAccessGroupResponse as RuleDeleteRulesetAccessGroupResponse,
    type RuleCreateRulesetParams as RuleCreateRulesetParams,
    type RuleUpdateRulesetParams as RuleUpdateRulesetParams,
    type RuleCreateRulesetAccessGroupParams as RuleCreateRulesetAccessGroupParams,
    type RuleDeleteRulesetAccessGroupParams as RuleDeleteRulesetAccessGroupParams,
  };
}
