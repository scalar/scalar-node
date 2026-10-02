// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import type { RequestOptions } from '../../../internal/request-options';
import { path as __scalarPath } from '../../../internal/utils/path';
import type * as ScalarDocsAPI from '../../scalar-docs';
import type * as Shared from '../../shared';
import * as InstallationsAPI from './installations';
import {
  Installations,
  type McpInstallationListItem,
  type InstallationListResponse,
  type InstallationDeleteResponse,
  type InstallationCreateAccessGroupResponse,
  type InstallationDeleteAccessGroupResponse,
  type InstallationCreateParams,
  type InstallationRetrieveParams,
  type InstallationUpdateParams,
  type InstallationDeleteParams,
  type InstallationCreateAccessGroupParams,
  type InstallationDeleteAccessGroupParams,
} from './installations';

export class Servers extends APIResource {
  installations: InstallationsAPI.Installations = new InstallationsAPI.Installations(this._client);

  /**
   * List every MCP server on the team.
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
   * Create an MCP server over one or more API document versions. The response carries the server and its first installation.
   *
   * @param {ServerCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ServerCreateResponse>} Default Response
   *
   * @example
   * ```ts
   * const server = await client.mcp.servers.create({
   *   name: 'x',
   * });
   * ```
   */
  create(body: ServerCreateParams, options?: RequestOptions): APIPromise<ServerCreateResponse> {
    return this._client.post('/v1/mcp/servers', { body, ...options });
  }

  /**
   * Get a single MCP server by its id.
   *
   * @param {string} id
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpServer>} Default Response
   *
   * @example
   * ```ts
   * const mcpServer = await client.mcp.servers.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<McpServer> {
    return this._client.get(__scalarPath`/v1/mcp/servers/${id}`, options);
  }

  /**
   * Update MCP server metadata and which tools it exposes.
   *
   * @param {string} id
   * @param {ServerUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<McpServer>} Default Response
   *
   * @example
   * ```ts
   * const mcpServer = await client.mcp.servers.update('id', {});
   * ```
   */
  update(id: string, body: ServerUpdateParams, options?: RequestOptions): APIPromise<McpServer> {
    return this._client.patch(__scalarPath`/v1/mcp/servers/${id}`, { body, ...options });
  }

  /**
   * Delete an MCP server and every installation it serves.
   *
   * @param {string} id
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ServerDeleteResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.mcp.servers.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ServerDeleteResponse> {
    return this._client.delete(__scalarPath`/v1/mcp/servers/${id}`, options);
  }
}

export interface McpServer {
  id: string;
  name: string;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug: ScalarDocsAPI.Slug;
  autoAddOperations: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface McpInstallation {
  id: string;
  mcpServerId: string;
  name: string;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug: ScalarDocsAPI.Slug;
  isPrivate: boolean;
  accessGroups: Array<string>;
  loginPortalUid: string | null;
  mcpVersion: string | null;
  piiRedactionEnabled: boolean;
  credentialRedactionEnabled: boolean;
}

export type ServerListResponse = Array<McpServer>;

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
  installation: McpInstallation;
}

export interface ServerUpdateParams {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name?: string;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug?: ScalarDocsAPI.Slug;
  autoAddOperations?: boolean;
  operations?: Array<string>;
  docsPages?: Array<string>;
}

export type ServerDeleteResponse = null;
Servers.Installations = Installations;

export declare namespace Servers {
  export {
    type McpServer as McpServer,
    type McpInstallation as McpInstallation,
    type ServerListResponse as ServerListResponse,
    type ServerCreateResponse as ServerCreateResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerCreateParams as ServerCreateParams,
    type ServerUpdateParams as ServerUpdateParams,
  };

  export {
    Installations as Installations,
    type McpInstallationListItem as McpInstallationListItem,
    type InstallationListResponse as InstallationListResponse,
    type InstallationDeleteResponse as InstallationDeleteResponse,
    type InstallationCreateAccessGroupResponse as InstallationCreateAccessGroupResponse,
    type InstallationDeleteAccessGroupResponse as InstallationDeleteAccessGroupResponse,
    type InstallationCreateParams as InstallationCreateParams,
    type InstallationRetrieveParams as InstallationRetrieveParams,
    type InstallationUpdateParams as InstallationUpdateParams,
    type InstallationDeleteParams as InstallationDeleteParams,
    type InstallationCreateAccessGroupParams as InstallationCreateAccessGroupParams,
    type InstallationDeleteAccessGroupParams as InstallationDeleteAccessGroupParams,
  };
}
