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
export const ITypes = {
    Command: Symbol.for("Command"),
    SecureServer: Symbol.for("SecureServer"),
    ExpressApp: Symbol.for("ExpressApp"),
    SocketApp: Symbol.for("SocketApp"),
    IScriptValidator: Symbol.for("IScriptValidator"),
    IMessageThrottler: Symbol.for("IMessageThrottler"),
    IAppServer: Symbol.for("IAppServer"),
    IHTTPServer: Symbol.for("IHTTPServer"),
    IWSServer: Symbol.for("IWSServer")
};
//# sourceMappingURL=inversify.types.js.map