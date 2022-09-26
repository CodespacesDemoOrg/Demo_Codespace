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
import { __decorate } from "tslib";
import chalk from "chalk";
import { injectable } from "inversify";
/**
 * Console Logger implementation class.
 */
let ConsoleLogger = class ConsoleLogger {
    /**
     * Log message.
     *
     * @param message - Message to log.
     * @param options - Logger {@link LoggerOptions} options.
     */
    message(message, options) {
        this.log(message, options);
    }
    /**
     * Log information message.
     *
     * @param message - Message to log.
     * @param options - Logger {@link LoggerOptions} options.
     */
    information(message, options) {
        this.log(message, options, chalk.hex("#4682B4"));
    }
    /**
     * Log success message.
     *
     * @param message - Message to log.
     * @param options - Logger {@link LoggerOptions} options.
     */
    success(message, options) {
        this.log(message, options, chalk.green);
    }
    /**
     * Log warning message.
     *
     * @param message - Message to log.
     * @param options - Logger {@link LoggerOptions} options.
     */
    warning(message, options) {
        this.log(message, options, chalk.hex("#ffa500"));
    }
    /**
     * Log error message.
     *
     * @param message - Message to log.
     * @param options - Logger {@link LoggerOptions} options.
     */
    error(message, options) {
        this.log(message, options, chalk.red);
    }
    log(message, options, color) {
        if (!this.isString(message)) {
            if (options?.prefix) {
                this.logWithColor(options.prefix, color);
            }
            this.logWithColor(message, color);
            if (options?.postfix) {
                this.logWithColor(options.postfix, color);
            }
        }
        else {
            let messageToLog = options?.prefix ? `${options.prefix}${message}` : message;
            messageToLog = options?.postfix ? `${messageToLog}${options?.postfix}` : messageToLog;
            this.logWithColor(messageToLog, color);
        }
    }
    isString(value) {
        return typeof value === "string" || value instanceof String;
    }
    logWithColor(message, color) {
        if (!color) {
            console.log(message);
        }
        else {
            console.log(color(message));
        }
    }
};
ConsoleLogger = __decorate([
    injectable()
], ConsoleLogger);
export { ConsoleLogger };
//# sourceMappingURL=ConsoleLogger.js.map