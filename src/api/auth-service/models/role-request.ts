/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface RoleRequest
 */
export interface RoleRequest {
    /**
     * 
     * @type {string}
     * @memberof RoleRequest
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof RoleRequest
     */
    'description'?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof RoleRequest
     */
    'permissions'?: Set<string>;
}

