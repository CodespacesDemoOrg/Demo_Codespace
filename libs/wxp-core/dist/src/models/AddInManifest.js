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
/**
 * Docs dependency on:
 * https://git.corp.adobe.com/Horizon/hz/blob/main/features/extensibility/add-in-management/src/AddInManifest.ts#L27
 */
export class AddInManifest {
    id;
    name;
    version;
    manifestVersion;
    main;
    requirements;
    icon;
    entryPoints;
    strings;
    externalURL;
    constructor(content) {
        this.id = content.id ?? "sample-widget";
        this.name = content.name ?? "Sample Widget";
        this.version = content.version ?? "1.0.0";
        this.manifestVersion = content.manifestVersion ?? 1;
        this.main = content.main ?? "index.html";
        this.requirements = content.requirements ?? { apps: ["Spice"] };
        this.icon = content.icon;
        this.entryPoints = content.entryPoints ?? [];
        this.strings = content.strings;
        this.externalURL = content.externalURL;
    }
    get kind() {
        return this.entryPoints.length === 0 ? "widget" : this.entryPoints[0].type;
    }
    get json() {
        return getJSONString({ ...this });
    }
}
//# sourceMappingURL=AddInManifest.js.map