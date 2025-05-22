# UploadControllerApi

All URIs are relative to *http://localhost:8085/upload*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**uploadAvatar**](#uploadavatar) | **POST** /upload/avatar | |
|[**uploadCover**](#uploadcover) | **POST** /upload/cover | |
|[**uploadFromUrl**](#uploadfromurl) | **POST** /upload/from-url | |
|[**uploadImage**](#uploadimage) | **POST** /upload/image | |

# **uploadAvatar**
> ApiResponseAvatarUploadResponse uploadAvatar()


### Example

```typescript
import {
    UploadControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UploadControllerApi(configuration);

let userId: string; // (default to undefined)
let file: File; // (default to undefined)

const { status, data } = await apiInstance.uploadAvatar(
    userId,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|
| **file** | [**File**] |  | defaults to undefined|


### Return type

**ApiResponseAvatarUploadResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadCover**
> ApiResponseCoverUploadResponse uploadCover()


### Example

```typescript
import {
    UploadControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UploadControllerApi(configuration);

let bookId: string; // (default to undefined)
let file: File; // (default to undefined)

const { status, data } = await apiInstance.uploadCover(
    bookId,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookId** | [**string**] |  | defaults to undefined|
| **file** | [**File**] |  | defaults to undefined|


### Return type

**ApiResponseCoverUploadResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFromUrl**
> ApiResponseFromUrlUploadResponse uploadFromUrl(fromUrlUploadRequest)


### Example

```typescript
import {
    UploadControllerApi,
    Configuration,
    FromUrlUploadRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UploadControllerApi(configuration);

let fromUrlUploadRequest: FromUrlUploadRequest; //

const { status, data } = await apiInstance.uploadFromUrl(
    fromUrlUploadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fromUrlUploadRequest** | **FromUrlUploadRequest**|  | |


### Return type

**ApiResponseFromUrlUploadResponse**

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

# **uploadImage**
> ApiResponseUploadResponse uploadImage()


### Example

```typescript
import {
    UploadControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UploadControllerApi(configuration);

let file: File; // (default to undefined)

const { status, data } = await apiInstance.uploadImage(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|


### Return type

**ApiResponseUploadResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

