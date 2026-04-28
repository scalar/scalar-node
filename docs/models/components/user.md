# User

## Example Usage

```typescript
import { User } from "@scalar/sdk/models/components";

let value: User = {
  uid: "<id>",
  createdAt: 503572,
  updatedAt: 154785,
  email: "Justina.Smith@yahoo.com",
  activeTeamId: "<id>",
  teams: [],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uid`                                                | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `createdAt`                                          | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `updatedAt`                                          | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `email`                                              | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `theme`                                              | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `activeTeamId`                                       | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `hasGithub`                                          | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `teams`                                              | [components.Team](../../models/components/team.md)[] | :heavy_check_mark:                                   | N/A                                                  |