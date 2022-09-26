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
import { AddInData, ServerConfig, WSConfig } from "../models/index.js";
/**
 * WebSocket server interface.
 */
export interface IWSServer {
    /**
     * Start the WebSocket server.
     *
     * @param addInData - {@link AddInData}.
     * @param serverConfig - {@link ServerConfig}.
     * @param wsConfig - {@link WSConfig}.
     */
    start(addInData: AddInData, serverConfig: ServerConfig, wsConfig: WSConfig): void;
}
//# sourceMappingURL=IWSServer.d.ts.map