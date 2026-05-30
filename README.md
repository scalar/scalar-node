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

### `Registry`

#### List all API Documents

List all API documents across every namespace the caller can access.

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
