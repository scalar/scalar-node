// File generated from our OpenAPI spec by Scalar. See README.md for details.

export type HeadersLike = HeadersInit;
export type NullableHeaders = Record<string, string | null | undefined>;

export const buildHeaders = (values: readonly (HeadersInit | Record<string, string | undefined> | undefined)[]): HeadersInit => Object.assign({}, ...values.filter(Boolean));
