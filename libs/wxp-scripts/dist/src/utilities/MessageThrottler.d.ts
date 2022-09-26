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
import { IMessageThrottler } from "./IMessageThrottler.js";
/**
 * Message throttler interface.
 */
export declare class MessageThrottler implements IMessageThrottler {
    private TIME_TO_TRIGGER;
    private _messages;
    private _action;
    /**
     * Instantiate {@link MessageThrottler}.
     *
     * @returns Reference to a new {@link MessageThrottler} instance.
     */
    constructor();
    /**
     * Register an action to execute when a message is added.
     *
     * @param action - Function to execute when a message is received.
     */
    registerAction(action: (message: string) => unknown): void;
    /**
     * Add message.
     *
     * @param message - Message string.
     */
    addMessage(message: string): void;
    private triggerAction;
}
//# sourceMappingURL=MessageThrottler.d.ts.map