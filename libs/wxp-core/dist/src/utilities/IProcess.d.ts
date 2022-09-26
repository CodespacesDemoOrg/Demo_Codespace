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
/// <reference types="node" />
import { ExecSyncOptions } from "child_process";
import { ExecutionResult } from "../models/index.js";
/**
 * Process interface.
 */
export interface IProcess {
    /**
     * Execute a command asynchronously.
     *
     * @param command - Command to execute.
     * @param args - Command arguments.
     * @param options - Execution {@link ExecSyncOptions} options.
     * @returns Promise of {@link ExecutionResult}.
     */
    execute(command: string, args: string[], options?: ExecSyncOptions): Promise<ExecutionResult>;
    /**
     * Execute a command synchronously.
     *
     * @param command - Command to execute.
     * @param args - Command arguments.
     * @param options - Execution {@link ExecSyncOptions} options.
     * @returns {@link ExecutionResult}.
     */
    executeSync(command: string, args: string[], options?: ExecSyncOptions): ExecutionResult;
    /**
     * Handle any error.
     *
     * @param error - Any error.
     */
    handleError(error: any): void;
    /**
     * Remove the created app.
     *
     * @param appDirectory - Directory of the app.
     * @param appName - Name of the app.
     */
    removeApp(appDirectory?: string, appName?: string): void;
}
//# sourceMappingURL=IProcess.d.ts.map