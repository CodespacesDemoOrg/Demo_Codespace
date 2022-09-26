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
import { LoggerOptions } from "../models/index.js";
import { ILogger } from "./ILogger.js";
/**
 * Console Logger implementation class.
 */
export declare class ConsoleLogger implements ILogger {
    /**
     * Log message.
     *
     * @param message - Message to log.
     * @param options - Logger {@link LoggerOptions} options.
     */
    message(message: string, options?: LoggerOptions): void;
    /**
     * Log information message.
     *
     * @param message - Message to log.
     * @param options - Logger {@link LoggerOptions} options.
     */
    information(message: string, options?: LoggerOptions): void;
    /**
     * Log success message.
     *
     * @param message - Message to log.
     * @param options - Logger {@link LoggerOptions} options.
     */
    success(message: string, options?: LoggerOptions): void;
    /**
     * Log warning message.
     *
     * @param message - Message to log.
     * @param options - Logger {@link LoggerOptions} options.
     */
    warning(message: string, options?: LoggerOptions): void;
    /**
     * Log error message.
     *
     * @param message - Message to log.
     * @param options - Logger {@link LoggerOptions} options.
     */
    error(message: unknown, options?: LoggerOptions): void;
    private log;
    private isString;
    private logWithColor;
}
//# sourceMappingURL=ConsoleLogger.d.ts.map