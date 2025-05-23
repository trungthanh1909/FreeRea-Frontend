# ExternalBookAPIsApi

All URIs are relative to *http://localhost:8086/book*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllBooks**](#getallbooks) | **GET** /books/all | Get all books in database|
|[**getBookById**](#getbookbyid) | **GET** /books/{id} | Get book by ID|
|[**getBooksOrderByCreatedDateDesc**](#getbooksorderbycreateddatedesc) | **GET** /books/by-created-date | Get books sorted by created date|
|[**getBooksOrderByViewCountDesc**](#getbooksorderbyviewcountdesc) | **GET** /books/by-view-count | Get books sorted by view count|

# **getAllBooks**
> ApiResponseListBookResponse getAllBooks()


### Example

```typescript
import {
    ExternalBookAPIsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalBookAPIsApi(configuration);

const { status, data } = await apiInstance.getAllBooks();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListBookResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**1000** | Request Success |  -  |
|**2001** | Book not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBookById**
> ApiResponseBookResponse getBookById()

Retrieve a book by its unique ID

### Example

```typescript
import {
    ExternalBookAPIsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalBookAPIsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getBookById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseBookResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**1000** | Book found |  -  |
|**2001** | Book not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBooksOrderByCreatedDateDesc**
> ApiResponseListBookResponse getBooksOrderByCreatedDateDesc()

Retrieve books ordered by their creation date descending

### Example

```typescript
import {
    ExternalBookAPIsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalBookAPIsApi(configuration);

const { status, data } = await apiInstance.getBooksOrderByCreatedDateDesc();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListBookResponse**

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

# **getBooksOrderByViewCountDesc**
> ApiResponseListBookResponse getBooksOrderByViewCountDesc()

Retrieve books ordered by their view count descending

### Example

```typescript
import {
    ExternalBookAPIsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalBookAPIsApi(configuration);

const { status, data } = await apiInstance.getBooksOrderByViewCountDesc();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListBookResponse**

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

