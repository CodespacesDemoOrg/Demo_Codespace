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
import { TemplateJson } from "./TemplateJson.js";
/**
 * package.json model class.
 */
export declare class PackageJson extends TemplateJson {
    /**
     * name property.
     */
    name?: string;
    /**
     * version property.
     */
    version?: string;
    /**
     * description property.
     */
    description?: string;
    /**
     * keywords property.
     */
    keywords?: string[];
    /**
     * Instantiate {@link PackageJson}.
     *
     * @param content - package.json content.
     * @returns Reference to a new {@link PackageJson} instance.
     */
    constructor(content: {
        [k: string]: unknown;
    });
    /**
     * Get JSON representation of this {@link PackageJson} reference.
     *
     * @returns JSON representation as string.
     */
    get json(): string;
}
//# sourceMappingURL=PackageJson.d.ts.map