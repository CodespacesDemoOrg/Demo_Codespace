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
import { traverseDirectory } from "@wxp/wxp-core";
import path from "path";
import shell from "shelljs";
import { EXTENSIONS_TO_TRANSPILE } from "../constants.js";
/**
 * Script manager class.
 */
export class ScriptManager {
    /**
     * Clean directory.
     *
     * @param directory - Directory to clean.
     */
    static cleanDirectory(directory) {
        shell.config.silent = true;
        shell.rm("-rf", directory);
        shell.mkdir(directory);
        shell.config.silent = false;
    }
    /**
     * Transpile necessary files in a directory.
     *
     * @param directory - Directory to check for files which require transpilation.
     */
    static transpile(directory) {
        const shouldTranspile = this.shouldTranspile(directory);
        if (shouldTranspile) {
            shell.config.silent = true;
            shell.exec("tsc", { async: false });
            shell.config.silent = false;
        }
    }
    /**
     * Copy static files.
     *
     * @param sourceDirectory - Directory to check for static files.
     * @param destinationDirectory - Directory where the static files need to be copied into.
     */
    static copyStaticFiles(sourceDirectory, destinationDirectory) {
        shell.config.silent = true;
        const filesToCopy = shell
            .find(sourceDirectory)
            .filter(file => !EXTENSIONS_TO_TRANSPILE.has(path.extname(file)) && file !== sourceDirectory);
        if (filesToCopy.length === 0) {
            shell.config.silent = false;
            return;
        }
        shell.cp("-R", filesToCopy, destinationDirectory);
        shell.config.silent = false;
    }
    static shouldTranspile(directory) {
        const allFileExtensions = new Set();
        traverseDirectory(directory, absolutePath => allFileExtensions.add(path.extname(absolutePath)));
        let shouldTranspile = false;
        Array.from(allFileExtensions).some(extension => {
            if (EXTENSIONS_TO_TRANSPILE.has(extension)) {
                shouldTranspile = true;
                return;
            }
        });
        return shouldTranspile;
    }
}
//# sourceMappingURL=ScriptManager.js.map