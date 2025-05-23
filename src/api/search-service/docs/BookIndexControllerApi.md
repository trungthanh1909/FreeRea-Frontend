# BookIndexControllerApi

All URIs are relative to *http://localhost:8090/search*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**updateBook**](#updatebook) | **PUT** /indexing/update_book | |

# **updateBook**
> ApiResponseBookIndexResponse updateBook(bookIndexUpdateRequest)


### Example

```typescript
import {
    BookIndexControllerApi,
    Configuration,
    BookIndexUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BookIndexControllerApi(configuration);

let bookIndexUpdateRequest: BookIndexUpdateRequest; //

const { status, data } = await apiInstance.updateBook(
    bookIndexUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookIndexUpdateRequest** | **BookIndexUpdateRequest**|  | |


### Return type

**ApiResponseBookIndexResponse**

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

