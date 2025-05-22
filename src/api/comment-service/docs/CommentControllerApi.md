# CommentControllerApi

All URIs are relative to *http://localhost:8083/comment*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**_delete**](#_delete) | **DELETE** /comments/{id} | |
|[**create**](#create) | **POST** /comments | |
|[**getByBookId**](#getbybookid) | **GET** /comments/book/{bookId} | |
|[**getByChapterId**](#getbychapterid) | **GET** /comments/chapter/{chapterId} | |

# **_delete**
> ApiResponseVoid _delete()


### Example

```typescript
import {
    CommentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CommentControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance._delete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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
> ApiResponseCommentResponse create(commentRequest)


### Example

```typescript
import {
    CommentControllerApi,
    Configuration,
    CommentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CommentControllerApi(configuration);

let commentRequest: CommentRequest; //

const { status, data } = await apiInstance.create(
    commentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commentRequest** | **CommentRequest**|  | |


### Return type

**ApiResponseCommentResponse**

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

# **getByBookId**
> ApiResponseListCommentResponse getByBookId()


### Example

```typescript
import {
    CommentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CommentControllerApi(configuration);

let bookId: number; // (default to undefined)

const { status, data } = await apiInstance.getByBookId(
    bookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookId** | [**number**] |  | defaults to undefined|


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
    CommentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CommentControllerApi(configuration);

let chapterId: number; // (default to undefined)

const { status, data } = await apiInstance.getByChapterId(
    chapterId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chapterId** | [**number**] |  | defaults to undefined|


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

