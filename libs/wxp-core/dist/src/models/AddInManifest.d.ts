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
import { EntryPoint, IconType, Label, Requirements } from "./AddInTypes.js";
/**
 * Docs dependency on:
 * https://git.corp.adobe.com/Horizon/hz/blob/main/features/extensibility/add-in-management/src/AddInManifest.ts#L27
 */
export declare class AddInManifest {
    readonly id: string;
    readonly name: string | Label;
    readonly version: string;
    readonly manifestVersion: number;
    readonly main: string;
    readonly requirements: Requirements;
    readonly icon?: IconType | IconType[];
    readonly entryPoints: EntryPoint[];
    readonly strings?: string;
    readonly externalURL?: string;
    constructor(content: {
        [k: string]: unknown;
    });
    get kind(): string;
    get json(): string;
}
//# sourceMappingURL=AddInManifest.d.ts.map