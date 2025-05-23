# InternalCommentControllerApi

All URIs are relative to *http://localhost:8083/comment*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getByBookId**](#getbybookid) | **GET** /internal/book/{bookId} | |
|[**getByChapterId**](#getbychapterid) | **GET** /internal/chapter/{chapterId} | |
|[**getByUsername**](#getbyusername) | **GET** /internal/{username} | |

# **getByBookId**
> ApiResponseListCommentResponse getByBookId()


### Example

```typescript
import {
    InternalCommentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalCommentControllerApi(configuration);

let bookId: string; // (default to undefined)

const { status, data } = await apiInstance.getByBookId(
    bookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListCommentResponse**

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

# **getByChapterId**
> ApiResponseListCommentResponse getByChapterId()


### Example

```typescript
import {
    InternalCommentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalCommentControllerApi(configuration);

let chapterId: string; // (default to undefined)

const { status, data } = await apiInstance.getByChapterId(
    chapterId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chapterId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListCommentResponse**

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

# **getByUsername**
> ApiResponseListCommentResponse getByUsername()


### Example

```typescript
import {
    InternalCommentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalCommentControllerApi(configuration);

let username: string; // (default to undefined)

const { status, data } = await apiInstance.getByUsername(
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListCommentResponse**

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

