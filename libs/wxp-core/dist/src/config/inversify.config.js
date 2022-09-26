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
import { Container } from "inversify";
import "reflect-metadata";
import { CLIProcess, ConsoleLogger } from "../utilities/index.js";
import { ITypes } from "./inversify.types.js";
const container = new Container();
container.bind(ITypes.ILogger).to(ConsoleLogger).inSingletonScope();
container.bind(ITypes.IProcess).to(CLIProcess).inSingletonScope();
export { container as IContainer };
//# sourceMappingURL=inversify.config.js.map