# Postv1LoginPortalsRequestBody

## Example Usage

```typescript
import { Postv1LoginPortalsRequestBody } from "@scalar/sdk/models/operations";

let value: Postv1LoginPortalsRequestBody = {
  title: "<value>",
  slug: "<value>",
  email: {},
  page: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `title`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `slug`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `email`                                                                    | [components.LoginPortalEmail](../../models/components/loginportalemail.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `page`                                                                     | [components.LoginPortalPage](../../models/components/loginportalpage.md)   | :heavy_check_mark:                                                         | N/A                                                                        |