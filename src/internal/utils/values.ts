// File generated from our OpenAPI spec by Scalar. See README.md for details.

export let isArray = (value: unknown): value is unknown[] => ((isArray = Array.isArray), isArray(value));
export let isReadonlyArray = isArray as (value: unknown) => value is readonly unknown[];
