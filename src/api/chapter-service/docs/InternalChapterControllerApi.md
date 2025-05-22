# InternalChapterControllerApi

All URIs are relative to *http://localhost:8087/chapter*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createChapter**](#createchapter) | **POST** /internal/add | |
|[**deleteChapter**](#deletechapter) | **DELETE** /internal/{id} | |
|[**deleteChaptersByBookId**](#deletechaptersbybookid) | **DELETE** /internal/book/{bookId} | |
|[**updateChapter**](#updatechapter) | **PUT** /internal/update/{id} | |

# **createChapter**
> ApiResponseChapterResponse createChapter(chapterRequest)


### Example

```typescript
import {
    InternalChapterControllerApi,
    Configuration,
    ChapterRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalChapterControllerApi(configuration);

let chapterRequest: ChapterRequest; //

const { status, data } = await apiInstance.createChapter(
    chapterRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chapterRequest** | **ChapterRequest**|  | |


### Return type

**ApiResponseChapterResponse**

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

# **deleteChapter**
> ApiResponseVoid deleteChapter()


### Example

```typescript
import {
    InternalChapterControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalChapterControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteChapter(
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

# **deleteChaptersByBookId**
> ApiResponseVoid deleteChaptersByBookId()


### Example

```typescript
import {
    InternalChapterControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalChapterControllerApi(configuration);

let bookId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteChaptersByBookId(
    bookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookId** | [**string**] |  | defaults to undefined|


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

# **updateChapter**
> ApiResponseChapterResponse updateChapter(chapterRequest)


### Example

```typescript
import {
    InternalChapterControllerApi,
    Configuration,
    ChapterRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalChapterControllerApi(configuration);

let id: string; // (default to undefined)
let chapterRequest: ChapterRequest; //

const { status, data } = await apiInstance.updateChapter(
    id,
    chapterRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chapterRequest** | **ChapterRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseChapterResponse**

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

