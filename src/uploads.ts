// File generated from our OpenAPI spec by Scalar. See README.md for details.

export type Uploadable = Blob | File | ArrayBuffer;

export const toFile = async (value: Uploadable, name?: string): Promise<File | Blob> => {
  if (typeof File !== 'undefined' && value instanceof File) return value;
  if (value instanceof Blob) return value;
  return new Blob([value], name ? { type: 'application/octet-stream' } : undefined);
};
