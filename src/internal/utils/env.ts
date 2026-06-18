// File generated from our OpenAPI spec by Scalar. See README.md for details.

export const readEnv = (name: string): string | undefined => {
  const env = globalThis as typeof globalThis & { process?: { env?: Record<string, string | undefined> } };
  return env.process?.env?.[name];
};
