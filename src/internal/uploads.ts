// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { RequestOptions } from './request-options';
import type { Fetch, FilePropertyBag } from './builtin-types';
import type { ScalarAPI } from '../client';

export type BlobPart = globalThis.BlobPart;
type FsReadStream = AsyncIterable<Uint8Array> & { path: string | { toString(): string } };

// Bun File values inherit from Blob but may not satisfy the DOM File type in all runtimes.
interface BunFile extends Blob {
  readonly name?: string | undefined;
}

export type Uploadable = File | Response | FsReadStream | BunFile;

/** Throws a helpful error before upload helpers rely on a missing global File constructor. */
export const checkFileSupport = (): void => {
  if (typeof File === 'undefined') {
    const global = globalThis as typeof globalThis & { process?: { versions?: { node?: string } } };
    const nodeVersion = global.process?.versions?.node;
    const isOldNode = typeof nodeVersion === 'string' && Number.parseInt(nodeVersion.split('.')[0] ?? '', 10) < 20;
    throw new Error(
      '`File` is not defined as a global, which is required for file uploads.' +
        (isOldNode
          ? " Update to Node 20 LTS or newer, or set globalThis.File to import('node:buffer').File."
          : ''),
    );
  }
};

/** Constructs a File through one guarded path so old runtimes fail with upload-specific guidance. */
export const makeFile = (fileBits: BlobPart[], fileName: string | undefined, options?: FilePropertyBag): File => {
  checkFileSupport();
  return new File(fileBits, fileName ?? 'unknown_file', options);
};

/** Best-effort filename extraction shared by toFile and multipart form appends. */
export const getName = (value: unknown): string | undefined => {
  const candidate =
    typeof value === 'object' && value !== null
      ? ('name' in value && value.name) ||
        ('url' in value && value.url) ||
        ('filename' in value && value.filename) ||
        ('path' in value && value.path)
      : undefined;
  const text = candidate === undefined ? undefined : String(candidate);
  return text?.split(/[\\/]/).pop() || undefined;
};

/** Detects stream-like values accepted by the upload runtime without depending on Node types. */
export const isAsyncIterable = (value: unknown): value is AsyncIterable<unknown> =>
  value != null && typeof value === 'object' && Symbol.asyncIterator in value;

/** Converts uploadable object bodies into FormData only when a file-like value is present. */
export const maybeMultipartFormRequestOptions = async (
  opts: RequestOptions,
  fetchObject: ScalarAPI | Fetch,
  rootName = 'body',
): Promise<RequestOptions> => {
  if (!hasUploadableValue(opts.body)) return opts;
  return { ...opts, body: await createForm(opts.body, fetchObject, rootName) };
};

type MultipartFormRequestOptions = Omit<RequestOptions, 'body'> & { body: unknown };

/** Forces an object body through FormData for endpoints declared as multipart/form-data. */
export const multipartFormRequestOptions = async (
  opts: MultipartFormRequestOptions,
  fetchObject: ScalarAPI | Fetch,
  rootName = 'body',
): Promise<RequestOptions> => ({ ...opts, body: await createForm(opts.body, fetchObject, rootName) });

const supportsFormDataMap = /* @__PURE__ */ new WeakMap<Fetch, Promise<boolean>>();

const fetchForSupportCheck = (fetchObject: unknown): Fetch | undefined => {
  if (typeof fetchObject === 'function') return fetchObject as Fetch;
  if (fetchObject && typeof fetchObject === "object") {
    const record = fetchObject as { readonly fetch?: unknown; readonly fetchImpl?: unknown };
    if (typeof record.fetch === 'function') return record.fetch as Fetch;
    if (typeof record.fetchImpl === 'function') return record.fetchImpl as Fetch;
  }
  return typeof globalThis.fetch === "function" ? globalThis.fetch.bind(globalThis) : undefined;
};

/** Detects fetch implementations that stringify FormData as "[object FormData]" instead of encoding it. */
const supportsFormData = (fetchObject: ScalarAPI | Fetch): Promise<boolean> => {
  const fetch = fetchForSupportCheck(fetchObject);
  if (!fetch) return Promise.resolve(true);
  const cached = supportsFormDataMap.get(fetch);
  if (cached) return cached;
  const promise = (async () => {
    try {
      const FetchResponse = (await fetch("data:,")).constructor as typeof Response;
      const data = new FormData();
      return data.toString() !== (await new FetchResponse(data).text());
    } catch {
      return true;
    }
  })();
  supportsFormDataMap.set(fetch, promise);
  return promise;
};

/** Builds a FormData body with Stainless-compatible nested object and array keys. */
export const createForm = async <T = Record<string, unknown>>(
  body: T | undefined,
  fetchObject: ScalarAPI | Fetch,
  rootName = 'body',
): Promise<FormData> => {
  if (!(await supportsFormData(fetchObject))) {
    throw new TypeError(
      'The provided fetch function does not support file uploads with the current global FormData class.',
    );
  }
  const form = new FormData();
  if (body === undefined) return form;
  if (isUploadable(body) || Array.isArray(body) || typeof body !== "object" || body === null) {
    await addFormValue(form, rootName, body);
  } else {
    await Promise.all(Object.entries(body).map(([key, value]) => addFormValue(form, key, value)));
  }
  return form;
};

const isUploadable = (value: unknown): value is Uploadable =>
  typeof value === 'object' &&
  value !== null &&
  (value instanceof Blob || value instanceof Response || isAsyncIterable(value));

const hasUploadableValue = (value: unknown): boolean => {
  if (isUploadable(value)) return true;
  if (Array.isArray(value)) return value.some(hasUploadableValue);
  if (value && typeof value === 'object') {
    for (const key in value) {
      if (hasUploadableValue((value as Record<string, unknown>)[key])) return true;
    }
  }
  return false;
};

const addFormValue = async (form: FormData, key: string, value: unknown): Promise<void> => {
  if (value === undefined) return;
  if (value == null) {
    throw new TypeError(
      "Received null for \"" + key + "\"; to pass null in FormData, you must use the string \"null\"",
    );
  }

  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    form.append(key, String(value));
  } else if (value instanceof Response) {
    form.append(key, makeFile([await value.blob()], getName(value)));
  } else if (isAsyncIterable(value)) {
    form.append(key, makeFile([await new Response(ReadableStreamFrom(value)).blob()], getName(value)));
  } else if (value instanceof Blob) {
    const name = getName(value);
    if (name) form.append(key, value, name);
    else form.append(key, value);
  } else if (Array.isArray(value)) {
    await Promise.all(value.map((entry) => addFormValue(form, key + "[]", entry)));
  } else if (typeof value === 'object') {
    await Promise.all(Object.entries(value).map(([name, prop]) => addFormValue(form, key + "[" + name + "]", prop)));
  } else {
    throw new TypeError(
      "Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got " + String(value) + " instead",
    );
  }
};

/** Creates a ReadableStream from async iterables so upload streams can be converted to File values. */
const ReadableStreamFrom = (iterable: AsyncIterable<unknown>): ReadableStream<unknown> =>
  new ReadableStream({
    async start(controller) {
      for await (const chunk of iterable) controller.enqueue(chunk);
      controller.close();
    },
  });
