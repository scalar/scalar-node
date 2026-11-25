// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import * as ServersAPI from './servers';
import {
  Servers,
  type McpServer,
  type ServerListResponse,
  type ServerCreateResponse,
  type ServerCreateParams,
} from './servers';

export class Mcp extends APIResource {
  servers: ServersAPI.Servers = new ServersAPI.Servers(this._client);
}

Mcp.Servers = Servers;

export declare namespace Mcp {
  export {
    Servers as Servers,
    type McpServer as McpServer,
    type ServerListResponse as ServerListResponse,
    type ServerCreateResponse as ServerCreateResponse,
    type ServerCreateParams as ServerCreateParams,
  };
}
