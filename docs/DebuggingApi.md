# KnetikIO.DebuggingApi

All URIs are relative to *https://api.knetik.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**disableDebugger**](DebuggingApi.md#disableDebugger) | **DELETE** /v2/_debug/{customerId} | Disable debugging via Redis
[**enableDebugger**](DebuggingApi.md#enableDebugger) | **POST** /v2/_debug/{customerId} | Enable debugging via Redis


<a name="disableDebugger"></a>
# **disableDebugger**
> disableDebugger(customerId)

Disable debugging via Redis

Forces debugging to be disabled for the customer

### Example
```javascript
var KnetikIO = require('knetikio-sdk');

var apiInstance = new KnetikIO.DebuggingApi();

var customerId = "customerId_example"; // String | ID of the customer

apiInstance.disableDebugger(customerId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| ID of the customer | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="enableDebugger"></a>
# **enableDebugger**
> enableDebugger(customerId)

Enable debugging via Redis

Debugging is only enabled for a limited period of time (default is one hour)

### Example
```javascript
var KnetikIO = require('knetikio-sdk');

var apiInstance = new KnetikIO.DebuggingApi();

var customerId = "customerId_example"; // String | ID of the customer

apiInstance.enableDebugger(customerId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| ID of the customer | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

