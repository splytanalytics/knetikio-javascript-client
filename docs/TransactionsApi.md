# KnetikIO.TransactionsApi

All URIs are relative to *https://api.knetik.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**beginTransaction**](TransactionsApi.md#beginTransaction) | **POST** /v2/transactions | Begins a new transaction
[**endTransaction**](TransactionsApi.md#endTransaction) | **PUT** /v2/transactions/{id}/end | Ends the transaction
[**updateCollection**](TransactionsApi.md#updateCollection) | **POST** /v2/collections | Creates and finalizes a collection of transaction information
[**updateTransaction**](TransactionsApi.md#updateTransaction) | **PUT** /v2/transactions/{id} | Updates the progress for the given transaction


<a name="beginTransaction"></a>
# **beginTransaction**
> beginTransaction(customerId, opts)

Begins a new transaction

Use the event properties to describe the initial state of the transaction

### Example
```javascript
var KnetikIO = require('knetikio-sdk');

var apiInstance = new KnetikIO.TransactionsApi();

var customerId = "customerId_example"; // String | customerId

var opts = { 
  'request': new KnetikIO.DataCollectorBeginTransactionRequest() // DataCollectorBeginTransactionRequest | Transaction initiation information
};
apiInstance.beginTransaction(customerId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| customerId | 
 **request** | [**DataCollectorBeginTransactionRequest**](DataCollectorBeginTransactionRequest.md)| Transaction initiation information | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="endTransaction"></a>
# **endTransaction**
> endTransaction(id, customerId, opts)

Ends the transaction

Submits final transaction state to Knetik.io

### Example
```javascript
var KnetikIO = require('knetikio-sdk');

var apiInstance = new KnetikIO.TransactionsApi();

var id = "id_example"; // String | Unique ID of the transaction being finalized

var customerId = "customerId_example"; // String | customerId

var opts = { 
  'request': new KnetikIO.DataCollectorEndTransactionRequest() // DataCollectorEndTransactionRequest | Transaction finalization information
};
apiInstance.endTransaction(id, customerId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique ID of the transaction being finalized | 
 **customerId** | **String**| customerId | 
 **request** | [**DataCollectorEndTransactionRequest**](DataCollectorEndTransactionRequest.md)| Transaction finalization information | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateCollection"></a>
# **updateCollection**
> updateCollection(customerId, opts)

Creates and finalizes a collection of transaction information

This operation basically encapsulates beginTransaction and endTransaction semantics into a single step and is used to update user balance information in Knetik.io

### Example
```javascript
var KnetikIO = require('knetikio-sdk');

var apiInstance = new KnetikIO.TransactionsApi();

var customerId = "customerId_example"; // String | customerId

var opts = { 
  'request': new KnetikIO.DataCollectorUpdateCollectionRequest() // DataCollectorUpdateCollectionRequest | Collection state information
};
apiInstance.updateCollection(customerId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| customerId | 
 **request** | [**DataCollectorUpdateCollectionRequest**](DataCollectorUpdateCollectionRequest.md)| Collection state information | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateTransaction"></a>
# **updateTransaction**
> updateTransaction(id, customerId, opts)

Updates the progress for the given transaction

Use the event properties to update the state of the transaction

### Example
```javascript
var KnetikIO = require('knetikio-sdk');

var apiInstance = new KnetikIO.TransactionsApi();

var id = "id_example"; // String | Unique ID of the transaction being updated

var customerId = "customerId_example"; // String | customerId

var opts = { 
  'request': new KnetikIO.DataCollectorUpdateTransactionRequest() // DataCollectorUpdateTransactionRequest | Transaction progress information
};
apiInstance.updateTransaction(id, customerId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique ID of the transaction being updated | 
 **customerId** | **String**| customerId | 
 **request** | [**DataCollectorUpdateTransactionRequest**](DataCollectorUpdateTransactionRequest.md)| Transaction progress information | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

