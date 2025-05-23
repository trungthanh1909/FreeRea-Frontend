# BookSearchingControllerApi

All URIs are relative to *http://localhost:8090/search*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**autocompleteTitle**](#autocompletetitle) | **GET** /search/autocomplete | |
|[**getAll**](#getall) | **GET** /search/all | |
|[**getBookByCategories**](#getbookbycategories) | **GET** /search/categories | |
|[**getBookByTitle**](#getbookbytitle) | **GET** /search/title | |
|[**getBooksByAuthor**](#getbooksbyauthor) | **GET** /search/author | |

# **autocompleteTitle**
> ApiResponseListBookSearchingResult autocompleteTitle()


### Example

```typescript
import {
    BookSearchingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookSearchingControllerApi(configuration);

let prefix: string; // (default to undefined)

const { status, data } = await apiInstance.autocompleteTitle(
    prefix
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **prefix** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListBookSearchingResult**

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

# **getAll**
> ApiResponseListBookSearchingResult getAll()


### Example

```typescript
import {
    BookSearchingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookSearchingControllerApi(configuration);

const { status, data } = await apiInstance.getAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListBookSearchingResult**

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

# **getBookByCategories**
> ApiResponseListBookSearchingResult getBookByCategories()


### Example

```typescript
import {
    BookSearchingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookSearchingControllerApi(configuration);

let categories: Array<string>; // (default to undefined)

const { status, data } = await apiInstance.getBookByCategories(
    categories
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categories** | **Array&lt;string&gt;** |  | defaults to undefined|


### Return type

**ApiResponseListBookSearchingResult**

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

# **getBookByTitle**
> ApiResponseListBookSearchingResult getBookByTitle()


### Example

```typescript
import {
    BookSearchingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookSearchingControllerApi(configuration);

let title: string; // (default to undefined)

const { status, data } = await apiInstance.getBookByTitle(
    title
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **title** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListBookSearchingResult**

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

# **getBooksByAuthor**
> ApiResponseListBookSearchingResult getBooksByAuthor()


### Example

```typescript
import {
    BookSearchingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookSearchingControllerApi(configuration);

let author: string; // (default to undefined)

const { status, data } = await apiInstance.getBooksByAuthor(
    author
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **author** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListBookSearchingResult**

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

