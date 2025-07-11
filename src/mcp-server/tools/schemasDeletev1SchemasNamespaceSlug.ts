/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { schemasDeletev1SchemasNamespaceSlug } from "../../funcs/schemasDeletev1SchemasNamespaceSlug.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.Deletev1SchemasNamespaceSlugRequest$inboundSchema,
};

export const tool$schemasDeletev1SchemasNamespaceSlug: ToolDefinition<
  typeof args
> = {
  name: "schemas-deletev1-schemas-namespace-slug",
  description: `Delete a shared component

Delete a specific schema and all of the related versions`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await schemasDeletev1SchemasNamespaceSlug(
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
