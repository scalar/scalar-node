/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { apiDocsDeletev1ApisNamespaceSlugAccessGroup } from "../../funcs/apiDocsDeletev1ApisNamespaceSlugAccessGroup.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.Deletev1ApisNamespaceSlugAccessGroupRequest$inboundSchema,
};

export const tool$apiDocsDeletev1ApisNamespaceSlugAccessGroup: ToolDefinition<
  typeof args
> = {
  name: "API-docs-deletev1-apis-namespace-slug-access-group",
  description: `Delete API access group

Delete an access group from api document`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await apiDocsDeletev1ApisNamespaceSlugAccessGroup(
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
