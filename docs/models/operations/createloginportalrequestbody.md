# CreateLoginPortalRequestBody

## Example Usage

```typescript
import { CreateLoginPortalRequestBody } from "@scalar/sdk/models/operations";

let value: CreateLoginPortalRequestBody = {
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