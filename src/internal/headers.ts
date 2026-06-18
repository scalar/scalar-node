// File generated from our OpenAPI spec by Scalar. See README.md for details.

export type HeadersLike = HeadersInit | Record<string, string | null | undefined>;
export type NullableHeaders = Record<string, string | null | undefined>;

/** Merges emitted defaults with caller headers while preserving Headers instances. */
export const buildHeaders = (values: readonly (HeadersLike | undefined)[]): HeadersLike => {
  const headers: NullableHeaders = {};
  for (const value of values) {
    if (!value) continue;
    if (Array.isArray(value) || value instanceof Headers) {
      new Headers(value).forEach((headerValue, key) => { headers[key] = headerValue; });
      continue;
    }
    Object.assign(headers, value);
  }
  return headers;
};
