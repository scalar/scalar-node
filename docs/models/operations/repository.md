# Repository

## Example Usage

```typescript
import { Repository } from "@scalar/sdk/models/operations";

let value: Repository = {
  linkedBy: "<value>",
  id: 4047.24,
  name: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `linkedBy`         | *string*           | :heavy_check_mark: | N/A                |
| `id`               | *number*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `configPath`       | *string*           | :heavy_minus_sign: | N/A                |
| `branch`           | *string*           | :heavy_minus_sign: | N/A                |
| `publishOnMerge`   | *boolean*          | :heavy_minus_sign: | N/A                |