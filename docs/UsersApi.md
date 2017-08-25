# KnetikIO.UsersApi

All URIs are relative to *https://api.knetik.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**newUser**](UsersApi.md#newUser) | **POST** /v2/users | Submit a new user event
[**updateUserState**](UsersApi.md#updateUserState) | **PUT** /v2/users/{id} | Updates the entity state for the given user


<a name="newUser"></a>
# **newUser**
> newUser(customerId, opts)

Submit a new user event

Declares to the Knetik.io platform that the user is new at the given point in time. If the &#39;checked&#39; parameter is provided and set to &#39;true&#39;, however, the current state of the user in the Knetik.io platform is examined to determine if the user was previously declared as new and, if so, the user information is not updated in the Knetik.io platform.

### Example
```javascript
var KnetikIO = require('knetikio-sdk');

var apiInstance = new KnetikIO.UsersApi();

var customerId = "customerId_example"; // String | customerId

var opts = { 
  'request': new KnetikIO.DataCollectorNewUserRequest(), // DataCollectorNewUserRequest | New user information
  'checked': false // Boolean | Flag indicating whether the user state should be checked before updating the state in the Knetik.io platform
};
apiInstance.newUser(customerId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| customerId | 
 **request** | [**DataCollectorNewUserRequest**](DataCollectorNewUserRequest.md)| New user information | [optional] 
 **checked** | **Boolean**| Flag indicating whether the user state should be checked before updating the state in the Knetik.io platform | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateUserState"></a>
# **updateUserState**
> updateUserState(id, customerId, opts)

Updates the entity state for the given user

### Example
```javascript
var KnetikIO = require('knetikio-sdk');

var apiInstance = new KnetikIO.UsersApi();

var id = "id_example"; // String | ID of the user for whom state is being updated

var customerId = "customerId_example"; // String | customerId

var opts = { 
  'request': new KnetikIO.DataCollectorUpdateUserStateRequest() // DataCollectorUpdateUserStateRequest | Updated user state information
};
apiInstance.updateUserState(id, customerId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the user for whom state is being updated | 
 **customerId** | **String**| customerId | 
 **request** | [**DataCollectorUpdateUserStateRequest**](DataCollectorUpdateUserStateRequest.md)| Updated user state information | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

