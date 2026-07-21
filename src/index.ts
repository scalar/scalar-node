// File generated from our OpenAPI spec by Scalar. See README.md for details.

export { ScalarAPI as default } from './client.js';

export { type Uploadable, toFile } from './core/uploads';
export { APIPromise } from './api-promise';
export { ScalarAPI, type ClientOptions } from './client.js';
export {
  ScalarAPIError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';
