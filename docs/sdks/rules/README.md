# Rules
(*rules*)

## Overview

Rules

### Available Operations

* [listRulesets](#listrulesets) - List all rules
* [createRuleset](#createruleset) - Create a rule
* [updateRuleset](#updateruleset) - Update rule metadata
* [deleteRuleset](#deleteruleset) - Delete a rule
* [getRulesetDocument](#getrulesetdocument) - Get a rule
* [addRulesetAccessGroup](#addrulesetaccessgroup) - Add rule access group
* [removeRulesetAccessGroup](#removerulesetaccessgroup) - Remove rule access group

## listRulesets

List all rulesets in a namespace.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.rules.listRulesets({
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
import { rulesListRulesets } from "@scalar/sdk/funcs/rulesListRulesets.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await rulesListRulesets(scalar, {
    namespace: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rulesListRulesets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListRulesetsRequest](../../models/operations/listrulesetsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Rule[]](../../models/.md)\>**

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

## createRuleset

Create a rule in a namespace.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.rules.createRuleset({
    namespace: "<value>",
    requestBody: {
      title: "<value>",
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
import { rulesCreateRuleset } from "@scalar/sdk/funcs/rulesCreateRuleset.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await rulesCreateRuleset(scalar, {
    namespace: "<value>",
    requestBody: {
      title: "<value>",
      slug: "<value>",
      document: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rulesCreateRuleset failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateRulesetRequest](../../models/operations/createrulesetrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## updateRuleset

Update rule metadata by slug.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.rules.updateRuleset({
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
import { rulesUpdateRuleset } from "@scalar/sdk/funcs/rulesUpdateRuleset.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await rulesUpdateRuleset(scalar, {
    namespace: "<value>",
    slug: "<value>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rulesUpdateRuleset failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRulesetRequest](../../models/operations/updaterulesetrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## deleteRuleset

Delete a rule by slug.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.rules.deleteRuleset({
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
import { rulesDeleteRuleset } from "@scalar/sdk/funcs/rulesDeleteRuleset.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await rulesDeleteRuleset(scalar, {
    namespace: "<value>",
    slug: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rulesDeleteRuleset failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteRulesetRequest](../../models/operations/deleterulesetrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## getRulesetDocument

Get a rule document by slug.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.rules.getRulesetDocument({
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
import { rulesGetRulesetDocument } from "@scalar/sdk/funcs/rulesGetRulesetDocument.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await rulesGetRulesetDocument(scalar, {
    namespace: "<value>",
    slug: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rulesGetRulesetDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRulesetDocumentRequest](../../models/operations/getrulesetdocumentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## addRulesetAccessGroup

Grant an access group to a rule.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.rules.addRulesetAccessGroup({
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
import { rulesAddRulesetAccessGroup } from "@scalar/sdk/funcs/rulesAddRulesetAccessGroup.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await rulesAddRulesetAccessGroup(scalar, {
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
    console.log("rulesAddRulesetAccessGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddRulesetAccessGroupRequest](../../models/operations/addrulesetaccessgrouprequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## removeRulesetAccessGroup

Remove an access group from a rule.

### Example Usage

```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.rules.removeRulesetAccessGroup({
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
import { rulesRemoveRulesetAccessGroup } from "@scalar/sdk/funcs/rulesRemoveRulesetAccessGroup.js";

// Use `ScalarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const scalar = new ScalarCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await rulesRemoveRulesetAccessGroup(scalar, {
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
    console.log("rulesRemoveRulesetAccessGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveRulesetAccessGroupRequest](../../models/operations/removerulesetaccessgrouprequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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