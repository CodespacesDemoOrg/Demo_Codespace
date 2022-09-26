#!/usr/bin/env node
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
import { ITypes as ICoreTypes } from "@wxp/wxp-core";
import process from "process";
import { IContainer, ITypes } from "./config/index.js";
import { DEFAULT_HOST_NAME, HTTPS, PROGRAM_NAME, WSS } from "./constants.js";
import { CLIParser } from "./utilities/index.js";
const rootDirectory = process.cwd();
process.chdir(rootDirectory);
const server = IContainer.get(ITypes.IAppServer);
const command = IContainer.get(ITypes.Command);
const logger = IContainer.get(ICoreTypes.ILogger);
process.on("uncaughtException", error => {
    logger.error(`${PROGRAM_NAME} failed. Reason: ${error.message}`);
    return process.exit(0);
});
const options = CLIParser.getOptions(command);
const serverConfig = getServerConfig();
const httpConfig = getHTTPConfig();
const wsConfig = getWSConfig();
const serverProvider = IContainer.get(ITypes.SecureServer);
serverConfig.secureServer = (await serverProvider(serverConfig.hostname));
httpConfig.expressApp = IContainer.get(ITypes.ExpressApp);
const socketFactory = IContainer.get(ITypes.SocketApp);
wsConfig.socketApp = socketFactory(serverConfig.secureServer);
server.run(options, rootDirectory, serverConfig, httpConfig, wsConfig);
function getServerConfig() {
    return { hostname: DEFAULT_HOST_NAME, port: parseInt(options.port) };
}
function getHTTPConfig() {
    return { protocol: HTTPS };
}
function getWSConfig() {
    return { protocol: WSS };
}
//# sourceMappingURL=index.js.map