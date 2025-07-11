/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { schemasGetv1SchemasNamespaceSlugVersionSemver } from "../../funcs/schemasGetv1SchemasNamespaceSlugVersionSemver.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.Getv1SchemasNamespaceSlugVersionSemverRequest$inboundSchema,
};

export const tool$schemasGetv1SchemasNamespaceSlugVersionSemver: ToolDefinition<
  typeof args
> = {
  name: "schemas-getv1-schemas-namespace-slug-version-semver",
  description: `Get a shared component document

Get a specific schema document`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] =
      await schemasGetv1SchemasNamespaceSlugVersionSemver(
        client,
        args.request,
        { fetchOptions: { signal: ctx.signal } },
      ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
