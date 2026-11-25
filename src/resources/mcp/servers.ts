// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import type * as Shared from '../shared';
import type * as ScalarDocsAPI from '../scalar-docs';

export class Servers extends APIResource {
  /**
   * List every MCP server on the team, each with its environments and the version tag a request that names no version gets there.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ServerListResponse>} Default Response
   *
   * @example
   * ```ts
   * const server = await client.mcp.servers.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ServerListResponse> {
    return this._client.get('/v1/mcp/servers', options);
  }

  /**
   * Create an MCP server linking the API documents of the named versions and the named docs projects. The server builds from each linked document’s versions, not only the version named.
   *
   * @param {ServerCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ServerCreateResponse>} Default Response
   *
   * @example
   * ```ts
   * const server = await client.mcp.servers.create({
   *   name: 'Acme MCP',
   * });
   * ```
   */
  create(body: ServerCreateParams, options?: RequestOptions): APIPromise<ServerCreateResponse> {
    return this._client.post('/v1/mcp/servers', { body, ...options });
  }
}

export interface McpServer {
  /**
   * @minLength 5
   */
  uid: Shared.Nanoid;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug: ScalarDocsAPI.Slug;
  /**
   * @minLength 2
   * @maxLength 50
   * @pattern ^[a-zA-Z0-9-_]+$
   */
  namespace: Shared.Namespace;
  domain: string | null;
  /**
   * @minimum 0
   * @maximum 9007199254740991
   */
  createdAt: Shared.Timestamp;
  /**
   * @minimum 0
   * @maximum 9007199254740991
   */
  updatedAt: Shared.Timestamp;
  /**
   * @maxLength 100
   */
  name: string;
}

export type ServerListResponse = Array<ServerListResponse.ServerListResponseItem>;

export namespace ServerListResponse {
  export interface ServerListResponseItem {
    /**
     * @minLength 5
     */
    uid: Shared.Nanoid;
    /**
     * @minLength 1
     * @maxLength 60
     * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
     */
    slug: ScalarDocsAPI.Slug;
    /**
     * @minLength 2
     * @maxLength 50
     * @pattern ^[a-zA-Z0-9-_]+$
     */
    namespace: Shared.Namespace;
    domain: string | null;
    /**
     * @minimum 0
     * @maximum 9007199254740991
     */
    createdAt: Shared.Timestamp;
    /**
     * @minimum 0
     * @maximum 9007199254740991
     */
    updatedAt: Shared.Timestamp;
    /**
     * @maxLength 100
     */
    name: string;
    environments: Array<ServerListResponseItem.Environment>;
  }

  export namespace ServerListResponseItem {
    export interface Environment {
      slug: string;
      served: string | null;
    }
  }
}

export interface ServerCreateParams {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug?: ScalarDocsAPI.Slug;
  versionUids?: Array<string>;
  projectUids?: Array<string>;
}

export interface ServerCreateResponse {
  server: McpServer;
}
export declare namespace Servers {
  export {
    type McpServer as McpServer,
    type ServerListResponse as ServerListResponse,
    type ServerCreateResponse as ServerCreateResponse,
    type ServerCreateParams as ServerCreateParams,
  };
}
