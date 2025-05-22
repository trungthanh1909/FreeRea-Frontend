# HistoryRecordControllerApi

All URIs are relative to *http://localhost:8093/history*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getRecordByUserId**](#getrecordbyuserid) | **GET** /record/{userId} | |

# **getRecordByUserId**
> ApiResponsePageRecordResponse getRecordByUserId()


### Example

```typescript
import {
    HistoryRecordControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HistoryRecordControllerApi(configuration);

let userId: string; // (default to undefined)
let page: number; // (optional) (default to 0)
let size: number; // (optional) (default to 10)

const { status, data } = await apiInstance.getRecordByUserId(
    userId,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 0|
| **size** | [**number**] |  | (optional) defaults to 10|


### Return type

**ApiResponsePageRecordResponse**

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

