// File generated from our OpenAPI spec by Scalar. See README.md for details.

export * from './shared';
export { Registry } from './registry';
export type {
  APIDocument,
  Version,
  AccessGroup,
  Method,
  RegistryListAllAPIDocumentsResponse,
  RegistryListAPIDocumentsResponse,
  RegistryCreateAPIDocumentParams,
  RegistryCreateAPIDocumentResponse,
  RegistryUpdateAPIDocumentParams,
  RegistryUpdateAPIDocumentResponse,
  RegistryDeleteAPIDocumentParams,
  RegistryDeleteAPIDocumentResponse,
  RegistryRetrieveAPIDocumentVersionParams,
  RegistryRetrieveAPIDocumentVersionResponse,
  RegistryUpdateAPIDocumentVersionParams,
  RegistryUpdateAPIDocumentVersionResponse,
  RegistryDeleteAPIDocumentVersionParams,
  RegistryDeleteAPIDocumentVersionResponse,
  RegistryListAPIDocumentVersionMetadataParams,
  RegistryCreateAPIDocumentVersionParams,
  RegistryCreateAPIDocumentAccessGroupParams,
  RegistryCreateAPIDocumentAccessGroupResponse,
  RegistryDeleteAPIDocumentAccessGroupParams,
  RegistryDeleteAPIDocumentAccessGroupResponse,
} from './registry';
export { Schemas } from './schemas/schemas';
export type {
  Schema,
  ManagedSchemaVersion,
  SchemaListResponse,
  SchemaCreateParams,
  SchemaUpdateParams,
  SchemaUpdateResponse,
  SchemaDeleteParams,
  SchemaDeleteResponse,
} from './schemas/schemas';
export { LoginPortals } from './login-portals';
export type {
  LoginPortalEmail,
  LoginPortalPage,
  LoginPortal,
  LoginPortalRetrieveResponse,
  LoginPortalUpdateParams,
  LoginPortalUpdateResponse,
  LoginPortalDeleteResponse,
  LoginPortalCreateParams,
  LoginPortalListResponse,
} from './login-portals';
export { AccessGroups } from './access-groups/access-groups';
export type {
  AccessGroupName,
  AccessGroupCreateParams,
  AccessGroupCreateResponse,
  AccessGroupRetrieveResponse,
  AccessGroupUpdateParams,
  AccessGroupUpdateResponse,
  AccessGroupDeleteResponse,
} from './access-groups/access-groups';
export { Rules } from './rules';
export type {
  Rule,
  RuleListRulesetsResponse,
  RuleCreateRulesetParams,
  RuleUpdateRulesetParams,
  RuleUpdateRulesetResponse,
  RuleDeleteRulesetParams,
  RuleDeleteRulesetResponse,
  RuleRetrieveRulesetDocumentParams,
  RuleRetrieveRulesetDocumentResponse,
  RuleCreateRulesetAccessGroupParams,
  RuleCreateRulesetAccessGroupResponse,
  RuleDeleteRulesetAccessGroupParams,
  RuleDeleteRulesetAccessGroupResponse,
} from './rules';
export { Themes } from './themes';
export type {
  Theme,
  ThemeListResponse,
  ThemeCreateParams,
  ThemeUpdateParams,
  ThemeUpdateResponse,
  ThemeReplaceDocumentParams,
  ThemeReplaceDocumentResponse,
  ThemeDeleteResponse,
  ThemeRetrieveResponse,
} from './themes';
export { Teams } from './teams/teams';
export type { Team, TeamName, TeamImage, TeamListResponse } from './teams/teams';
export { ScalarDocs } from './scalar-docs';
export type {
  GithubProject,
  DocsProject,
  ActiveDeployment,
  Slug,
  GithubProjectRepository,
  ScalarDocListGuidesResponse,
  ScalarDocCreateGuideParams,
  ScalarDocCreateGuideResponse,
  ScalarDocPublishGuideResponse,
  ScalarDocListProjectsParams,
  ScalarDocListProjectsResponse,
  ScalarDocCreateProjectParams,
  ScalarDocUpdateProjectParams,
  ScalarDocUpdateProjectResponse,
  ScalarDocDeleteProjectResponse,
  ScalarDocPublishProjectParams,
  ScalarDocPublishProjectResponse,
  ScalarDocListProjectConfigParams,
  ScalarDocListProjectConfigResponse,
  ScalarDocUpdateProjectConfigParams,
  ScalarDocUpdateProjectConfigResponse,
  ScalarDocListProjectDomainResponse,
  ScalarDocListProjectDomainStatusResponse,
} from './scalar-docs';
export { Namespaces } from './namespaces';
export type { NamespaceListResponse } from './namespaces';
export { Authentication } from './authentication';
export type {
  User,
  TeamSummary,
  AuthenticationExchangePersonalTokenParams,
  AuthenticationExchangePersonalTokenResponse,
} from './authentication';
export { Sdks } from './sdks/sdks';
export type {
  Sdk,
  SdkTargetSummary,
  SdkVersion,
  SdkListParams,
  SdkListResponse,
  SdkCreateParams,
  SdkUpdateParams,
  SdkUpdateResponse,
  SdkDeleteResponse,
  SdkBuildParams,
  SdkBuildResponse,
} from './sdks/sdks';
export { Mcp } from './mcp/mcp';
