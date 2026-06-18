// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { ScalarAPIError } from '../../error';

type InvalidPathSegment = {
  readonly start: number;
  readonly length: number;
  readonly error: string;
};

/**
 * Percent-encodes path params without escaping RFC3986 path-safe characters.
 *
 * Path params are not full URL components: `:`, `@`, and sub-delimiters are legal
 * inside a path segment and should be preserved.
 */
export const encodeURIPath = (value: string): string =>
  value.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);

/** Builds a tagged-template path helper with path traversal safety checks. */
export const createPathTagFunction = (pathEncoder = encodeURIPath) =>
  (strings: TemplateStringsArray | readonly string[], ...values: readonly unknown[]): string => {
    if (strings.length === 1) return strings[0] ?? '';

    let postPath = false;
    const invalidSegments: InvalidPathSegment[] = [];
    const rendered = strings.reduce((result, part, index) => {
      if (/[?#]/u.test(part)) postPath = true;
      if (index >= values.length) return result + part;

      const value = values[index];
      const raw = String(value);
      const encoded = (postPath ? encodeURIComponent : pathEncoder)(raw);
      if (value == null || isUnsafeObjectPathParam(value)) {
        invalidSegments.push({
          start: result.length + part.length,
          length: raw.length,
          error: `Value of type ${Object.prototype.toString.call(value).slice(8, -1)} is not a valid path parameter`,
        });
      }
      return result + part + encoded;
    }, '');

    rejectUnsafeDotSegments(rendered, invalidSegments);
    if (invalidSegments.length > 0) throw invalidPathError(rendered, invalidSegments);
    return rendered;
  };

/** URI-encodes path params and rejects unsafe /./ or /../ segments. */
export const path = /* @__PURE__ */ createPathTagFunction(encodeURIPath);

/** Rejects object-ish values whose default stringification would produce unsafe path bytes. */
const isUnsafeObjectPathParam = (value: unknown): boolean =>
  typeof value === 'object' &&
  value !== null &&
  Object.prototype.toString.call(value) === '[object Object]' &&
  (value as { toString?: unknown }).toString === Object.prototype.toString;

/** Records dot segments that could change the request path after URL normalization. */
const rejectUnsafeDotSegments = (rendered: string, invalidSegments: InvalidPathSegment[]): void => {
  const pathOnly = rendered.split(/[?#]/u, 1)[0] ?? '';
  const invalidSegmentPattern = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/giu;
  let match: RegExpExecArray | null;
  while ((match = invalidSegmentPattern.exec(pathOnly)) !== null) {
    invalidSegments.push({
      start: match.index,
      length: match[0].length,
      error: `Value "${match[0]}" cannot be safely passed as a path parameter`,
    });
  }
};

/** Formats the path validation error with carets under bad segments. */
const invalidPathError = (rendered: string, invalidSegments: readonly InvalidPathSegment[]): ScalarAPIError => {
  const sorted = [...invalidSegments].sort((a, b) => a.start - b.start);
  let lastEnd = 0;
  const underline = sorted.reduce((acc, segment) => {
    const spaces = ' '.repeat(segment.start - lastEnd);
    const arrows = '^'.repeat(segment.length);
    lastEnd = segment.start + segment.length;
    return acc + spaces + arrows;
  }, '');
  return new ScalarAPIError(
    `Path parameters result in path with invalid segments:\n${sorted
      .map((segment) => segment.error)
      .join('\n')}\n${rendered}\n${underline}`,
  );
};
