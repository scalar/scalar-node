# Scalar API

Generated TypeScript SDK for the Scalar API API.
Manage Scalar platform resources programmatically. The Scalar API lets teams create and update API references, schemas, guides, rulesets, themes, login portals, namespaces, and access controls from automated workflows or custom internal tooling. Use it to keep documentation and developer portals in sync with your source of truth, publish new versions safely, and inspect the teams and authenticated user context available to your integration.

<br />

## Contents

- [Installation](#installation)
- [Quickstart](#quickstart)
- [Authentication](#authentication)
- [Client Options](#client-options)
- [Request Options](#request-options)
- [Resources](#resources)
- [Errors](#errors)
- [Retries and Timeouts](#retries-and-timeouts)
- [Debugging](#debugging)
- [Requirements](#requirements)

<br />

## Installation

```sh
npm install @scalar/sdk
```

<br />

## Quickstart

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.registry.listAllApiDocuments();

  console.log(result);
}

main();
```

<br />

## Authentication

Pass credentials to the generated client constructor. Environment variables are read automatically when supported by the target runtime.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `string \| provider` | - | Credential for the BearerAuth scheme. Defaults to BEARER_AUTH. |

Declared schemes:

- `BearerAuth` bearer token

<br />

## Client Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `string \| AuthTokenProvider` | `process.env["BEARER_AUTH"]` | Credential for the BearerAuth scheme. |
| `baseURL` | `string \| null` | `process.env["SCALARAPI_BASE_URL"]` | Override the default API base URL. Pass `null` when selecting a configured environment. |
| `timeout` | `number` | `60000` | Maximum time in milliseconds to wait for a response before aborting a request. |
| `maxRetries` | `number` | `2` | Number of retries for temporary failures. |
| `defaultHeaders` | `HeadersInit` | - | Headers sent with every request. |
| `defaultQuery` | `Record<string, string \| undefined>` | - | Query parameters sent with every request. |
| `fetchOptions` | `RequestInit` | - | Additional fetch options sent with every request. |
| `fetch` | `Fetch` | - | Custom fetch implementation. |
| `logLevel` | `"off" \| "error" \| "warn" \| "info" \| "debug" \| null` | `process.env["SCALARAPI_LOG"]` | Controls request and retry debug logging. |
| `logger` | `Logger \| null` | `console` | Custom logger implementation. |

<br />

## Request Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `headers` | `HeadersInit` | - | Per-request headers. |
| `query` | `Record<string, unknown>` | - | Per-request query parameters. |
| `body` | `unknown` | - | Override the generated request body. |
| `timeout` | `number` | - | Per-request timeout in milliseconds. |
| `maxRetries` | `number` | - | Per-request retry count. |
| `signal` | `AbortSignal` | - | Abort an in-flight request. |
| `fetchOptions` | `RequestInit` | - | Per-request fetch options. |
| `idempotencyKey` | `string` | - | Idempotency key for retry-safe operations. |

<br />

## Resources

Every operation below includes its HTTP route, generated types, documented error statuses, and a code sample when one can be generated.

### `Registry`

#### List all API Documents

List all API documents across every namespace the caller can access.

| Field | Value |
| --- | --- |
| HTTP | `GET /v1/apis` |
| Response | `APIPromise<Array<ApiDocument>>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.registry.listAllApiDocuments();

  console.log(result);
}

main();
```

<br />

#### List API Documents

List API documents in a namespace.

| Field | Value |
| --- | --- |
| HTTP | `GET /v1/apis/{namespace}` |
| Input | `namespace: string` |
| Response | `APIPromise<Array<ApiDocument>>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.registry.listApiDocuments({
    namespace: "namespace",
  });

  console.log(result);
}

main();
```

<br />

#### Create API Document

Create an API document.

| Field | Value |
| --- | --- |
| HTTP | `POST /v1/apis/{namespace}` |
| Input | `namespace: string`, `RegistryCreateApiDocumentParams` |
| Response | `APIPromise<{ uid: string; versionUid: string; title: string; jsonSha: string; yamlSha: string; versionSha: string }>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.registry.createApiDocument({
    namespace: "namespace",
    body: {
      title: "",
      version: "",
      slug: "",
      document: "",
    },
  });

  console.log(result);
}

main();
```

<br />

#### Delete API Document

Delete an API document and all versions.

| Field | Value |
| --- | --- |
| HTTP | `DELETE /v1/apis/{namespace}/{slug}` |
| Input | `namespace: string`, `slug: string` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.registry.deleteApiDocument({
    namespace: "namespace",
    slug: "slug",
  });

  console.log(result);
}

main();
```

<br />

#### Update API Document metadata

Update metadata for an API document.

| Field | Value |
| --- | --- |
| HTTP | `PATCH /v1/apis/{namespace}/{slug}` |
| Input | `namespace: string`, `slug: string`, `RegistryUpdateApiDocumentParams` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.registry.updateApiDocument({
    namespace: "namespace",
    slug: "slug",
    body: {},
  });

  console.log(result);
}

main();
```

<br />

#### Get API Document

Get a specific API document version.

| Field | Value |
| --- | --- |
| HTTP | `GET /v1/apis/{namespace}/{slug}/version/{semver}` |
| Input | `namespace: string`, `slug: string`, `semver: string` |
| Response | `APIPromise<string>` |
| Content-Type | `text/plain` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.registry.retrieveApiDocumentVersion({
    namespace: "namespace",
    slug: "slug",
    semver: "semver",
  });

  console.log(result);
}

main();
```

<br />

#### Delete API Document version

Delete a specific API document version.

| Field | Value |
| --- | --- |
| HTTP | `DELETE /v1/apis/{namespace}/{slug}/version/{semver}` |
| Input | `namespace: string`, `slug: string`, `semver: string` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.registry.deleteApiDocumentVersion({
    namespace: "namespace",
    slug: "slug",
    semver: "semver",
  });

  console.log(result);
}

main();
```

<br />

#### Update API Document version

Update the registry file content for an API document version.

| Field | Value |
| --- | --- |
| HTTP | `PATCH /v1/apis/{namespace}/{slug}/version/{semver}` |
| Input | `namespace: string`, `slug: string`, `semver: string`, `RegistryUpdateApiDocumentVersionParams` |
| Response | `APIPromise<{ jsonSha: string; yamlSha: string; versionSha: string }>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.registry.updateApiDocumentVersion({
    namespace: "namespace",
    slug: "slug",
    semver: "semver",
    body: {
      document: "",
    },
  });

  console.log(result);
}

main();
```

<br />

#### Get API Document version metadata

Get metadata (uid, content shas, version sha, tags) for a specific API document version.

| Field | Value |
| --- | --- |
| HTTP | `GET /v1/apis/{namespace}/{slug}/version/{semver}/metadata` |
| Input | `namespace: string`, `slug: string`, `semver: string` |
| Response | `APIPromise<ManagedDocVersion>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.registry.listApiDocumentVersionMetadata({
    namespace: "namespace",
    slug: "slug",
    semver: "semver",
  });

  console.log(result);
}

main();
```

<br />

#### Create API Document version

Create a new API document version.

| Field | Value |
| --- | --- |
| HTTP | `POST /v1/apis/{namespace}/{slug}/version` |
| Input | `namespace: string`, `slug: string`, `RegistryCreateApiDocumentVersionParams` |
| Response | `APIPromise<ManagedDocVersion>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.registry.createApiDocumentVersion({
    namespace: "namespace",
    slug: "slug",
    body: {
      version: "",
      document: "",
    },
  });

  console.log(result);
}

main();
```

<br />

#### Add access group

Add an access group to an API document.

| Field | Value |
| --- | --- |
| HTTP | `POST /v1/apis/{namespace}/{slug}/access-group` |
| Input | `namespace: string`, `slug: string`, `RegistryCreateApiDocumentAccessGroupParams` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.registry.createApiDocumentAccessGroup({
    namespace: "namespace",
    slug: "slug",
    body: {
      accessGroupSlug: "",
    },
  });

  console.log(result);
}

main();
```

<br />

#### Remove access group

Remove an access group from an API document.

| Field | Value |
| --- | --- |
| HTTP | `DELETE /v1/apis/{namespace}/{slug}/access-group` |
| Input | `namespace: string`, `slug: string`, `RegistryDeleteApiDocumentAccessGroupParams` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.registry.deleteApiDocumentAccessGroup({
    namespace: "namespace",
    slug: "slug",
    body: {
      accessGroupSlug: "",
    },
  });

  console.log(result);
}

main();
```

### `Schemas`

#### List all shared components

List schemas in a namespace.

| Field | Value |
| --- | --- |
| HTTP | `GET /v1/schemas/{namespace}` |
| Input | `namespace: string` |
| Response | `APIPromise<Array<Schema>>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.schemas.list({
    namespace: "namespace",
  });

  console.log(result);
}

main();
```

<br />

#### Create a shared component

Create a schema in a namespace.

| Field | Value |
| --- | --- |
| HTTP | `POST /v1/schemas/{namespace}` |
| Input | `namespace: string`, `SchemaCreateParams` |
| Response | `APIPromise<Uid>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.schemas.create({
    namespace: "namespace",
    body: {
      title: "",
      version: "",
      slug: "",
      document: "",
    },
  });

  console.log(result);
}

main();
```

<br />

#### Delete a shared component

Delete a schema and all related versions.

| Field | Value |
| --- | --- |
| HTTP | `DELETE /v1/schemas/{namespace}/{slug}` |
| Input | `namespace: string`, `slug: string` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.schemas.delete({
    namespace: "namespace",
    slug: "slug",
  });

  console.log(result);
}

main();
```

<br />

#### Update shared component metadata

Update schema metadata.

| Field | Value |
| --- | --- |
| HTTP | `PATCH /v1/schemas/{namespace}/{slug}` |
| Input | `namespace: string`, `slug: string`, `SchemaUpdateParams` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.schemas.update({
    namespace: "namespace",
    slug: "slug",
    body: {},
  });

  console.log(result);
}

main();
```

<br />

#### Get a shared component document

Get a specific schema version document.

| Field | Value |
| --- | --- |
| HTTP | `GET /v1/schemas/{namespace}/{slug}/version/{semver}` |
| Input | `namespace: string`, `slug: string`, `semver: string` |
| Response | `APIPromise<string>` |
| Content-Type | `text/plain` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.schemas.retrieveVersion({
    namespace: "namespace",
    slug: "slug",
    semver: "semver",
  });

  console.log(result);
}

main();
```

<br />

#### Delete a shared component version

Delete a schema version.

| Field | Value |
| --- | --- |
| HTTP | `DELETE /v1/schemas/{namespace}/{slug}/version/{semver}` |
| Input | `namespace: string`, `slug: string`, `semver: string` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.schemas.deleteVersion({
    namespace: "namespace",
    slug: "slug",
    semver: "semver",
  });

  console.log(result);
}

main();
```

<br />

#### Create a shared component version

Create a schema version.

| Field | Value |
| --- | --- |
| HTTP | `POST /v1/schemas/{namespace}/{slug}/version` |
| Input | `namespace: string`, `slug: string`, `SchemaCreateVersionParams` |
| Response | `APIPromise<Uid>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.schemas.createVersion({
    namespace: "namespace",
    slug: "slug",
    body: {
      version: "",
      document: "",
    },
  });

  console.log(result);
}

main();
```

<br />

#### Add shared component access group

Add an access group to a schema.

| Field | Value |
| --- | --- |
| HTTP | `POST /v1/schemas/{namespace}/{slug}/access-group` |
| Input | `namespace: string`, `slug: string`, `SchemaCreateAccessGroupParams` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.schemas.createAccessGroup({
    namespace: "namespace",
    slug: "slug",
    body: {
      accessGroupSlug: "",
    },
  });

  console.log(result);
}

main();
```

<br />

#### Remove shared component access group

Remove an access group from a schema.

| Field | Value |
| --- | --- |
| HTTP | `DELETE /v1/schemas/{namespace}/{slug}/access-group` |
| Input | `namespace: string`, `slug: string`, `SchemaDeleteAccessGroupParams` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.schemas.deleteAccessGroup({
    namespace: "namespace",
    slug: "slug",
    body: {
      accessGroupSlug: "",
    },
  });

  console.log(result);
}

main();
```

### `LoginPortals`

#### Get a login portal

Get a login portal by slug.

| Field | Value |
| --- | --- |
| HTTP | `GET /v1/login-portals/{slug}` |
| Input | `slug: string` |
| Response | `APIPromise<{ uid: string; title: string; slug: string; email: LoginPortalEmail; page: LoginPortalPage }>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.loginPortals.loginPortals({
    slug: "slug",
  });

  console.log(result);
}

main();
```

<br />

#### Delete a login portal

Delete a login portal.

| Field | Value |
| --- | --- |
| HTTP | `DELETE /v1/login-portals/{slug}` |
| Input | `slug: string` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.loginPortals.loginPortals3({
    slug: "slug",
  });

  console.log(result);
}

main();
```

<br />

#### Update portal metadata

Update metadata for a login portal.

| Field | Value |
| --- | --- |
| HTTP | `PATCH /v1/login-portals/{slug}` |
| Input | `slug: string`, `LoginPortals2Params` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.loginPortals.loginPortals2({
    slug: "slug",
    body: {},
  });

  console.log(result);
}

main();
```

<br />

#### List all portals

List all login portals for the current team.

| Field | Value |
| --- | --- |
| HTTP | `GET /v1/login-portals` |
| Response | `APIPromise<Array<LoginPortal>>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.loginPortals.loginPortals5();

  console.log(result);
}

main();
```

<br />

#### Create a portal

Create a login portal for the current team.

| Field | Value |
| --- | --- |
| HTTP | `POST /v1/login-portals` |
| Input | `LoginPortals4Params` |
| Response | `APIPromise<Uid>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.loginPortals.loginPortals4({
    body: {
      title: "",
      slug: "",
      email: {
        logo: "",
        logoSize: "100",
        buttonText: "Login",
        message: "Click to access private documentation hosted by scalar.com",
        title: "Private Docs",
        mainColor: "#2a2f45",
        mainBackground: "#f6f6f6",
        cardColor: "2a2f45",
        cardBackground: "#fff",
        buttonColor: "#fff",
        buttonBackground: "#0f0f0f",
      },
      page: {
        title: "Scalar Private Docs",
        description: "Login to access your documentation",
        head: "",
        script: "",
        theme: "",
        companyName: "",
        logo: "",
        logoUrl: "",
        favicon: "",
        termsLink: "",
        privacyLink: "",
        formTitle: "Scalar Private Docs",
        formDescription: "Login to access your documentation",
        formImage: "",
      },
    },
  });

  console.log(result);
}

main();
```

### `Rules`

#### List all rules

List all rulesets in a namespace.

| Field | Value |
| --- | --- |
| HTTP | `GET /v1/rulesets/{namespace}` |
| Input | `namespace: string` |
| Response | `APIPromise<Array<Rule>>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.rules.listRulesets({
    namespace: "namespace",
  });

  console.log(result);
}

main();
```

<br />

#### Create a rule

Create a rule in a namespace.

| Field | Value |
| --- | --- |
| HTTP | `POST /v1/rulesets/{namespace}` |
| Input | `namespace: string`, `RuleCreateRulesetParams` |
| Response | `APIPromise<Uid>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.rules.createRuleset({
    namespace: "namespace",
    body: {
      title: "",
      slug: "",
      document: "",
    },
  });

  console.log(result);
}

main();
```

<br />

#### Get a rule

Get a rule document by slug.

| Field | Value |
| --- | --- |
| HTTP | `GET /v1/rulesets/{namespace}/{slug}` |
| Input | `namespace: string`, `slug: string` |
| Response | `APIPromise<string>` |
| Content-Type | `text/plain` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.rules.retrieveRulesetDocument({
    namespace: "namespace",
    slug: "slug",
  });

  console.log(result);
}

main();
```

<br />

#### Delete a rule

Delete a rule by slug.

| Field | Value |
| --- | --- |
| HTTP | `DELETE /v1/rulesets/{namespace}/{slug}` |
| Input | `namespace: string`, `slug: string` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.rules.deleteRuleset({
    namespace: "namespace",
    slug: "slug",
  });

  console.log(result);
}

main();
```

<br />

#### Update rule metadata

Update rule metadata by slug.

| Field | Value |
| --- | --- |
| HTTP | `PATCH /v1/rulesets/{namespace}/{slug}` |
| Input | `namespace: string`, `slug: string`, `RuleUpdateRulesetParams` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.rules.updateRuleset({
    namespace: "namespace",
    slug: "slug",
    body: {},
  });

  console.log(result);
}

main();
```

<br />

#### Add rule access group

Grant an access group to a rule.

| Field | Value |
| --- | --- |
| HTTP | `POST /v1/rulesets/{namespace}/{slug}/access-group` |
| Input | `namespace: string`, `slug: string`, `RuleCreateRulesetAccessGroupParams` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.rules.createRulesetAccessGroup({
    namespace: "namespace",
    slug: "slug",
    body: {
      accessGroupSlug: "",
    },
  });

  console.log(result);
}

main();
```

<br />

#### Remove rule access group

Remove an access group from a rule.

| Field | Value |
| --- | --- |
| HTTP | `DELETE /v1/rulesets/{namespace}/{slug}/access-group` |
| Input | `namespace: string`, `slug: string`, `RuleDeleteRulesetAccessGroupParams` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.rules.deleteRulesetAccessGroup({
    namespace: "namespace",
    slug: "slug",
    body: {
      accessGroupSlug: "",
    },
  });

  console.log(result);
}

main();
```

### `Themes`

#### List all themes

List all team themes.

| Field | Value |
| --- | --- |
| HTTP | `GET /v1/themes` |
| Response | `APIPromise<Array<Theme>>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.themes.list();

  console.log(result);
}

main();
```

<br />

#### Create a theme

Create a team theme.

| Field | Value |
| --- | --- |
| HTTP | `POST /v1/themes` |
| Input | `ThemeCreateParams` |
| Response | `APIPromise<Uid>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.themes.create({
    body: {
      name: "",
      slug: "",
      document: "",
    },
  });

  console.log(result);
}

main();
```

<br />

#### Get a theme

Get the theme document by slug.

| Field | Value |
| --- | --- |
| HTTP | `GET /v1/themes/{slug}` |
| Input | `slug: string` |
| Response | `APIPromise<string>` |
| Content-Type | `text/plain` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.themes.retrieve({
    slug: "slug",
  });

  console.log(result);
}

main();
```

<br />

#### Update theme document

Replace the theme document.

| Field | Value |
| --- | --- |
| HTTP | `PUT /v1/themes/{slug}` |
| Input | `slug: string`, `ThemeReplaceDocumentParams` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.themes.replaceDocument({
    slug: "slug",
    body: {
      document: "",
    },
  });

  console.log(result);
}

main();
```

<br />

#### Delete a theme

Delete a theme by slug.

| Field | Value |
| --- | --- |
| HTTP | `DELETE /v1/themes/{slug}` |
| Input | `slug: string` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.themes.delete({
    slug: "slug",
  });

  console.log(result);
}

main();
```

<br />

#### Update theme metadata

Update theme metadata.

| Field | Value |
| --- | --- |
| HTTP | `PATCH /v1/themes/{slug}` |
| Input | `slug: string`, `ThemeUpdateParams` |
| Response | `APIPromise<null>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.themes.update({
    slug: "slug",
    body: {},
  });

  console.log(result);
}

main();
```

### `Teams`

#### List teams

List all available teams

| Field | Value |
| --- | --- |
| HTTP | `GET /v1/teams` |
| Response | `APIPromise<Array<Team>>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.teams.list();

  console.log(result);
}

main();
```

### `ScalarDocs`

#### List all projects

List all guide projects.

| Field | Value |
| --- | --- |
| HTTP | `GET /v1/guides` |
| Response | `APIPromise<Array<GithubProject>>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.scalarDocs.listGuides();

  console.log(result);
}

main();
```

<br />

#### Create a project

Create a guide project.

| Field | Value |
| --- | --- |
| HTTP | `POST /v1/guides` |
| Input | `ScalarDocCreateGuideParams` |
| Response | `APIPromise<{ uid: string; slug: string }>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.scalarDocs.createGuide({
    body: {
      name: "",
      isPrivate: false,
      allowedUsers: [],
      allowedDomains: [],
    },
  });

  console.log(result);
}

main();
```

<br />

#### Publish a project

Start a new publish process.

| Field | Value |
| --- | --- |
| HTTP | `POST /v1/guides/{slug}/publish` |
| Input | `slug: string` |
| Response | `APIPromise<{ publishUid: string }>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.scalarDocs.publishGuide({
    slug: "slug",
  });

  console.log(result);
}

main();
```

### `Namespaces`

#### List namespaces

Get all namespaces for the current team

| Field | Value |
| --- | --- |
| HTTP | `GET /v1/namespaces` |
| Response | `APIPromise<Array<string>>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.namespaces.list();

  console.log(result);
}

main();
```

### `Authentication`

#### Exchange token

Exchange an API key for an access token.

| Field | Value |
| --- | --- |
| HTTP | `POST /v1/auth/exchange` |
| Input | `AuthenticationExchangePersonalTokenParams` |
| Response | `APIPromise<{ accessToken: string }>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.authentication.exchangePersonalToken({
    body: {
      personalToken: "",
    },
  });

  console.log(result);
}

main();
```

<br />

#### Get current user

Get the authenticated user, including their available teams and theme.

| Field | Value |
| --- | --- |
| HTTP | `GET /v1/auth/me` |
| Response | `APIPromise<User>` |
| Content-Type | `application/json` |
| Error statuses | `400`, `401`, `403`, `404`, `422`, `500` |

```ts
import ScalarApi from "@scalar/sdk";

const client = new ScalarApi({
  bearer_auth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

async function main() {
  const result = await client.authentication.listCurrentUser();

  console.log(result);
}

main();
```

<br />

## Errors

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

Documented error statuses: `400`, `401`, `403`, `404`, `422`, `500`.

<br />

## Retries and Timeouts

Generated clients support request timeouts and retry temporary failures such as network errors, 408, 409, 429, and 5xx responses. Retry delays honor `Retry-After` headers when present.

<br />

## Debugging

- `logLevel: "debug"` logs request URLs, options, response status, response headers, and retry attempts.
- Pass a custom `logger` to route logs into your own observability pipeline.
- Set `logLevel: null` to disable environment-driven logging.

<br />

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

Powered by Scalar.
