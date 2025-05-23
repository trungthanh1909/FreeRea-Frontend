# ExternalAPIForFavouriteServiceApi

All URIs are relative to *http://localhost:8099/favourite*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCountByBookId**](#getcountbybookid) | **GET** /external/count/{bookId} | Total number of times the story has been favorite|

# **getCountByBookId**
> ApiResponseFavouriteCountResponse getCountByBookId()


### Example

```typescript
import {
    ExternalAPIForFavouriteServiceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalAPIForFavouriteServiceApi(configuration);

let bookId: string; // (default to undefined)

const { status, data } = await apiInstance.getCountByBookId(
    bookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseFavouriteCountResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

