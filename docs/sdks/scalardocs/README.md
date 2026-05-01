# ScalarDocs
(*scalarDocs*)

## Overview

Scalar Docs

### Available Operations

* [listGuides](#listguides) - List all projects
* [createGuide](#createguide) - Create a project
* [publishGuide](#publishguide) - Publish a project

## listGuides

List all guide projects.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.scalarDocs.listGuides();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { scalarDocsListGuides } from "@scalar/sdk/funcs/scalarDocsListGuides.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await scalarDocsListGuides(scalar);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scalarDocsListGuides failed:", res.error);
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

**Promise\<[components.GithubProject[]](../../models/.md)\>**

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

## createGuide

Create a guide project.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.scalarDocs.createGuide({
    name: "<value>",
    allowedUsers: [
      "<value 1>",
    ],
    allowedDomains: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { scalarDocsCreateGuide } from "@scalar/sdk/funcs/scalarDocsCreateGuide.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await scalarDocsCreateGuide(scalar, {
    name: "<value>",
    allowedUsers: [
      "<value 1>",
    ],
    allowedDomains: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scalarDocsCreateGuide failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateGuideRequestBody](../../models/operations/createguiderequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateGuideResponseBody](../../models/operations/createguideresponsebody.md)\>**

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

## publishGuide

Start a new publish process.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.scalarDocs.publishGuide({
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
import { scalarDocsPublishGuide } from "@scalar/sdk/funcs/scalarDocsPublishGuide.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await scalarDocsPublishGuide(scalar, {
    slug: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scalarDocsPublishGuide failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PublishGuideRequest](../../models/operations/publishguiderequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PublishGuideResponseBody](../../models/operations/publishguideresponsebody.md)\>**

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