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
 * CLI options model class.
 */
export class CLIOptions {
    /**
     * Script to run. For example: build or start.
     */
    script;
    /**
     * Source directory - where the code artifacts exist.
     */
    srcDirectory;
    /**
     * Spice Document URL where the Add-In needs to be sideloaded.
     */
    documentUrl;
    /**
     * Port number where the Add-In is to be hosted.
     */
    port;
    /**
     * Instantiate {@link CLIOptions}.
     *
     * @param script - Script to run. For example: build or start.
     * @param srcDirectory - Source directory - where the code artifacts exist.
     * @param documentUrl - Spice Document URL where the Add-In needs to be sideloaded.
     * @returns Reference to a new {@link CLIOptions} instance.
     */
    constructor(script, srcDirectory, documentUrl, port) {
        this.script = script;
        this.srcDirectory = srcDirectory;
        this.documentUrl = documentUrl;
        this.port = port;
    }
}
//# sourceMappingURL=CLIOptions.js.map