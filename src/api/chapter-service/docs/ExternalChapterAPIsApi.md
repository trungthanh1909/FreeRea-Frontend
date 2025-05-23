# ExternalChapterAPIsApi

All URIs are relative to *http://localhost:8087/chapter*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**countChaptersByBookId**](#countchaptersbybookid) | **GET** /chapters/book/{bookId}/count | Count chapters|
|[**getChapterByBookIdAndNumber**](#getchapterbybookidandnumber) | **GET** /chapters/book/{bookId}/number/{chapterNumber} | Get chapter by number|
|[**getChapterById**](#getchapterbyid) | **GET** /chapters/{bookId}/{chapterId} | Get chapter by ID|
|[**getChaptersByBookId**](#getchaptersbybookid) | **GET** /chapters/book/{bookId} | Get all chapters of a book|
|[**getLastChapterByBookId**](#getlastchapterbybookid) | **GET** /chapters/book/{bookId}/last | Get last chapter|

# **countChaptersByBookId**
> ApiResponseLong countChaptersByBookId()

Count the number of chapters in a book

### Example

```typescript
import {
    ExternalChapterAPIsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalChapterAPIsApi(configuration);

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
|**200** | Chapter count retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChapterByBookIdAndNumber**
> ApiResponseChapterResponse getChapterByBookIdAndNumber()

Fetch a chapter of a book by its number

### Example

```typescript
import {
    ExternalChapterAPIsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalChapterAPIsApi(configuration);

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
|**200** | Chapter fetched by number successfully |  -  |
|**404** | Chapter not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChapterById**
> ApiResponseChapterResponse getChapterById()

Fetch a chapter by chapterId and bookId

### Example

```typescript
import {
    ExternalChapterAPIsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalChapterAPIsApi(configuration);

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
|**200** | Chapter fetched successfully |  -  |
|**404** | Chapter not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChaptersByBookId**
> ApiResponseListChapterResponse getChaptersByBookId()

Fetch all chapters by bookId

### Example

```typescript
import {
    ExternalChapterAPIsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalChapterAPIsApi(configuration);

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
|**200** | Chapters fetched successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLastChapterByBookId**
> ApiResponseChapterResponse getLastChapterByBookId()

Fetch the last (latest) chapter of a book

### Example

```typescript
import {
    ExternalChapterAPIsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalChapterAPIsApi(configuration);

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
|**200** | Last chapter fetched successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

