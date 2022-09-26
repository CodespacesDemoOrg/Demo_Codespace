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
import { Command } from "commander";
import "reflect-metadata";
import { CLIOptions } from "../models/index.js";
/**
 * CLI parser class.
 */
export declare class CLIParser {
    /**
     * Get the options provided as inputs when executing this CLI app.
     *
     * @param command - {@link Command} reference.
     * @returns Options as {@link CLIOptions}.
     */
    static getOptions(command: Command): CLIOptions;
}
//# sourceMappingURL=CLIParser.d.ts.map