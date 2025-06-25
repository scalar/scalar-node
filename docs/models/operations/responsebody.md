# ResponseBody

## Example Usage

```typescript
import { ResponseBody } from "@scalar/sdk/models/operations";

let value: ResponseBody = {
  version: "<value>",
  namespace: "<value>",
  versions: [
    {
      uid: "<id>",
      createdAt: 915.12,
      version: "<value>",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uid`                                                        | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `version`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `title`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `slug`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `namespace`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `isPrivate`                                                  | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `tags`                                                       | *string*[]                                                   | :heavy_minus_sign:                                           | N/A                                                          |
| `versions`                                                   | [operations.Versions](../../models/operations/versions.md)[] | :heavy_check_mark:                                           | N/A                                                          |