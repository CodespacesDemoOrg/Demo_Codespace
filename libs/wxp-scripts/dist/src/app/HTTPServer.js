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
import express from "express";
import fs from "fs-extra";
import { inject, injectable } from "inversify";
import path from "path";
import "reflect-metadata";
import format from "string-template";
import { DEFAULT_OUTPUT_DIRECTORY } from "../constants.js";
/**
 * HTTP server implementation class.
 */
let HTTPServer = class HTTPServer {
    _logger;
    /**
     * Instantiate {@link HTTPServer}.
     *
     * @param logger - {@link ILogger} reference.
     * @returns Reference to a new {@link HTTPServer} instance.
     */
    constructor(logger) {
        this._logger = logger;
    }
    /**
     * Start the HTTP server.
     *
     * @param addInData - {@link AddInData}.
     * @param serverConfig - {@link ServerConfig}.
     * @param httpConfig - {@link HTTPConfig}.
     */
    start(addInData, serverConfig, httpConfig) {
        if (!httpConfig.expressApp) {
            return;
        }
        httpConfig.expressApp.get("/addIns.json", (_, response) => {
            /* c8 ignore next 5 */
            /* Unreachable code since httpConfig.expressApp.get is stubbed. */
            response.set("Content-Type", "application/json");
            response
                .status(200)
                .json({ addIns: this.getAddIns(addInData, serverConfig, httpConfig) });
        });
        httpConfig.expressApp.get(`/${addInData.name}`, (_, response) => {
            /* c8 ignore next 8 */
            /* Unreachable code since httpConfig.expressApp.get is stubbed. */
            let resources = [];
            try {
                resources = this.getResources(addInData, serverConfig, httpConfig);
            }
            finally {
                response.set("Content-Type", "application/json");
                response.status(200).json({ resources });
            }
        });
        httpConfig.expressApp.use(`/${addInData.name}`, express.static(DEFAULT_OUTPUT_DIRECTORY));
        this._logger.success(format(LOGS.httpServerStarted, { appKind: addInData.kind, appName: addInData.name }));
        this._logger.information(`${this.getBaseUrl(serverConfig, httpConfig)}addIns.json`, {
            postfix: LOGS.newLine
        });
    }
    /**
     * Get add-in schema details as an array.
     *
     * @param addInData - {@link AddInData}.
     * @param serverConfig - {@link ServerConfig}.
     * @param httpConfig - {@link HTTPConfig}.
     * @returns Array of {@link AddInSchema}
     */
    getAddIns(addInData, serverConfig, httpConfig) {
        return [
            {
                id: addInData.name,
                type: addInData.kind,
                version: {
                    versionString: addInData.version,
                    path: {
                        baseUrl: `${this.getBaseUrl(serverConfig, httpConfig)}${addInData.name}/`,
                        manifest: "manifest.json"
                    }
                }
            }
        ];
    }
    /**
     * Get all add-in resources from the build directory.
     *
     * @param addInData - {@link AddInData}.
     * @param serverConfig - {@link ServerConfig}.
     * @param httpConfig - {@link HTTPConfig}.
     * @returns Array of URLs as string pointing to the add-in resources.
     */
    getResources(addInData, serverConfig, httpConfig) {
        const baseUrl = this.getBaseUrl(serverConfig, httpConfig);
        return fs
            .readdirSync(path.join(addInData.rootAbsoluteDirectory, DEFAULT_OUTPUT_DIRECTORY, "/"), { withFileTypes: true })
            .filter(file => !file.name.match(/(^|[\/\\])\../)) // ignore dotfiles
            .map(file => `${baseUrl}${addInData.name}/${file.name}`);
    }
    /**
     * Get base URL of the hosted server.
     *
     * @param serverConfig - {@link ServerConfig}.
     * @param httpConfig - {@link HTTPConfig}.
     * @returns Base URL as string.
     */
    getBaseUrl(serverConfig, httpConfig) {
        return new URL(`${httpConfig.protocol}://${serverConfig.hostname}:${serverConfig.port}`)
            .href;
    }
};
HTTPServer = __decorate([
    injectable(),
    __param(0, inject(ICoreTypes.ILogger)),
    __metadata("design:paramtypes", [Object])
], HTTPServer);
export { HTTPServer };
const LOGS = {
    newLine: "\n",
    httpServerStarted: "Done. Your {appKind} '{appName}' is hosted on:"
};
//# sourceMappingURL=HTTPServer.js.map