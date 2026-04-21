# Auth
(*auth*)

## Overview

Auth

### Available Operations

* [postv1AuthExchange](#postv1authexchange) - Exchange token

## postv1AuthExchange

Exchange personal token for access platform token

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar();

async function run() {
  const result = await scalar.auth.postv1AuthExchange({
    personalToken: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScalarCore } from "@scalar/sdk/core.js";
import { authPostv1AuthExchange } from "@scalar/sdk/funcs/authPostv1AuthExchange.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore();

async function run() {
  const res = await authPostv1AuthExchange(scalar, {
    personalToken: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authPostv1AuthExchange failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.Postv1AuthExchangeRequestBody](../../models/operations/postv1authexchangerequestbody.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.Postv1AuthExchangeResponseBody](../../models/operations/postv1authexchangeresponsebody.md)\>**

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