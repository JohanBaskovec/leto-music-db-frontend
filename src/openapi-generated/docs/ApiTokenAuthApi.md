# OpenapiJsClient.ApiTokenAuthApi

All URIs are relative to *http://127.0.0.1:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAuthToken**](ApiTokenAuthApi.md#createAuthToken) | **POST** /api-token-auth/ | 



## createAuthToken

> AuthToken createAuthToken(username, password, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiTokenAuthApi();
let username = "username_example"; // String | 
let password = "password_example"; // String | 
let opts = {
  'token': "token_example" // String | 
};
apiInstance.createAuthToken(username, password, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 
 **token** | **String**|  | [optional] 

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, multipart/form-data, application/json
- **Accept**: application/json

