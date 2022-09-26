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
 * Execution result type.
 */
export declare type ExecutionResult = {
    command: string;
    isSuccessful: boolean;
    data?: string;
    error?: any;
};
/**
 * App kind type.
 */
export declare type AppKind = "widget" | "plugin" | "quickjs-plugin";
/**
 * Logger options type.
 */
export declare type LoggerOptions = {
    prefix?: string;
    postfix?: string;
};
//# sourceMappingURL=Types.d.ts.map