# InternalHistoryRecordControllerApi

All URIs are relative to *http://localhost:8093/history*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**saveRecord**](#saverecord) | **POST** /internal/save-record | |

# **saveRecord**
> ApiResponseRecordResponse saveRecord(recordRequest)


### Example

```typescript
import {
    InternalHistoryRecordControllerApi,
    Configuration,
    RecordRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalHistoryRecordControllerApi(configuration);

let recordRequest: RecordRequest; //

const { status, data } = await apiInstance.saveRecord(
    recordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordRequest** | **RecordRequest**|  | |


### Return type

**ApiResponseRecordResponse**

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

