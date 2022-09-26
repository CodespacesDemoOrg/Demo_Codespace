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
/// <reference types="node" />
import { Express } from "express";
import { Server } from "https";
import { WebSocketServer } from "ws";
/**
 * Available scripts in wxp-scripts package.
 */
export declare type Script = "" | "clean" | "build" | "start";
/**
 * Add-In details.
 */
export declare type AddInData = {
    /**
     * Name of add-in.
     */
    name: string;
    /**
     * Kind of add-in (For example: widget or plugin).
     */
    kind: string;
    /**
     * Version of add-in.
     */
    version: string;
    /**
     * Absolute directory of add-in.
     */
    rootAbsoluteDirectory: string;
    /**
     * Source directory of add-in.
     */
    srcDirectory: string;
};
/**
 * Server configuration.
 */
export declare type ServerConfig = {
    /**
     * Reference of {@link Server}.
     */
    secureServer?: Server;
    /**
     * Server host name.
     */
    hostname: string;
    /**
     * Server port number.
     */
    port: number;
};
/**
 * HTTP configuration.
 */
export declare type HTTPConfig = {
    /**
     * HTTP protocol (For example: http or https).
     */
    protocol: string;
    /**
     * Reference of {@link Express}.
     */
    expressApp?: Express;
};
/**
 * WebSocket configuration.
 */
export declare type WSConfig = {
    /**
     * WebSocket protocol (For example: ws or wss).
     */
    protocol: string;
    /**
     * Reference of {@link WebSocketServer}.
     */
    socketApp?: WebSocketServer;
};
//# sourceMappingURL=Types.d.ts.map