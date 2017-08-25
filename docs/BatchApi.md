# KnetikIO.BatchApi

All URIs are relative to *https://api.knetik.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitBatch**](BatchApi.md#submitBatch) | **POST** /v2/batch | Submit a batch of requests as an array of input models


<a name="submitBatch"></a>
# **submitBatch**
> [BatchRequestResult] submitBatch(customerId, opts)

Submit a batch of requests as an array of input models

For this to work, you will need to specify the value of the request_type field of each element in the list, which indicates the type of the element. For example, to submit a batch containing a DataCollectorNewUserRequest you would specify the value &#x60;newUser&#x60; as the request_type for your DataCollectorNewUserRequest element. Convention is DataCollectorSomeTypeRequest -&gt; someType (DataCollectorNewUserRequest -&gt; newUser, DataCollectorNewDeviceRequest -&gt; newDevice, etc). If any invalid requests are detected in the batch, a HTTP 207 (Multi-Status) will be returned and the body will contain the status of each of the requests, in the order in which they were submitted, with detailed error messages and the JSON of the request returned for any invalid requests.

### Example
```javascript
var KnetikIO = require('knetikio-sdk');

var apiInstance = new KnetikIO.BatchApi();

var customerId = "customerId_example"; // String | customerId

var opts = { 
  'batchRequest': new KnetikIO.DataCollectorBatchRequest() // DataCollectorBatchRequest | The batch of requests to submit
};
apiInstance.submitBatch(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| customerId | 
 **batchRequest** | [**DataCollectorBatchRequest**](DataCollectorBatchRequest.md)| The batch of requests to submit | [optional] 

### Return type

[**[BatchRequestResult]**](BatchRequestResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

