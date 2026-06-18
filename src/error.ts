// File generated from our OpenAPI spec by Scalar. See README.md for details.

const castToError = (error: unknown): Error => (error instanceof Error ? error : new Error(String(error)));

export class ScalarAPIError extends Error {}

export class APIError<TStatus extends number | undefined = number | undefined, THeaders extends Headers | undefined = Headers | undefined, TError extends object | undefined = object | undefined> extends ScalarAPIError {
  readonly status: TStatus;
  readonly headers: THeaders;
  readonly error: TError;

  constructor(status: TStatus, error: TError, message: string | undefined, headers: THeaders) {
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

  static generate(status: number | undefined, errorResponse: object | undefined, message: string | undefined, headers: Headers | undefined): APIError {
    if (!status || !headers) return new APIConnectionError({ message, cause: castToError(errorResponse) });
    const error = errorResponse as Record<string, unknown>;
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

export class APIUserAbortError extends APIError<undefined, undefined, undefined> {
  constructor({ message }: { message?: string } = {}) {
    super(undefined, undefined, message || 'Request was aborted.', undefined);
  }
}

export class APIConnectionError extends APIError<undefined, undefined, undefined> {
  constructor({ message, cause }: { message?: string | undefined; cause?: Error | undefined }) {
    super(undefined, undefined, message || 'Connection error.', undefined);
    if (cause) this.cause = cause;
  }
}

export class APIConnectionTimeoutError extends APIConnectionError {
  constructor({ message }: { message?: string } = {}) {
    super({ message: message ?? 'Request timed out.' });
  }
}
export class BadRequestError extends APIError<400, Headers> {}
export class AuthenticationError extends APIError<401, Headers> {}
export class PermissionDeniedError extends APIError<403, Headers> {}
export class NotFoundError extends APIError<404, Headers> {}
export class ConflictError extends APIError<409, Headers> {}
export class UnprocessableEntityError extends APIError<422, Headers> {}
export class RateLimitError extends APIError<429, Headers> {}
export class InternalServerError extends APIError<number, Headers> {}
