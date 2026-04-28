# Schema

## Example Usage

```typescript
import { Schema } from "@scalar/sdk/models/components";

let value: Schema = {
  uid: "<id>",
  slug: "<value>",
  namespace: "<value>",
  versions: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `uid`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `title`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `slug`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `namespace`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `isPrivate`                                                                          | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `versions`                                                                           | [components.ManagedSchemaVersion](../../models/components/managedschemaversion.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |