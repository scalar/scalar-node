// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIPromise, type APIResponseProps } from './api-promise';
import * as Errors from './error';
import { readEnv } from './internal/utils/env';
import type { Fetch, RequestInfo } from './internal/builtin-types';
import type { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { RegistryResource } from "./resources/registry";
import { SchemaResource } from "./resources/schemas";
import { LoginPortalResource } from "./resources/login-portals";
import { RuleResource } from "./resources/rules";
import { ThemeResource } from "./resources/themes";
import { TeamResource } from "./resources/teams";
import { ScalarDocResource } from "./resources/scalar-docs";
import { NamespaceResource } from "./resources/namespaces";
import { AuthenticationResource } from "./resources/authentication";

type LogFn = (message: string, ...rest: readonly unknown[]) => void;

export type Logger = {
  error: LogFn;
  warn: LogFn;
  info: LogFn;
  debug: LogFn;
};

export type LogLevel = 'off' | 'error' | 'warn' | 'info' | 'debug';

export type AuthTokenProvider = () => string | Promise<string>;

const isLogLevel = (value: string | undefined): value is LogLevel => {
  if (value === undefined) return false;
  return ['off', 'error', 'warn', 'info', 'debug'].includes(value);
};

export interface ClientOptions {
/**
 * The token used for authentication.
 */
  bearerAuth?: string | AuthTokenProvider | undefined;

  /**
   * Override the default base URL for the API.
   *
   * Defaults to process.env["SCALARAPI_BASE_URL"].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time, in milliseconds, to wait for a response before aborting a request.
   *
   * Request timeouts are retried by default, so the total time may be longer when retries are enabled.
   */
  timeout?: number | undefined;

  /**
   * The maximum number of times to retry temporary failures such as network errors, 408, 409, 429, and 5xx responses.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request.
   */
  defaultHeaders?: HeadersInit | undefined;

  /**
   * Default query parameters to include with every request.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Additional `RequestInit` options to pass to `fetch` calls.
   *
   * Per-request `fetchOptions` override these values.
   */
  fetchOptions?: RequestInit | undefined;

  /**
   * Specify a custom `fetch` implementation.
   *
   * If omitted, the generated client uses global `fetch`.
   */
  fetch?: Fetch | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env["SCALARAPI_LOG"].
   */
  logLevel?: LogLevel | undefined | null;

  /**
   * Set the logger implementation.
   *
   * Defaults to `console`.
   */
  logger?: Logger | undefined | null;
}

export type ScalarApiOptions = ClientOptions;

/**
 * Manage Scalar platform resources programmatically. The Scalar API lets teams create and update API references, schemas, guides, rulesets, themes, login portals, namespaces, and access controls from automated workflows or custom internal tooling. Use it to keep documentation and developer portals in sync with your source of truth, publish new versions safely, and inspect the teams and authenticated user context available to your integration.
 *
 * @param {string | AuthTokenProvider | undefined} [opts.bearerAuth=process.env["BEARER_AUTH"] ?? undefined]
 * @param {string | null | undefined} [opts.baseURL=process.env["SCALARAPI_BASE_URL"] ?? https://access.scalar.com] - Override the default base URL for the API.
 * @param {number} [opts.timeout=60000] - The maximum amount of time, in milliseconds, to wait for a response before aborting a request.
 * @param {RequestInit} [opts.fetchOptions] - Additional `RequestInit` options to pass to `fetch` calls.
 * @param {Fetch} [opts.fetch] - Specify a custom `fetch` implementation.
 * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
 * @param {HeadersInit} opts.defaultHeaders - Default headers to include with every request.
 * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request.
 * @param {LogLevel | undefined | null} opts.logLevel - Set the log level.
 * @param {Logger | undefined | null} opts.logger - Set the logger implementation.
 */
export class ScalarApi {
  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: RequestInit | undefined;
  private fetchImpl: Fetch;
  private options: ClientOptions;
  bearerAuth: string | AuthTokenProvider | undefined;

  registry: RegistryResource;
  schemas: SchemaResource;
  loginPortals: LoginPortalResource;
  rules: RuleResource;
  themes: ThemeResource;
  teams: TeamResource;
  scalarDocs: ScalarDocResource;
  namespaces: NamespaceResource;
  authentication: AuthenticationResource;

  constructor(options: ClientOptions = {}) {
    const baseURL = options.baseURL ?? readEnv("SCALARAPI_BASE_URL");
    this.baseURL = baseURL ?? "https://access.scalar.com";
    this.timeout = options.timeout ?? 60000;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetchImpl = options.fetch ?? defaultFetch();
    this.fetchOptions = options.fetchOptions;
    this.logger = options.logger ?? console;
    const envLogLevel = readEnv("SCALARAPI_LOG");
    this.logLevel = options.logLevel === null ? undefined : (options.logLevel ?? (isLogLevel(envLogLevel) ? envLogLevel : undefined));
    this.options = options;
    this.bearerAuth = options.bearerAuth ?? readEnv("BEARER_AUTH");
    if (this.bearerAuth === undefined) throw new Errors.ScalarApiError("The BEARER_AUTH environment variable is missing or empty; either provide it, or instantiate the ScalarApi client with a bearerAuth option, like new ScalarApi({ bearerAuth: 'My API Key' }).");
    this.registry = new RegistryResource(this);
    this.schemas = new SchemaResource(this);
    this.loginPortals = new LoginPortalResource(this);
    this.rules = new RuleResource(this);
    this.themes = new ThemeResource(this);
    this.teams = new TeamResource(this);
    this.scalarDocs = new ScalarDocResource(this);
    this.namespaces = new NamespaceResource(this);
    this.authentication = new AuthenticationResource(this);
  }

  request<T>(method: FinalRequestOptions["method"], path: string, options: RequestOptions = {}): APIPromise<T> {
    return new APIPromise(this, this.makeRequest(method, path, options));
  }

  private async makeRequest(method: FinalRequestOptions["method"], path: string, options: RequestOptions = {}, retriesRemaining: number | null = null): Promise<APIResponseProps> {
    const finalOptions: FinalRequestOptions = { ...options, method, path };
    const maxRetries = finalOptions.maxRetries ?? this.maxRetries;
    retriesRemaining ??= maxRetries;
    const url = buildUrl(this.baseURL, finalOptions.path);
    for (const [key, value] of Object.entries({ ...this.options.defaultQuery, ...(finalOptions.query ?? {}) })) {
      if (value !== undefined) url.searchParams.set(key, String(value));
    }
    const headers = normalizeHeaders(await this.authHeadersAsync(), this.options.defaultHeaders, finalOptions.headers);
    const retryCount = maxRetries - retriesRemaining;
    headers.set("X-Scalar-Retry-Count", String(retryCount));
    headers.set("X-Scalar-Timeout", String(finalOptions.timeout ?? this.timeout));
    const body = serializeBody(finalOptions.body);
    const controller = new AbortController();
    if (finalOptions.signal) finalOptions.signal.addEventListener("abort", () => controller.abort());
    const init: RequestInit = {
      method: finalOptions.method.toUpperCase(),
      headers,
      signal: controller.signal,
      ...this.fetchOptions,
      ...finalOptions.fetchOptions,
    };
    if (body !== undefined) init.body = body;
    logDebug(this, "request", String(url), finalOptions, headers);
    if (finalOptions.signal?.aborted) throw new Errors.APIUserAbortError(undefined, undefined, undefined, undefined);
    let response: Response;
    try {
      response = await this.fetchWithTimeout(url.toString(), init, finalOptions.timeout ?? this.timeout, controller);
    } catch (error) {
      const cause = castToError(error);
      if (finalOptions.signal?.aborted) throw new Errors.APIUserAbortError(undefined, undefined, undefined, undefined);
      if (retriesRemaining > 0) return this.retryRequest(finalOptions, retriesRemaining);
      if (isAbortError(cause)) throw new Errors.APIConnectionTimeoutError(undefined, undefined, cause.message, undefined);
      throw new Errors.APIConnectionError(undefined, undefined, cause.message, undefined);
    }
    if (!response.ok) {
      if (retriesRemaining > 0 && this.shouldRetry(response)) {
        logDebug(this, `response (error; retrying, ${retriesRemaining} attempts remaining)`, response.status, String(url), response.headers);
        return this.retryRequest(finalOptions, retriesRemaining, response.headers);
      }
      const error = await safeJson(response);
      logDebug(this, "response (error; (error; not retryable))", response.status, String(url), response.headers, error);
      throw Errors.APIError.generate(response.status, error, response.statusText, response.headers);
    }
    return { response, options: finalOptions, controller };
  }

  async fetchWithTimeout(url: RequestInfo, init: RequestInit | undefined, ms: number, controller: AbortController): Promise<Response> {
    const timeout = setTimeout(() => controller.abort(), ms);
    try {
      return await this.fetchImpl(url, init);
    } finally {
      clearTimeout(timeout);
    }
  }

  private shouldRetry(response: Response): boolean {
    const shouldRetryHeader = response.headers.get('x-should-retry');
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;
    if (response.status === 408 || response.status === 409 || response.status === 429) return true;
    return response.status >= 500;
  }

  private async retryRequest(options: FinalRequestOptions, retriesRemaining: number, responseHeaders?: Headers): Promise<APIResponseProps> {
    await sleep(this.retryDelayMillis(options, retriesRemaining, responseHeaders));
    return this.makeRequest(options.method, options.path, options, retriesRemaining - 1);
  }

  private retryDelayMillis(options: FinalRequestOptions, retriesRemaining: number, responseHeaders?: Headers): number {
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const millis = Number.parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(millis) && millis >= 0 && millis < 60000) return millis;
    }
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader) {
      const seconds = Number.parseFloat(retryAfterHeader);
      const millis = Number.isNaN(seconds) ? Date.parse(retryAfterHeader) - Date.now() : seconds * 1000;
      if (millis >= 0 && millis < 60000) return millis;
    }
    const maxRetries = options.maxRetries ?? this.maxRetries;
    const retryCount = maxRetries - retriesRemaining;
    const delay = Math.min(0.5 * 2 ** retryCount, 8);
    return delay * (1 - Math.random() * 0.25) * 1000;
  }

  get<T>(path: string, options?: RequestOptions): APIPromise<T> { return this.request<T>('get', path, options); }
  post<T>(path: string, options?: RequestOptions): APIPromise<T> { return this.request<T>('post', path, options); }
  put<T>(path: string, options?: RequestOptions): APIPromise<T> { return this.request<T>('put', path, options); }
  patch<T>(path: string, options?: RequestOptions): APIPromise<T> { return this.request<T>('patch', path, options); }
  delete<T>(path: string, options?: RequestOptions): APIPromise<T> { return this.request<T>('delete', path, options); }

  authHeaders(): Record<string, string> {
    const headers: Record<string, string> = {};
    const bearerAuth = this.resolveAuthOptionSync("bearerAuth", this.bearerAuth);
    if (bearerAuth) headers['Authorization'] = `Bearer ${bearerAuth}`;
    return headers;
  }

  private async authHeadersAsync(): Promise<Record<string, string>> {
    const headers: Record<string, string> = {};
    const bearerAuth = await this.resolveAuthOption("bearerAuth", this.bearerAuth);
    if (bearerAuth) headers['Authorization'] = `Bearer ${bearerAuth}`;
    return headers;
  }

  private async resolveAuthOption(optionName: string, value: string | AuthTokenProvider | undefined): Promise<string | undefined> {
    if (value === undefined) return undefined;
    const token = typeof value === "function" ? await value() : value;
    if (!token) throw new Errors.ScalarApiError(`Expected '${optionName}' to resolve to a non-empty string.`);
    return token;
  }

  private resolveAuthOptionSync(optionName: string, value: string | AuthTokenProvider | undefined): string | undefined {
    if (value === undefined) return undefined;
    const token = typeof value === "function" ? value() : value;
    if (typeof token !== "string" || !token) throw new Errors.ScalarApiError(`Expected '${optionName}' to resolve to a non-empty string.`);
    return token;
  }
}

const serializeBody = (body: unknown): BodyInit | undefined => {
  if (body === undefined) return undefined;
  if (typeof body === 'string' || body instanceof Blob || body instanceof FormData || body instanceof URLSearchParams) return body;
  return JSON.stringify(body);
};

const buildUrl = (baseURL: string, path: string): URL => {
  const base = baseURL.endsWith("/") ? baseURL : `${baseURL}/`;
  return new URL(path.replace(/^\/+/, ""), base);
};

const normalizeHeaders = (...sources: readonly (HeadersInit | Record<string, string | undefined> | undefined)[]): Headers => {
  const headers = new Headers();
  for (const source of sources) {
    if (!source) continue;
    if (Array.isArray(source) || source instanceof Headers) {
      new Headers(source).forEach((value, key) => headers.set(key, value));
      continue;
    }
    for (const [key, value] of Object.entries(source)) {
      if (value !== undefined) headers.set(key, String(value));
    }
  }
  return headers;
};

const safeJson = async (response: Response): Promise<unknown> => {
  try { return await response.json(); } catch { return undefined; }
};

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

const castToError = (error: unknown): Error => (error instanceof Error ? error : new Error(String(error)));

const isAbortError = (error: Error): boolean => error.name === "AbortError";

const defaultFetch = (): Fetch => {
  const fetchImpl = globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new Errors.ScalarApiError('No fetch implementation found; pass `fetch` in client options.');
  }
  return fetchImpl.bind(globalThis) as Fetch;
};

const logDebug = (client: { logger: Logger | undefined; logLevel: LogLevel | undefined }, message: string, ...rest: readonly unknown[]): void => {
  if (client.logLevel === undefined || client.logLevel === 'debug') client.logger?.debug(message, ...rest);
};
