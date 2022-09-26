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
import { CLIOptions, HTTPConfig, ServerConfig, WSConfig } from "../models/index.js";
/**
 * App server interface.
 */
export interface IAppServer {
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
}
//# sourceMappingURL=IAppServer.d.ts.map