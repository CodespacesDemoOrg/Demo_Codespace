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
import { AddInManifest, ITypes as ICoreTypes } from "@wxp/wxp-core";
import { inject, injectable } from "inversify";
import { createRequire } from "module";
import path from "path";
import process from "process";
import "reflect-metadata";
import format from "string-template";
import { ITypes } from "../config/inversify.types.js";
import { DEFAULT_OUTPUT_DIRECTORY, MANIFEST_JSON, PROGRAM_NAME, QUERY_PARAM_HTTP_PORT_KEY, QUERY_PARAM_WS_PORT_KEY } from "../constants.js";
import { ScriptManager } from "../utilities/index.js";
/**
 * App server implementation class.
 */
let AppServer = class AppServer {
    _scriptValidator;
    _httpServer;
    _wsServer;
    _logger;
    _require;
    _rootDirectory;
    _appName;
    /**
     * Instantiate {@link AppServer}.
     *
     * @param scriptValidator - {@link IScriptValidator} reference.
     * @param httpServer - {@link IHTTPServer} reference.
     * @param wsServer - {@link IWSServer} reference.
     * @param logger - {@link ILogger} reference.
     * @returns Reference to a new {@link AppServer} instance.
     */
    constructor(scriptValidator, httpServer, wsServer, logger) {
        this._scriptValidator = scriptValidator;
        this._httpServer = httpServer;
        this._wsServer = wsServer;
        this._logger = logger;
        this._require = createRequire(import.meta.url);
    }
    /**
     * Run the app server.
     *
     * @param options - {@link CLIOptions}.
     * @param rootDirectory - Root directory of the app.
     * @param serverConfig - {@link ServerConfig}.
     * @param httpConfig - {@link HTTPConfig}.
     * @param wsConfig - {@link WSConfig}.
     */
    run(options, rootDirectory, serverConfig, httpConfig, wsConfig) {
        this._rootDirectory = rootDirectory;
        this._appName = path.basename(rootDirectory);
        this._scriptValidator.validateScript(options.script);
        this._scriptValidator.validateDocumentURL(options.script, options.documentUrl);
        switch (options.script) {
            case "clean": {
                this.clean();
                break;
            }
            case "build": {
                this.clean();
                this.build(options);
                break;
            }
            case "start": {
                this.clean();
                this.build(options);
                this.start(options, serverConfig, httpConfig, wsConfig);
                break;
            }
            default: {
                this._logger.warning(LOGS.specifyValidScript);
                this._logger.warning(format(LOGS.executeProgram, { PROGRAM_NAME }), {
                    prefix: LOGS.tab
                });
                this._logger.message(LOGS.forExample, { prefix: LOGS.newLine });
                this._logger.information(format(LOGS.executeProgramExample, { PROGRAM_NAME }), {
                    prefix: LOGS.tab
                });
                return process.exit(0);
            }
        }
    }
    clean() {
        this._logger.information(format(LOGS.cleaningOutputDirectory, { DEFAULT_OUTPUT_DIRECTORY }));
        ScriptManager.cleanDirectory(DEFAULT_OUTPUT_DIRECTORY);
        this._logger.success(LOGS.done, { postfix: LOGS.newLine });
    }
    build(options) {
        this._logger.information(format(LOGS.buildingSourceDirectory, {
            srcDirectory: options.srcDirectory,
            DEFAULT_OUTPUT_DIRECTORY
        }));
        const srcDirectoryPath = path.join(this._rootDirectory, options.srcDirectory);
        ScriptManager.transpile(srcDirectoryPath);
        ScriptManager.copyStaticFiles(options.srcDirectory, DEFAULT_OUTPUT_DIRECTORY);
        this._logger.success(LOGS.done, { postfix: LOGS.newLine });
    }
    start(options, serverConfig, httpConfig, wsConfig) {
        if (!serverConfig.secureServer) {
            return;
        }
        const addInData = this.getAddInData(options.srcDirectory);
        this._logger.information(format(LOGS.startingHTTPServer));
        this._httpServer.start(addInData, serverConfig, httpConfig);
        serverConfig.secureServer.listen(serverConfig.port, serverConfig.hostname);
        this._logger.information(format(LOGS.startingWSServer));
        this._wsServer.start(addInData, serverConfig, wsConfig);
        const sideloadDocumentUrl = new URL(options.documentUrl);
        if (sideloadDocumentUrl.searchParams.has(QUERY_PARAM_HTTP_PORT_KEY)) {
            sideloadDocumentUrl.searchParams.delete(QUERY_PARAM_HTTP_PORT_KEY);
        }
        sideloadDocumentUrl.searchParams.append(QUERY_PARAM_HTTP_PORT_KEY, serverConfig.port.toString());
        if (sideloadDocumentUrl.searchParams.has(QUERY_PARAM_WS_PORT_KEY)) {
            sideloadDocumentUrl.searchParams.delete(QUERY_PARAM_WS_PORT_KEY);
        }
        sideloadDocumentUrl.searchParams.append(QUERY_PARAM_WS_PORT_KEY, serverConfig.port.toString());
        this._logger.success(format(LOGS.sideloadAddInFrom, { appKind: addInData.kind, appName: addInData.name }));
        this._logger.information(sideloadDocumentUrl.href, { postfix: LOGS.newLine });
    }
    getAddInData(srcDirectory) {
        const mainfestPath = path.resolve(path.join(srcDirectory, MANIFEST_JSON));
        const manifestContent = this._require(mainfestPath);
        const manifest = new AddInManifest(manifestContent);
        return {
            name: this._appName,
            kind: manifest.kind,
            version: manifest.version,
            rootAbsoluteDirectory: path.isAbsolute(srcDirectory)
                ? path.resolve(srcDirectory, "..")
                : /* c8 ignore next 2 */
                    /* path.resolve() cannot be stubbed. */
                    this._rootDirectory,
            srcDirectory
        };
    }
};
AppServer = __decorate([
    injectable(),
    __param(0, inject(ITypes.IScriptValidator)),
    __param(1, inject(ITypes.IHTTPServer)),
    __param(2, inject(ITypes.IWSServer)),
    __param(3, inject(ICoreTypes.ILogger)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], AppServer);
export { AppServer };
const LOGS = {
    newLine: "\n",
    tab: "  ",
    specifyValidScript: "Please specify a valid script to execute.",
    executeProgram: "{PROGRAM_NAME} <script-name>",
    executeProgramExample: "{PROGRAM_NAME} build",
    forExample: "For example:",
    cleaningOutputDirectory: "Cleaning output directory {DEFAULT_OUTPUT_DIRECTORY}/ ...",
    buildingSourceDirectory: "Building source directory {srcDirectory}/ to {DEFAULT_OUTPUT_DIRECTORY}/ ...",
    startingHTTPServer: "Starting HTTPS Server ...",
    startingWSServer: "Starting WSS Server ...",
    sideloadAddInFrom: "Your {appKind} '{appName}' can be sideloaded from:",
    done: "Done."
};
//# sourceMappingURL=AppServer.js.map