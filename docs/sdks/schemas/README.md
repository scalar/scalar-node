# Schemas
(*schemas*)

## Overview

Schemas

### Available Operations

* [getv1SchemasNamespace](#getv1schemasnamespace) - List all shared components
* [postv1SchemasNamespace](#postv1schemasnamespace) - Create a shared component
* [patchv1SchemasNamespaceSlug](#patchv1schemasnamespaceslug) - Update shared component metadata
* [deletev1SchemasNamespaceSlug](#deletev1schemasnamespaceslug) - Delete a shared component
* [getv1SchemasNamespaceSlugVersionSemver](#getv1schemasnamespaceslugversionsemver) - Get a shared component document
* [deletev1SchemasNamespaceSlugVersionSemver](#deletev1schemasnamespaceslugversionsemver) - Delete a shared component version
* [postv1SchemasNamespaceSlugVersion](#postv1schemasnamespaceslugversion) - Create a shared component version
* [postv1SchemasNamespaceSlugAccessGroup](#postv1schemasnamespaceslugaccessgroup) - Add shared component access group
* [deletev1SchemasNamespaceSlugAccessGroup](#deletev1schemasnamespaceslugaccessgroup) - Remove shared component access group

## getv1SchemasNamespace

Get a list of all schemas for the namespace

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.schemas.getv1SchemasNamespace({
    namespace: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { schemasGetv1SchemasNamespace } from "@scalar/sdk/funcs/schemasGetv1SchemasNamespace.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await schemasGetv1SchemasNamespace(scalar, {
    namespace: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.Getv1SchemasNamespaceRequest](../../models/operations/getv1schemasnamespacerequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.Getv1SchemasNamespaceResponseBody[]](../../models/.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.FourHundred             | 400                            | application/json               |
| errors.FourHundredAndOne       | 401                            | application/json               |
| errors.FourHundredAndThree     | 403                            | application/json               |
| errors.FourHundredAndFour      | 404                            | application/json               |
| errors.FourHundredAndTwentyTwo | 422                            | application/json               |
| errors.FiveHundred             | 500                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## postv1SchemasNamespace

Create a new schema for the namespace

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.schemas.postv1SchemasNamespace({
    namespace: "<value>",
    requestBody: {
      title: "<value>",
      version: "<value>",
      slug: "<value>",
      document: "<value>",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { schemasPostv1SchemasNamespace } from "@scalar/sdk/funcs/schemasPostv1SchemasNamespace.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await schemasPostv1SchemasNamespace(scalar, {
    namespace: "<value>",
    requestBody: {
      title: "<value>",
      version: "<value>",
      slug: "<value>",
      document: "<value>",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.Postv1SchemasNamespaceRequest](../../models/operations/postv1schemasnamespacerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.Postv1SchemasNamespaceResponseBody](../../models/operations/postv1schemasnamespaceresponsebody.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.FourHundred             | 400                            | application/json               |
| errors.FourHundredAndOne       | 401                            | application/json               |
| errors.FourHundredAndThree     | 403                            | application/json               |
| errors.FourHundredAndFour      | 404                            | application/json               |
| errors.FourHundredAndTwentyTwo | 422                            | application/json               |
| errors.FiveHundred             | 500                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## patchv1SchemasNamespaceSlug

Update schema metadata

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.schemas.patchv1SchemasNamespaceSlug({
    namespace: "<value>",
    slug: "<value>",
    requestBody: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { schemasPatchv1SchemasNamespaceSlug } from "@scalar/sdk/funcs/schemasPatchv1SchemasNamespaceSlug.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await schemasPatchv1SchemasNamespaceSlug(scalar, {
    namespace: "<value>",
    slug: "<value>",
    requestBody: {},
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.Patchv1SchemasNamespaceSlugRequest](../../models/operations/patchv1schemasnamespaceslugrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.FourHundred             | 400                            | application/json               |
| errors.FourHundredAndOne       | 401                            | application/json               |
| errors.FourHundredAndThree     | 403                            | application/json               |
| errors.FourHundredAndFour      | 404                            | application/json               |
| errors.FourHundredAndTwentyTwo | 422                            | application/json               |
| errors.FiveHundred             | 500                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## deletev1SchemasNamespaceSlug

Delete a specific schema and all of the related versions

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.schemas.deletev1SchemasNamespaceSlug({
    namespace: "<value>",
    slug: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { schemasDeletev1SchemasNamespaceSlug } from "@scalar/sdk/funcs/schemasDeletev1SchemasNamespaceSlug.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await schemasDeletev1SchemasNamespaceSlug(scalar, {
    namespace: "<value>",
    slug: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.Deletev1SchemasNamespaceSlugRequest](../../models/operations/deletev1schemasnamespaceslugrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.FourHundred             | 400                            | application/json               |
| errors.FourHundredAndOne       | 401                            | application/json               |
| errors.FourHundredAndThree     | 403                            | application/json               |
| errors.FourHundredAndFour      | 404                            | application/json               |
| errors.FourHundredAndTwentyTwo | 422                            | application/json               |
| errors.FiveHundred             | 500                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## getv1SchemasNamespaceSlugVersionSemver

Get a specific schema document

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.schemas.getv1SchemasNamespaceSlugVersionSemver({
    namespace: "<value>",
    slug: "<value>",
    semver: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { schemasGetv1SchemasNamespaceSlugVersionSemver } from "@scalar/sdk/funcs/schemasGetv1SchemasNamespaceSlugVersionSemver.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await schemasGetv1SchemasNamespaceSlugVersionSemver(scalar, {
    namespace: "<value>",
    slug: "<value>",
    semver: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.Getv1SchemasNamespaceSlugVersionSemverRequest](../../models/operations/getv1schemasnamespaceslugversionsemverrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.Getv1SchemasNamespaceSlugVersionSemverResponseBody](../../models/operations/getv1schemasnamespaceslugversionsemverresponsebody.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.FourHundred             | 400                            | application/json               |
| errors.FourHundredAndOne       | 401                            | application/json               |
| errors.FourHundredAndThree     | 403                            | application/json               |
| errors.FourHundredAndFour      | 404                            | application/json               |
| errors.FourHundredAndTwentyTwo | 422                            | application/json               |
| errors.FiveHundred             | 500                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## deletev1SchemasNamespaceSlugVersionSemver

Delete a specific schema version

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.schemas.deletev1SchemasNamespaceSlugVersionSemver({
    namespace: "<value>",
    slug: "<value>",
    semver: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { schemasDeletev1SchemasNamespaceSlugVersionSemver } from "@scalar/sdk/funcs/schemasDeletev1SchemasNamespaceSlugVersionSemver.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await schemasDeletev1SchemasNamespaceSlugVersionSemver(scalar, {
    namespace: "<value>",
    slug: "<value>",
    semver: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.Deletev1SchemasNamespaceSlugVersionSemverRequest](../../models/operations/deletev1schemasnamespaceslugversionsemverrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.FourHundred             | 400                            | application/json               |
| errors.FourHundredAndOne       | 401                            | application/json               |
| errors.FourHundredAndThree     | 403                            | application/json               |
| errors.FourHundredAndFour      | 404                            | application/json               |
| errors.FourHundredAndTwentyTwo | 422                            | application/json               |
| errors.FiveHundred             | 500                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## postv1SchemasNamespaceSlugVersion

Create a shared component version

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.schemas.postv1SchemasNamespaceSlugVersion({
    namespace: "<value>",
    slug: "<value>",
    requestBody: {
      version: "<value>",
      document: "<value>",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { schemasPostv1SchemasNamespaceSlugVersion } from "@scalar/sdk/funcs/schemasPostv1SchemasNamespaceSlugVersion.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await schemasPostv1SchemasNamespaceSlugVersion(scalar, {
    namespace: "<value>",
    slug: "<value>",
    requestBody: {
      version: "<value>",
      document: "<value>",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.Postv1SchemasNamespaceSlugVersionRequest](../../models/operations/postv1schemasnamespaceslugversionrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.Postv1SchemasNamespaceSlugVersionResponseBody](../../models/operations/postv1schemasnamespaceslugversionresponsebody.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.FourHundred             | 400                            | application/json               |
| errors.FourHundredAndOne       | 401                            | application/json               |
| errors.FourHundredAndThree     | 403                            | application/json               |
| errors.FourHundredAndFour      | 404                            | application/json               |
| errors.FourHundredAndTwentyTwo | 422                            | application/json               |
| errors.FiveHundred             | 500                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## postv1SchemasNamespaceSlugAccessGroup

Add access group to schema

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.schemas.postv1SchemasNamespaceSlugAccessGroup({
    namespace: "<value>",
    slug: "<value>",
    requestBody: {
      accessGroupSlug: "<value>",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { schemasPostv1SchemasNamespaceSlugAccessGroup } from "@scalar/sdk/funcs/schemasPostv1SchemasNamespaceSlugAccessGroup.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await schemasPostv1SchemasNamespaceSlugAccessGroup(scalar, {
    namespace: "<value>",
    slug: "<value>",
    requestBody: {
      accessGroupSlug: "<value>",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.Postv1SchemasNamespaceSlugAccessGroupRequest](../../models/operations/postv1schemasnamespaceslugaccessgrouprequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.FourHundred             | 400                            | application/json               |
| errors.FourHundredAndOne       | 401                            | application/json               |
| errors.FourHundredAndThree     | 403                            | application/json               |
| errors.FourHundredAndFour      | 404                            | application/json               |
| errors.FourHundredAndTwentyTwo | 422                            | application/json               |
| errors.FiveHundred             | 500                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## deletev1SchemasNamespaceSlugAccessGroup

Delete access group for schema

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.schemas.deletev1SchemasNamespaceSlugAccessGroup({
    namespace: "<value>",
    slug: "<value>",
    requestBody: {
      accessGroupSlug: "<value>",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { schemasDeletev1SchemasNamespaceSlugAccessGroup } from "@scalar/sdk/funcs/schemasDeletev1SchemasNamespaceSlugAccessGroup.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await schemasDeletev1SchemasNamespaceSlugAccessGroup(scalar, {
    namespace: "<value>",
    slug: "<value>",
    requestBody: {
      accessGroupSlug: "<value>",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.Deletev1SchemasNamespaceSlugAccessGroupRequest](../../models/operations/deletev1schemasnamespaceslugaccessgrouprequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.FourHundred             | 400                            | application/json               |
| errors.FourHundredAndOne       | 401                            | application/json               |
| errors.FourHundredAndThree     | 403                            | application/json               |
| errors.FourHundredAndFour      | 404                            | application/json               |
| errors.FourHundredAndTwentyTwo | 422                            | application/json               |
| errors.FiveHundred             | 500                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |