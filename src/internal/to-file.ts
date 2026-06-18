// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { type BlobPart, checkFileSupport, getName, isAsyncIterable, makeFile } from './uploads';
import type { FilePropertyBag } from './builtin-types';

type BlobLikePart = string | ArrayBuffer | ArrayBufferView<ArrayBuffer> | BlobLike | DataView<ArrayBuffer>;

interface BlobLike {
  readonly size: number;
  readonly type: string;
  text(): Promise<string>;
  slice(start?: number, end?: number): BlobLike;
}

const isBlobLike = (value: unknown): value is BlobLike & { arrayBuffer(): Promise<ArrayBuffer> } =>
  value != null &&
  typeof value === 'object' &&
  typeof (value as BlobLike).size === 'number' &&
  typeof (value as BlobLike).type === 'string' &&
  typeof (value as BlobLike).text === 'function' &&
  typeof (value as BlobLike).slice === 'function' &&
  typeof (value as { arrayBuffer?: unknown }).arrayBuffer === 'function';

interface FileLike extends BlobLike {
  readonly lastModified: number;
  readonly name?: string | undefined;
}

const isFileLike = (value: unknown): value is FileLike & { arrayBuffer(): Promise<ArrayBuffer> } =>
  value != null &&
  typeof value === 'object' &&
  typeof (value as FileLike).name === 'string' &&
  typeof (value as FileLike).lastModified === 'number' &&
  isBlobLike(value);

export interface ResponseLike {
  url: string;
  blob(): Promise<BlobLike>;
}

const isResponseLike = (value: unknown): value is ResponseLike =>
  value != null &&
  typeof value === 'object' &&
  typeof (value as ResponseLike).url === 'string' &&
  typeof (value as ResponseLike).blob === 'function';

export type ToFileInput = FileLike | ResponseLike | Exclude<BlobLikePart, string> | AsyncIterable<BlobLikePart>;

/** Converts SDK upload helper inputs into real File values for multipart requests. */
export const toFile = async (
  value: ToFileInput | PromiseLike<ToFileInput>,
  name?: string | null | undefined,
  options?: FilePropertyBag | undefined,
): Promise<File> => {
  checkFileSupport();
  const resolved = await value;

  if (isFileLike(resolved)) {
    if (resolved instanceof File) return resolved;
    return makeFile([await resolved.arrayBuffer()], resolved.name);
  }

  if (isResponseLike(resolved)) {
    const blob = await resolved.blob();
    return makeFile(await getBytes(blob), name || new URL(resolved.url).pathname.split(/[\\/]/).pop(), options);
  }

  const parts = await getBytes(resolved);
  return makeFile(parts, name || getName(resolved), options);
};

/** Normalizes browser, Node, and stream-like upload sources into File constructor parts. */
const getBytes = async (value: BlobLikePart | AsyncIterable<BlobLikePart>): Promise<Array<BlobPart>> => {
  const parts: Array<BlobPart> = [];
  if (typeof value === 'string' || ArrayBuffer.isView(value) || value instanceof ArrayBuffer) {
    parts.push(value);
  } else if (isBlobLike(value)) {
    parts.push(value instanceof Blob ? value : await value.arrayBuffer());
  } else if (isAsyncIterable(value)) {
    for await (const chunk of value) parts.push(...(await getBytes(chunk as BlobLikePart)));
  } else {
    const constructor = value?.constructor?.name;
    throw new Error(
      "Unexpected data type: " + typeof value + (constructor ? "; constructor: " + constructor : "") + propsForError(value),
    );
  }
  return parts;
};

const propsForError = (value: unknown): string => {
  if (typeof value !== 'object' || value === null) return '';
  const props = Object.getOwnPropertyNames(value);
  return "; props: [" + props.map((prop) => JSON.stringify(prop)).join(", ") + "]";
};
