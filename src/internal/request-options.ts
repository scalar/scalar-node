// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { HTTPMethod, MergedRequestInit } from './types';
import type { HeadersLike } from './headers';

export type RequestOptions = {
  method?: HTTPMethod | undefined;
  path?: string | undefined;
  headers?: HeadersLike | undefined;
  query?: object | undefined | null;
  body?: unknown;
  timeout?: number | undefined;
  maxRetries?: number | undefined;
  stream?: boolean | undefined;
  signal?: AbortSignal | undefined | null;
  fetchOptions?: MergedRequestInit | undefined;
  idempotencyKey?: string | undefined;
  defaultBaseURL?: string | undefined;
  __binaryResponse?: boolean | undefined;
};

export type FinalRequestOptions = RequestOptions & {
  method: HTTPMethod;
  path: string;
};
