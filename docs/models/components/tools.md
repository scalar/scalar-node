# Tools

## Example Usage

```typescript
import { Tools } from "@scalar/sdk/models/components";

let value: Tools = {
  path: "/usr/local/bin",
  method: "put",
  enabledTools: [
    "get-mini-openapi-spec",
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `path`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `method`                                                             | [components.Method](../../models/components/method.md)               | :heavy_check_mark:                                                   | N/A                                                                  |
| `enabledTools`                                                       | [components.EnabledTools](../../models/components/enabledtools.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |