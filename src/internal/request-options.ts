// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { HTTPMethod, MergedRequestInit } from './types.js';

export type RequestOptions = {
  method?: HTTPMethod | undefined;
  path?: string | undefined;
  headers?: HeadersInit | Record<string, string | undefined> | undefined;
  query?: Record<string, unknown> | undefined | null;
  body?: unknown;
  timeout?: number | undefined;
  maxRetries?: number | undefined;
  stream?: boolean | undefined;
  signal?: AbortSignal | undefined | null;
  fetchOptions?: MergedRequestInit | undefined;
  idempotencyKey?: string | undefined;
  __binaryResponse?: boolean | undefined;
};

export type FinalRequestOptions = RequestOptions & {
  method: HTTPMethod;
  path: string;
};
