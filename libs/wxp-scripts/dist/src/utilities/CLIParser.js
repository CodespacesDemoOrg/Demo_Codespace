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
import process from "process";
import "reflect-metadata";
import { DEFAULT_PORT, DEFAULT_SRC_DIRECTORY } from "../constants.js";
import { CLIOptions } from "../models/index.js";
/**
 * CLI parser class.
 */
export class CLIParser {
    /**
     * Get the options provided as inputs when executing this CLI app.
     *
     * @param command - {@link Command} reference.
     * @returns Options as {@link CLIOptions}.
     */
    static getOptions(command) {
        let script = "";
        command
            .arguments("[script]")
            .action(input => (script = input))
            .option("--src <src-directory>", "Source Directory", DEFAULT_SRC_DIRECTORY)
            .option("--url <document-url>", "Document URL", "")
            .option("--port <port>", "Server Port", DEFAULT_PORT)
            .allowUnknownOption()
            .parse(process.argv);
        const options = command.opts();
        return new CLIOptions(script, options.src, options.url, options.port);
    }
}
//# sourceMappingURL=CLIParser.js.map