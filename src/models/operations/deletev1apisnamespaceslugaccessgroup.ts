/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Deletev1ApisNamespaceSlugAccessGroupRequestBody = {
  accessGroupSlug: string;
};

export type Deletev1ApisNamespaceSlugAccessGroupRequest = {
  namespace: string;
  slug: string;
  requestBody: Deletev1ApisNamespaceSlugAccessGroupRequestBody;
};

/** @internal */
export const Deletev1ApisNamespaceSlugAccessGroupRequestBody$inboundSchema:
  z.ZodType<
    Deletev1ApisNamespaceSlugAccessGroupRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    accessGroupSlug: z.string(),
  });

/** @internal */
export type Deletev1ApisNamespaceSlugAccessGroupRequestBody$Outbound = {
  accessGroupSlug: string;
};

/** @internal */
export const Deletev1ApisNamespaceSlugAccessGroupRequestBody$outboundSchema:
  z.ZodType<
    Deletev1ApisNamespaceSlugAccessGroupRequestBody$Outbound,
    z.ZodTypeDef,
    Deletev1ApisNamespaceSlugAccessGroupRequestBody
  > = z.object({
    accessGroupSlug: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Deletev1ApisNamespaceSlugAccessGroupRequestBody$ {
  /** @deprecated use `Deletev1ApisNamespaceSlugAccessGroupRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    Deletev1ApisNamespaceSlugAccessGroupRequestBody$inboundSchema;
  /** @deprecated use `Deletev1ApisNamespaceSlugAccessGroupRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    Deletev1ApisNamespaceSlugAccessGroupRequestBody$outboundSchema;
  /** @deprecated use `Deletev1ApisNamespaceSlugAccessGroupRequestBody$Outbound` instead. */
  export type Outbound =
    Deletev1ApisNamespaceSlugAccessGroupRequestBody$Outbound;
}

export function deletev1ApisNamespaceSlugAccessGroupRequestBodyToJSON(
  deletev1ApisNamespaceSlugAccessGroupRequestBody:
    Deletev1ApisNamespaceSlugAccessGroupRequestBody,
): string {
  return JSON.stringify(
    Deletev1ApisNamespaceSlugAccessGroupRequestBody$outboundSchema.parse(
      deletev1ApisNamespaceSlugAccessGroupRequestBody,
    ),
  );
}

export function deletev1ApisNamespaceSlugAccessGroupRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  Deletev1ApisNamespaceSlugAccessGroupRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      Deletev1ApisNamespaceSlugAccessGroupRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'Deletev1ApisNamespaceSlugAccessGroupRequestBody' from JSON`,
  );
}

/** @internal */
export const Deletev1ApisNamespaceSlugAccessGroupRequest$inboundSchema:
  z.ZodType<
    Deletev1ApisNamespaceSlugAccessGroupRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    namespace: z.string(),
    slug: z.string(),
    RequestBody: z.lazy(() =>
      Deletev1ApisNamespaceSlugAccessGroupRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type Deletev1ApisNamespaceSlugAccessGroupRequest$Outbound = {
  namespace: string;
  slug: string;
  RequestBody: Deletev1ApisNamespaceSlugAccessGroupRequestBody$Outbound;
};

/** @internal */
export const Deletev1ApisNamespaceSlugAccessGroupRequest$outboundSchema:
  z.ZodType<
    Deletev1ApisNamespaceSlugAccessGroupRequest$Outbound,
    z.ZodTypeDef,
    Deletev1ApisNamespaceSlugAccessGroupRequest
  > = z.object({
    namespace: z.string(),
    slug: z.string(),
    requestBody: z.lazy(() =>
      Deletev1ApisNamespaceSlugAccessGroupRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Deletev1ApisNamespaceSlugAccessGroupRequest$ {
  /** @deprecated use `Deletev1ApisNamespaceSlugAccessGroupRequest$inboundSchema` instead. */
  export const inboundSchema =
    Deletev1ApisNamespaceSlugAccessGroupRequest$inboundSchema;
  /** @deprecated use `Deletev1ApisNamespaceSlugAccessGroupRequest$outboundSchema` instead. */
  export const outboundSchema =
    Deletev1ApisNamespaceSlugAccessGroupRequest$outboundSchema;
  /** @deprecated use `Deletev1ApisNamespaceSlugAccessGroupRequest$Outbound` instead. */
  export type Outbound = Deletev1ApisNamespaceSlugAccessGroupRequest$Outbound;
}

export function deletev1ApisNamespaceSlugAccessGroupRequestToJSON(
  deletev1ApisNamespaceSlugAccessGroupRequest:
    Deletev1ApisNamespaceSlugAccessGroupRequest,
): string {
  return JSON.stringify(
    Deletev1ApisNamespaceSlugAccessGroupRequest$outboundSchema.parse(
      deletev1ApisNamespaceSlugAccessGroupRequest,
    ),
  );
}

export function deletev1ApisNamespaceSlugAccessGroupRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  Deletev1ApisNamespaceSlugAccessGroupRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      Deletev1ApisNamespaceSlugAccessGroupRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'Deletev1ApisNamespaceSlugAccessGroupRequest' from JSON`,
  );
}
