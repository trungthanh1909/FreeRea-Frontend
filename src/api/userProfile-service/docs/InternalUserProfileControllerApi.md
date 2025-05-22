# InternalUserProfileControllerApi

All URIs are relative to *http://localhost:8099/profile*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changeAvatar**](#changeavatar) | **PUT** /internal/change-avatar | |
|[**createUserProfile**](#createuserprofile) | **POST** /internal/create | |
|[**deleteUserProfile**](#deleteuserprofile) | **DELETE** /internal/delete/{userId} | |
|[**getUserReadingHistory**](#getuserreadinghistory) | **GET** /internal/get-reading-history/{userId} | |
|[**updateUserProfile**](#updateuserprofile) | **PUT** /internal/update-user-profile | |

# **changeAvatar**
> ApiResponseUserProfileChangeAvatarResponse changeAvatar(userProfileChangeAvatarRequest)


### Example

```typescript
import {
    InternalUserProfileControllerApi,
    Configuration,
    UserProfileChangeAvatarRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalUserProfileControllerApi(configuration);

let userProfileChangeAvatarRequest: UserProfileChangeAvatarRequest; //

const { status, data } = await apiInstance.changeAvatar(
    userProfileChangeAvatarRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userProfileChangeAvatarRequest** | **UserProfileChangeAvatarRequest**|  | |


### Return type

**ApiResponseUserProfileChangeAvatarResponse**

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

# **createUserProfile**
> ApiResponseUserProfileCreationResponse createUserProfile(userProfileCreationRequest)


### Example

```typescript
import {
    InternalUserProfileControllerApi,
    Configuration,
    UserProfileCreationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalUserProfileControllerApi(configuration);

let userProfileCreationRequest: UserProfileCreationRequest; //

const { status, data } = await apiInstance.createUserProfile(
    userProfileCreationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userProfileCreationRequest** | **UserProfileCreationRequest**|  | |


### Return type

**ApiResponseUserProfileCreationResponse**

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

# **deleteUserProfile**
> ApiResponseUserProfileDeleteResponse deleteUserProfile()


### Example

```typescript
import {
    InternalUserProfileControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalUserProfileControllerApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteUserProfile(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseUserProfileDeleteResponse**

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

# **getUserReadingHistory**
> ApiResponseListUserReadingHistory getUserReadingHistory()


### Example

```typescript
import {
    InternalUserProfileControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalUserProfileControllerApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getUserReadingHistory(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListUserReadingHistory**

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

# **updateUserProfile**
> ApiResponseUserProfileUpdateResponse updateUserProfile(userProfileUpdateRequest)


### Example

```typescript
import {
    InternalUserProfileControllerApi,
    Configuration,
    UserProfileUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalUserProfileControllerApi(configuration);

let userProfileUpdateRequest: UserProfileUpdateRequest; //

const { status, data } = await apiInstance.updateUserProfile(
    userProfileUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userProfileUpdateRequest** | **UserProfileUpdateRequest**|  | |


### Return type

**ApiResponseUserProfileUpdateResponse**

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

