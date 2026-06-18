// File generated from our OpenAPI spec by Scalar. See README.md for details.

export type HTTPMethod = 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace';
export type PromiseOrValue<T> = T | Promise<T>;
export type MergedRequestInit = RequestInit;
export type FinalizedRequestInit = Omit<RequestInit, 'method' | 'headers'> & { method: HTTPMethod; headers: Headers };
