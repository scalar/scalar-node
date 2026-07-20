# Scalar API

Generated TypeScript SDK for Scalar API.
API for managing Scalar platform resources.

## TypeScript SDK

For TypeScript, we provide a SDK that makes using our API even easier.

### Install

```bash
npm add @scalar/sdk
```

### Get a Scalar API key

Create an API key in your Scalar account:

- Dashboard: https://dashboard.scalar.com/account
- Store it in `.env`, for example:

```bash
SCALAR_API_KEY=your_personal_token
```

### Exchange your API key for an access token

The personal token is not an access token. Exchange it first with `postv1AuthExchange`.

If you use the personal token directly for authenticated API calls, the API returns `401 Invalid authentication token`.

```ts
import { Scalar } from '@scalar/sdk'

const scalar = new Scalar()

const exchange = await scalar.auth.postv1AuthExchange({
  personalToken: process.env.SCALAR_API_KEY!,
})

const accessToken = exchange.accessToken
```

### Use the access token

Construct a second client with bearer auth. Use this authenticated client for API calls.

```ts
import { Scalar } from '@scalar/sdk'

const scalar = new Scalar()

const exchange = await scalar.auth.postv1AuthExchange({
  personalToken: process.env.SCALAR_API_KEY!,
})

const authedScalar = new Scalar({
  bearerAuth: exchange.accessToken,
})
```

### Notes

- The exchange request itself can be made from a client constructed with no arguments (`new Scalar()`).
- The exchanged access token is valid for 12 hours.
- Timestamps are Unix seconds.

### Read more

- [@scalar/sdk on npm](https://www.npmjs.com/package/@scalar/sdk)

<br />

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](./api.md)
- [Authentication](#authentication)
- [Errors](#errors)
- [Client Options](#client-options)
- [Request Options](#request-options)
- [Retries and Timeouts](#retries-and-timeouts)
- [Helpers](#helpers)
- [Logging](#logging)
- [Requirements](#requirements)

<br />

## Installation

```sh
npm install @scalar/sdk
```

<br />

## Usage

```ts
import Scalar from "@scalar/sdk";

const client = new Scalar({
  bearerAuth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

const listAllAPIDocuments = await client.registry.listAllAPIDocuments();
console.log(listAllAPIDocuments);
```

The examples in the following sections assume a `client` configured as shown above.

See the [API reference](./api.md) for every available operation.

<br />

## Authentication

Pass credentials to the generated client constructor. Environment variables are read automatically when supported by the target runtime.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `string \| provider` | - | Credential for the BearerAuth scheme. Defaults to BEARER_AUTH. |

Declared schemes:

- `BearerAuth` bearer token

<br />

## Errors

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

```ts
import { APIError } from "@scalar/sdk";

try {
  const listAllAPIDocuments = await client.registry.listAllAPIDocuments();
} catch (err) {
  if (err instanceof APIError) {
    console.log(err.status, err.name, err.headers);
  }
  throw err;
}
```

Documented error statuses: `400`, `401`, `403`, `404`, `422`, `500`.

<br />

## Client Options

Configure the generated client by setting any of these options when you create it.

```ts
import Scalar from "@scalar/sdk";

const client = new Scalar({
  timeout: 60000,
  maxRetries: 2,
  logLevel: "debug",
});
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `string \| AuthTokenProvider` | `process.env["BEARER_AUTH"]` | Credential for the BearerAuth scheme. |
| `baseURL` | `string \| null` | `process.env["SCALAR_BASE_URL"]` | Override the default API base URL. Pass `null` when selecting a configured environment. |
| `timeout` | `number` | `60000` | Maximum time in milliseconds to wait for a response before aborting a request. |
| `maxRetries` | `number` | `2` | Number of retries for temporary failures. |
| `defaultHeaders` | `HeadersInit` | - | Headers sent with every request. |
| `defaultQuery` | `Record<string, string \| undefined>` | - | Query parameters sent with every request. |
| `fetchOptions` | `RequestInit` | - | Additional fetch options sent with every request. |
| `fetch` | `Fetch` | - | Custom fetch implementation. |
| `logLevel` | `"off" \| "error" \| "warn" \| "info" \| "debug" \| null` | `process.env["SCALAR_LOG"]` | Controls request and retry debug logging. |
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

## Retries and Timeouts

Generated clients support request timeouts and retry temporary failures such as network errors, 408, 409, 429, and 5xx responses. Retry delays honor `Retry-After` headers when present. Tune the retry and timeout client options shown above, or override them per request.

<br />

## Helpers

- Use `.withResponse()` on any request to inspect both parsed data and the raw `Response` object.
- Every operation returns an `APIPromise`, so you can `await` it directly or chain `.withResponse()`.

<br />

## Logging

- Set `logLevel: "debug"` to log request URLs, options, response status, response headers, and retry attempts.
- Pass a custom `logger` to route logs into your own observability pipeline.
- Set `logLevel: null` to disable environment-driven logging.

<br />

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

Powered by Scalar.
