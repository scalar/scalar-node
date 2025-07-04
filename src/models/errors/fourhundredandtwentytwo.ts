/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ScalarError } from "./scalarerror.js";

export type FourHundredAndTwentyTwoData = {
  message: string;
  code: string;
};

export class FourHundredAndTwentyTwo extends ScalarError {
  code: string;

  /** The original data that was passed to this error instance. */
  data$: FourHundredAndTwentyTwoData;

  constructor(
    err: FourHundredAndTwentyTwoData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;

    this.name = "FourHundredAndTwentyTwo";
  }
}

/** @internal */
export const FourHundredAndTwentyTwo$inboundSchema: z.ZodType<
  FourHundredAndTwentyTwo,
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
    return new FourHundredAndTwentyTwo(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type FourHundredAndTwentyTwo$Outbound = {
  message: string;
  code: string;
};

/** @internal */
export const FourHundredAndTwentyTwo$outboundSchema: z.ZodType<
  FourHundredAndTwentyTwo$Outbound,
  z.ZodTypeDef,
  FourHundredAndTwentyTwo
> = z.instanceof(FourHundredAndTwentyTwo)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    code: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FourHundredAndTwentyTwo$ {
  /** @deprecated use `FourHundredAndTwentyTwo$inboundSchema` instead. */
  export const inboundSchema = FourHundredAndTwentyTwo$inboundSchema;
  /** @deprecated use `FourHundredAndTwentyTwo$outboundSchema` instead. */
  export const outboundSchema = FourHundredAndTwentyTwo$outboundSchema;
  /** @deprecated use `FourHundredAndTwentyTwo$Outbound` instead. */
  export type Outbound = FourHundredAndTwentyTwo$Outbound;
}
