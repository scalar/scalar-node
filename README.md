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

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Scalar": {
      "command": "npx",
      "args": [
        "-y", "--package", "@scalar/sdk",
        "--",
        "mcp", "start",
        "--bearer-auth", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Scalar": {
      "command": "npx",
      "args": [
        "-y", "--package", "@scalar/sdk",
        "--",
        "mcp", "start",
        "--bearer-auth", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @scalar/sdk -- mcp start --help
```
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

  // Handle the result
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

  // Handle the result
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

  // Handle the result
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

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `getv1ApisNamespace` method may throw the following errors:

| Error Type                     | Status Code | Content Type     |
| ------------------------------ | ----------- | ---------------- |
| errors.FourHundred             | 400         | application/json |
| errors.FourHundredAndOne       | 401         | application/json |
| errors.FourHundredAndThree     | 403         | application/json |
| errors.FourHundredAndFour      | 404         | application/json |
| errors.FourHundredAndTwentyTwo | 422         | application/json |
| errors.FiveHundred             | 500         | application/json |
| errors.APIError                | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { Scalar } from "@scalar/sdk";
import {
  FiveHundred,
  FourHundred,
  FourHundredAndFour,
  FourHundredAndOne,
  FourHundredAndThree,
  FourHundredAndTwentyTwo,
  SDKValidationError,
} from "@scalar/sdk/models/errors";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  let result;
  try {
    result = await scalar.apiDocs.getv1ApisNamespace({
      namespace: "<value>",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof FourHundred): {
        // Handle err.data$: FourHundredData
        console.error(err);
        return;
      }
      case (err instanceof FourHundredAndOne): {
        // Handle err.data$: FourHundredAndOneData
        console.error(err);
        return;
      }
      case (err instanceof FourHundredAndThree): {
        // Handle err.data$: FourHundredAndThreeData
        console.error(err);
        return;
      }
      case (err instanceof FourHundredAndFour): {
        // Handle err.data$: FourHundredAndFourData
        console.error(err);
        return;
      }
      case (err instanceof FourHundredAndTwentyTwo): {
        // Handle err.data$: FourHundredAndTwentyTwoData
        console.error(err);
        return;
      }
      case (err instanceof FiveHundred): {
        // Handle err.data$: FiveHundredData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
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

  // Handle the result
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