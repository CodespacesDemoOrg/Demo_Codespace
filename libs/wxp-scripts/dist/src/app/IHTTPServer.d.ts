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
import { Schema as AddInSchema } from "@wxp/wxp-core";
import { AddInData, HTTPConfig, ServerConfig } from "../models/index.js";
/**
 * HTTP server interface.
 */
export interface IHTTPServer {
    /**
     * Start the HTTP server.
     *
     * @param serverConfig - {@link ServerConfig}.
     * @param addInData - {@link AddInData}.
     * @param httpConfig - {@link HTTPConfig}.
     */
    start(addInData: AddInData, serverConfig: ServerConfig, httpConfig: HTTPConfig): void;
    /**
     * Get add-in schema details as an array.
     *
     * @param addInData - {@link AddInData}.
     * @param serverConfig - {@link ServerConfig}.
     * @param httpConfig - {@link HTTPConfig}.
     * @returns Array of {@link AddInSchema}
     */
    getAddIns(addInData: AddInData, serverConfig: ServerConfig, httpConfig: HTTPConfig): AddInSchema[];
    /**
     * Get all add-in resources from the build directory.
     *
     * @param addInData - {@link AddInData}.
     * @param serverConfig - {@link ServerConfig}.
     * @param httpConfig - {@link HTTPConfig}.
     * @returns Array of URLs as string pointing to the add-in resources.
     */
    getResources(addInData: AddInData, serverConfig: ServerConfig, httpConfig: HTTPConfig): string[];
    /**
     * Get base URL of the hosted server.
     *
     * @param serverConfig - {@link ServerConfig}.
     * @param httpConfig - {@link HTTPConfig}.
     * @returns Base URL as string.
     */
    getBaseUrl(serverConfig: ServerConfig, httpConfig: HTTPConfig): string;
}
//# sourceMappingURL=IHTTPServer.d.ts.map