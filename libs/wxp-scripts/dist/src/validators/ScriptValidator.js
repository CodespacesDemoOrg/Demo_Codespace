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
import { __decorate, __metadata, __param } from "tslib";
import { isNullOrWhiteSpace, ITypes as ICoreTypes } from "@wxp/wxp-core";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import format from "string-template";
import { HTTPS, PROGRAM_NAME } from "../constants.js";
/**
 * Script validator implementation class.
 */
let ScriptValidator = class ScriptValidator {
    _logger;
    /**
     * Instantiate {@link ScriptValidator}.
     *
     * @param logger - {@link ILogger} reference.
     * @returns Reference to a new {@link ScriptValidator} instance.
     */
    constructor(logger) {
        this._logger = logger;
    }
    /**
     * Validate the script.
     *
     * @param script - Script to run.
     */
    validateScript(script) {
        if (isNullOrWhiteSpace(script) ||
            (script != "clean" && script != "build" && script != "start")) {
            this._logger.warning(LOGS.specifyScript);
            this._logger.warning(format(LOGS.executeProgram, { PROGRAM_NAME }), {
                prefix: LOGS.tab
            });
            this._logger.message(LOGS.forExample, { prefix: LOGS.newLine });
            this._logger.information(format(LOGS.executeProgramExample, { PROGRAM_NAME }), {
                prefix: LOGS.tab
            });
            return process.exit(0);
        }
    }
    /**
     * Validate the Document URL provided as an option to the script.
     *
     * @param script - Script to run.
     * @param documentUrl - Spice Document URL where the Add-In needs to be sideloaded.
     */
    validateDocumentURL(script, documentUrl) {
        if (script != "start") {
            return;
        }
        if (isNullOrWhiteSpace(documentUrl) || !this.isURLValid(documentUrl)) {
            this._logger.warning(LOGS.specifyDocumentUrl);
            this._logger.warning(format(LOGS.executeStart, { PROGRAM_NAME }), {
                prefix: LOGS.tab
            });
            this._logger.message(LOGS.forExample, { prefix: LOGS.newLine });
            this._logger.information(format(LOGS.executeStartExample, { PROGRAM_NAME }), {
                prefix: LOGS.tab
            });
            return process.exit(0);
        }
    }
    isURLValid(documentUrl) {
        let url;
        try {
            url = new URL(documentUrl);
        }
        catch {
            return false;
        }
        return url.protocol === `${HTTPS}:`;
    }
};
ScriptValidator = __decorate([
    injectable(),
    __param(0, inject(ICoreTypes.ILogger)),
    __metadata("design:paramtypes", [Object])
], ScriptValidator);
export { ScriptValidator };
const LOGS = {
    newLine: "\n",
    tab: "  ",
    specifyScript: "Please specify a valid script (clean/build/start) to execute.",
    executeProgram: "{PROGRAM_NAME} <script-name>",
    executeProgramExample: "{PROGRAM_NAME} build",
    specifyDocumentUrl: "Please specify a valid Document URL for sideloading the Add-In.",
    executeStart: "{PROGRAM_NAME} start --url '<document-url>'",
    executeStartExample: "{PROGRAM_NAME} start --url 'https://spice.adobe.net/id/urn:aaid:sc:AP:00000000-0000-0000-0000-000000000000'",
    forExample: "For example:"
};
//# sourceMappingURL=ScriptValidator.js.map