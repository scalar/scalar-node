---
name: scalar-api-typescript-sdk
description: "TypeScript SDK for Scalar API. Use when writing TypeScript code that calls Scalar API with the @scalar/sdk package: installing it, constructing and authenticating the client, and calling API operations."
---

# Scalar API TypeScript SDK

Generated TypeScript client for Scalar API, published as `@scalar/sdk`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
npm install @scalar/sdk
```

## Client setup and authentication

```ts
import Scalar from "@scalar/sdk";

const client = new Scalar({
  bearerAuth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});
```

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `bearerAuth` (env: `BEARER_AUTH`) — Credential for the BearerAuth scheme.

## Calling operations

```ts
import Scalar from "@scalar/sdk";

const client = new Scalar({
  bearerAuth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
});

const listAllAPIDocuments = await client.registry.listAllAPIDocuments();
console.log(listAllAPIDocuments);
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](../../../api.md) before writing a call.

## Error handling

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

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

## Reference files

- [README.md](../../../README.md) — full feature tour: client options, request options, retries and timeouts, logging.
- [api.md](../../../api.md) — complete catalogue of every operation with request and response types.
