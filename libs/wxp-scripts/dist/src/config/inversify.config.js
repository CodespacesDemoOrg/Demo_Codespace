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
import { CLIProcess, ConsoleLogger, ITypes as ICoreTypes } from "@wxp/wxp-core";
import { Command } from "commander";
import cors from "cors";
import devcert from "devcert";
import express from "express";
import https from "https";
import { Container } from "inversify";
import "reflect-metadata";
import { WebSocketServer } from "ws";
import { AppServer, HTTPServer, WSServer } from "../app/index.js";
import { MessageThrottler } from "../utilities/index.js";
import { ScriptValidator } from "../validators/index.js";
import { ITypes } from "./inversify.types.js";
const container = new Container();
container
    .bind(ITypes.Command)
    .toDynamicValue(() => new Command())
    .inRequestScope();
container
    .bind(ITypes.ExpressApp)
    .toDynamicValue(() => {
    const expressApp = express();
    expressApp.use(cors());
    expressApp.use(express.json());
    expressApp.use(express.urlencoded({ extended: true }));
    return expressApp;
})
    .inSingletonScope();
container.bind(ITypes.SecureServer).toProvider(context => {
    return async (hostname) => {
        const sslData = await devcert.certificateFor(hostname);
        return https.createServer(sslData, context.container.get(ITypes.ExpressApp));
    };
});
container
    .bind(ITypes.SocketApp)
    .toFactory(() => {
    return (server) => {
        return new WebSocketServer({ server });
    };
});
container.bind(ITypes.IScriptValidator).to(ScriptValidator).inSingletonScope();
container.bind(ITypes.IMessageThrottler).to(MessageThrottler).inSingletonScope();
container.bind(ITypes.IAppServer).to(AppServer).inSingletonScope();
container.bind(ITypes.IHTTPServer).to(HTTPServer).inSingletonScope();
container.bind(ITypes.IWSServer).to(WSServer).inSingletonScope();
container.bind(ICoreTypes.ILogger).to(ConsoleLogger).inSingletonScope();
container.bind(ICoreTypes.IProcess).to(CLIProcess).inSingletonScope();
export { container as IContainer };
//# sourceMappingURL=inversify.config.js.map