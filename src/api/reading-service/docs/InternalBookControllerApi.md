# InternalBookControllerApi

All URIs are relative to *http://localhost:8086/book*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createBook**](#createbook) | **POST** /internal/create | |
|[**deleteBook**](#deletebook) | **DELETE** /internal/delete/{id} | |
|[**updateBook**](#updatebook) | **PUT** /internal/update/{id} | |

# **createBook**
> ApiResponseBookResponse createBook(bookRequest)


### Example

```typescript
import {
    InternalBookControllerApi,
    Configuration,
    BookRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalBookControllerApi(configuration);

let bookRequest: BookRequest; //

const { status, data } = await apiInstance.createBook(
    bookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookRequest** | **BookRequest**|  | |


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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBook**
> ApiResponseVoid deleteBook()


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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateBook**
> ApiResponseBookResponse updateBook(bookRequest)


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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

