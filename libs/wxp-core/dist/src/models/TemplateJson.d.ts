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
 * package.json model class.
 */
export declare class TemplateJson {
    /**
     * dependencies property.
     */
    dependencies?: Map<string, string>;
    /**
     * devDependencies property.
     */
    devDependencies?: Map<string, string>;
    /**
     * scripts property.
     */
    scripts?: Map<string, string>;
    /**
     * Instantiate {@link TemplateJson}.
     *
     * @param content - template.json content.
     * @returns Reference to a new {@link TemplateJson} instance.
     */
    constructor(content: {
        [k: string]: unknown;
    });
    private setDependencies;
    private setDevDependencies;
    private setScripts;
}
//# sourceMappingURL=TemplateJson.d.ts.map