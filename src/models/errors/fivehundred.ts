/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ScalarError } from "./scalarerror.js";

export type FiveHundredData = {
  message: string;
  code: string;
};

export class FiveHundred extends ScalarError {
  code: string;

  /** The original data that was passed to this error instance. */
  data$: FiveHundredData;

  constructor(
    err: FiveHundredData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;

    this.name = "FiveHundred";
  }
}

/** @internal */
export const FiveHundred$inboundSchema: z.ZodType<
  FiveHundred,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  code: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new FiveHundred(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type FiveHundred$Outbound = {
  message: string;
  code: string;
};

/** @internal */
export const FiveHundred$outboundSchema: z.ZodType<
  FiveHundred$Outbound,
  z.ZodTypeDef,
  FiveHundred
> = z.instanceof(FiveHundred)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    code: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FiveHundred$ {
  /** @deprecated use `FiveHundred$inboundSchema` instead. */
  export const inboundSchema = FiveHundred$inboundSchema;
  /** @deprecated use `FiveHundred$outboundSchema` instead. */
  export const outboundSchema = FiveHundred$outboundSchema;
  /** @deprecated use `FiveHundred$Outbound` instead. */
  export type Outbound = FiveHundred$Outbound;
}
