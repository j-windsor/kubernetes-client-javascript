/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: release-1.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* RoleRef contains information that points to the role being used
*/
export class V1RoleRef {
    /**
    * APIGroup is the group for the resource being referenced
    */
    'apiGroup': string;
    /**
    * Kind is the type of resource being referenced
    */
    'kind': string;
    /**
    * Name is the name of resource being referenced
    */
    'name': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiGroup",
            "baseName": "apiGroup",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1RoleRef.attributeTypeMap;
    }

    public constructor() {
    }
}
