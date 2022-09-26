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
import { __decorate, __metadata, __param } from "tslib";
import { ITypes as ICoreTypes } from "@wxp/wxp-core";
import chokidar from "chokidar";
import { inject, injectable } from "inversify";
import path from "path";
import "reflect-metadata";
import format from "string-template";
import { ITypes } from "../config/inversify.types.js";
import { DEFAULT_OUTPUT_DIRECTORY } from "../constants.js";
import { ScriptManager } from "../utilities/index.js";
/**
 * WebSocket server implementation class.
 */
let WSServer = class WSServer {
    _throttler;
    _logger;
    /**
     * Instantiate {@link WSServer}.
     *
     * @param throttler - {@link IMessageThrottler} reference.
     * @param logger - {@link ILogger} reference.
     * @returns Reference to a new {@link WSServer} instance.
     */
    constructor(throttler, logger) {
        this._throttler = throttler;
        this._logger = logger;
    }
    /**
     * Start the WebSocket server.
     *
     * @param addInData - {@link AddInData}.
     * @param serverConfig - {@link ServerConfig}.
     * @param wsConfig - {@link WSConfig}.
     */
    start(addInData, serverConfig, wsConfig) {
        if (!wsConfig.socketApp) {
            return;
        }
        this.watchForChanges(wsConfig.socketApp, addInData);
        this._logger.success(format(LOGS.wssServerStarted, { appKind: addInData.kind, appName: addInData.name }));
        this._logger.information(this.getBaseUrl(serverConfig, wsConfig), {
            postfix: LOGS.newLine
        });
    }
    watchForChanges(webSocketServer, addInData) {
        const srcAbsoluteDirectory = path.join(addInData.rootAbsoluteDirectory, addInData.srcDirectory);
        this._throttler.registerAction(message => {
            this._logger.information(format(LOGS.rebuildingSourceDirectory, {
                srcDirectory: addInData.srcDirectory,
                DEFAULT_OUTPUT_DIRECTORY
            }));
            ScriptManager.cleanDirectory(DEFAULT_OUTPUT_DIRECTORY);
            ScriptManager.transpile(srcAbsoluteDirectory);
            ScriptManager.copyStaticFiles(addInData.srcDirectory, DEFAULT_OUTPUT_DIRECTORY);
            this._logger.success(LOGS.done, { postfix: LOGS.newLine });
            webSocketServer.clients.forEach(client => client.send(message));
        });
        const watcher = chokidar.watch(srcAbsoluteDirectory, {
            ignored: /(^|[\/\\])\../,
            persistent: true,
            ignoreInitial: true
        });
        watcher
            .on("add", _ => this._throttler.addMessage(addInData.name))
            .on("change", _ => this._throttler.addMessage(addInData.name))
            .on("unlink", _ => this._throttler.addMessage(addInData.name));
    }
    getBaseUrl(serverConfig, wsConfig) {
        return `${wsConfig.protocol}://${serverConfig.hostname}:${serverConfig.port}`;
    }
};
WSServer = __decorate([
    injectable(),
    __param(0, inject(ITypes.IMessageThrottler)),
    __param(1, inject(ICoreTypes.ILogger)),
    __metadata("design:paramtypes", [Object, Object])
], WSServer);
export { WSServer };
const LOGS = {
    newLine: "\n",
    wssServerStarted: "Done. Your {appKind} '{appName}' is watched on:",
    rebuildingSourceDirectory: "Re-building source directory {srcDirectory}/ to {DEFAULT_OUTPUT_DIRECTORY}/ ...",
    done: "Done."
};
//# sourceMappingURL=WSServer.js.map