// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class Rules extends APIResource {
  /**
   * List all rulesets in a namespace.
   */
  listRulesets(namespace: string, options?: RequestOptions): APIPromise<RuleListRulesetsResponse> {
    return this._client.get(__scalarPath`/v1/rulesets/${namespace}`, options);
  }
  /**
   * Create a rule in a namespace.
   */
  createRuleset(namespace: string, body: RuleCreateRulesetParams, options?: RequestOptions): APIPromise<UID> {
    return this._client.post(__scalarPath`/v1/rulesets/${namespace}`, { body: body, ...options });
  }
  /**
   * Update rule metadata by slug.
   */
  updateRuleset(namespace: string, slug: string, body: RuleUpdateRulesetParams, options?: RequestOptions): APIPromise<null> {
    return this._client.patch(__scalarPath`/v1/rulesets/${namespace}/${slug}`, { body: body, ...options });
  }
  /**
   * Delete a rule by slug.
   */
  deleteRuleset(namespace: string, slug: string, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/rulesets/${namespace}/${slug}`, options);
  }
  /**
   * Get a rule document by slug.
   */
  retrieveRulesetDocument(namespace: string, slug: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(__scalarPath`/v1/rulesets/${namespace}/${slug}`, options);
  }
  /**
   * Grant an access group to a rule.
   */
  createRulesetAccessGroup(namespace: string, slug: string, body: RuleCreateRulesetAccessGroupParams, options?: RequestOptions): APIPromise<null> {
    return this._client.post(__scalarPath`/v1/rulesets/${namespace}/${slug}/access-group`, { body: body, ...options });
  }
  /**
   * Remove an access group from a rule.
   */
  deleteRulesetAccessGroup(namespace: string, slug: string, body: RuleDeleteRulesetAccessGroupParams, options?: RequestOptions): APIPromise<null> {
    return this._client.delete(__scalarPath`/v1/rulesets/${namespace}/${slug}/access-group`, { body: body, ...options });
  }
}

export interface Rule {
  uid: Nanoid;
  title: string;
  description: string;
  slug: Slug;
  namespace: Namespace;
  isPrivate: boolean;
}

export type Nanoid = string;

export type Slug = string;

export type Namespace = string;

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

export interface UID {
  uid: Nanoid;
}

export interface AccessGroup {
  accessGroupSlug: Slug;
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
  namespace?: string;
  slug?: string;
  title?: string;
  description?: string;
  isPrivate?: boolean;
}

export interface RuleCreateRulesetAccessGroupParams {
  accessGroupSlug: Slug;
}

export interface RuleDeleteRulesetAccessGroupParams {
  accessGroupSlug: Slug;
}
export declare namespace Rules {
  export { type Rule as Rule, type Nanoid as Nanoid, type Slug as Slug, type Namespace as Namespace, type Value400 as Value400, type Value401 as Value401, type Value403 as Value403, type Value404 as Value404, type Value422 as Value422, type Value500 as Value500, type UID as UID, type AccessGroup as AccessGroup, type RuleListRulesetsResponse as RuleListRulesetsResponse, type RuleCreateRulesetParams as RuleCreateRulesetParams, type RuleUpdateRulesetParams as RuleUpdateRulesetParams, type RuleCreateRulesetAccessGroupParams as RuleCreateRulesetAccessGroupParams, type RuleDeleteRulesetAccessGroupParams as RuleDeleteRulesetAccessGroupParams };
}
export { Rules as RuleResource };
