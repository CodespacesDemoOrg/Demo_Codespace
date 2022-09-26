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
export declare type Requirements = {
    apps: string[];
    capabilities?: string[];
};
export declare type IconType = {
    width: number;
    height: number;
    path: string;
    theme: string[];
    scale?: number[];
};
export declare type DefaultSize = {
    width: number;
    height: number;
};
export declare type Resizing = {
    prefersConstrainedResize: boolean;
    maxHeight?: number;
    maxWidth?: number;
    minHeight?: number;
    minWidth?: number;
};
export declare type Label = {
    default: string;
};
export declare type EntryPoint = {
    type: string;
    id: string;
    label: string | Label;
    sandbox?: string[];
    defaultSize?: DefaultSize;
    synchronizesStateAffordance?: string;
    resetStateAffordance?: string;
    activeOnLoad?: boolean;
    canInactivate?: boolean;
    preview?: string;
    resizing?: Resizing;
};
export declare type Path = {
    baseUrl: string;
    manifest: string;
};
export declare type Version = {
    versionString: string;
    path: Path;
};
export declare type Schema = {
    id: string;
    type: string;
    version: Version;
};
//# sourceMappingURL=AddInTypes.d.ts.map