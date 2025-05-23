# InternalBookControllerApi

All URIs are relative to *http://localhost:8086/book*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**checkBookExists**](#checkbookexists) | **GET** /internal/{bookId}/exists | Check if a book exists|
|[**createBook**](#createbook) | **POST** /internal/create | Create a new book|
|[**deleteBook**](#deletebook) | **DELETE** /internal/delete/{id} | Delete a book|
|[**updateBook**](#updatebook) | **PUT** /internal/update/{id} | Update an existing book|

# **checkBookExists**
> ApiResponseBoolean checkBookExists()

Check if a book exists by ID

### Example

```typescript
import {
    InternalBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalBookControllerApi(configuration);

let bookId: string; // (default to undefined)

const { status, data } = await apiInstance.checkBookExists(
    bookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookId** | [**string**] |  | defaults to undefined|


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
|**200** | Check completed |  -  |
|**2001** | Book not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createBook**
> createBook(bookCreationRequest)

Create a new book record with the provided details

### Example

```typescript
import {
    InternalBookControllerApi,
    Configuration,
    BookCreationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalBookControllerApi(configuration);

let bookCreationRequest: BookCreationRequest; //

const { status, data } = await apiInstance.createBook(
    bookCreationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookCreationRequest** | **BookCreationRequest**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**1000** | Book created successfully |  -  |
|**400** | Invalid request data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBook**
> ApiResponseVoid deleteBook()

Delete book by book ID

### Example

```typescript
import {
    InternalBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalBookControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteBook(
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
|**1000** | Book deleted successfully |  -  |
|**2001** | Book not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateBook**
> ApiResponseBookResponse updateBook(bookRequest)

Update book details by book ID

### Example

```typescript
import {
    InternalBookControllerApi,
    Configuration,
    BookRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalBookControllerApi(configuration);

let id: string; // (default to undefined)
let bookRequest: BookRequest; //

const { status, data } = await apiInstance.updateBook(
    id,
    bookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookRequest** | **BookRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseBookResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**1000** | Book updated successfully |  -  |
|**2001** | Book not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

