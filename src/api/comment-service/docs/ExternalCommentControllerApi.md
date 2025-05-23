# ExternalCommentControllerApi

All URIs are relative to *http://localhost:8083/comment*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**_delete**](#_delete) | **DELETE** /external/{id} | |
|[**createReply**](#createreply) | **POST** /external/reply | |
|[**createRoot**](#createroot) | **POST** /external/root | |
|[**getReplies**](#getreplies) | **GET** /external/{id}/replies | |
|[**update**](#update) | **PUT** /external/{id} | |

# **_delete**
> ApiResponseVoid _delete()


### Example

```typescript
import {
    ExternalCommentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalCommentControllerApi(configuration);

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

# **createReply**
> ApiResponseCommentResponse createReply(commentReplyRequest)


### Example

```typescript
import {
    ExternalCommentControllerApi,
    Configuration,
    CommentReplyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalCommentControllerApi(configuration);

let commentReplyRequest: CommentReplyRequest; //

const { status, data } = await apiInstance.createReply(
    commentReplyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commentReplyRequest** | **CommentReplyRequest**|  | |


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

# **createRoot**
> ApiResponseCommentResponse createRoot(commentRootRequest)


### Example

```typescript
import {
    ExternalCommentControllerApi,
    Configuration,
    CommentRootRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalCommentControllerApi(configuration);

let commentRootRequest: CommentRootRequest; //

const { status, data } = await apiInstance.createRoot(
    commentRootRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commentRootRequest** | **CommentRootRequest**|  | |


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

# **getReplies**
> ApiResponseListCommentResponse getReplies()


### Example

```typescript
import {
    ExternalCommentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalCommentControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getReplies(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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

# **update**
> ApiResponseCommentResponse update(commentReplyRequest)


### Example

```typescript
import {
    ExternalCommentControllerApi,
    Configuration,
    CommentReplyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalCommentControllerApi(configuration);

let id: string; // (default to undefined)
let commentReplyRequest: CommentReplyRequest; //

const { status, data } = await apiInstance.update(
    id,
    commentReplyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commentReplyRequest** | **CommentReplyRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


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

