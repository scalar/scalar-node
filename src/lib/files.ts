/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

/**
 * Consumes a stream and returns a concatenated array buffer. Useful in
 * situations where we need to read the whole file because it forms part of a
 * larger payload containing other fields, and we can't modify the underlying
 * request structure.
 */
export async function readableStreamToArrayBuffer(
  readable: ReadableStream<Uint8Array>,
): Promise<ArrayBuffer> {
  const reader = readable.getReader();
  const chunks: Uint8Array[] = [];

  let totalLength = 0;
  let done = false;

  while (!done) {
    const { value, done: doneReading } = await reader.read();

    if (doneReading) {
      done = true;
    } else {
      chunks.push(value);
      totalLength += value.length;
    }
  }

  const concatenatedChunks = new Uint8Array(totalLength);
  let offset = 0;

  for (const chunk of chunks) {
    concatenatedChunks.set(chunk, offset);
    offset += chunk.length;
  }

  return concatenatedChunks.buffer as ArrayBuffer;
}

/**
 * Determines the MIME content type based on a file's extension.
 * Returns null if the extension is not recognized.
 */
export function getContentTypeFromFileName(fileName: string): string | null {
  if (!fileName) return null;

  const ext = fileName.toLowerCase().split(".").pop();
  if (!ext) return null;

  const mimeTypes: Record<string, string> = {
    json: "application/json",
    xml: "application/xml",
    html: "text/html",
    htm: "text/html",
    txt: "text/plain",
    csv: "text/csv",
    pdf: "application/pdf",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    svg: "image/svg+xml",
    js: "application/javascript",
    css: "text/css",
    zip: "application/zip",
    tar: "application/x-tar",
    gz: "application/gzip",
    mp4: "video/mp4",
    mp3: "audio/mpeg",
    wav: "audio/wav",
    webp: "image/webp",
    ico: "image/x-icon",
    woff: "font/woff",
    woff2: "font/woff2",
    ttf: "font/ttf",
    otf: "font/otf",
  };

  return mimeTypes[ext] || null;
}
