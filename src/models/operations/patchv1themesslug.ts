/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Patchv1ThemesSlugRequestBody = {
  name?: string | undefined;
  description?: string | undefined;
};

export type Patchv1ThemesSlugRequest = {
  slug: string;
  requestBody: Patchv1ThemesSlugRequestBody;
};

/** @internal */
export const Patchv1ThemesSlugRequestBody$inboundSchema: z.ZodType<
  Patchv1ThemesSlugRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type Patchv1ThemesSlugRequestBody$Outbound = {
  name?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const Patchv1ThemesSlugRequestBody$outboundSchema: z.ZodType<
  Patchv1ThemesSlugRequestBody$Outbound,
  z.ZodTypeDef,
  Patchv1ThemesSlugRequestBody
> = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Patchv1ThemesSlugRequestBody$ {
  /** @deprecated use `Patchv1ThemesSlugRequestBody$inboundSchema` instead. */
  export const inboundSchema = Patchv1ThemesSlugRequestBody$inboundSchema;
  /** @deprecated use `Patchv1ThemesSlugRequestBody$outboundSchema` instead. */
  export const outboundSchema = Patchv1ThemesSlugRequestBody$outboundSchema;
  /** @deprecated use `Patchv1ThemesSlugRequestBody$Outbound` instead. */
  export type Outbound = Patchv1ThemesSlugRequestBody$Outbound;
}

export function patchv1ThemesSlugRequestBodyToJSON(
  patchv1ThemesSlugRequestBody: Patchv1ThemesSlugRequestBody,
): string {
  return JSON.stringify(
    Patchv1ThemesSlugRequestBody$outboundSchema.parse(
      patchv1ThemesSlugRequestBody,
    ),
  );
}

export function patchv1ThemesSlugRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<Patchv1ThemesSlugRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Patchv1ThemesSlugRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Patchv1ThemesSlugRequestBody' from JSON`,
  );
}

/** @internal */
export const Patchv1ThemesSlugRequest$inboundSchema: z.ZodType<
  Patchv1ThemesSlugRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  slug: z.string(),
  RequestBody: z.lazy(() => Patchv1ThemesSlugRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type Patchv1ThemesSlugRequest$Outbound = {
  slug: string;
  RequestBody: Patchv1ThemesSlugRequestBody$Outbound;
};

/** @internal */
export const Patchv1ThemesSlugRequest$outboundSchema: z.ZodType<
  Patchv1ThemesSlugRequest$Outbound,
  z.ZodTypeDef,
  Patchv1ThemesSlugRequest
> = z.object({
  slug: z.string(),
  requestBody: z.lazy(() => Patchv1ThemesSlugRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Patchv1ThemesSlugRequest$ {
  /** @deprecated use `Patchv1ThemesSlugRequest$inboundSchema` instead. */
  export const inboundSchema = Patchv1ThemesSlugRequest$inboundSchema;
  /** @deprecated use `Patchv1ThemesSlugRequest$outboundSchema` instead. */
  export const outboundSchema = Patchv1ThemesSlugRequest$outboundSchema;
  /** @deprecated use `Patchv1ThemesSlugRequest$Outbound` instead. */
  export type Outbound = Patchv1ThemesSlugRequest$Outbound;
}

export function patchv1ThemesSlugRequestToJSON(
  patchv1ThemesSlugRequest: Patchv1ThemesSlugRequest,
): string {
  return JSON.stringify(
    Patchv1ThemesSlugRequest$outboundSchema.parse(patchv1ThemesSlugRequest),
  );
}

export function patchv1ThemesSlugRequestFromJSON(
  jsonString: string,
): SafeParseResult<Patchv1ThemesSlugRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Patchv1ThemesSlugRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Patchv1ThemesSlugRequest' from JSON`,
  );
}
