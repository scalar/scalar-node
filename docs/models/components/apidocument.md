# ApiDocument

## Example Usage

```typescript
import { ApiDocument } from "@scalar/sdk/models/components";

let value: ApiDocument = {
  uid: "<id>",
  version: "<value>",
  slug: "<value>",
  namespace: "<value>",
  tags: [],
  versions: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uid`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `version`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `title`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `slug`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `namespace`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `isPrivate`                                                                    | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `tags`                                                                         | *any*                                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |
| `versions`                                                                     | [components.ManagedDocVersion](../../models/components/manageddocversion.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |