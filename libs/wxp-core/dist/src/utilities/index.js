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
import fs from "fs-extra";
import path from "path";
export * from "./CLIProcess.js";
export * from "./ConsoleLogger.js";
export * from "./ILogger.js";
export * from "./IProcess.js";
/**
 * Get JSON string representation of an item.
 *
 * @param item - Unknown input.
 * @returns JSON string of item.
 */
export function getJSONString(item) {
    return JSON.stringify(item, undefined, 4);
}
/**
 * Check whether a string value is null, undefined, empty or whitespace.
 *
 * @param value - String input.
 * @returns Boolean value representing whether the string value is null, undefined, empty or whitespace.
 */
export function isNullOrWhiteSpace(value) {
    return !value || value.trim().length === 0;
}
/**
 * Recursively traverse a directory and execute an action on the underlying files.
 *
 * @param directory - Directory to traverse.
 * @param action - Action to execute on the files.
 */
export function traverseDirectory(directory, action) {
    fs.readdirSync(directory, { withFileTypes: true }).forEach(file => {
        const absolutePath = path.join(directory, file.name);
        if (fs.lstatSync(absolutePath).isDirectory()) {
            return traverseDirectory(absolutePath, action);
        }
        else {
            action(absolutePath);
        }
    });
}
//# sourceMappingURL=index.js.map