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
import { getJSONString } from "../utilities/index.js";
import { TemplateJson } from "./TemplateJson.js";
/**
 * package.json model class.
 */
export class PackageJson extends TemplateJson {
    /**
     * name property.
     */
    name;
    /**
     * version property.
     */
    version;
    /**
     * description property.
     */
    description;
    /**
     * keywords property.
     */
    keywords;
    /**
     * Instantiate {@link PackageJson}.
     *
     * @param content - package.json content.
     * @returns Reference to a new {@link PackageJson} instance.
     */
    constructor(content) {
        super(content);
        this.name = content.name;
        this.version = content.version;
        this.description = content.description;
        this.keywords = content.keywords;
    }
    /**
     * Get JSON representation of this {@link PackageJson} reference.
     *
     * @returns JSON representation as string.
     */
    get json() {
        return getJSONString({
            name: this.name,
            version: this.version,
            description: this.description,
            scripts: this.scripts ? Object.fromEntries(this.scripts) : undefined,
            keywords: this.keywords,
            dependencies: this.dependencies ? Object.fromEntries(this.dependencies) : undefined,
            devDependencies: this.devDependencies
                ? Object.fromEntries(this.devDependencies)
                : undefined
        });
    }
}
//# sourceMappingURL=PackageJson.js.map