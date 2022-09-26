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
import { AddInData, ServerConfig, WSConfig } from "../models/index.js";
import { IMessageThrottler } from "../utilities/index.js";
import { IWSServer } from "./IWSServer.js";
/**
 * WebSocket server implementation class.
 */
export declare class WSServer implements IWSServer {
    private readonly _throttler;
    private readonly _logger;
    /**
     * Instantiate {@link WSServer}.
     *
     * @param throttler - {@link IMessageThrottler} reference.
     * @param logger - {@link ILogger} reference.
     * @returns Reference to a new {@link WSServer} instance.
     */
    constructor(throttler: IMessageThrottler, logger: ILogger);
    /**
     * Start the WebSocket server.
     *
     * @param addInData - {@link AddInData}.
     * @param serverConfig - {@link ServerConfig}.
     * @param wsConfig - {@link WSConfig}.
     */
    start(addInData: AddInData, serverConfig: ServerConfig, wsConfig: WSConfig): void;
    private watchForChanges;
    private getBaseUrl;
}
//# sourceMappingURL=WSServer.d.ts.map