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
import { __decorate, __metadata } from "tslib";
import { injectable } from "inversify";
/**
 * Message throttler interface.
 */
let MessageThrottler = class MessageThrottler {
    TIME_TO_TRIGGER = 500;
    _messages;
    _action;
    /**
     * Instantiate {@link MessageThrottler}.
     *
     * @returns Reference to a new {@link MessageThrottler} instance.
     */
    constructor() {
        this._messages = new Set();
        this._action = () => { };
    }
    /**
     * Register an action to execute when a message is added.
     *
     * @param action - Function to execute when a message is received.
     */
    registerAction(action) {
        this._action = action;
    }
    /**
     * Add message.
     *
     * @param message - Message string.
     */
    addMessage(message) {
        this._messages.add(message);
        setTimeout(this.triggerAction.bind(this), this.TIME_TO_TRIGGER);
    }
    triggerAction() {
        for (const message of Array.from(this._messages)) {
            this._action(message);
        }
        this._messages.clear();
    }
};
MessageThrottler = __decorate([
    injectable(),
    __metadata("design:paramtypes", [])
], MessageThrottler);
export { MessageThrottler };
//# sourceMappingURL=MessageThrottler.js.map