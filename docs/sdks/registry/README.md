# Registry
(*registry*)

## Overview

Registry

### Available Operations

* [listAllApiDocuments](#listallapidocuments) - List all API Documents
* [listApiDocuments](#listapidocuments) - List API Documents in a namespace
* [createApiDocument](#createapidocument) - Create API Document
* [updateApiDocument](#updateapidocument) - Update API Document metadata
* [deleteApiDocument](#deleteapidocument) - Delete API Document
* [getApiDocumentVersion](#getapidocumentversion) - Get API Document
* [deleteApiDocumentVersion](#deleteapidocumentversion) - Delete API Document version
* [createApiDocumentVersion](#createapidocumentversion) - Create API Document version
* [addApiDocumentAccessGroup](#addapidocumentaccessgroup) - Add access group
* [removeApiDocumentAccessGroup](#removeapidocumentaccessgroup) - Remove access group

## listAllApiDocuments

List all API documents across every namespace the caller can access.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.registry.listAllApiDocuments();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { registryListAllApiDocuments } from "@scalar/sdk/funcs/registryListAllApiDocuments.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await registryListAllApiDocuments(scalar);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registryListAllApiDocuments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApiDocument[]](../../models/.md)\>**

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

## listApiDocuments

List API documents in a namespace.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.registry.listApiDocuments({
    namespace: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { registryListApiDocuments } from "@scalar/sdk/funcs/registryListApiDocuments.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await registryListApiDocuments(scalar, {
    namespace: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registryListApiDocuments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiDocumentsRequest](../../models/operations/listapidocumentsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApiDocument[]](../../models/.md)\>**

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

## createApiDocument

Create an API document.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.registry.createApiDocument({
    namespace: "<value>",
    requestBody: {
      title: "<value>",
      version: "<value>",
      slug: "<value>",
      document: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { registryCreateApiDocument } from "@scalar/sdk/funcs/registryCreateApiDocument.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await registryCreateApiDocument(scalar, {
    namespace: "<value>",
    requestBody: {
      title: "<value>",
      version: "<value>",
      slug: "<value>",
      document: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registryCreateApiDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiDocumentRequest](../../models/operations/createapidocumentrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Uid](../../models/components/uid.md)\>**

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

## updateApiDocument

Update metadata for an API document.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.registry.updateApiDocument({
    namespace: "<value>",
    slug: "<value>",
    requestBody: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { registryUpdateApiDocument } from "@scalar/sdk/funcs/registryUpdateApiDocument.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await registryUpdateApiDocument(scalar, {
    namespace: "<value>",
    slug: "<value>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registryUpdateApiDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateApiDocumentRequest](../../models/operations/updateapidocumentrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## deleteApiDocument

Delete an API document and all versions.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.registry.deleteApiDocument({
    namespace: "<value>",
    slug: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { registryDeleteApiDocument } from "@scalar/sdk/funcs/registryDeleteApiDocument.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await registryDeleteApiDocument(scalar, {
    namespace: "<value>",
    slug: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registryDeleteApiDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteApiDocumentRequest](../../models/operations/deleteapidocumentrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## getApiDocumentVersion

Get a specific API document version.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.registry.getApiDocumentVersion({
    namespace: "<value>",
    slug: "<value>",
    semver: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { registryGetApiDocumentVersion } from "@scalar/sdk/funcs/registryGetApiDocumentVersion.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await registryGetApiDocumentVersion(scalar, {
    namespace: "<value>",
    slug: "<value>",
    semver: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registryGetApiDocumentVersion failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiDocumentVersionRequest](../../models/operations/getapidocumentversionrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[string](../../models/.md)\>**

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

## deleteApiDocumentVersion

Delete a specific API document version.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.registry.deleteApiDocumentVersion({
    namespace: "<value>",
    slug: "<value>",
    semver: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { registryDeleteApiDocumentVersion } from "@scalar/sdk/funcs/registryDeleteApiDocumentVersion.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await registryDeleteApiDocumentVersion(scalar, {
    namespace: "<value>",
    slug: "<value>",
    semver: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registryDeleteApiDocumentVersion failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteApiDocumentVersionRequest](../../models/operations/deleteapidocumentversionrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## createApiDocumentVersion

Create a new API document version.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.registry.createApiDocumentVersion({
    namespace: "<value>",
    slug: "<value>",
    requestBody: {
      version: "<value>",
      document: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { registryCreateApiDocumentVersion } from "@scalar/sdk/funcs/registryCreateApiDocumentVersion.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await registryCreateApiDocumentVersion(scalar, {
    namespace: "<value>",
    slug: "<value>",
    requestBody: {
      version: "<value>",
      document: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registryCreateApiDocumentVersion failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiDocumentVersionRequest](../../models/operations/createapidocumentversionrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Uid](../../models/components/uid.md)\>**

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

## addApiDocumentAccessGroup

Add an access group to an API document.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.registry.addApiDocumentAccessGroup({
    namespace: "<value>",
    slug: "<value>",
    accessGroup: {
      accessGroupSlug: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { registryAddApiDocumentAccessGroup } from "@scalar/sdk/funcs/registryAddApiDocumentAccessGroup.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await registryAddApiDocumentAccessGroup(scalar, {
    namespace: "<value>",
    slug: "<value>",
    accessGroup: {
      accessGroupSlug: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registryAddApiDocumentAccessGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddApiDocumentAccessGroupRequest](../../models/operations/addapidocumentaccessgrouprequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## removeApiDocumentAccessGroup

Remove an access group from an API document.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.registry.removeApiDocumentAccessGroup({
    namespace: "<value>",
    slug: "<value>",
    accessGroup: {
      accessGroupSlug: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { registryRemoveApiDocumentAccessGroup } from "@scalar/sdk/funcs/registryRemoveApiDocumentAccessGroup.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await registryRemoveApiDocumentAccessGroup(scalar, {
    namespace: "<value>",
    slug: "<value>",
    accessGroup: {
      accessGroupSlug: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registryRemoveApiDocumentAccessGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveApiDocumentAccessGroupRequest](../../models/operations/removeapidocumentaccessgrouprequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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