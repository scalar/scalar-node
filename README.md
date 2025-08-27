# access-service-typescript

Developer-friendly, idiomatic Typescript SDK for the *access-service-typescript* API.

<div align="left">
    <a href="https://www.scalar.com/?utm_source=access-service-typescript&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20scalar+speakeasy-212015?style=for-the-badge&logo=scalar&labelColor=252525" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<br />

## Summary

Scalar API: Public facing api to manage all scalar platform entities
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@scalar/sdk](#scalarsdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @scalar/sdk
```

### PNPM

```bash
pnpm add @scalar/sdk
```

### Bun

```bash
bun add @scalar/sdk
```

### Yarn

```bash
yarn add @scalar/sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.apiDocs.getv1ApisNamespace({
    namespace: "<value>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      |
| ------------ | ---- | ----------- |
| `bearerAuth` | http | HTTP Bearer |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.apiDocs.getv1ApisNamespace({
    namespace: "<value>",
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [apiDocs](docs/sdks/apidocs/README.md)

* [getv1ApisNamespace](docs/sdks/apidocs/README.md#getv1apisnamespace) - List all APIs
* [postv1ApisNamespace](docs/sdks/apidocs/README.md#postv1apisnamespace) - Create an API
* [patchv1ApisNamespaceSlug](docs/sdks/apidocs/README.md#patchv1apisnamespaceslug) - Update metadata
* [deletev1ApisNamespaceSlug](docs/sdks/apidocs/README.md#deletev1apisnamespaceslug) - Delete an API
* [getv1ApisNamespaceSlugVersionSemver](docs/sdks/apidocs/README.md#getv1apisnamespaceslugversionsemver) - Get API document
* [deletev1ApisNamespaceSlugVersionSemver](docs/sdks/apidocs/README.md#deletev1apisnamespaceslugversionsemver) - Delete version
* [postv1ApisNamespaceSlugVersion](docs/sdks/apidocs/README.md#postv1apisnamespaceslugversion) - Create version
* [postv1ApisNamespaceSlugAccessGroup](docs/sdks/apidocs/README.md#postv1apisnamespaceslugaccessgroup) - Add API access group
* [deletev1ApisNamespaceSlugAccessGroup](docs/sdks/apidocs/README.md#deletev1apisnamespaceslugaccessgroup) - Delete API access group

### [guides](docs/sdks/guides/README.md)

* [getv1Guides](docs/sdks/guides/README.md#getv1guides) - List all projects
* [postv1Guides](docs/sdks/guides/README.md#postv1guides) - Create new project
* [postv1GuidesSlugPublish](docs/sdks/guides/README.md#postv1guidesslugpublish) - Publish project

### [loginPortals](docs/sdks/loginportals/README.md)

* [getv1LoginPortalsSlug](docs/sdks/loginportals/README.md#getv1loginportalsslug) - Get a login portal
* [patchv1LoginPortalsSlug](docs/sdks/loginportals/README.md#patchv1loginportalsslug) - Update metadata
* [deletev1LoginPortalsSlug](docs/sdks/loginportals/README.md#deletev1loginportalsslug) - Delete a login portal
* [postv1LoginPortals](docs/sdks/loginportals/README.md#postv1loginportals) - Create a portal
* [getv1LoginPortals](docs/sdks/loginportals/README.md#getv1loginportals) - List all portals

### [rules](docs/sdks/rules/README.md)

* [getv1RulesetsNamespace](docs/sdks/rules/README.md#getv1rulesetsnamespace) - List all rules
* [postv1RulesetsNamespace](docs/sdks/rules/README.md#postv1rulesetsnamespace) - Create a rule
* [patchv1RulesetsNamespaceSlug](docs/sdks/rules/README.md#patchv1rulesetsnamespaceslug) - Update rule metadata
* [deletev1RulesetsNamespaceSlug](docs/sdks/rules/README.md#deletev1rulesetsnamespaceslug) - Delete a rule
* [getv1RulesetsNamespaceSlug](docs/sdks/rules/README.md#getv1rulesetsnamespaceslug) - Get a rule
* [postv1RulesetsNamespaceSlugAccessGroup](docs/sdks/rules/README.md#postv1rulesetsnamespaceslugaccessgroup) - Add rule access group
* [deletev1RulesetsNamespaceSlugAccessGroup](docs/sdks/rules/README.md#deletev1rulesetsnamespaceslugaccessgroup) - Remove rule access group


### [schemas](docs/sdks/schemas/README.md)

* [getv1SchemasNamespace](docs/sdks/schemas/README.md#getv1schemasnamespace) - List all shared components
* [postv1SchemasNamespace](docs/sdks/schemas/README.md#postv1schemasnamespace) - Create a shared component
* [patchv1SchemasNamespaceSlug](docs/sdks/schemas/README.md#patchv1schemasnamespaceslug) - Update shared component metadata
* [deletev1SchemasNamespaceSlug](docs/sdks/schemas/README.md#deletev1schemasnamespaceslug) - Delete a shared component
* [getv1SchemasNamespaceSlugVersionSemver](docs/sdks/schemas/README.md#getv1schemasnamespaceslugversionsemver) - Get a shared component document
* [deletev1SchemasNamespaceSlugVersionSemver](docs/sdks/schemas/README.md#deletev1schemasnamespaceslugversionsemver) - Delete a shared component version
* [postv1SchemasNamespaceSlugVersion](docs/sdks/schemas/README.md#postv1schemasnamespaceslugversion) - Create a shared component version
* [postv1SchemasNamespaceSlugAccessGroup](docs/sdks/schemas/README.md#postv1schemasnamespaceslugaccessgroup) - Add shared component access group
* [deletev1SchemasNamespaceSlugAccessGroup](docs/sdks/schemas/README.md#deletev1schemasnamespaceslugaccessgroup) - Remove shared component access group

### [themes](docs/sdks/themes/README.md)

* [getv1Themes](docs/sdks/themes/README.md#getv1themes) - List all themes
* [postv1Themes](docs/sdks/themes/README.md#postv1themes) - Create a theme
* [patchv1ThemesSlug](docs/sdks/themes/README.md#patchv1themesslug) - Update theme metadata
* [putv1ThemesSlug](docs/sdks/themes/README.md#putv1themesslug) - Update theme document
* [deletev1ThemesSlug](docs/sdks/themes/README.md#deletev1themesslug) - Delete a theme
* [getv1ThemesSlug](docs/sdks/themes/README.md#getv1themesslug) - Get a theme

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`apiDocsDeletev1ApisNamespaceSlug`](docs/sdks/apidocs/README.md#deletev1apisnamespaceslug) - Delete an API
- [`apiDocsDeletev1ApisNamespaceSlugAccessGroup`](docs/sdks/apidocs/README.md#deletev1apisnamespaceslugaccessgroup) - Delete API access group
- [`apiDocsDeletev1ApisNamespaceSlugVersionSemver`](docs/sdks/apidocs/README.md#deletev1apisnamespaceslugversionsemver) - Delete version
- [`apiDocsGetv1ApisNamespace`](docs/sdks/apidocs/README.md#getv1apisnamespace) - List all APIs
- [`apiDocsGetv1ApisNamespaceSlugVersionSemver`](docs/sdks/apidocs/README.md#getv1apisnamespaceslugversionsemver) - Get API document
- [`apiDocsPatchv1ApisNamespaceSlug`](docs/sdks/apidocs/README.md#patchv1apisnamespaceslug) - Update metadata
- [`apiDocsPostv1ApisNamespace`](docs/sdks/apidocs/README.md#postv1apisnamespace) - Create an API
- [`apiDocsPostv1ApisNamespaceSlugAccessGroup`](docs/sdks/apidocs/README.md#postv1apisnamespaceslugaccessgroup) - Add API access group
- [`apiDocsPostv1ApisNamespaceSlugVersion`](docs/sdks/apidocs/README.md#postv1apisnamespaceslugversion) - Create version
- [`guidesGetv1Guides`](docs/sdks/guides/README.md#getv1guides) - List all projects
- [`guidesPostv1Guides`](docs/sdks/guides/README.md#postv1guides) - Create new project
- [`guidesPostv1GuidesSlugPublish`](docs/sdks/guides/README.md#postv1guidesslugpublish) - Publish project
- [`loginPortalsDeletev1LoginPortalsSlug`](docs/sdks/loginportals/README.md#deletev1loginportalsslug) - Delete a login portal
- [`loginPortalsGetv1LoginPortals`](docs/sdks/loginportals/README.md#getv1loginportals) - List all portals
- [`loginPortalsGetv1LoginPortalsSlug`](docs/sdks/loginportals/README.md#getv1loginportalsslug) - Get a login portal
- [`loginPortalsPatchv1LoginPortalsSlug`](docs/sdks/loginportals/README.md#patchv1loginportalsslug) - Update metadata
- [`loginPortalsPostv1LoginPortals`](docs/sdks/loginportals/README.md#postv1loginportals) - Create a portal
- [`rulesDeletev1RulesetsNamespaceSlug`](docs/sdks/rules/README.md#deletev1rulesetsnamespaceslug) - Delete a rule
- [`rulesDeletev1RulesetsNamespaceSlugAccessGroup`](docs/sdks/rules/README.md#deletev1rulesetsnamespaceslugaccessgroup) - Remove rule access group
- [`rulesGetv1RulesetsNamespace`](docs/sdks/rules/README.md#getv1rulesetsnamespace) - List all rules
- [`rulesGetv1RulesetsNamespaceSlug`](docs/sdks/rules/README.md#getv1rulesetsnamespaceslug) - Get a rule
- [`rulesPatchv1RulesetsNamespaceSlug`](docs/sdks/rules/README.md#patchv1rulesetsnamespaceslug) - Update rule metadata
- [`rulesPostv1RulesetsNamespace`](docs/sdks/rules/README.md#postv1rulesetsnamespace) - Create a rule
- [`rulesPostv1RulesetsNamespaceSlugAccessGroup`](docs/sdks/rules/README.md#postv1rulesetsnamespaceslugaccessgroup) - Add rule access group
- [`schemasDeletev1SchemasNamespaceSlug`](docs/sdks/schemas/README.md#deletev1schemasnamespaceslug) - Delete a shared component
- [`schemasDeletev1SchemasNamespaceSlugAccessGroup`](docs/sdks/schemas/README.md#deletev1schemasnamespaceslugaccessgroup) - Remove shared component access group
- [`schemasDeletev1SchemasNamespaceSlugVersionSemver`](docs/sdks/schemas/README.md#deletev1schemasnamespaceslugversionsemver) - Delete a shared component version
- [`schemasGetv1SchemasNamespace`](docs/sdks/schemas/README.md#getv1schemasnamespace) - List all shared components
- [`schemasGetv1SchemasNamespaceSlugVersionSemver`](docs/sdks/schemas/README.md#getv1schemasnamespaceslugversionsemver) - Get a shared component document
- [`schemasPatchv1SchemasNamespaceSlug`](docs/sdks/schemas/README.md#patchv1schemasnamespaceslug) - Update shared component metadata
- [`schemasPostv1SchemasNamespace`](docs/sdks/schemas/README.md#postv1schemasnamespace) - Create a shared component
- [`schemasPostv1SchemasNamespaceSlugAccessGroup`](docs/sdks/schemas/README.md#postv1schemasnamespaceslugaccessgroup) - Add shared component access group
- [`schemasPostv1SchemasNamespaceSlugVersion`](docs/sdks/schemas/README.md#postv1schemasnamespaceslugversion) - Create a shared component version
- [`themesDeletev1ThemesSlug`](docs/sdks/themes/README.md#deletev1themesslug) - Delete a theme
- [`themesGetv1Themes`](docs/sdks/themes/README.md#getv1themes) - List all themes
- [`themesGetv1ThemesSlug`](docs/sdks/themes/README.md#getv1themesslug) - Get a theme
- [`themesPatchv1ThemesSlug`](docs/sdks/themes/README.md#patchv1themesslug) - Update theme metadata
- [`themesPostv1Themes`](docs/sdks/themes/README.md#postv1themes) - Create a theme
- [`themesPutv1ThemesSlug`](docs/sdks/themes/README.md#putv1themesslug) - Update theme document

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.apiDocs.getv1ApisNamespace({
    namespace: "<value>",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.apiDocs.getv1ApisNamespace({
    namespace: "<value>",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`ScalarError`](./src/models/errors/scalarerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Scalar } from "@scalar/sdk";
import * as errors from "@scalar/sdk/models/errors";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  try {
    const result = await scalar.apiDocs.getv1ApisNamespace({
      namespace: "<value>",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.ScalarError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.FourHundred) {
        console.log(error.data$.message); // string
        console.log(error.data$.code); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`ScalarError`](./src/models/errors/scalarerror.ts): The base class for HTTP error responses.
  * [`FourHundred`](docs/models/errors/fourhundred.md): Bad request. Status code `400`.
  * [`FourHundredAndOne`](docs/models/errors/fourhundredandone.md): No auth. Status code `401`.
  * [`FourHundredAndThree`](docs/models/errors/fourhundredandthree.md): Forbidden. Status code `403`.
  * [`FourHundredAndFour`](docs/models/errors/fourhundredandfour.md): Not found. Status code `404`.
  * [`FourHundredAndTwentyTwo`](docs/models/errors/fourhundredandtwentytwo.md): Invalid payload. Status code `422`.
  * [`FiveHundred`](docs/models/errors/fivehundred.md): Uncaught error. Status code `500`.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`ScalarError`](./src/models/errors/scalarerror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  serverURL: "https://access.scalar.com",
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.apiDocs.getv1ApisNamespace({
    namespace: "<value>",
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Scalar } from "@scalar/sdk";
import { HTTPClient } from "@scalar/sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Scalar({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Scalar } from "@scalar/sdk";

const sdk = new Scalar({ debugLogger: console });
```
<!-- End Debugging [debug] -->

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Scalar](https://www.scalar.com/?utm_source=access-service-typescript&utm_campaign=typescript)