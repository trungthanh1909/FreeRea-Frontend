# UserAPIApi

All URIs are relative to *http://localhost:8080/identity*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createUser**](#createuser) | **POST** /users/registration | registration|
|[**deleteUser**](#deleteuser) | **DELETE** /users/{userId} | |
|[**findAllUsers**](#findallusers) | **GET** /users | find all users|
|[**findUserById**](#finduserbyid) | **GET** /users/{userId} | find all users|
|[**getInfo**](#getinfo) | **GET** /users/info | find all users|
|[**updateUser**](#updateuser) | **PUT** /users/{userId} | change password|

# **createUser**
> ApiResponseUserResponse createUser(userCreateRequest)

create user account then pushing it to user-profile-service to create user profile

### Example

```typescript
import {
    UserAPIApi,
    Configuration,
    UserCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UserAPIApi(configuration);

let userCreateRequest: UserCreateRequest; //

const { status, data } = await apiInstance.createUser(
    userCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userCreateRequest** | **UserCreateRequest**|  | |


### Return type

**ApiResponseUserResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | register success |  -  |
|**1002** | user existed |  -  |
|**1003** | invalid username |  -  |
|**1004** | invalid password |  -  |
|**1009** | email existed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUser**
> ApiResponseVoid deleteUser()


### Example

```typescript
import {
    UserAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserAPIApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteUser(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


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

# **findAllUsers**
> ApiResponseListUserResponse findAllUsers()

find all user existed

### Example

```typescript
import {
    UserAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserAPIApi(configuration);

const { status, data } = await apiInstance.findAllUsers();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListUserResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**1006** | unauthenticated |  -  |
|**1007** | not the admin |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findUserById**
> ApiResponseUserResponse findUserById()

get user by id

### Example

```typescript
import {
    UserAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserAPIApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.findUserById(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseUserResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**1005** | user not existed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInfo**
> ApiResponseUserResponse getInfo()

get the user\'s profile

### Example

```typescript
import {
    UserAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserAPIApi(configuration);

const { status, data } = await apiInstance.getInfo();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseUserResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**1005** | user not existed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUser**
> ApiResponseUserResponse updateUser(userUpdateRequest)

get the user\'s profile

### Example

```typescript
import {
    UserAPIApi,
    Configuration,
    UserUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UserAPIApi(configuration);

let userId: string; // (default to undefined)
let userUpdateRequest: UserUpdateRequest; //

const { status, data } = await apiInstance.updateUser(
    userId,
    userUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUpdateRequest** | **UserUpdateRequest**|  | |
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseUserResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**1005** | user not existed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

