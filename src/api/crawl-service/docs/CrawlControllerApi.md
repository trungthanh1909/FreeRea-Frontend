# CrawlControllerApi

All URIs are relative to *http://localhost:8082/crawl*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**crawl**](#crawl) | **POST** /crawl | |

# **crawl**
> CrawlResponse crawl(metadata)


### Example

```typescript
import {
    CrawlControllerApi,
    Configuration,
    Metadata
} from './api';

const configuration = new Configuration();
const apiInstance = new CrawlControllerApi(configuration);

let metadata: Metadata; //

const { status, data } = await apiInstance.crawl(
    metadata
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **metadata** | **Metadata**|  | |


### Return type

**CrawlResponse**

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

