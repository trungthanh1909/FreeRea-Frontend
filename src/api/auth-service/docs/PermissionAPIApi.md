# PermissionAPIApi

All URIs are relative to *http://localhost:8080/identity*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPermission**](#createpermission) | **POST** /permissions | create permission|
|[**deletePermission**](#deletepermission) | **DELETE** /permissions/{permissionId} | delete permission by permission id|
|[**findAllPermissions**](#findallpermissions) | **GET** /permissions | get all permission|

# **createPermission**
> ApiResponsePermissionResponse createPermission(permissionRequest)


### Example

```typescript
import {
    PermissionAPIApi,
    Configuration,
    PermissionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PermissionAPIApi(configuration);

let permissionRequest: PermissionRequest; //

const { status, data } = await apiInstance.createPermission(
    permissionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permissionRequest** | **PermissionRequest**|  | |


### Return type

**ApiResponsePermissionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePermission**
> ApiResponseVoid deletePermission()


### Example

```typescript
import {
    PermissionAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PermissionAPIApi(configuration);

let permissionId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePermission(
    permissionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permissionId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseVoid**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findAllPermissions**
> ApiResponseListPermissionResponse findAllPermissions()


### Example

```typescript
import {
    PermissionAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PermissionAPIApi(configuration);

const { status, data } = await apiInstance.findAllPermissions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListPermissionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

