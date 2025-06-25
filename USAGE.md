<!-- Start SDK Example Usage [usage] -->
```typescript
import { Scalar } from "@scalar/sdk";

const scalar = new Scalar({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await scalar.apiDocs.getv1ApisNamespace({
    namespace: "<value>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->