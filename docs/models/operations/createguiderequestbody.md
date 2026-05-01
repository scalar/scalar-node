# CreateGuideRequestBody

## Example Usage

```typescript
import { CreateGuideRequestBody } from "@scalar/sdk/models/operations";

let value: CreateGuideRequestBody = {
  name: "<value>",
  allowedUsers: [],
  allowedDomains: [],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `slug`             | *string*           | :heavy_minus_sign: | N/A                |
| `isPrivate`        | *boolean*          | :heavy_minus_sign: | N/A                |
| `allowedUsers`     | *string*[]         | :heavy_check_mark: | N/A                |
| `allowedDomains`   | *string*[]         | :heavy_check_mark: | N/A                |