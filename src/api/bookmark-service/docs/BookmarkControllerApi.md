# BookmarkControllerApi

All URIs are relative to *http://localhost:8084/bookmark*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createBookmark**](#createbookmark) | **POST** /bookmarks | |
|[**deleteBookmark**](#deletebookmark) | **DELETE** /bookmarks | |
|[**existsBookmark**](#existsbookmark) | **GET** /bookmarks/exists | |
|[**getBookmarksByUser**](#getbookmarksbyuser) | **GET** /bookmarks/user/{userId} | |

# **createBookmark**
> ApiResponseBookmarkResponse createBookmark(bookmarkRequest)


### Example

```typescript
import {
    BookmarkControllerApi,
    Configuration,
    BookmarkRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarkControllerApi(configuration);

let bookmarkRequest: BookmarkRequest; //

const { status, data } = await apiInstance.createBookmark(
    bookmarkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookmarkRequest** | **BookmarkRequest**|  | |


### Return type

**ApiResponseBookmarkResponse**

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

# **deleteBookmark**
> ApiResponseVoid deleteBookmark(bookmarkRequest)


### Example

```typescript
import {
    BookmarkControllerApi,
    Configuration,
    BookmarkRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarkControllerApi(configuration);

let bookmarkRequest: BookmarkRequest; //

const { status, data } = await apiInstance.deleteBookmark(
    bookmarkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookmarkRequest** | **BookmarkRequest**|  | |


### Return type

**ApiResponseVoid**

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

# **existsBookmark**
> ApiResponseBoolean existsBookmark()


### Example

```typescript
import {
    BookmarkControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarkControllerApi(configuration);

let userId: number; // (default to undefined)
let bookId: number; // (default to undefined)

const { status, data } = await apiInstance.existsBookmark(
    userId,
    bookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] |  | defaults to undefined|
| **bookId** | [**number**] |  | defaults to undefined|


### Return type

**ApiResponseBoolean**

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

# **getBookmarksByUser**
> ApiResponseListBookmarkResponse getBookmarksByUser()


### Example

```typescript
import {
    BookmarkControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookmarkControllerApi(configuration);

let userId: number; // (default to undefined)

const { status, data } = await apiInstance.getBookmarksByUser(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] |  | defaults to undefined|


### Return type

**ApiResponseListBookmarkResponse**

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

