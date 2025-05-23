# InternalAPIForFavouriteServiceApi

All URIs are relative to *http://localhost:8091/favourite*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addBookToFavourite**](#addbooktofavourite) | **POST** /internal/add | Add a book to user\&#39;s favourite list|
|[**getFavouriteListByUserId**](#getfavouritelistbyuserid) | **GET** /internal/get-favourite-list/{username} | Get all favourited books by user|
|[**isFavourite**](#isfavourite) | **GET** /internal/is-favourite | Check if a book is in user\&#39;s favourite list|
|[**removeAllFavouritesByBookId**](#removeallfavouritesbybookid) | **DELETE** /internal/remove-all-by-book/{bookId} | Remove all favourites by book ID|
|[**removeAllFavouritesByUser**](#removeallfavouritesbyuser) | **DELETE** /internal/remove-all-by-user/{username} | Remove all favourite books by user|
|[**removeBookFromFavourite**](#removebookfromfavourite) | **POST** /internal/remove | Remove a book from user\&#39;s favourite list|

# **addBookToFavourite**
> ApiResponseBookAddResponse addBookToFavourite(bookAddRequest)


### Example

```typescript
import {
    InternalAPIForFavouriteServiceApi,
    Configuration,
    BookAddRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalAPIForFavouriteServiceApi(configuration);

let bookAddRequest: BookAddRequest; //

const { status, data } = await apiInstance.addBookToFavourite(
    bookAddRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookAddRequest** | **BookAddRequest**|  | |


### Return type

**ApiResponseBookAddResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**2009** | Book already in user\&#39;s favourite list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFavouriteListByUserId**
> ApiResponseListFavouriteListResponse getFavouriteListByUserId()


### Example

```typescript
import {
    InternalAPIForFavouriteServiceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalAPIForFavouriteServiceApi(configuration);

let username: string; // (default to undefined)

const { status, data } = await apiInstance.getFavouriteListByUserId(
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListFavouriteListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**2005** | User not existed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **isFavourite**
> ApiResponseBoolean isFavourite()


### Example

```typescript
import {
    InternalAPIForFavouriteServiceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalAPIForFavouriteServiceApi(configuration);

let username: string; // (default to undefined)
let bookId: string; // (default to undefined)

const { status, data } = await apiInstance.isFavourite(
    username,
    bookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] |  | defaults to undefined|
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
|**200** | Success |  -  |
|**2005** | User not existed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeAllFavouritesByBookId**
> ApiResponseVoid removeAllFavouritesByBookId()


### Example

```typescript
import {
    InternalAPIForFavouriteServiceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalAPIForFavouriteServiceApi(configuration);

let bookId: string; // (default to undefined)

const { status, data } = await apiInstance.removeAllFavouritesByBookId(
    bookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookId** | [**string**] |  | defaults to undefined|


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
|**200** | Success |  -  |
|**2006** | Book not existed |  -  |
|**1006** | Unauthenticated, you are not the admin |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeAllFavouritesByUser**
> ApiResponseVoid removeAllFavouritesByUser()


### Example

```typescript
import {
    InternalAPIForFavouriteServiceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalAPIForFavouriteServiceApi(configuration);

let username: string; // (default to undefined)

const { status, data } = await apiInstance.removeAllFavouritesByUser(
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] |  | defaults to undefined|


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
|**200** | Success |  -  |
|**2007** | No book was found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeBookFromFavourite**
> ApiResponseBookRemoveResponse removeBookFromFavourite(bookRemoveRequest)


### Example

```typescript
import {
    InternalAPIForFavouriteServiceApi,
    Configuration,
    BookRemoveRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InternalAPIForFavouriteServiceApi(configuration);

let bookRemoveRequest: BookRemoveRequest; //

const { status, data } = await apiInstance.removeBookFromFavourite(
    bookRemoveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookRemoveRequest** | **BookRemoveRequest**|  | |


### Return type

**ApiResponseBookRemoveResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**2005** | User not existed |  -  |
|**2007** | Book not found in favourite list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

