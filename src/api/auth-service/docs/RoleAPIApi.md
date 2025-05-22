# RoleAPIApi

All URIs are relative to *http://localhost:8080/identity*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**_delete**](#_delete) | **DELETE** /roles/{role} | |
|[**create**](#create) | **POST** /roles | |
|[**getAll**](#getall) | **GET** /roles | |

# **_delete**
> ApiResponseVoid _delete()


### Example

```typescript
import {
    RoleAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RoleAPIApi(configuration);

let role: string; // (default to undefined)

const { status, data } = await apiInstance._delete(
    role
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **role** | [**string**] |  | defaults to undefined|


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

# **create**
> ApiResponseRoleResponse create(roleRequest)


### Example

```typescript
import {
    RoleAPIApi,
    Configuration,
    RoleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RoleAPIApi(configuration);

let roleRequest: RoleRequest; //

const { status, data } = await apiInstance.create(
    roleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleRequest** | **RoleRequest**|  | |


### Return type

**ApiResponseRoleResponse**

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

# **getAll**
> ApiResponseListRoleResponse getAll()


### Example

```typescript
import {
    RoleAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RoleAPIApi(configuration);

const { status, data } = await apiInstance.getAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListRoleResponse**

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

