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
import childprocess from "cross-spawn";
import fs from "fs-extra";
import { inject, injectable } from "inversify";
import path from "path";
import process from "process";
import "reflect-metadata";
import format from "string-template";
import { ITypes } from "../config/inversify.types.js";
/**
 * CLI process implementation class.
 */
let CLIProcess = class CLIProcess {
    _logger;
    /**
     * Instantiate {@link CLIProcess}.
     *
     * @param logger - {@link ILogger} reference.
     * @returns Reference to a new {@link CLIProcess} instance.
     */
    constructor(logger) {
        this._logger = logger;
    }
    /**
     * Execute a command asynchronously.
     *
     * @param command - Command to execute.
     * @param args - Command arguments.
     * @param options - Execution {@link ExecSyncOptions} options.
     * @returns Promise of {@link ExecutionResult}.
     */
    execute(command, args, options) {
        const commandWithArgs = args.length > 0 ? `${command} ${args.join(" ")}` : command;
        return new Promise((resolve, reject) => {
            let childProcess;
            if (options) {
                childProcess = childprocess.spawn(command, args, options);
            }
            else {
                childProcess = childprocess.spawn(command, args);
            }
            childProcess.on("close", code => {
                if (code !== 0) {
                    reject({
                        command: commandWithArgs,
                        isSuccessful: false
                    });
                    return;
                }
                resolve({
                    command: commandWithArgs,
                    isSuccessful: true
                });
            });
        });
    }
    /**
     * Execute a command synchronously.
     *
     * @param command - Command to execute.
     * @param args - Command arguments.
     * @param options - Execution {@link ExecSyncOptions} options.
     * @returns {@link ExecutionResult}.
     */
    executeSync(command, args, options) {
        const commandWithArgs = args.length > 0 ? `${command} ${args.join(" ")}` : command;
        try {
            let result;
            if (options) {
                result = childprocess.sync(command, args, options);
            }
            else {
                result = childprocess.sync(command, args);
            }
            return {
                command: commandWithArgs,
                isSuccessful: true,
                data: result.output.join("")
            };
        }
        catch (error) {
            throw {
                command: commandWithArgs,
                isSuccessful: false,
                error: error
            };
        }
    }
    /**
     * Handle any error.
     *
     * @param error - Any error.
     */
    handleError(error) {
        this._logger.error(LOGS.abortingInstallation, { prefix: LOGS.newLine });
        if (!error) {
            return;
        }
        if (error.command) {
            this._logger.warning(format(LOGS.hasFailed, { command: error.command }), {
                prefix: LOGS.tab,
                postfix: LOGS.newLine
            });
        }
        else {
            this._logger.error(LOGS.unexpectedError);
            this._logger.error(error, { postfix: LOGS.newLine });
        }
    }
    /**
     * Remove the created app.
     *
     * @param appDirectory - Directory of the app.
     * @param appName - Name of the app.
     */
    removeApp(appDirectory, appName) {
        if (!appDirectory || !appName) {
            return process.exit(0);
        }
        const knownGeneratedFiles = new Set([
            ".env",
            ".prettierignore",
            ".prettierrc.json",
            "node_modules",
            "package-lock.json",
            "package.json",
            "src",
            "ssl"
        ]);
        const appDirectoryPath = path.join(appDirectory);
        const currentFiles = fs
            .readdirSync(appDirectoryPath, { withFileTypes: true })
            .map(file => file.name);
        let remainingFiles = currentFiles.length;
        currentFiles.forEach(file => {
            if (knownGeneratedFiles.has(file)) {
                this._logger.information(format(LOGS.deletingGeneratedFileOrDirectory, { file }));
                fs.removeSync(path.join(appDirectory, file));
                remainingFiles--;
            }
        });
        if (remainingFiles === 0) {
            const rootDirectory = path.resolve(appDirectory, "..");
            this._logger.information(format(LOGS.deletingApp, { appName, rootDirectory }));
            process.chdir(rootDirectory);
            fs.removeSync(appDirectoryPath);
        }
        this._logger.warning(LOGS.done);
    }
};
CLIProcess = __decorate([
    injectable(),
    __param(0, inject(ITypes.ILogger)),
    __metadata("design:paramtypes", [Object])
], CLIProcess);
export { CLIProcess };
const LOGS = {
    newLine: "\n",
    tab: "  ",
    abortingInstallation: "Aborting installation.",
    hasFailed: "{command} has failed.",
    unexpectedError: "Unexpected error. Please report it as a bug:",
    deletingGeneratedFileOrDirectory: "Deleting generated file/directory {file} ...",
    deletingApp: "Deleting {appName}/ from {rootDirectory}",
    done: "Done."
};
//# sourceMappingURL=CLIProcess.js.map