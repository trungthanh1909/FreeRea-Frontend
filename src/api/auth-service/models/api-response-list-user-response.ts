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


// May contain unused imports in some cases
// @ts-ignore
import type { UserResponse } from './user-response';

/**
 * 
 * @export
 * @interface ApiResponseListUserResponse
 */
export interface ApiResponseListUserResponse {
    /**
     * 
     * @type {number}
     * @memberof ApiResponseListUserResponse
     */
    'code'?: number;
    /**
     * 
     * @type {string}
     * @memberof ApiResponseListUserResponse
     */
    'message'?: string;
    /**
     * 
     * @type {Array<UserResponse>}
     * @memberof ApiResponseListUserResponse
     */
    'result'?: Array<UserResponse>;
}

