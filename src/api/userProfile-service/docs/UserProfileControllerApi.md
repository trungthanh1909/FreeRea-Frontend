# UserProfileControllerApi

All URIs are relative to *http://localhost:8099/profile*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getUserProfileById**](#getuserprofilebyid) | **GET** /info/profile/{id} | |

# **getUserProfileById**
> ApiResponseUserProfileResponse getUserProfileById()


### Example

```typescript
import {
    UserProfileControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserProfileControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getUserProfileById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseUserProfileResponse**

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

