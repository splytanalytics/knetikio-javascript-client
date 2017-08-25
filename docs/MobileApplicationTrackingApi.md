# KnetikIO.MobileApplicationTrackingApi

All URIs are relative to *https://api.knetik.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitTuneRequest**](MobileApplicationTrackingApi.md#submitTuneRequest) | **POST** /v2/tune | Submit mobile application tracking data for Tune applications


<a name="submitTuneRequest"></a>
# **submitTuneRequest**
> submitTuneRequest(customerId, opts)

Submit mobile application tracking data for Tune applications

### Example
```javascript
var KnetikIO = require('knetikio-sdk');

var apiInstance = new KnetikIO.MobileApplicationTrackingApi();

var customerId = "customerId_example"; // String | customerId

var opts = { 
  'request': new KnetikIO.DataCollectorTuneRequest() // DataCollectorTuneRequest | Tune campaign tracking information
};
apiInstance.submitTuneRequest(customerId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| customerId | 
 **request** | [**DataCollectorTuneRequest**](DataCollectorTuneRequest.md)| Tune campaign tracking information | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

