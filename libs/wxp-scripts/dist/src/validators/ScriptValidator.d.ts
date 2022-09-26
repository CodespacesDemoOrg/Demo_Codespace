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
import { ILogger } from "@wxp/wxp-core";
import "reflect-metadata";
import { Script } from "../models/index.js";
import { IScriptValidator } from "./IScriptValidator.js";
/**
 * Script validator implementation class.
 */
export declare class ScriptValidator implements IScriptValidator {
    private readonly _logger;
    /**
     * Instantiate {@link ScriptValidator}.
     *
     * @param logger - {@link ILogger} reference.
     * @returns Reference to a new {@link ScriptValidator} instance.
     */
    constructor(logger: ILogger);
    /**
     * Validate the script.
     *
     * @param script - Script to run.
     */
    validateScript(script: Script): void;
    /**
     * Validate the Document URL provided as an option to the script.
     *
     * @param script - Script to run.
     * @param documentUrl - Spice Document URL where the Add-In needs to be sideloaded.
     */
    validateDocumentURL(script: Script, documentUrl: string): void;
    private isURLValid;
}
//# sourceMappingURL=ScriptValidator.d.ts.map