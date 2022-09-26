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
export class TemplateJson {
    /**
     * dependencies property.
     */
    dependencies;
    /**
     * devDependencies property.
     */
    devDependencies;
    /**
     * scripts property.
     */
    scripts;
    /**
     * Instantiate {@link TemplateJson}.
     *
     * @param content - template.json content.
     * @returns Reference to a new {@link TemplateJson} instance.
     */
    constructor(content) {
        this.setDependencies(content);
        this.setDevDependencies(content);
        this.setScripts(content);
    }
    setDependencies(content) {
        if (content.dependencies) {
            if (content.dependencies instanceof Map) {
                content.dependencies.forEach((value, key) => {
                    if (!this.dependencies) {
                        this.dependencies = new Map();
                    }
                    this.dependencies.set(key, value);
                });
            }
            else if (content.dependencies instanceof Object) {
                for (const [key, value] of Object.entries(content.dependencies)) {
                    if (!this.dependencies) {
                        this.dependencies = new Map();
                    }
                    this.dependencies.set(key, value.toString());
                }
            }
        }
    }
    setDevDependencies(content) {
        if (content.devDependencies) {
            if (content.devDependencies instanceof Map) {
                content.devDependencies.forEach((value, key) => {
                    if (!this.devDependencies) {
                        this.devDependencies = new Map();
                    }
                    this.devDependencies.set(key, value);
                });
            }
            else if (content.devDependencies instanceof Object) {
                for (const [key, value] of Object.entries(content.devDependencies)) {
                    if (!this.devDependencies) {
                        this.devDependencies = new Map();
                    }
                    this.devDependencies.set(key, value.toString());
                }
            }
        }
    }
    setScripts(content) {
        if (content.scripts) {
            if (content.scripts instanceof Map) {
                content.scripts.forEach((value, key) => {
                    if (!this.scripts) {
                        this.scripts = new Map();
                    }
                    this.scripts.set(key, value);
                });
            }
            else if (content.scripts instanceof Object) {
                for (const [key, value] of Object.entries(content.scripts)) {
                    if (!this.scripts) {
                        this.scripts = new Map();
                    }
                    this.scripts.set(key, value.toString());
                }
            }
        }
    }
}
//# sourceMappingURL=TemplateJson.js.map