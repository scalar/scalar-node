# GithubProject

## Example Usage

```typescript
import { GithubProject } from "@scalar/sdk/models/components";

let value: GithubProject = {
  uid: "<id>",
  createdAt: 524249,
  updatedAt: 617921,
  name: "<value>",
  activeDeployment: {
    uid: "<id>",
    domain: "lanky-rosemary.biz",
    publishedAt: 249786,
  },
  lastPublished: 801545,
  lastPublishedUid: "<id>",
  accessGroups: [],
  slug: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `uid`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `activeDeployment`                                                                       | [components.ActiveDeployment](../../models/components/activedeployment.md)               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `lastPublished`                                                                          | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `lastPublishedUid`                                                                       | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `loginPortalUid`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `activeThemeId`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `typesenseId`                                                                            | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `isPrivate`                                                                              | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `agentEnabled`                                                                           | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `accessGroups`                                                                           | *any*                                                                                    | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `slug`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `publishStatus`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `publishMessage`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `repository`                                                                             | [components.GithubProjectRepository](../../models/components/githubprojectrepository.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |