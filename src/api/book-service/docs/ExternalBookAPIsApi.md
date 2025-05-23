# ExternalBookAPIsApi

All URIs are relative to *http://localhost:8086/book*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllBooks**](#getallbooks) | **GET** /books/all | Get all books in database|
|[**getBookById**](#getbookbyid) | **GET** /books/{id} | |

# **getAllBooks**
> getAllBooks()


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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**1000** | Request Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBookById**
> ApiResponseBookResponse getBookById()


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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

