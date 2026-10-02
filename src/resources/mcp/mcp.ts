// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import * as ServersAPI from './servers/servers';
import {
  Servers,
  type McpServer,
  type McpInstallation,
  type ServerListResponse,
  type ServerCreateResponse,
  type ServerDeleteResponse,
  type ServerCreateParams,
  type ServerUpdateParams,
} from './servers/servers';

export class Mcp extends APIResource {
  servers: ServersAPI.Servers = new ServersAPI.Servers(this._client);
}

Mcp.Servers = Servers;

export declare namespace Mcp {
  export {
    Servers as Servers,
    type McpServer as McpServer,
    type McpInstallation as McpInstallation,
    type ServerListResponse as ServerListResponse,
    type ServerCreateResponse as ServerCreateResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerCreateParams as ServerCreateParams,
    type ServerUpdateParams as ServerUpdateParams,
  };
}
