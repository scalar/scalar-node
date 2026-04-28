# ManagedDocVersion

## Example Usage

```typescript
import { ManagedDocVersion } from "@scalar/sdk/models/components";

let value: ManagedDocVersion = {
  uid: "<id>",
  createdAt: 2328.34,
  version: "<value>",
  embedStatus: "complete",
  tags: [],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uid`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `createdAt`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `version`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `upgraded`                                                       | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `embedStatus`                                                    | [components.EmbedStatus](../../models/components/embedstatus.md) | :heavy_check_mark:                                               | N/A                                                              |
| `tags`                                                           | *string*[]                                                       | :heavy_check_mark:                                               | N/A                                                              |
| `tools`                                                          | [components.Tools](../../models/components/tools.md)[]           | :heavy_minus_sign:                                               | N/A                                                              |
| `yamlSha`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `jsonSha`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |