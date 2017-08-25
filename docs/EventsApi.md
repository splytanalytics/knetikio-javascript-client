# KnetikIO.EventsApi

All URIs are relative to *https://api.knetik.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEvent**](EventsApi.md#createEvent) | **POST** /v2/events | Creates a single event (a transaction with no duration)


<a name="createEvent"></a>
# **createEvent**
> createEvent(customerId, opts)

Creates a single event (a transaction with no duration)

### Example
```javascript
var KnetikIO = require('knetikio-sdk');

var apiInstance = new KnetikIO.EventsApi();

var customerId = "customerId_example"; // String | customerId

var opts = { 
  'request': new KnetikIO.NewEventRequest() // NewEventRequest | Similar to transactions, the details of that event
};
apiInstance.createEvent(customerId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| customerId | 
 **request** | [**NewEventRequest**](NewEventRequest.md)| Similar to transactions, the details of that event | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

