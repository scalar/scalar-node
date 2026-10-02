# Scalar TypeScript API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`Registry`](#registry)
  - [List all API Documents](#list-all-api-documents)
  - [List API Documents in a namespace](#list-api-documents-in-a-namespace)
  - [Create API Document](#create-api-document)
  - [Update API Document metadata](#update-api-document-metadata)
  - [Delete API Document](#delete-api-document)
  - [Get API Document](#get-api-document)
  - [Update API Document version](#update-api-document-version)
  - [Delete API Document version](#delete-api-document-version)
  - [Get API Document version metadata](#get-api-document-version-metadata)
  - [Create API Document version](#create-api-document-version)
  - [Add access group](#add-access-group)
  - [Remove access group](#remove-access-group)
- [`Schemas`](#schemas)
  - [List all shared components](#list-all-shared-components)
  - [Create a shared component](#create-a-shared-component)
  - [Update shared component metadata](#update-shared-component-metadata)
  - [Delete a shared component](#delete-a-shared-component)
  - [`Schemas Version`](#schemas-version)
    - [Get a shared component document](#get-a-shared-component-document)
    - [Delete a shared component version](#delete-a-shared-component-version)
    - [Create a shared component version](#create-a-shared-component-version)
  - [`Schemas AccessGroup`](#schemas-accessgroup)
    - [Add shared component access group](#add-shared-component-access-group)
    - [Remove shared component access group](#remove-shared-component-access-group)
- [`LoginPortals`](#loginportals)
  - [Get a login portal](#get-a-login-portal)
  - [Update portal metadata](#update-portal-metadata)
  - [Delete a login portal](#delete-a-login-portal)
  - [Create a portal](#create-a-portal)
  - [List all portals](#list-all-portals)
- [`AccessGroups`](#accessgroups)
  - [Create an access group](#create-an-access-group)
  - [Get an access group](#get-an-access-group)
  - [Update an access group](#update-an-access-group)
  - [Delete an access group](#delete-an-access-group)
  - [`AccessGroups Domains`](#accessgroups-domains)
    - [Add an allowed email domain](#add-an-allowed-email-domain)
    - [Remove an allowed email domain](#remove-an-allowed-email-domain)
- [`Rules`](#rules)
  - [List all rules](#list-all-rules)
  - [Create a rule](#create-a-rule)
  - [Update rule metadata](#update-rule-metadata)
  - [Delete a rule](#delete-a-rule)
  - [Get a rule](#get-a-rule)
  - [Add rule access group](#add-rule-access-group)
  - [Remove rule access group](#remove-rule-access-group)
- [`Themes`](#themes)
  - [List all themes](#list-all-themes)
  - [Create a theme](#create-a-theme)
  - [Update theme metadata](#update-theme-metadata)
  - [Update theme document](#update-theme-document)
  - [Delete a theme](#delete-a-theme)
  - [Get a theme](#get-a-theme)
- [`Teams`](#teams)
  - [List teams](#list-teams)
  - [`Teams Members`](#teams-members)
    - [List team members](#list-team-members)
    - [Change a member role](#change-a-member-role)
    - [Remove a member](#remove-a-member)
  - [`Teams Invites`](#teams-invites)
    - [Invite a member](#invite-a-member)
    - [Resend an invite](#resend-an-invite)
    - [Cancel an invite](#cancel-an-invite)
- [`ScalarDocs`](#scalardocs)
  - [List all projects](#list-all-projects)
  - [Create a project](#create-a-project)
  - [Publish a project](#publish-a-project)
  - [List all docs projects](#list-all-docs-projects)
  - [Create a docs project](#create-a-docs-project)
  - [Get a docs project](#get-a-docs-project)
  - [Update a docs project](#update-a-docs-project)
  - [Delete a docs project](#delete-a-docs-project)
  - [Publish a docs project](#publish-a-docs-project)
  - [Read the site config](#read-the-site-config)
  - [Write the site config](#write-the-site-config)
  - [Get the site domains](#get-the-site-domains)
  - [Check domain DNS](#check-domain-dns)
- [`Namespaces`](#namespaces)
  - [List namespaces](#list-namespaces)
- [`Authentication`](#authentication)
  - [Exchange token](#exchange-token)
  - [Get current user](#get-current-user)
- [`Sdks`](#sdks)
  - [List all SDKs](#list-all-sdks)
  - [Create an SDK](#create-an-sdk)
  - [Get an SDK](#get-an-sdk)
  - [Update an SDK](#update-an-sdk)
  - [Delete an SDK](#delete-an-sdk)
  - [Build an SDK](#build-an-sdk)
  - [`Sdks Versions`](#sdks-versions)
    - [Create an SDK version](#create-an-sdk-version)
    - [Delete an SDK version](#delete-an-sdk-version)
  - [`Sdks Repositories`](#sdks-repositories)
    - [Link a repository](#link-a-repository)
    - [Unlink a repository](#unlink-a-repository)
    - [Update publishing settings](#update-publishing-settings)
- [`Mcp`](#mcp)
  - [`Mcp Servers`](#mcp-servers)
    - [List all MCP servers](#list-all-mcp-servers)
    - [Create an MCP server](#create-an-mcp-server)
    - [Get an MCP server](#get-an-mcp-server)
    - [Update an MCP server](#update-an-mcp-server)
    - [Delete an MCP server](#delete-an-mcp-server)
    - [`Mcp Servers Installations`](#mcp-servers-installations)
      - [List installations](#list-installations)
      - [Create an installation](#create-an-installation)
      - [Get an installation](#get-an-installation)
      - [Update an installation](#update-an-installation)
      - [Delete an installation](#delete-an-installation)
      - [Add an access group](#add-an-access-group)
      - [Remove an access group](#remove-an-access-group)

## Setup

```ts
import Scalar from '@scalar/sdk';

const client = new Scalar({
  bearerAuth: process.env['BEARER_AUTH'], // defaults to the BEARER_AUTH env var
});
```

## `Registry`

Registry

### List all API Documents

List all API documents across every namespace the caller can access.

| Direction | Type |
| --- | --- |
| Response | [`RegistryListAllAPIDocumentsResponse`](./src/resources/registry.ts) |

```ts
const registry = await client.registry.listAllAPIDocuments();
```

### List API Documents in a namespace

List API documents in a namespace.

| Direction | Type |
| --- | --- |
| Response | [`RegistryListAPIDocumentsResponse`](./src/resources/registry.ts) |

```ts
const registry = await client.registry.listAPIDocuments('acme');
```

### Create API Document

Create an API document.

| Direction | Type |
| --- | --- |
| Request | [`RegistryCreateAPIDocumentParams`](./src/resources/registry.ts) |
| Response | [`RegistryCreateAPIDocumentResponse`](./src/resources/registry.ts) |

```ts
const registry = await client.registry.createAPIDocument('acme', {
  title: 'Acme API',
  version: '1.2.0',
  slug: 'acme-api',
  document: '{"openapi":"3.1.0","info":{"title":"Acme API","version":"1.2.0"},"paths":{}}',
});
```

### Update API Document metadata

Update metadata for an API document.

| Direction | Type |
| --- | --- |
| Request | [`RegistryUpdateAPIDocumentParams`](./src/resources/registry.ts) |
| Response | [`RegistryUpdateAPIDocumentResponse`](./src/resources/registry.ts) |

```ts
await client.registry.updateAPIDocument('acme-api', {
  namespace: 'acme',
});
```

### Delete API Document

Delete an API document and all versions.

| Direction | Type |
| --- | --- |
| Request | [`RegistryDeleteAPIDocumentParams`](./src/resources/registry.ts) |
| Response | [`RegistryDeleteAPIDocumentResponse`](./src/resources/registry.ts) |

```ts
await client.registry.deleteAPIDocument('acme-api', {
  namespace: 'acme',
});
```

### Get API Document

Get a specific API document version.

| Direction | Type |
| --- | --- |
| Request | [`RegistryRetrieveAPIDocumentVersionParams`](./src/resources/registry.ts) |
| Response | [`RegistryRetrieveAPIDocumentVersionResponse`](./src/resources/registry.ts) |

```ts
const response = await client.registry.retrieveAPIDocumentVersion('1.2.0', {
  namespace: 'acme',
  slug: 'acme-api',
});
```

### Update API Document version

Update the registry file content for an API document version.

| Direction | Type |
| --- | --- |
| Request | [`RegistryUpdateAPIDocumentVersionParams`](./src/resources/registry.ts) |
| Response | [`RegistryUpdateAPIDocumentVersionResponse`](./src/resources/registry.ts) |

```ts
const registry = await client.registry.updateAPIDocumentVersion('1.2.0', {
  namespace: 'acme',
  slug: 'acme-api',
  document: '{"openapi":"3.1.0","info":{"title":"Acme API","version":"1.2.0"},"paths":{}}',
});
```

### Delete API Document version

Delete a specific API document version.

| Direction | Type |
| --- | --- |
| Request | [`RegistryDeleteAPIDocumentVersionParams`](./src/resources/registry.ts) |
| Response | [`RegistryDeleteAPIDocumentVersionResponse`](./src/resources/registry.ts) |

```ts
await client.registry.deleteAPIDocumentVersion('1.2.0', {
  namespace: 'acme',
  slug: 'acme-api',
});
```

### Get API Document version metadata

Get metadata (uid, content shas, version sha, tags) for a specific API document version.

| Direction | Type |
| --- | --- |
| Request | [`RegistryListAPIDocumentVersionMetadataParams`](./src/resources/registry.ts) |
| Response | [`ManagedDocVersion`](./src/resources/shared.ts) |

```ts
const managedDocVersion = await client.registry.listAPIDocumentVersionMetadata('1.2.0', {
  namespace: 'acme',
  slug: 'acme-api',
});
```

### Create API Document version

Create a new API document version.

| Direction | Type |
| --- | --- |
| Request | [`RegistryCreateAPIDocumentVersionParams`](./src/resources/registry.ts) |
| Response | [`ManagedDocVersion`](./src/resources/shared.ts) |

```ts
const managedDocVersion = await client.registry.createAPIDocumentVersion('acme-api', {
  namespace: 'acme',
  version: '1.2.0',
  document: '{"openapi":"3.1.0","info":{"title":"Acme API","version":"1.2.0"},"paths":{}}',
});
```

### Add access group

Add an access group to an API document.

| Direction | Type |
| --- | --- |
| Request | [`RegistryCreateAPIDocumentAccessGroupParams`](./src/resources/registry.ts) |
| Response | [`RegistryCreateAPIDocumentAccessGroupResponse`](./src/resources/registry.ts) |

```ts
await client.registry.createAPIDocumentAccessGroup('acme-api', {
  namespace: 'acme',
  accessGroupSlug: 'acme-api',
});
```

### Remove access group

Remove an access group from an API document.

| Direction | Type |
| --- | --- |
| Request | [`RegistryDeleteAPIDocumentAccessGroupParams`](./src/resources/registry.ts) |
| Response | [`RegistryDeleteAPIDocumentAccessGroupResponse`](./src/resources/registry.ts) |

```ts
await client.registry.deleteAPIDocumentAccessGroup('acme-api', {
  namespace: 'acme',
  accessGroupSlug: 'acme-api',
});
```

## `Schemas`

Schemas

### List all shared components

List schemas in a namespace.

| Direction | Type |
| --- | --- |
| Response | [`SchemaListResponse`](./src/resources/schemas/schemas.ts) |

```ts
const schema = await client.schemas.list('acme');
```

### Create a shared component

Create a schema in a namespace.

| Direction | Type |
| --- | --- |
| Request | [`SchemaCreateParams`](./src/resources/schemas/schemas.ts) |
| Response | [`UID`](./src/resources/shared.ts) |

```ts
const uid = await client.schemas.create('acme', {
  title: 'Customer',
  version: '1.2.0',
  slug: 'customer',
  document: '{"type":"object","properties":{"name":{"type":"string","examples":["Acme"]}}}',
});
```

### Update shared component metadata

Update schema metadata.

| Direction | Type |
| --- | --- |
| Request | [`SchemaUpdateParams`](./src/resources/schemas/schemas.ts) |
| Response | [`SchemaUpdateResponse`](./src/resources/schemas/schemas.ts) |

```ts
await client.schemas.update('customer', {
  namespace: 'acme',
});
```

### Delete a shared component

Delete a schema and all related versions.

| Direction | Type |
| --- | --- |
| Request | [`SchemaDeleteParams`](./src/resources/schemas/schemas.ts) |
| Response | [`SchemaDeleteResponse`](./src/resources/schemas/schemas.ts) |

```ts
await client.schemas.delete('customer', {
  namespace: 'acme',
});
```

### `Schemas Version`

Schemas

#### Get a shared component document

Get a specific schema version document.

| Direction | Type |
| --- | --- |
| Request | [`VersionRetrieveParams`](./src/resources/schemas/version.ts) |
| Response | [`VersionRetrieveResponse`](./src/resources/schemas/version.ts) |

```ts
const response = await client.schemas.version.retrieve('1.2.0', {
  namespace: 'acme',
  slug: 'customer',
});
```

#### Delete a shared component version

Delete a schema version.

| Direction | Type |
| --- | --- |
| Request | [`VersionDeleteParams`](./src/resources/schemas/version.ts) |
| Response | [`VersionDeleteResponse`](./src/resources/schemas/version.ts) |

```ts
await client.schemas.version.delete('1.2.0', {
  namespace: 'acme',
  slug: 'customer',
});
```

#### Create a shared component version

Create a schema version.

| Direction | Type |
| --- | --- |
| Request | [`VersionCreateParams`](./src/resources/schemas/version.ts) |
| Response | [`VersionCreateResponse`](./src/resources/schemas/version.ts) |

```ts
const version = await client.schemas.version.create('customer', {
  namespace: 'acme',
  version: '1.2.0',
  document: '{"type":"object","properties":{"name":{"type":"string","examples":["Acme"]}}}',
});
```

### `Schemas AccessGroup`

Schemas

#### Add shared component access group

Add an access group to a schema.

| Direction | Type |
| --- | --- |
| Request | [`AccessGroupCreateParams`](./src/resources/schemas/access-group.ts) |
| Response | [`AccessGroupCreateResponse`](./src/resources/schemas/access-group.ts) |

```ts
await client.schemas.accessGroup.create('customer', {
  namespace: 'acme',
  accessGroupSlug: 'acme-api',
});
```

#### Remove shared component access group

Remove an access group from a schema.

| Direction | Type |
| --- | --- |
| Request | [`AccessGroupDeleteParams`](./src/resources/schemas/access-group.ts) |
| Response | [`AccessGroupDeleteResponse`](./src/resources/schemas/access-group.ts) |

```ts
await client.schemas.accessGroup.delete('customer', {
  namespace: 'acme',
  accessGroupSlug: 'acme-api',
});
```

## `LoginPortals`

Login Portals

### Get a login portal

Get a login portal by slug.

| Direction | Type |
| --- | --- |
| Response | [`LoginPortalRetrieveResponse`](./src/resources/login-portals.ts) |

```ts
const loginPortal = await client.loginPortals.retrieve('acme-login');
```

### Update portal metadata

Update metadata for a login portal.

| Direction | Type |
| --- | --- |
| Request | [`LoginPortalUpdateParams`](./src/resources/login-portals.ts) |
| Response | [`LoginPortalUpdateResponse`](./src/resources/login-portals.ts) |

```ts
await client.loginPortals.update('acme-login', {});
```

### Delete a login portal

Delete a login portal.

| Direction | Type |
| --- | --- |
| Response | [`LoginPortalDeleteResponse`](./src/resources/login-portals.ts) |

```ts
await client.loginPortals.delete('acme-login');
```

### Create a portal

Create a login portal for the current team.

| Direction | Type |
| --- | --- |
| Request | [`LoginPortalCreateParams`](./src/resources/login-portals.ts) |
| Response | [`UID`](./src/resources/shared.ts) |

```ts
const uid = await client.loginPortals.create({
  title: 'Acme Private Documentation',
  slug: 'acme-login',
  email: {
    logo: '',
    logoSize: '100',
    buttonText: 'Login',
    message: 'Click to access private documentation hosted by scalar.com',
    title: 'Private Docs',
    mainColor: '#2a2f45',
    mainBackground: '#f6f6f6',
    cardColor: '#2a2f45',
    cardBackground: '#fff',
    buttonColor: '#fff',
    buttonBackground: '#0f0f0f',
  },
  page: {
    title: 'Scalar Private Docs',
    description: 'Login to access your documentation',
    head: '',
    script: '',
    theme: '',
    companyName: '',
    logo: '',
    logoURL: '',
    favicon: '',
    termsLink: '',
    privacyLink: '',
    formTitle: 'Scalar Private Docs',
    formDescription: 'Login to access your documentation',
    formImage: '',
  },
});
```

### List all portals

List all login portals for the current team.

| Direction | Type |
| --- | --- |
| Response | [`LoginPortalListResponse`](./src/resources/login-portals.ts) |

```ts
const loginPortal = await client.loginPortals.list();
```

## `AccessGroups`

Access Groups

### Create an access group

Create a group for the current team. Requires docs edit permission and the access groups billing feature. Domains are exact email domains, without wildcards or implicit subdomain matching.

| Direction | Type |
| --- | --- |
| Request | [`AccessGroupCreateParams`](./src/resources/access-groups/access-groups.ts) |
| Response | [`AccessGroupCreateResponse`](./src/resources/access-groups/access-groups.ts) |

```ts
const accessGroup = await client.accessGroups.create({});
```

### Get an access group

Get a group and its email and domain allowlists by slug.

| Direction | Type |
| --- | --- |
| Response | [`AccessGroupRetrieveResponse`](./src/resources/access-groups/access-groups.ts) |

```ts
const accessGroup = await client.accessGroups.retrieve('acme-api');
```

### Update an access group

Update group metadata. Requires docs edit permission. After changing the slug, use the new slug in subsequent requests.

| Direction | Type |
| --- | --- |
| Request | [`AccessGroupUpdateParams`](./src/resources/access-groups/access-groups.ts) |
| Response | [`AccessGroupUpdateResponse`](./src/resources/access-groups/access-groups.ts) |

```ts
await client.accessGroups.update('acme-api', {});
```

### Delete an access group

Delete a group and remove its project assignments. Requires docs edit permission.

| Direction | Type |
| --- | --- |
| Response | [`AccessGroupDeleteResponse`](./src/resources/access-groups/access-groups.ts) |

```ts
await client.accessGroups.delete('acme-api');
```

### `AccessGroups Domains`

Access Groups

#### Add an allowed email domain

Allow an exact email domain in a group. Requires docs edit permission. A group supports up to 1000 domains.

| Direction | Type |
| --- | --- |
| Request | [`DomainCreateParams`](./src/resources/access-groups/domains.ts) |
| Response | [`DomainCreateResponse`](./src/resources/access-groups/domains.ts) |

```ts
await client.accessGroups.domains.create('acme-api', {
  domain: 'example.com',
});
```

#### Remove an allowed email domain

Remove an exact email domain from a group. Requires docs edit permission. Other allowed domains and emails are preserved.

| Direction | Type |
| --- | --- |
| Request | [`DomainDeleteParams`](./src/resources/access-groups/domains.ts) |
| Response | [`DomainDeleteResponse`](./src/resources/access-groups/domains.ts) |

```ts
await client.accessGroups.domains.delete('acme-api', {
  domain: 'example.com',
});
```

## `Rules`

Rules

### List all rules

List all rulesets in a namespace.

| Direction | Type |
| --- | --- |
| Response | [`RuleListRulesetsResponse`](./src/resources/rules.ts) |

```ts
const rule = await client.rules.listRulesets('acme');
```

### Create a rule

Create a rule in a namespace.

| Direction | Type |
| --- | --- |
| Request | [`RuleCreateRulesetParams`](./src/resources/rules.ts) |
| Response | [`UID`](./src/resources/shared.ts) |

```ts
const uid = await client.rules.createRuleset('acme', {
  title: 'Acme API Rules',
  slug: 'acme-rules',
  document: 'extends: ["spectral:oas"]\nrules:\n  info-contact: warn\n',
});
```

### Update rule metadata

Update rule metadata by slug.

| Direction | Type |
| --- | --- |
| Request | [`RuleUpdateRulesetParams`](./src/resources/rules.ts) |
| Response | [`RuleUpdateRulesetResponse`](./src/resources/rules.ts) |

```ts
await client.rules.updateRuleset('acme-rules', {
  namespace: 'acme',
});
```

### Delete a rule

Delete a rule by slug.

| Direction | Type |
| --- | --- |
| Request | [`RuleDeleteRulesetParams`](./src/resources/rules.ts) |
| Response | [`RuleDeleteRulesetResponse`](./src/resources/rules.ts) |

```ts
await client.rules.deleteRuleset('acme-rules', {
  namespace: 'acme',
});
```

### Get a rule

Get a rule document by slug.

| Direction | Type |
| --- | --- |
| Request | [`RuleRetrieveRulesetDocumentParams`](./src/resources/rules.ts) |
| Response | [`RuleRetrieveRulesetDocumentResponse`](./src/resources/rules.ts) |

```ts
const response = await client.rules.retrieveRulesetDocument('acme-rules', {
  namespace: 'acme',
});
```

### Add rule access group

Grant an access group to a rule.

| Direction | Type |
| --- | --- |
| Request | [`RuleCreateRulesetAccessGroupParams`](./src/resources/rules.ts) |
| Response | [`RuleCreateRulesetAccessGroupResponse`](./src/resources/rules.ts) |

```ts
await client.rules.createRulesetAccessGroup('acme-rules', {
  namespace: 'acme',
  accessGroupSlug: 'acme-api',
});
```

### Remove rule access group

Remove an access group from a rule.

| Direction | Type |
| --- | --- |
| Request | [`RuleDeleteRulesetAccessGroupParams`](./src/resources/rules.ts) |
| Response | [`RuleDeleteRulesetAccessGroupResponse`](./src/resources/rules.ts) |

```ts
await client.rules.deleteRulesetAccessGroup('acme-rules', {
  namespace: 'acme',
  accessGroupSlug: 'acme-api',
});
```

## `Themes`

Themes

### List all themes

List all team themes.

| Direction | Type |
| --- | --- |
| Response | [`ThemeListResponse`](./src/resources/themes.ts) |

```ts
const theme = await client.themes.list();
```

### Create a theme

Create a team theme.

| Direction | Type |
| --- | --- |
| Request | [`ThemeCreateParams`](./src/resources/themes.ts) |
| Response | [`UID`](./src/resources/shared.ts) |

```ts
const uid = await client.themes.create({
  name: 'Acme Theme',
  slug: 'acme-theme',
  document: ':root { --scalar-color-1: #1f2937; }',
});
```

### Update theme metadata

Update theme metadata.

| Direction | Type |
| --- | --- |
| Request | [`ThemeUpdateParams`](./src/resources/themes.ts) |
| Response | [`ThemeUpdateResponse`](./src/resources/themes.ts) |

```ts
await client.themes.update('acme-theme', {});
```

### Update theme document

Replace the theme document.

| Direction | Type |
| --- | --- |
| Request | [`ThemeReplaceDocumentParams`](./src/resources/themes.ts) |
| Response | [`ThemeReplaceDocumentResponse`](./src/resources/themes.ts) |

```ts
await client.themes.replaceDocument('acme-theme', {
  document: ':root { --scalar-color-1: #1f2937; }',
});
```

### Delete a theme

Delete a theme by slug.

| Direction | Type |
| --- | --- |
| Response | [`ThemeDeleteResponse`](./src/resources/themes.ts) |

```ts
await client.themes.delete('acme-theme');
```

### Get a theme

Get the theme document by slug.

| Direction | Type |
| --- | --- |
| Response | [`ThemeRetrieveResponse`](./src/resources/themes.ts) |

```ts
const response = await client.themes.retrieve('acme-theme');
```

## `Teams`

Teams

### List teams

List all available teams

| Direction | Type |
| --- | --- |
| Response | [`TeamListResponse`](./src/resources/teams/teams.ts) |

```ts
const team = await client.teams.list();
```

### `Teams Members`

Teams

#### List team members

List the members of the current team, along with the invites still outstanding.

| Direction | Type |
| --- | --- |
| Response | [`MemberListResponse`](./src/resources/teams/members.ts) |

```ts
const member = await client.teams.members.list();
```

#### Change a member role

Change what a member of the current team is allowed to do.

| Direction | Type |
| --- | --- |
| Request | [`MemberUpdateParams`](./src/resources/teams/members.ts) |
| Response | [`MemberUpdateResponse`](./src/resources/teams/members.ts) |

```ts
await client.teams.members.update('UakgbKJ5m9gl0JDMbcJqL', {
  role: 'owner',
});
```

#### Remove a member

Remove someone from the current team.

| Direction | Type |
| --- | --- |
| Response | [`MemberDeleteResponse`](./src/resources/teams/members.ts) |

```ts
await client.teams.members.delete('UakgbKJ5m9gl0JDMbcJqL');
```

### `Teams Invites`

Teams

#### Invite a member

Invite someone to the current team by email.

| Direction | Type |
| --- | --- |
| Request | [`InviteMemberParams`](./src/resources/teams/invites.ts) |
| Response | [`InviteMemberResponse`](./src/resources/teams/invites.ts) |

```ts
await client.teams.invites.member({
  email: 'alex@example.com',
  role: 'owner',
});
```

#### Resend an invite

Send the invite email again.

| Direction | Type |
| --- | --- |
| Response | [`InviteResendResponse`](./src/resources/teams/invites.ts) |

```ts
await client.teams.invites.resend('UakgbKJ5m9gl0JDMbcJqL');
```

#### Cancel an invite

Withdraw an invite that has not been accepted.

| Direction | Type |
| --- | --- |
| Response | [`InviteCancelResponse`](./src/resources/teams/invites.ts) |

```ts
await client.teams.invites.cancel('UakgbKJ5m9gl0JDMbcJqL');
```

## `ScalarDocs`

Scalar Docs

### List all projects

List all guide projects.

| Direction | Type |
| --- | --- |
| Response | [`ScalarDocListGuidesResponse`](./src/resources/scalar-docs.ts) |

```ts
const scalarDoc = await client.scalarDocs.listGuides();
```

### Create a project

Create a guide project.

| Direction | Type |
| --- | --- |
| Request | [`ScalarDocCreateGuideParams`](./src/resources/scalar-docs.ts) |
| Response | [`ScalarDocCreateGuideResponse`](./src/resources/scalar-docs.ts) |

```ts
const scalarDoc = await client.scalarDocs.createGuide({
  name: 'Acme Documentation',
  isPrivate: false,
  allowedUsers: [],
  allowedDomains: [],
});
```

### Publish a project

Start a new publish process.

| Direction | Type |
| --- | --- |
| Response | [`ScalarDocPublishGuideResponse`](./src/resources/scalar-docs.ts) |

```ts
const scalarDoc = await client.scalarDocs.publishGuide('acme-docs');
```

### List all docs projects

List every docs project on the team.

| Direction | Type |
| --- | --- |
| Request | [`ScalarDocListProjectsParams`](./src/resources/scalar-docs.ts) |
| Response | [`ScalarDocListProjectsResponse`](./src/resources/scalar-docs.ts) |

```ts
const scalarDoc = await client.scalarDocs.listProjects();
```

### Create a docs project

Create a docs project. Omit `provider` to have Scalar host the repository.

| Direction | Type |
| --- | --- |
| Request | [`ScalarDocCreateProjectParams`](./src/resources/scalar-docs.ts) |
| Response | [`DocsProject`](./src/resources/scalar-docs.ts) |

```ts
const docsProject = await client.scalarDocs.createProject({
  name: 'Acme Documentation',
  provider: 'forgejo',
});
```

### Get a docs project

Get a single docs project by its slug.

| Direction | Type |
| --- | --- |
| Response | [`DocsProject`](./src/resources/scalar-docs.ts) |

```ts
const docsProject = await client.scalarDocs.retrieveProject('acme-docs');
```

### Update a docs project

Update project settings. Set `isPrivate` with `accessGroups` to put the site behind a login.

| Direction | Type |
| --- | --- |
| Request | [`ScalarDocUpdateProjectParams`](./src/resources/scalar-docs.ts) |
| Response | [`ScalarDocUpdateProjectResponse`](./src/resources/scalar-docs.ts) |

```ts
await client.scalarDocs.updateProject('acme-docs', {});
```

### Delete a docs project

Delete a docs project, its deploys, its publish records and its cached builds.

| Direction | Type |
| --- | --- |
| Response | [`ScalarDocDeleteProjectResponse`](./src/resources/scalar-docs.ts) |

```ts
await client.scalarDocs.deleteProject('acme-docs');
```

### Publish a docs project

Start a build and deploy. The returned `publishUid` identifies the publish record.

| Direction | Type |
| --- | --- |
| Request | [`ScalarDocPublishProjectParams`](./src/resources/scalar-docs.ts) |
| Response | [`ScalarDocPublishProjectResponse`](./src/resources/scalar-docs.ts) |

```ts
const scalarDoc = await client.scalarDocs.publishProject('acme-docs', {});
```

### Read the site config

Read `scalar.config.json` straight from the project repository, without cloning it. `baseToken` is the compare-and-swap handle for a later write.

| Direction | Type |
| --- | --- |
| Request | [`ScalarDocListProjectConfigParams`](./src/resources/scalar-docs.ts) |
| Response | [`ScalarDocListProjectConfigResponse`](./src/resources/scalar-docs.ts) |

```ts
const scalarDoc = await client.scalarDocs.listProjectConfig('acme-docs');
```

### Write the site config

Commit `scalar.config.json` straight to the project repository. Pass the `baseToken` from the read this edit was based on; a conflict means the file moved underneath it.

| Direction | Type |
| --- | --- |
| Request | [`ScalarDocUpdateProjectConfigParams`](./src/resources/scalar-docs.ts) |
| Response | [`ScalarDocUpdateProjectConfigResponse`](./src/resources/scalar-docs.ts) |

```ts
const scalarDoc = await client.scalarDocs.updateProjectConfig('acme-docs', {
  content: '{"name":"Acme Documentation"}',
});
```

### Get the site domains

The domains the project serves on — the Scalar-hosted one and the custom one, when set.

| Direction | Type |
| --- | --- |
| Response | [`ScalarDocListProjectDomainResponse`](./src/resources/scalar-docs.ts) |

```ts
const scalarDoc = await client.scalarDocs.listProjectDomain('acme-docs');
```

### Check domain DNS

Whether the project custom domain points at Scalar yet. `expected` is the CNAME record to create; `found` is what resolves today. A project with no custom domain reports `verified` with no expected record, because Scalar serves its own subdomain directly.

| Direction | Type |
| --- | --- |
| Response | [`ScalarDocListProjectDomainStatusResponse`](./src/resources/scalar-docs.ts) |

```ts
const scalarDoc = await client.scalarDocs.listProjectDomainStatus('acme-docs');
```

## `Namespaces`

Namespaces

### List namespaces

Get all namespaces for the current team

| Direction | Type |
| --- | --- |
| Response | [`NamespaceListResponse`](./src/resources/namespaces.ts) |

```ts
const response = await client.namespaces.list();
```

## `Authentication`

Authentication

### Exchange token

Exchange an API key for an access token.

| Direction | Type |
| --- | --- |
| Request | [`AuthenticationExchangePersonalTokenParams`](./src/resources/authentication.ts) |
| Response | [`AuthenticationExchangePersonalTokenResponse`](./src/resources/authentication.ts) |

```ts
const authentication = await client.authentication.exchangePersonalToken({
  personalToken: 'scalar_example_personal_token',
});
```

### Get current user

Get the authenticated user, including their available teams and theme.

| Direction | Type |
| --- | --- |
| Response | [`User`](./src/resources/authentication.ts) |

```ts
const user = await client.authentication.listCurrentUser();
```

## `Sdks`

SDKs

### List all SDKs

List every SDK on the team.

| Direction | Type |
| --- | --- |
| Request | [`SdkListParams`](./src/resources/sdks/sdks.ts) |
| Response | [`SdkListResponse`](./src/resources/sdks/sdks.ts) |

```ts
const sdk = await client.sdks.list();
```

### Create an SDK

Create an SDK from an API document, targeting one or more languages.

| Direction | Type |
| --- | --- |
| Request | [`SdkCreateParams`](./src/resources/sdks/sdks.ts) |
| Response | [`UID`](./src/resources/shared.ts) |

```ts
const uid = await client.sdks.create({
  apiUid: 'UakgbKJ5m9gl0JDMbcJqL',
  languages: ['typescript'],
});
```

### Get an SDK

Get a single SDK by its uid.

| Direction | Type |
| --- | --- |
| Response | [`Sdk`](./src/resources/sdks/sdks.ts) |

```ts
const sdk = await client.sdks.retrieve('UakgbKJ5m9gl0JDMbcJqL');
```

### Update an SDK

Update SDK metadata, its linked API, or its config.

| Direction | Type |
| --- | --- |
| Request | [`SdkUpdateParams`](./src/resources/sdks/sdks.ts) |
| Response | [`SdkUpdateResponse`](./src/resources/sdks/sdks.ts) |

```ts
await client.sdks.update('UakgbKJ5m9gl0JDMbcJqL', {});
```

### Delete an SDK

Delete an SDK and every version it holds.

| Direction | Type |
| --- | --- |
| Response | [`SdkDeleteResponse`](./src/resources/sdks/sdks.ts) |

```ts
await client.sdks.delete('UakgbKJ5m9gl0JDMbcJqL');
```

### Build an SDK

Start a build. Omit `version` to build the current work — the open draft, else the latest version — and the resolved version comes back in the response.

| Direction | Type |
| --- | --- |
| Request | [`SdkBuildParams`](./src/resources/sdks/sdks.ts) |
| Response | [`SdkBuildResponse`](./src/resources/sdks/sdks.ts) |

```ts
const sdk = await client.sdks.build('UakgbKJ5m9gl0JDMbcJqL', {});
```

### `Sdks Versions`

SDKs

#### Create an SDK version

Create a new SDK version against a specific API version.

| Direction | Type |
| --- | --- |
| Request | [`VersionCreateParams`](./src/resources/sdks/versions.ts) |
| Response | [`VersionCreateResponse`](./src/resources/sdks/versions.ts) |

```ts
await client.sdks.versions.create('UakgbKJ5m9gl0JDMbcJqL', {
  version: '1.2.0',
  apiVersion: '1.2.0',
});
```

#### Delete an SDK version

Permanently delete one version of an SDK.

| Direction | Type |
| --- | --- |
| Request | [`VersionDeleteParams`](./src/resources/sdks/versions.ts) |
| Response | [`VersionDeleteResponse`](./src/resources/sdks/versions.ts) |

```ts
await client.sdks.versions.delete('1.2.0', {
  uid: 'UakgbKJ5m9gl0JDMbcJqL',
});
```

### `Sdks Repositories`

SDKs

#### Link a repository

Link one language target to a GitHub repository, so builds sync there.

| Direction | Type |
| --- | --- |
| Request | [`RepositoryLinkParams`](./src/resources/sdks/repositories.ts) |
| Response | [`RepositoryLinkResponse`](./src/resources/sdks/repositories.ts) |

```ts
const repository = await client.sdks.repositories.link('UakgbKJ5m9gl0JDMbcJqL', {
  language: 'typescript',
  repositoryId: 123456789,
  baseBranch: 'main',
});
```

#### Unlink a repository

Unlink one language target from its repository.

| Direction | Type |
| --- | --- |
| Request | [`RepositoryUnlinkParams`](./src/resources/sdks/repositories.ts) |
| Response | [`RepositoryUnlinkResponse`](./src/resources/sdks/repositories.ts) |

```ts
await client.sdks.repositories.unlink('typescript', {
  uid: 'UakgbKJ5m9gl0JDMbcJqL',
});
```

#### Update publishing settings

Toggle publish-on-merge and the release settings for a linked target.

| Direction | Type |
| --- | --- |
| Request | [`RepositoryUpdatePublishingParams`](./src/resources/sdks/repositories.ts) |
| Response | [`RepositoryUpdatePublishingResponse`](./src/resources/sdks/repositories.ts) |

```ts
await client.sdks.repositories.updatePublishing('typescript', {
  uid: 'UakgbKJ5m9gl0JDMbcJqL',
  publishOnMerge: true,
});
```

## `Mcp`

### `Mcp Servers`

MCP

#### List all MCP servers

List every MCP server on the team.

| Direction | Type |
| --- | --- |
| Response | [`ServerListResponse`](./src/resources/mcp/servers/servers.ts) |

```ts
const server = await client.mcp.servers.list();
```

#### Create an MCP server

Create an MCP server over one or more API document versions. The response carries the server and its first installation.

| Direction | Type |
| --- | --- |
| Request | [`ServerCreateParams`](./src/resources/mcp/servers/servers.ts) |
| Response | [`ServerCreateResponse`](./src/resources/mcp/servers/servers.ts) |

```ts
const server = await client.mcp.servers.create({
  name: 'Acme MCP',
});
```

#### Get an MCP server

Get a single MCP server by its id.

| Direction | Type |
| --- | --- |
| Response | [`McpServer`](./src/resources/mcp/servers/servers.ts) |

```ts
const mcpServer = await client.mcp.servers.retrieve('42');
```

#### Update an MCP server

Update MCP server metadata and which tools it exposes.

| Direction | Type |
| --- | --- |
| Request | [`ServerUpdateParams`](./src/resources/mcp/servers/servers.ts) |
| Response | [`McpServer`](./src/resources/mcp/servers/servers.ts) |

```ts
const mcpServer = await client.mcp.servers.update('42', {});
```

#### Delete an MCP server

Delete an MCP server and every installation it serves.

| Direction | Type |
| --- | --- |
| Response | [`ServerDeleteResponse`](./src/resources/mcp/servers/servers.ts) |

```ts
await client.mcp.servers.delete('42');
```

#### `Mcp Servers Installations`

MCP

##### List installations

List the installations of an MCP server. An installation is what an MCP client connects to.

| Direction | Type |
| --- | --- |
| Response | [`InstallationListResponse`](./src/resources/mcp/servers/installations.ts) |

```ts
const installation = await client.mcp.servers.installations.list('42');
```

##### Create an installation

Create an installation of an MCP server. `documentAuth` holds the credentials the server presents to the upstream API and is never returned.

| Direction | Type |
| --- | --- |
| Request | [`InstallationCreateParams`](./src/resources/mcp/servers/installations.ts) |

```ts
const mcpInstallation = await client.mcp.servers.installations.create('42', {
  name: 'Acme MCP',
  documentAuth: {},
});
```

##### Get an installation

Get a single installation of an MCP server.

| Direction | Type |
| --- | --- |
| Request | [`InstallationRetrieveParams`](./src/resources/mcp/servers/installations.ts) |

```ts
const mcpInstallation = await client.mcp.servers.installations.retrieve('84', {
  id: '42',
});
```

##### Update an installation

Update an installation. Set `isPrivate` and add access groups to put it behind a login.

| Direction | Type |
| --- | --- |
| Request | [`InstallationUpdateParams`](./src/resources/mcp/servers/installations.ts) |

```ts
const mcpInstallation = await client.mcp.servers.installations.update('84', {
  id: '42',
});
```

##### Delete an installation

Delete an installation of an MCP server.

| Direction | Type |
| --- | --- |
| Request | [`InstallationDeleteParams`](./src/resources/mcp/servers/installations.ts) |
| Response | [`InstallationDeleteResponse`](./src/resources/mcp/servers/installations.ts) |

```ts
await client.mcp.servers.installations.delete('84', {
  id: '42',
});
```

##### Add an access group

Let an access group reach a private installation.

| Direction | Type |
| --- | --- |
| Request | [`InstallationCreateAccessGroupParams`](./src/resources/mcp/servers/installations.ts) |
| Response | [`InstallationCreateAccessGroupResponse`](./src/resources/mcp/servers/installations.ts) |

```ts
await client.mcp.servers.installations.createAccessGroup('84', {
  id: '42',
  accessGroupUid: 'UakgbKJ5m9gl0JDMbcJqL',
});
```

##### Remove an access group

Stop an access group reaching a private installation.

| Direction | Type |
| --- | --- |
| Request | [`InstallationDeleteAccessGroupParams`](./src/resources/mcp/servers/installations.ts) |
| Response | [`InstallationDeleteAccessGroupResponse`](./src/resources/mcp/servers/installations.ts) |

```ts
await client.mcp.servers.installations.deleteAccessGroup('84', {
  id: '42',
  accessGroupUid: 'UakgbKJ5m9gl0JDMbcJqL',
});
```
