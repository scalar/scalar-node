# Getv1SchemasNamespaceResponseBody

## Example Usage

```typescript
import { Getv1SchemasNamespaceResponseBody } from "@scalar/sdk/models/operations";

let value: Getv1SchemasNamespaceResponseBody = {
  namespace: "<value>",
  versions: [
    {},
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `uid`                                                                                                  | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `title`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `slug`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `namespace`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `isPrivate`                                                                                            | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `versions`                                                                                             | [operations.Getv1SchemasNamespaceVersions](../../models/operations/getv1schemasnamespaceversions.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |