// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import type { RequestOptions } from '../../../internal/request-options';
import { path as __scalarPath } from '../../../internal/utils/path';
import type * as ServersAPI from './servers';
import type * as ScalarDocsAPI from '../../scalar-docs';
import type * as Shared from '../../shared';

export class Installations extends APIResource {
  /**
   * List the installations of an MCP server. An installation is what an MCP client connects to.
   *
   * @param {string} id
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InstallationListResponse>} Default Response
   *
   * @example
   * ```ts
   * const installation = await client.mcp.servers.installations.list('42');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<InstallationListResponse> {
    return this._client.get(__scalarPath`/v1/mcp/servers/${id}/installations`, options);
  }

  /**
   * Create an installation of an MCP server. `documentAuth` holds the credentials the server presents to the upstream API and is never returned.
   *
   * @param {string} id
   * @param {InstallationCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ServersAPI.McpInstallation>} Default Response
   *
   * @example
   * ```ts
   * const mcpInstallation = await client.mcp.servers.installations.create('42', {
   *   name: 'Acme MCP',
   *   documentAuth: {},
   * });
   * ```
   */
  create(
    id: string,
    body: InstallationCreateParams,
    options?: RequestOptions,
  ): APIPromise<ServersAPI.McpInstallation> {
    return this._client.post(__scalarPath`/v1/mcp/servers/${id}/installations`, { body, ...options });
  }

  /**
   * Get a single installation of an MCP server.
   *
   * @param {string} installationID
   * @param {InstallationRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ServersAPI.McpInstallation>} Default Response
   *
   * @example
   * ```ts
   * const mcpInstallation = await client.mcp.servers.installations.retrieve('84', {
   *   id: '42',
   * });
   * ```
   */
  retrieve(
    installationID: string,
    params: InstallationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ServersAPI.McpInstallation> {
    const { id } = params;
    return this._client.get(__scalarPath`/v1/mcp/servers/${id}/installations/${installationID}`, options);
  }

  /**
   * Update an installation. Set `isPrivate` and add access groups to put it behind a login.
   *
   * @param {string} installationID
   * @param {InstallationUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ServersAPI.McpInstallation>} Default Response
   *
   * @example
   * ```ts
   * const mcpInstallation = await client.mcp.servers.installations.update('84', {
   *   id: '42',
   * });
   * ```
   */
  update(
    installationID: string,
    params: InstallationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ServersAPI.McpInstallation> {
    const { id, ...body } = params;
    return this._client.patch(__scalarPath`/v1/mcp/servers/${id}/installations/${installationID}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete an installation of an MCP server.
   *
   * @param {string} installationID
   * @param {InstallationDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InstallationDeleteResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.mcp.servers.installations.delete('84', {
   *   id: '42',
   * });
   * ```
   */
  delete(
    installationID: string,
    params: InstallationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<InstallationDeleteResponse> {
    const { id } = params;
    return this._client.delete(__scalarPath`/v1/mcp/servers/${id}/installations/${installationID}`, options);
  }

  /**
   * Let an access group reach a private installation.
   *
   * @param {string} installationID
   * @param {InstallationCreateAccessGroupParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InstallationCreateAccessGroupResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.mcp.servers.installations.createAccessGroup('84', {
   *   id: '42',
   *   accessGroupUid: 'UakgbKJ5m9gl0JDMbcJqL',
   * });
   * ```
   */
  createAccessGroup(
    installationID: string,
    params: InstallationCreateAccessGroupParams,
    options?: RequestOptions,
  ): APIPromise<InstallationCreateAccessGroupResponse> {
    const { id, ...body } = params;
    return this._client.post(
      __scalarPath`/v1/mcp/servers/${id}/installations/${installationID}/access-group`,
      { body, ...options },
    );
  }

  /**
   * Stop an access group reaching a private installation.
   *
   * @param {string} installationID
   * @param {InstallationDeleteAccessGroupParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InstallationDeleteAccessGroupResponse>} Default Response
   *
   * @example
   * ```ts
   * await client.mcp.servers.installations.deleteAccessGroup('84', {
   *   id: '42',
   *   accessGroupUid: 'UakgbKJ5m9gl0JDMbcJqL',
   * });
   * ```
   */
  deleteAccessGroup(
    installationID: string,
    params: InstallationDeleteAccessGroupParams,
    options?: RequestOptions,
  ): APIPromise<InstallationDeleteAccessGroupResponse> {
    const { id, ...body } = params;
    return this._client.delete(
      __scalarPath`/v1/mcp/servers/${id}/installations/${installationID}/access-group`,
      { body, ...options },
    );
  }
}

export interface McpInstallationListItem {
  id: string;
  name: string;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug: ScalarDocsAPI.Slug;
  isPrivate: boolean;
  mcpVersion: string | null;
}

export type InstallationListResponse = Array<McpInstallationListItem>;

export interface InstallationCreateParams {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  documentAuth: Record<string, unknown>;
  /**
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug?: ScalarDocsAPI.Slug;
}

export interface InstallationRetrieveParams {
  id: string;
}

export interface InstallationUpdateParams {
  /**
   * Path param
   */
  id: string;
  /**
   * Body param
   * @minLength 1
   * @maxLength 100
   */
  name?: string;
  /**
   * Body param
   * @minLength 1
   * @maxLength 60
   * @pattern ^[a-z](?:[a-z0-9-]*[a-z0-9])?$
   */
  slug?: ScalarDocsAPI.Slug;
  /**
   * Body param
   */
  isPrivate?: boolean;
  /**
   * Body param
   */
  loginPortalUid?: string | null;
  /**
   * Body param
   */
  documentAuth?: Record<string, unknown>;
  /**
   * Body param
   */
  mcpVersion?: string | null;
}

export interface InstallationDeleteParams {
  id: string;
}

export type InstallationDeleteResponse = null;

export interface InstallationCreateAccessGroupParams {
  /**
   * Path param
   */
  id: string;
  /**
   * Body param
   * @minLength 5
   */
  accessGroupUid: Shared.Nanoid;
}

export type InstallationCreateAccessGroupResponse = null;

export interface InstallationDeleteAccessGroupParams {
  /**
   * Path param
   */
  id: string;
  /**
   * Body param
   * @minLength 5
   */
  accessGroupUid: Shared.Nanoid;
}

export type InstallationDeleteAccessGroupResponse = null;
export declare namespace Installations {
  export {
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
