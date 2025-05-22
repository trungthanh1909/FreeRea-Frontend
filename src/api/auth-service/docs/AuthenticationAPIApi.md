# AuthenticationAPIApi

All URIs are relative to *http://localhost:8080/identity*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authenticate**](#authenticate) | **POST** /auth/token | Log in|
|[**authenticate1**](#authenticate1) | **POST** /auth/refresh | Refresh token|
|[**introspectToken**](#introspecttoken) | **POST** /auth/introspect | Introspect/verify token|
|[**logout**](#logout) | **POST** /auth/logout | log out|

# **authenticate**
> ApiResponseAuthenticateResponse authenticate(authenticateRequest)

Log in by username and password

### Example

```typescript
import {
    AuthenticationAPIApi,
    Configuration,
    AuthenticateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationAPIApi(configuration);

let authenticateRequest: AuthenticateRequest; //

const { status, data } = await apiInstance.authenticate(
    authenticateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authenticateRequest** | **AuthenticateRequest**|  | |


### Return type

**ApiResponseAuthenticateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | login success |  -  |
|**1006** | wrong username or password |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authenticate1**
> ApiResponseAuthenticateResponse authenticate1(refreshRequest)

Calling when front-app want to refresh token\'s time duration

### Example

```typescript
import {
    AuthenticationAPIApi,
    Configuration,
    RefreshRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationAPIApi(configuration);

let refreshRequest: RefreshRequest; //

const { status, data } = await apiInstance.authenticate1(
    refreshRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refreshRequest** | **RefreshRequest**|  | |


### Return type

**ApiResponseAuthenticateResponse**

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

# **introspectToken**
> ApiResponseIntrospectTokenResponse introspectToken(introspectTokenRequest)

verify token bear header, response to true or false

### Example

```typescript
import {
    AuthenticationAPIApi,
    Configuration,
    IntrospectTokenRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationAPIApi(configuration);

let introspectTokenRequest: IntrospectTokenRequest; //

const { status, data } = await apiInstance.introspectToken(
    introspectTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **introspectTokenRequest** | **IntrospectTokenRequest**|  | |


### Return type

**ApiResponseIntrospectTokenResponse**

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

# **logout**
> ApiResponseVoid logout(logoutRequest)


### Example

```typescript
import {
    AuthenticationAPIApi,
    Configuration,
    LogoutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationAPIApi(configuration);

let logoutRequest: LogoutRequest; //

const { status, data } = await apiInstance.logout(
    logoutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **logoutRequest** | **LogoutRequest**|  | |


### Return type

**ApiResponseVoid**

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

