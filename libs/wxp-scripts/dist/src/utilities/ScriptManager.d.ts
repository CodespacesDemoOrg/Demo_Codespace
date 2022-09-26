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
/**
 * Script manager class.
 */
export declare class ScriptManager {
    /**
     * Clean directory.
     *
     * @param directory - Directory to clean.
     */
    static cleanDirectory(directory: string): void;
    /**
     * Transpile necessary files in a directory.
     *
     * @param directory - Directory to check for files which require transpilation.
     */
    static transpile(directory: string): void;
    /**
     * Copy static files.
     *
     * @param sourceDirectory - Directory to check for static files.
     * @param destinationDirectory - Directory where the static files need to be copied into.
     */
    static copyStaticFiles(sourceDirectory: string, destinationDirectory: string): void;
    private static shouldTranspile;
}
//# sourceMappingURL=ScriptManager.d.ts.map