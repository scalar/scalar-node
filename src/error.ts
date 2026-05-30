// File generated from our OpenAPI spec by Scalar. See README.md for details.

export class ScalarApiError extends Error {}

export class APIError<TStatus extends number | undefined = number | undefined, THeaders = Headers, TError = unknown> extends Error {
  readonly status: TStatus;
  readonly headers: THeaders | undefined;
  readonly error: TError | undefined;

  constructor(status: TStatus, error: TError | undefined, message: string | undefined, headers: THeaders | undefined) {
    super(APIError.makeMessage(status, error, message));
    this.status = status;
    this.headers = headers;
    this.error = error;
  }

  private static makeMessage(status: number | undefined, error: unknown, message: string | undefined): string {
    const bodyMessage = typeof error === 'object' && error !== null && 'message' in error ? (error as { message?: unknown }).message : undefined;
    const msg = typeof bodyMessage === 'string' ? bodyMessage : bodyMessage !== undefined ? JSON.stringify(bodyMessage) : error ? JSON.stringify(error) : message;
    if (status && msg) return `${status} ${msg}`;
    if (status) return `${status} status code (no body)`;
    return msg ?? '(no status code or body)';
  }

  static generate(status: number | undefined, error: unknown, message: string | undefined, headers: Headers | undefined): APIError {
    if (status === 400) return new BadRequestError(status, error, message, headers);
    if (status === 401) return new AuthenticationError(status, error, message, headers);
    if (status === 403) return new PermissionDeniedError(status, error, message, headers);
    if (status === 404) return new NotFoundError(status, error, message, headers);
    if (status === 409) return new ConflictError(status, error, message, headers);
    if (status === 422) return new UnprocessableEntityError(status, error, message, headers);
    if (status === 429) return new RateLimitError(status, error, message, headers);
    if (status && status >= 500) return new InternalServerError(status, error, message, headers);
    return new APIError(status, error, message, headers);
  }
}

export class APIUserAbortError extends APIError<undefined, undefined, undefined> {}
export class APIConnectionError extends APIError<undefined, undefined, undefined> {}
export class APIConnectionTimeoutError extends APIConnectionError {}
export class BadRequestError extends APIError<400> {}
export class AuthenticationError extends APIError<401> {}
export class PermissionDeniedError extends APIError<403> {}
export class NotFoundError extends APIError<404> {}
export class ConflictError extends APIError<409> {}
export class UnprocessableEntityError extends APIError<422> {}
export class RateLimitError extends APIError<429> {}
export class InternalServerError extends APIError<number> {}
