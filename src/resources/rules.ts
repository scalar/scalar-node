// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class RuleResource extends APIResource {
  /**
   * List all rulesets in a namespace.
   */
  listRulesets(namespace_: string, options?: RequestOptions): APIPromise<RuleListRulesetsResponse> {
    return this._client.get(__scalarPath`/v1/rulesets/${namespace_}`, options);
  }
  /**
   * Create a rule in a namespace.
   */
  createRuleset(namespace_: string, body: RuleCreateRulesetParams, options?: RequestOptions): APIPromise<Uid> {
    return this._client.post(__scalarPath`/v1/rulesets/${namespace_}`, { body: body, ...options });
  }
  /**
   * Get a rule document by slug.
   */
  retrieveRulesetDocument(namespace_: string, slug: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(__scalarPath`/v1/rulesets/${namespace_}/${slug}`, options);
  }
  /**
   * Delete a rule by slug.
   */
  deleteRuleset(namespace_: string, slug: string, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/rulesets/${namespace_}/${slug}`, options);
  }
  /**
   * Update rule metadata by slug.
   */
  updateRuleset(namespace_: string, slug: string, body: RuleUpdateRulesetParams, options?: RequestOptions): APIPromise<null> {
    return this._client.patch(__scalarPath`/v1/rulesets/${namespace_}/${slug}`, { body: body, ...options });
  }
  /**
   * Grant an access group to a rule.
   */
  createRulesetAccessGroup(namespace_: string, slug: string, body: AccessGroup, options?: RequestOptions): APIPromise<null> {
    return this._client.post(__scalarPath`/v1/rulesets/${namespace_}/${slug}/access-group`, { body: body, ...options });
  }
  /**
   * Remove an access group from a rule.
   */
  deleteRulesetAccessGroup(namespace_: string, slug: string, body: AccessGroup, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/rulesets/${namespace_}/${slug}/access-group`, { body: body, ...options });
  }
}

/**
 * Ruleset metadata.
 */
export interface Rule {
  /**
   * Unique Nano ID identifier.
   */
  uid: Nanoid;
  title: string;
  description: string;
  /**
   * URL-safe slug identifier.
   */
  slug: Slug;
  /**
   * Workspace namespace identifier.
   */
  namespace: Namespace;
  /**
   * Whether the resource is private.
   */
  isPrivate: boolean;
}

/**
 * Unique Nano ID identifier.
 */
export type Nanoid = string;

/**
 * URL-safe slug identifier.
 */
export type Slug = string;

/**
 * Workspace namespace identifier.
 */
export type Namespace = string;

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

/**
 * Object UID wrapper.
 */
export interface Uid {
  /**
   * Unique Nano ID identifier.
   */
  uid: Nanoid;
}

/**
 * Access group assignment payload.
 */
export interface AccessGroup {
  /**
   * URL-safe slug identifier.
   */
  accessGroupSlug: Slug;
}

export type RuleListRulesetsResponse = Array<Rule>;

export interface RuleCreateRulesetParams {
  title: string;
  /**
   * URL-safe resource slug.
   */
  slug: string;
  /**
   * OpenAPI, schema, theme, or guide document contents.
   */
  document: string;
  description?: string;
  /**
   * Whether the resource is private.
   */
  isPrivate?: boolean;
}

export interface RuleUpdateRulesetParams {
  /**
   * Workspace namespace that owns the resource.
   */
  namespace?: string;
  /**
   * URL-safe resource slug.
   */
  slug?: string;
  title?: string;
  description?: string;
  /**
   * Whether the resource is private.
   */
  isPrivate?: boolean;
}

export interface RuleCreateRulesetAccessGroupParams {
  /**
   * URL-safe slug identifier.
   */
  accessGroupSlug: Slug;
}

export interface RuleDeleteRulesetAccessGroupParams {
  /**
   * URL-safe slug identifier.
   */
  accessGroupSlug: Slug;
}

