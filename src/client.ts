// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIPromise, type APIResponseProps } from './api-promise';
import { ScalarAPIError, APIError, APIConnectionError, APIConnectionTimeoutError, APIUserAbortError, NotFoundError, ConflictError, RateLimitError, BadRequestError, AuthenticationError, InternalServerError, PermissionDeniedError, UnprocessableEntityError } from './error';
import { readEnv } from './internal/utils/env';
import type { Fetch, RequestInfo } from './internal/builtin-types';
import type { HeadersLike } from './internal/headers';
import type { FinalRequestOptions, RequestOptions } from './internal/request-options';
import type { FinalizedRequestInit, MergedRequestInit, PromiseOrValue } from './internal/types';
import { stringify as stringifyQuery } from './internal/qs/stringify';
import type { StringifyOptions } from './internal/qs/types';
import { toFile } from './core/uploads';
import { Registry } from "./resources/registry";
import { Schemas } from "./resources/schemas/schemas";
import { LoginPortals } from "./resources/login-portals";
import { Rules } from "./resources/rules";
import { Themes } from "./resources/themes";
import { Teams } from "./resources/teams";
import { ScalarDocs } from "./resources/scalar-docs";
import { Namespaces } from "./resources/namespaces";
import { Authentication } from "./resources/authentication";

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

const queryArrayFormat: NonNullable<StringifyOptions["arrayFormat"]> = "indices";
const queryAllowDots = false;

const environments = {
  production: "https://access.scalar.com",
  local: "http://127.0.0.1:4010",
};
type Environment = keyof typeof environments;

export interface ClientOptions {
/**
 * The token used for authentication.
 */
  BearerAuth?: string | AuthTokenProvider | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://access.scalar.com`
   * - `local` corresponds to `http://127.0.0.1:4010`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API.
   *
   * Defaults to process.env["SCALAR_BASE_URL"].
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
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Additional `RequestInit` options to pass to `fetch` calls.
   *
   * Per-request `fetchOptions` override these values.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` implementation.
   *
   * If omitted, the generated client uses global `fetch`.
   */
  fetch?: Fetch | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env["SCALAR_LOG"].
   */
  logLevel?: LogLevel | undefined | null;

  /**
   * Set the logger implementation.
   *
   * Defaults to `console`.
   */
  logger?: Logger | undefined | null;
}

export type ScalarAPIOptions = ClientOptions;

/**
 * API for managing Scalar platform resources.
 * 
 * ## TypeScript SDK
 * 
 * For TypeScript, we provide a SDK that makes using our API even easier.
 * 
 * ### Install
 * 
 * ```bash
 * npm add @scalar/sdk
 * ```
 * 
 * ### Get a Scalar API key
 * 
 * Create an API key in your Scalar account:
 * 
 * - Dashboard: https://dashboard.scalar.com/account
 * - Store it in `.env`, for example:
 * 
 * ```bash
 * SCALAR_API_KEY=your_personal_token
 * ```
 * 
 * ### Exchange your API key for an access token
 * 
 * The personal token is not an access token. Exchange it first with `postv1AuthExchange`.
 * 
 * If you use the personal token directly for authenticated API calls, the API returns `401 Invalid authentication token`.
 * 
 * ```ts
 * import { Scalar } from '@scalar/sdk'
 * 
 * const scalar = new Scalar()
 * 
 * const exchange = await scalar.auth.postv1AuthExchange({
 *   personalToken: process.env.SCALAR_API_KEY!,
 * })
 * 
 * const accessToken = exchange.accessToken
 * ```
 * 
 * ### Use the access token
 * 
 * Construct a second client with bearer auth. Use this authenticated client for API calls.
 * 
 * ```ts
 * import { Scalar } from '@scalar/sdk'
 * 
 * const scalar = new Scalar()
 * 
 * const exchange = await scalar.auth.postv1AuthExchange({
 *   personalToken: process.env.SCALAR_API_KEY!,
 * })
 * 
 * const authedScalar = new Scalar({
 *   bearerAuth: exchange.accessToken,
 * })
 * ```
 * 
 * ### Notes
 * 
 * - The exchange request itself can be made from a client constructed with no arguments (`new Scalar()`).
 * - The exchanged access token is valid for 12 hours.
 * - Timestamps are Unix seconds.
 * 
 * ### Read more
 * 
 * - [@scalar/sdk on npm](https://www.npmjs.com/package/@scalar/sdk)
 *
 * @param {string | AuthTokenProvider | undefined} [opts.BearerAuth=process.env["BEARER_AUTH"] ?? undefined]
 * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
 * @param {string | null | undefined} [opts.baseURL=process.env["SCALAR_BASE_URL"] ?? https://access.scalar.com] - Override the default base URL for the API.
 * @param {number} [opts.timeout=60000] - The maximum amount of time, in milliseconds, to wait for a response before aborting a request.
 * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to pass to `fetch` calls.
 * @param {Fetch} [opts.fetch] - Specify a custom `fetch` implementation.
 * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
 * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request.
 * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request.
 * @param {LogLevel | undefined | null} opts.logLevel - Set the log level.
 * @param {Logger | undefined | null} opts.logger - Set the logger implementation.
 */
export class ScalarAPI {
  static ScalarAPI = this;
  static DEFAULT_TIMEOUT = 60000;
  static ScalarAPIError = ScalarAPIError;
  static APIError = APIError;
  static APIConnectionError = APIConnectionError;
  static APIConnectionTimeoutError = APIConnectionTimeoutError;
  static APIUserAbortError = APIUserAbortError;
  static NotFoundError = NotFoundError;
  static ConflictError = ConflictError;
  static RateLimitError = RateLimitError;
  static BadRequestError = BadRequestError;
  static AuthenticationError = AuthenticationError;
  static InternalServerError = InternalServerError;
  static PermissionDeniedError = PermissionDeniedError;
  static UnprocessableEntityError = UnprocessableEntityError;
  static toFile = toFile;
  static Registry = Registry;
  static Schemas = Schemas;
  static LoginPortals = LoginPortals;
  static Rules = Rules;
  static Themes = Themes;
  static Teams = Teams;
  static ScalarDocs = ScalarDocs;
  static Namespaces = Namespaces;
  static Authentication = Authentication;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;
  private fetchImpl: Fetch;
  private options: ClientOptions;
  protected idempotencyHeader?: string;
  BearerAuth: string | AuthTokenProvider | undefined;

  registry: Registry;
  schemas: Schemas;
  loginPortals: LoginPortals;
  rules: Rules;
  themes: Themes;
  teams: Teams;
  scalarDocs: ScalarDocs;
  namespaces: Namespaces;
  authentication: Authentication;

  constructor(options: ClientOptions = {}) {
    const baseURL = options.baseURL === undefined ? readEnv("SCALAR_BASE_URL") : options.baseURL;
    const environment = options.environment ?? "production";
    if (baseURL && options.environment) throw new ScalarAPIError("Ambiguous URL; The `baseURL` option (or SCALAR_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null");
    this.baseURL = baseURL ?? environments[environment];
    this.timeout = options.timeout ?? 60000;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetchImpl = options.fetch ?? defaultFetch();
    this.fetchOptions = options.fetchOptions;
    this.logger = options.logger ?? console;
    const envLogLevel = readEnv("SCALAR_LOG");
    this.logLevel = options.logLevel === null ? undefined : (options.logLevel ?? (isLogLevel(envLogLevel) ? envLogLevel : 'warn'));
    this.options = { ...options, baseURL, environment };
    this.BearerAuth = options.BearerAuth ?? readEnv("BEARER_AUTH");
    this.registry = new Registry(this);
    this.schemas = new Schemas(this);
    this.loginPortals = new LoginPortals(this);
    this.rules = new Rules(this);
    this.themes = new Themes(this);
    this.teams = new Teams(this);
    this.scalarDocs = new ScalarDocs(this);
    this.namespaces = new Namespaces(this);
    this.authentication = new Authentication(this);
  }

  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as new (props: ClientOptions) => this)({
      ...this.options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      fetch: this.fetchImpl,
      fetchOptions: this.fetchOptions,
      BearerAuth: this.BearerAuth,
      ...options,
    });
    return client;
  }

  buildURL(path: string, query: object | null | undefined, defaultBaseURL?: string | undefined): string {
    const url = buildUrl(defaultBaseURL ?? this.baseURL, path);
    const pathQuery = Object.fromEntries(url.searchParams);
    const mergedQuery = { ...pathQuery, ...this.options.defaultQuery, ...(query ?? {}) };
    const serializedQuery = stringifyQuery(mergedQuery, { arrayFormat: queryArrayFormat, allowDots: queryAllowDots });
    url.search = serializedQuery ? `?${serializedQuery}` : "";
    return url.toString();
  }

  request<T>(options: PromiseOrValue<FinalRequestOptions>, remainingRetries: number | null = null): APIPromise<T> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries));
  }

  protected async prepareOptions(_options: FinalRequestOptions): Promise<void> {}

  protected async prepareRequest(_request: RequestInit, _props: { url: string; options: FinalRequestOptions }): Promise<void> {}

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const timeout = options.timeout ?? this.timeout;
    const url = this.buildURL(options.path, { ...await this.authQueryAsync(), ...(options.query ?? {}) }, options.defaultBaseURL);
    const headers = normalizeHeaders(await this.authHeadersAsync(), this.options.defaultHeaders, options.headers);
    appendAuthCookies(headers, await this.authCookiesAsync());
    headers.set("X-Scalar-Retry-Count", String(retryCount));
    headers.set("X-Scalar-Timeout", String(timeout));
    if (this.idempotencyHeader && options.method !== "get" && !headers.has(this.idempotencyHeader)) {
      const idempotencyKey = inputOptions.idempotencyKey ?? createIdempotencyKey();
      inputOptions.idempotencyKey = idempotencyKey;
      headers.set(this.idempotencyHeader, idempotencyKey);
    }
    const body = serializeBody(options.body);
    // A JSON body must declare its Content-Type, or fetch omits it and the server can't tell the
    // request is JSON. Never override a content-type the caller already set.
    const contentType = bodyContentType(options.body);
    if (contentType && !headers.has('content-type')) headers.set('content-type', contentType);
    const req: FinalizedRequestInit = {
      ...(options.signal ? { signal: options.signal } : {}),
      ...(body !== undefined ? { body } : {}),
      ...this.fetchOptions,
      ...options.fetchOptions,
      method: options.method,
      headers,
    };
    return { req, url, timeout };
  }

  private async makeRequest(optionsInput: PromiseOrValue<FinalRequestOptions>, retriesRemaining: number | null = null): Promise<APIResponseProps> {
    const finalOptions: FinalRequestOptions = await optionsInput;
    const maxRetries = finalOptions.maxRetries ?? this.maxRetries;
    retriesRemaining ??= maxRetries;
    await this.prepareOptions(finalOptions);
    const url = this.buildURL(finalOptions.path, { ...await this.authQueryAsync(), ...(finalOptions.query ?? {}) }, finalOptions.defaultBaseURL);
    const headers = normalizeHeaders(await this.authHeadersAsync(), this.options.defaultHeaders, finalOptions.headers);
    appendAuthCookies(headers, await this.authCookiesAsync());
    this.validateAuth(url, headers, finalOptions);
    const retryCount = maxRetries - retriesRemaining;
    headers.set("X-Scalar-Retry-Count", String(retryCount));
    headers.set("X-Scalar-Timeout", String(finalOptions.timeout ?? this.timeout));
    if (this.idempotencyHeader && finalOptions.method !== "get" && !headers.has(this.idempotencyHeader)) {
      const idempotencyKey = finalOptions.idempotencyKey ?? createIdempotencyKey();
      finalOptions.idempotencyKey = idempotencyKey;
      headers.set(this.idempotencyHeader, idempotencyKey);
    }
    const body = serializeBody(finalOptions.body);
    // Match buildRequest: JSON bodies need an explicit Content-Type; don't clobber a caller's.
    const contentType = bodyContentType(finalOptions.body);
    if (contentType && !headers.has('content-type')) headers.set('content-type', contentType);
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
    await this.prepareRequest(init, { url, options: finalOptions });
    logDebug(this, "request", String(url), finalOptions, headers);
    if (finalOptions.signal?.aborted) throw new APIUserAbortError();
    let response: Response;
    try {
      response = await this.fetchWithTimeout(url, init, finalOptions.timeout ?? this.timeout, controller);
    } catch (error) {
      const cause = castToError(error);
      if (finalOptions.signal?.aborted) throw new APIUserAbortError();
      if (retriesRemaining > 0) return this.retryRequest(finalOptions, retriesRemaining);
      if (isAbortError(cause)) throw new APIConnectionTimeoutError({ message: cause.message });
      throw new APIConnectionError({ message: cause.message, cause });
    }
    if (!response.ok) {
      if (retriesRemaining > 0 && this.shouldRetry(response)) {
        logDebug(this, `response (error; retrying, ${retriesRemaining} attempts remaining)`, response.status, String(url), response.headers);
        return this.retryRequest(finalOptions, retriesRemaining, response.headers);
      }
      const errText = await response.text().catch((err) => castToError(err).message);
      const errJSON = safeJson(errText) as object | undefined;
      const errMessage = errJSON ? undefined : errText;
      logDebug(this, "response (error; (error; not retryable))", response.status, String(url), response.headers, errJSON ?? errMessage);
      throw APIError.generate(response.status, errJSON, errMessage, response.headers);
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
    return this.makeRequest(options, retriesRemaining - 1);
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

  get<T>(path: string, options?: PromiseOrValue<RequestOptions>): APIPromise<T> { return this.methodRequest<T>('get', path, options); }
  post<T>(path: string, options?: PromiseOrValue<RequestOptions>): APIPromise<T> { return this.methodRequest<T>('post', path, options); }
  put<T>(path: string, options?: PromiseOrValue<RequestOptions>): APIPromise<T> { return this.methodRequest<T>('put', path, options); }
  patch<T>(path: string, options?: PromiseOrValue<RequestOptions>): APIPromise<T> { return this.methodRequest<T>('patch', path, options); }
  delete<T>(path: string, options?: PromiseOrValue<RequestOptions>): APIPromise<T> { return this.methodRequest<T>('delete', path, options); }

  private methodRequest<T>(method: FinalRequestOptions["method"], path: string, options?: PromiseOrValue<RequestOptions>): APIPromise<T> {
    const requestOptions = Promise.resolve(options).then((opts) => ({ ...opts, method, path }));
    return this.request<T>(requestOptions);
  }

  private validateAuth(url: string, headers: Headers, options: FinalRequestOptions): void {
    if (headers.has("Authorization")) return;
    if (headerExplicitlyOmitted(options.headers, "Authorization")) return;
    throw new AuthenticationError(401, {}, "Could not resolve authentication method. Expected Authorization to be set.", headers);
  }

  authHeaders(): Record<string, string> {
    const headers: Record<string, string> = {};
    const BearerAuth = this.resolveAuthOptionSync("BearerAuth", this.BearerAuth);
    if (BearerAuth) headers['Authorization'] = `Bearer ${BearerAuth}`;
    return headers;
  }

  webSocketAuthHeaders(): Record<string, string> {
    const BearerAuth = this.resolveAuthOptionSync("BearerAuth", this.BearerAuth);
    if (BearerAuth) return { Authorization: `Bearer ${BearerAuth}` };
    return {};
  }

  private async authQueryAsync(): Promise<Record<string, string>> {
    const query: Record<string, string> = {};
    return query;
  }

  private async authCookiesAsync(): Promise<Record<string, string>> {
    const cookies: Record<string, string> = {};
    return cookies;
  }

  private async authHeadersAsync(): Promise<Record<string, string>> {
    const headers: Record<string, string> = {};
    const BearerAuth = await this.resolveAuthOption("BearerAuth", this.BearerAuth);
    if (BearerAuth) headers['Authorization'] = `Bearer ${BearerAuth}`;
    return headers;
  }

  private async resolveAuthOption(optionName: string, value: string | AuthTokenProvider | null | undefined): Promise<string | undefined> {
    if (value == null) return undefined;
    const token = typeof value === "function" ? await value() : value;
    if (!token) throw new ScalarAPIError(`Expected '${optionName}' to resolve to a non-empty string.`);
    return token;
  }

  private resolveAuthOptionSync(optionName: string, value: string | AuthTokenProvider | null | undefined): string | undefined {
    if (value == null) return undefined;
    const token = typeof value === "function" ? value() : value;
    if (typeof token !== "string" || !token) throw new ScalarAPIError(`Expected '${optionName}' to resolve to a non-empty string.`);
    return token;
  }
}

export declare namespace ScalarAPI {
  export type RequestOptions = import("./internal/request-options").RequestOptions;
  export type Version = import("./resources/registry").Version;
  export type AccessGroup = import("./resources/registry").AccessGroup;
  export type APIDocument = import("./resources/registry").APIDocument;
  export type Nanoid = import("./resources/registry").Nanoid;
  export type Slug = import("./resources/registry").Slug;
  export type Namespace = import("./resources/registry").Namespace;
  export type ManagedDocVersion = import("./resources/registry").ManagedDocVersion;
  export type Method = import("./resources/registry").Method;
  export type Value400 = import("./resources/registry").Value400;
  export type Value401 = import("./resources/registry").Value401;
  export type Value403 = import("./resources/registry").Value403;
  export type Value404 = import("./resources/registry").Value404;
  export type Value422 = import("./resources/registry").Value422;
  export type Value500 = import("./resources/registry").Value500;
  export type RegistryListAllAPIDocumentsResponse = import("./resources/registry").RegistryListAllAPIDocumentsResponse;
  export type RegistryListAPIDocumentsResponse = import("./resources/registry").RegistryListAPIDocumentsResponse;
  export type RegistryCreateAPIDocumentParams = import("./resources/registry").RegistryCreateAPIDocumentParams;
  export type RegistryCreateAPIDocumentResponse = import("./resources/registry").RegistryCreateAPIDocumentResponse;
  export type RegistryUpdateAPIDocumentParams = import("./resources/registry").RegistryUpdateAPIDocumentParams;
  export type RegistryUpdateAPIDocumentVersionParams = import("./resources/registry").RegistryUpdateAPIDocumentVersionParams;
  export type RegistryUpdateAPIDocumentVersionResponse = import("./resources/registry").RegistryUpdateAPIDocumentVersionResponse;
  export type RegistryCreateAPIDocumentVersionParams = import("./resources/registry").RegistryCreateAPIDocumentVersionParams;
  export type RegistryCreateAPIDocumentAccessGroupParams = import("./resources/registry").RegistryCreateAPIDocumentAccessGroupParams;
  export type RegistryDeleteAPIDocumentAccessGroupParams = import("./resources/registry").RegistryDeleteAPIDocumentAccessGroupParams;
  export type Schema = import("./resources/schemas/schemas").Schema;
  export type ManagedSchemaVersion = import("./resources/schemas/schemas").ManagedSchemaVersion;
  export type Timestamp = import("./resources/schemas/schemas").Timestamp;
  export type SchemaVersion = import("./resources/schemas/schemas").Version2;
  export type UID = import("./resources/schemas/schemas").UID;
  export type SchemaListResponse = import("./resources/schemas/schemas").SchemaListResponse;
  export type SchemaCreateParams = import("./resources/schemas/schemas").SchemaCreateParams;
  export type SchemaUpdateParams = import("./resources/schemas/schemas").SchemaUpdateParams;
  export type VersionCreateSchemaParams = import("./resources/schemas/version").VersionCreateSchemaParams;
  export type AccessGroupAccessGroup = import("./resources/schemas/access-group").AccessGroup2;
  export type AccessGroupCreateSchemaParams = import("./resources/schemas/access-group").AccessGroupCreateSchemaParams;
  export type AccessGroupDeleteSchemaParams = import("./resources/schemas/access-group").AccessGroupDeleteSchemaParams;
  export type LoginPortalEmail = import("./resources/login-portals").LoginPortalEmail;
  export type LoginPortalPage = import("./resources/login-portals").LoginPortalPage;
  export type LoginPortal = import("./resources/login-portals").LoginPortal;
  export type LoginPortalRetrieveResponse = import("./resources/login-portals").LoginPortalRetrieveResponse;
  export type LoginPortalUpdateParams = import("./resources/login-portals").LoginPortalUpdateParams;
  export type LoginPortalCreateParams = import("./resources/login-portals").LoginPortalCreateParams;
  export type LoginPortalListResponse = import("./resources/login-portals").LoginPortalListResponse;
  export type Rule = import("./resources/rules").Rule;
  export type RuleListRulesetsResponse = import("./resources/rules").RuleListRulesetsResponse;
  export type RuleCreateRulesetParams = import("./resources/rules").RuleCreateRulesetParams;
  export type RuleUpdateRulesetParams = import("./resources/rules").RuleUpdateRulesetParams;
  export type RuleCreateRulesetAccessGroupParams = import("./resources/rules").RuleCreateRulesetAccessGroupParams;
  export type RuleDeleteRulesetAccessGroupParams = import("./resources/rules").RuleDeleteRulesetAccessGroupParams;
  export type Theme = import("./resources/themes").Theme;
  export type ThemeListResponse = import("./resources/themes").ThemeListResponse;
  export type ThemeCreateParams = import("./resources/themes").ThemeCreateParams;
  export type ThemeUpdateParams = import("./resources/themes").ThemeUpdateParams;
  export type ThemeReplaceDocumentParams = import("./resources/themes").ThemeReplaceDocumentParams;
  export type Team = import("./resources/teams").Team;
  export type TeamName = import("./resources/teams").TeamName;
  export type TeamImage = import("./resources/teams").TeamImage;
  export type TeamListResponse = import("./resources/teams").TeamListResponse;
  export type GithubProject = import("./resources/scalar-docs").GithubProject;
  export type ActiveDeployment = import("./resources/scalar-docs").ActiveDeployment;
  export type GithubProjectRepository = import("./resources/scalar-docs").GithubProjectRepository;
  export type ScalarDocListGuidesResponse = import("./resources/scalar-docs").ScalarDocListGuidesResponse;
  export type ScalarDocCreateGuideParams = import("./resources/scalar-docs").ScalarDocCreateGuideParams;
  export type ScalarDocCreateGuideResponse = import("./resources/scalar-docs").ScalarDocCreateGuideResponse;
  export type ScalarDocPublishGuideResponse = import("./resources/scalar-docs").ScalarDocPublishGuideResponse;
  export type NamespaceListResponse = import("./resources/namespaces").NamespaceListResponse;
  export type User = import("./resources/authentication").User;
  export type Email = import("./resources/authentication").Email;
  export type TeamSummary = import("./resources/authentication").TeamSummary;
  export type AuthenticationExchangePersonalTokenParams = import("./resources/authentication").AuthenticationExchangePersonalTokenParams;
  export type AuthenticationExchangePersonalTokenResponse = import("./resources/authentication").AuthenticationExchangePersonalTokenResponse;
}


const serializeBody = (body: unknown): BodyInit | undefined => {
  if (body === undefined) return undefined;
  if (typeof body === 'string' || body instanceof Blob || body instanceof FormData || body instanceof URLSearchParams || body instanceof ArrayBuffer || ArrayBuffer.isView(body)) return body as BodyInit;
  return JSON.stringify(body);
};

// The Content-Type implied by a serialized body. Mirrors `serializeBody`: only plain values
// (objects/arrays) are JSON-encoded and need `application/json`; raw BodyInit values
// (string/Blob/FormData/URLSearchParams/bytes) carry or self-assign their own type
// (e.g. fetch sets the multipart boundary for FormData), so we leave those alone.
const bodyContentType = (body: unknown): string | undefined => {
  if (body === undefined) return undefined;
  if (typeof body === 'string' || body instanceof Blob || body instanceof FormData || body instanceof URLSearchParams || body instanceof ArrayBuffer || ArrayBuffer.isView(body)) return undefined;
  return 'application/json';
};

const buildUrl = (baseURL: string, path: string): URL => {
  const base = baseURL.endsWith("/") ? baseURL : `${baseURL}/`;
  return new URL(path.replace(/^\/+/, ""), base);
};

const normalizeHeaders = (...sources: readonly (HeadersLike | undefined)[]): Headers => {
  const headers = new Headers();
  for (const source of sources) {
    if (!source) continue;
    if (Array.isArray(source) || source instanceof Headers) {
      new Headers(source).forEach((value, key) => headers.set(key, value));
      continue;
    }
    for (const [key, value] of Object.entries(source)) {
      if (value === null) headers.delete(key);
      else if (value !== undefined) headers.set(key, String(value));
    }
  }
  return headers;
};

const headerExplicitlyOmitted = (source: HeadersLike | undefined, name: string): boolean => {
  if (!source || Array.isArray(source) || source instanceof Headers) return false;
  const target = name.toLowerCase();
  return Object.entries(source).some(([key, value]) => key.toLowerCase() === target && value === null);
};

const appendAuthCookies = (headers: Headers, cookies: Record<string, string>): void => {
  for (const [name, value] of Object.entries(cookies)) {
    if (cookieHeaderHas(headers.get("Cookie"), name)) continue;
    const cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    const existing = headers.get("Cookie");
    headers.set("Cookie", existing ? existing + "; " + cookie : cookie);
  }
};

const cookieHeaderHas = (value: string | null, name: string): boolean => {
  if (!value) return false;
  const target = encodeURIComponent(name) + "=";
  return value.split(";").some((cookie) => cookie.trim().startsWith(target));
};

const safeJson = (value: string): unknown | undefined => {
  try { return JSON.parse(value); } catch { return undefined; }
};

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

const createIdempotencyKey = (): string => "scalar-sdk-" + Date.now() + "-" + Math.random().toString(16).slice(2);

const castToError = (error: unknown): Error => (error instanceof Error ? error : new Error(String(error)));

const isAbortError = (error: Error): boolean => error.name === "AbortError";

const defaultFetch = (): Fetch => {
  const fetchImpl = globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new ScalarAPIError('No fetch implementation found; pass `fetch` in client options.');
  }
  return fetchImpl.bind(globalThis) as Fetch;
};

const logDebug = (client: { logger: Logger | undefined; logLevel: LogLevel | undefined }, message: string, ...rest: readonly unknown[]): void => {
  if (client.logLevel === 'debug') client.logger?.debug(message, ...rest);
};
