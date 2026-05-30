// File generated from our OpenAPI spec by Scalar. See README.md for details.

export const path = (strings: TemplateStringsArray, ...values: readonly unknown[]): string =>
  strings.reduce((result, part, index) => `${result}${part}${index < values.length ? encodeURIComponent(String(values[index])) : ''}`, '');
