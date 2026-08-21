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
- [`ScalarDocs`](#scalardocs)
  - [List all projects](#list-all-projects)
  - [Create a project](#create-a-project)
  - [Publish a project](#publish-a-project)
- [`Namespaces`](#namespaces)
  - [List namespaces](#list-namespaces)
- [`Authentication`](#authentication)
  - [Exchange token](#exchange-token)
  - [Get current user](#get-current-user)

## Setup

```ts
import ScalarAPI from '@scalar/sdk';

const client = new ScalarAPI({
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
const listAllAPIDocuments = await client.registry.listAllAPIDocuments();
```

### List API Documents in a namespace

List API documents in a namespace.

| Direction | Type |
| --- | --- |
| Response | [`RegistryListAPIDocumentsResponse`](./src/resources/registry.ts) |

```ts
const listAPIDocuments = await client.registry.listAPIDocuments('namespace');
```

### Create API Document

Create an API document.

| Direction | Type |
| --- | --- |
| Request | [`RegistryCreateAPIDocumentParams`](./src/resources/registry.ts) |
| Response | [`RegistryCreateAPIDocumentResponse`](./src/resources/registry.ts) |

```ts
const createAPIDocument = await client.registry.createAPIDocument('namespace', {
  title: '',
  version: 'x',
  slug: '',
  document: '',
});
```

### Update API Document metadata

Update metadata for an API document.

| Direction | Type |
| --- | --- |
| Request | [`RegistryUpdateAPIDocumentParams`](./src/resources/registry.ts) |
| Response | [`RegistryUpdateAPIDocumentResponse`](./src/resources/registry.ts) |

```ts
await client.registry.updateAPIDocument('slug', {
  namespace: 'namespace',
});
```

### Delete API Document

Delete an API document and all versions.

| Direction | Type |
| --- | --- |
| Request | [`RegistryDeleteAPIDocumentParams`](./src/resources/registry.ts) |
| Response | [`RegistryDeleteAPIDocumentResponse`](./src/resources/registry.ts) |

```ts
await client.registry.deleteAPIDocument('slug', {
  namespace: 'namespace',
});
```

### Get API Document

Get a specific API document version.

| Direction | Type |
| --- | --- |
| Request | [`RegistryRetrieveAPIDocumentVersionParams`](./src/resources/registry.ts) |
| Response | [`RegistryRetrieveAPIDocumentVersionResponse`](./src/resources/registry.ts) |

```ts
const string_ = await client.registry.retrieveAPIDocumentVersion('semver', {
  namespace: 'namespace',
  slug: 'slug',
});
```

### Update API Document version

Update the registry file content for an API document version.

| Direction | Type |
| --- | --- |
| Request | [`RegistryUpdateAPIDocumentVersionParams`](./src/resources/registry.ts) |
| Response | [`RegistryUpdateAPIDocumentVersionResponse`](./src/resources/registry.ts) |

```ts
const updateAPIDocumentVersion = await client.registry.updateAPIDocumentVersion('semver', {
  namespace: 'namespace',
  slug: 'slug',
  document: '',
});
```

### Delete API Document version

Delete a specific API document version.

| Direction | Type |
| --- | --- |
| Request | [`RegistryDeleteAPIDocumentVersionParams`](./src/resources/registry.ts) |
| Response | [`RegistryDeleteAPIDocumentVersionResponse`](./src/resources/registry.ts) |

```ts
await client.registry.deleteAPIDocumentVersion('semver', {
  namespace: 'namespace',
  slug: 'slug',
});
```

### Get API Document version metadata

Get metadata (uid, content shas, version sha, tags) for a specific API document version.

| Direction | Type |
| --- | --- |
| Request | [`RegistryListAPIDocumentVersionMetadataParams`](./src/resources/registry.ts) |
| Response | [`ManagedDocVersion`](./src/resources/shared.ts) |

```ts
const managedDocVersion = await client.registry.listAPIDocumentVersionMetadata('semver', {
  namespace: 'namespace',
  slug: 'slug',
});
```

### Create API Document version

Create a new API document version.

| Direction | Type |
| --- | --- |
| Request | [`RegistryCreateAPIDocumentVersionParams`](./src/resources/registry.ts) |
| Response | [`ManagedDocVersion`](./src/resources/shared.ts) |

```ts
const managedDocVersion = await client.registry.createAPIDocumentVersion('slug', {
  namespace: 'namespace',
  version: 'x',
  document: '',
});
```

### Add access group

Add an access group to an API document.

| Direction | Type |
| --- | --- |
| Request | [`RegistryCreateAPIDocumentAccessGroupParams`](./src/resources/registry.ts) |
| Response | [`RegistryCreateAPIDocumentAccessGroupResponse`](./src/resources/registry.ts) |

```ts
await client.registry.createAPIDocumentAccessGroup('slug', {
  namespace: 'namespace',
  accessGroupSlug: 'xxx',
});
```

### Remove access group

Remove an access group from an API document.

| Direction | Type |
| --- | --- |
| Request | [`RegistryDeleteAPIDocumentAccessGroupParams`](./src/resources/registry.ts) |
| Response | [`RegistryDeleteAPIDocumentAccessGroupResponse`](./src/resources/registry.ts) |

```ts
await client.registry.deleteAPIDocumentAccessGroup('slug', {
  namespace: 'namespace',
  accessGroupSlug: 'xxx',
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
const list = await client.schemas.list('namespace');
```

### Create a shared component

Create a schema in a namespace.

| Direction | Type |
| --- | --- |
| Request | [`SchemaCreateParams`](./src/resources/schemas/schemas.ts) |
| Response | [`UID`](./src/resources/shared.ts) |

```ts
const uID = await client.schemas.create('namespace', {
  title: '',
  version: 'x',
  slug: '',
  document: '',
});
```

### Update shared component metadata

Update schema metadata.

| Direction | Type |
| --- | --- |
| Request | [`SchemaUpdateParams`](./src/resources/schemas/schemas.ts) |
| Response | [`SchemaUpdateResponse`](./src/resources/schemas/schemas.ts) |

```ts
await client.schemas.update('slug', {
  namespace: 'namespace',
});
```

### Delete a shared component

Delete a schema and all related versions.

| Direction | Type |
| --- | --- |
| Request | [`SchemaDeleteParams`](./src/resources/schemas/schemas.ts) |
| Response | [`SchemaDeleteResponse`](./src/resources/schemas/schemas.ts) |

```ts
await client.schemas.delete('slug', {
  namespace: 'namespace',
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
const string_ = await client.schemas.version.retrieve('semver', {
  namespace: 'namespace',
  slug: 'slug',
});
```

#### Delete a shared component version

Delete a schema version.

| Direction | Type |
| --- | --- |
| Request | [`VersionDeleteParams`](./src/resources/schemas/version.ts) |
| Response | [`VersionDeleteResponse`](./src/resources/schemas/version.ts) |

```ts
await client.schemas.version.delete('semver', {
  namespace: 'namespace',
  slug: 'slug',
});
```

#### Create a shared component version

Create a schema version.

| Direction | Type |
| --- | --- |
| Request | [`VersionCreateParams`](./src/resources/schemas/version.ts) |
| Response | [`UID`](./src/resources/shared.ts) |

```ts
const uID = await client.schemas.version.create('slug', {
  namespace: 'namespace',
  version: 'x',
  document: '',
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
await client.schemas.accessGroup.create('slug', {
  namespace: 'namespace',
  accessGroupSlug: 'xxx',
});
```

#### Remove shared component access group

Remove an access group from a schema.

| Direction | Type |
| --- | --- |
| Request | [`AccessGroupDeleteParams`](./src/resources/schemas/access-group.ts) |
| Response | [`AccessGroupDeleteResponse`](./src/resources/schemas/access-group.ts) |

```ts
await client.schemas.accessGroup.delete('slug', {
  namespace: 'namespace',
  accessGroupSlug: 'xxx',
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
const retrieve = await client.loginPortals.retrieve('slug');
```

### Update portal metadata

Update metadata for a login portal.

| Direction | Type |
| --- | --- |
| Request | [`LoginPortalUpdateParams`](./src/resources/login-portals.ts) |
| Response | [`LoginPortalUpdateResponse`](./src/resources/login-portals.ts) |

```ts
await client.loginPortals.update('slug', {});
```

### Delete a login portal

Delete a login portal.

| Direction | Type |
| --- | --- |
| Response | [`LoginPortalDeleteResponse`](./src/resources/login-portals.ts) |

```ts
await client.loginPortals.delete('slug');
```

### Create a portal

Create a login portal for the current team.

| Direction | Type |
| --- | --- |
| Request | [`LoginPortalCreateParams`](./src/resources/login-portals.ts) |
| Response | [`UID`](./src/resources/shared.ts) |

```ts
const uID = await client.loginPortals.create({
  title: '',
  slug: '',
  email: {
    logo: '',
    logoSize: '100',
    buttonText: 'Login',
    message: 'Click to access private documentation hosted by scalar.com',
    title: 'Private Docs',
    mainColor: '#2a2f45',
    mainBackground: '#f6f6f6',
    cardColor: '2a2f45',
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
const list = await client.loginPortals.list();
```

## `Rules`

Rules

### List all rules

List all rulesets in a namespace.

| Direction | Type |
| --- | --- |
| Response | [`RuleListRulesetsResponse`](./src/resources/rules.ts) |

```ts
const listRulesets = await client.rules.listRulesets('namespace');
```

### Create a rule

Create a rule in a namespace.

| Direction | Type |
| --- | --- |
| Request | [`RuleCreateRulesetParams`](./src/resources/rules.ts) |
| Response | [`UID`](./src/resources/shared.ts) |

```ts
const uID = await client.rules.createRuleset('namespace', {
  title: '',
  slug: '',
  document: '',
});
```

### Update rule metadata

Update rule metadata by slug.

| Direction | Type |
| --- | --- |
| Request | [`RuleUpdateRulesetParams`](./src/resources/rules.ts) |
| Response | [`RuleUpdateRulesetResponse`](./src/resources/rules.ts) |

```ts
await client.rules.updateRuleset('slug', {
  namespace: 'namespace',
});
```

### Delete a rule

Delete a rule by slug.

| Direction | Type |
| --- | --- |
| Request | [`RuleDeleteRulesetParams`](./src/resources/rules.ts) |
| Response | [`RuleDeleteRulesetResponse`](./src/resources/rules.ts) |

```ts
await client.rules.deleteRuleset('slug', {
  namespace: 'namespace',
});
```

### Get a rule

Get a rule document by slug.

| Direction | Type |
| --- | --- |
| Request | [`RuleRetrieveRulesetDocumentParams`](./src/resources/rules.ts) |
| Response | [`RuleRetrieveRulesetDocumentResponse`](./src/resources/rules.ts) |

```ts
const string_ = await client.rules.retrieveRulesetDocument('slug', {
  namespace: 'namespace',
});
```

### Add rule access group

Grant an access group to a rule.

| Direction | Type |
| --- | --- |
| Request | [`RuleCreateRulesetAccessGroupParams`](./src/resources/rules.ts) |
| Response | [`RuleCreateRulesetAccessGroupResponse`](./src/resources/rules.ts) |

```ts
await client.rules.createRulesetAccessGroup('slug', {
  namespace: 'namespace',
  accessGroupSlug: 'xxx',
});
```

### Remove rule access group

Remove an access group from a rule.

| Direction | Type |
| --- | --- |
| Request | [`RuleDeleteRulesetAccessGroupParams`](./src/resources/rules.ts) |
| Response | [`RuleDeleteRulesetAccessGroupResponse`](./src/resources/rules.ts) |

```ts
await client.rules.deleteRulesetAccessGroup('slug', {
  namespace: 'namespace',
  accessGroupSlug: 'xxx',
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
const list = await client.themes.list();
```

### Create a theme

Create a team theme.

| Direction | Type |
| --- | --- |
| Request | [`ThemeCreateParams`](./src/resources/themes.ts) |
| Response | [`UID`](./src/resources/shared.ts) |

```ts
const uID = await client.themes.create({
  name: '',
  slug: '',
  document: '',
});
```

### Update theme metadata

Update theme metadata.

| Direction | Type |
| --- | --- |
| Request | [`ThemeUpdateParams`](./src/resources/themes.ts) |
| Response | [`ThemeUpdateResponse`](./src/resources/themes.ts) |

```ts
await client.themes.update('slug', {});
```

### Update theme document

Replace the theme document.

| Direction | Type |
| --- | --- |
| Request | [`ThemeReplaceDocumentParams`](./src/resources/themes.ts) |
| Response | [`ThemeReplaceDocumentResponse`](./src/resources/themes.ts) |

```ts
await client.themes.replaceDocument('slug', {
  document: '',
});
```

### Delete a theme

Delete a theme by slug.

| Direction | Type |
| --- | --- |
| Response | [`ThemeDeleteResponse`](./src/resources/themes.ts) |

```ts
await client.themes.delete('slug');
```

### Get a theme

Get the theme document by slug.

| Direction | Type |
| --- | --- |
| Response | [`ThemeRetrieveResponse`](./src/resources/themes.ts) |

```ts
const string_ = await client.themes.retrieve('slug');
```

## `Teams`

Teams

### List teams

List all available teams

| Direction | Type |
| --- | --- |
| Response | [`TeamListResponse`](./src/resources/teams.ts) |

```ts
const list = await client.teams.list();
```

## `ScalarDocs`

Scalar Docs

### List all projects

List all guide projects.

| Direction | Type |
| --- | --- |
| Response | [`ScalarDocListGuidesResponse`](./src/resources/scalar-docs.ts) |

```ts
const listGuides = await client.scalarDocs.listGuides();
```

### Create a project

Create a guide project.

| Direction | Type |
| --- | --- |
| Request | [`ScalarDocCreateGuideParams`](./src/resources/scalar-docs.ts) |
| Response | [`ScalarDocCreateGuideResponse`](./src/resources/scalar-docs.ts) |

```ts
const createGuide = await client.scalarDocs.createGuide({
  name: '',
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
const publishGuide = await client.scalarDocs.publishGuide('slug');
```

## `Namespaces`

Namespaces

### List namespaces

Get all namespaces for the current team

| Direction | Type |
| --- | --- |
| Response | [`NamespaceListResponse`](./src/resources/namespaces.ts) |

```ts
const list = await client.namespaces.list();
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
const exchangePersonalToken = await client.authentication.exchangePersonalToken({
  personalToken: '',
});
```

### Get current user

Get the authenticated user, including their available teams and theme.

| Direction | Type |
| --- | --- |
| Response | [`AuthenticationListCurrentUserResponse`](./src/resources/authentication.ts) |

```ts
const listCurrentUser = await client.authentication.listCurrentUser();
```
