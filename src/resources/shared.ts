// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type * as RegistryAPI from './registry';

export interface ManagedDocVersion {
  /**
   * @minLength 5
   */
  uid: Nanoid;
  createdAt: number;
  /**
   * @minLength 1
   */
  version: RegistryAPI.Version;
  upgraded: boolean;
  embedStatus: 'complete' | 'failed' | null;
  tags: Array<string>;
  tools?: Array<ManagedDocVersion.Tool>;
  yamlSha?: string;
  jsonSha?: string;
  versionSha?: string;
}

export namespace ManagedDocVersion {
  export interface Tool {
    path: string;
    method: 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put' | 'trace';
    enabledTools: Array<'execute-request' | 'get-mini-openapi-spec'>;
  }
}
export type Namespace = string;
export type Nanoid = string;
export type Timestamp = number;
export interface UID {
  /**
   * @minLength 5
   */
  uid: Nanoid;
}
export interface Value400 {
  message: string;
  code: string;
}
export interface Value401 {
  message: string;
  code: string;
}
export interface Value403 {
  message: string;
  code: string;
}
export interface Value404 {
  message: string;
  code: string;
}
export interface Value422 {
  message: string;
  code: string;
}
export interface Value500 {
  message: string;
  code: string;
}
