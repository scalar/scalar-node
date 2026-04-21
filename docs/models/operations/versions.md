# Versions

## Example Usage

```typescript
import { Versions } from "@scalar/sdk/models/operations";

let value: Versions = {
  uid: "<id>",
  createdAt: 915.12,
  version: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uid`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `createdAt`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `version`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `upgraded`                                                       | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `embedStatus`                                                    | [operations.EmbedStatus](../../models/operations/embedstatus.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `tags`                                                           | *string*[]                                                       | :heavy_minus_sign:                                               | N/A                                                              |