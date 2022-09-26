/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2022 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/
import { ILogger } from "@wxp/wxp-core";
import "reflect-metadata";
import { CLIOptions, HTTPConfig, ServerConfig, WSConfig } from "../models/index.js";
import { IScriptValidator } from "../validators/IScriptValidator.js";
import { IAppServer, IHTTPServer, IWSServer } from "./index.js";
/**
 * App server implementation class.
 */
export declare class AppServer implements IAppServer {
    private readonly _scriptValidator;
    private readonly _httpServer;
    private readonly _wsServer;
    private readonly _logger;
    private _require;
    private _rootDirectory;
    private _appName;
    /**
     * Instantiate {@link AppServer}.
     *
     * @param scriptValidator - {@link IScriptValidator} reference.
     * @param httpServer - {@link IHTTPServer} reference.
     * @param wsServer - {@link IWSServer} reference.
     * @param logger - {@link ILogger} reference.
     * @returns Reference to a new {@link AppServer} instance.
     */
    constructor(scriptValidator: IScriptValidator, httpServer: IHTTPServer, wsServer: IWSServer, logger: ILogger);
    /**
     * Run the app server.
     *
     * @param options - {@link CLIOptions}.
     * @param rootDirectory - Root directory of the app.
     * @param serverConfig - {@link ServerConfig}.
     * @param httpConfig - {@link HTTPConfig}.
     * @param wsConfig - {@link WSConfig}.
     */
    run(options: CLIOptions, rootDirectory: string, serverConfig: ServerConfig, httpConfig: HTTPConfig, wsConfig: WSConfig): void;
    private clean;
    private build;
    private start;
    private getAddInData;
}
//# sourceMappingURL=AppServer.d.ts.map