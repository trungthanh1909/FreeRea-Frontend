# ChapterControllerApi

All URIs are relative to *http://localhost:8087/chapter*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**countChaptersByBookId**](#countchaptersbybookid) | **GET** /chapters/book/{bookId}/count | |
|[**getChapterByBookIdAndNumber**](#getchapterbybookidandnumber) | **GET** /chapters/book/{bookId}/number/{chapterNumber} | |
|[**getChapterById**](#getchapterbyid) | **GET** /chapters/{bookId}/{chapterId} | |
|[**getChaptersByBookId**](#getchaptersbybookid) | **GET** /chapters/book/{bookId} | |
|[**getLastChapterByBookId**](#getlastchapterbybookid) | **GET** /chapters/book/{bookId}/last | |

# **countChaptersByBookId**
> ApiResponseLong countChaptersByBookId()


### Example

```typescript
import {
    ChapterControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChapterControllerApi(configuration);

let bookId: string; // (default to undefined)

const { status, data } = await apiInstance.countChaptersByBookId(
    bookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseLong**

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

# **getChapterByBookIdAndNumber**
> ApiResponseChapterResponse getChapterByBookIdAndNumber()


### Example

```typescript
import {
    ChapterControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChapterControllerApi(configuration);

let bookId: string; // (default to undefined)
let chapterNumber: number; // (default to undefined)

const { status, data } = await apiInstance.getChapterByBookIdAndNumber(
    bookId,
    chapterNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookId** | [**string**] |  | defaults to undefined|
| **chapterNumber** | [**number**] |  | defaults to undefined|


### Return type

**ApiResponseChapterResponse**

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

# **getChapterById**
> ApiResponseChapterResponse getChapterById()


### Example

```typescript
import {
    ChapterControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChapterControllerApi(configuration);

let bookId: string; // (default to undefined)
let chapterId: string; // (default to undefined)

const { status, data } = await apiInstance.getChapterById(
    bookId,
    chapterId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookId** | [**string**] |  | defaults to undefined|
| **chapterId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseChapterResponse**

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

# **getChaptersByBookId**
> ApiResponseListChapterResponse getChaptersByBookId()


### Example

```typescript
import {
    ChapterControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChapterControllerApi(configuration);

let bookId: string; // (default to undefined)

const { status, data } = await apiInstance.getChaptersByBookId(
    bookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListChapterResponse**

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

# **getLastChapterByBookId**
> ApiResponseChapterResponse getLastChapterByBookId()


### Example

```typescript
import {
    ChapterControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChapterControllerApi(configuration);

let bookId: string; // (default to undefined)

const { status, data } = await apiInstance.getLastChapterByBookId(
    bookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseChapterResponse**

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

