# KnetikIO.DataCollectorUpdateTransactionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **String** | Unique ID of the device triggering the event | [optional] 
**event_properties** | **Object** | A key/value list of properties for this event. Values can be numerical, strings or booleans, proper typing matters (quoted vs unquoted) | [optional] 
**event_timestamp** | **Number** | Epoch timestamp &lt;i&gt;in milliseconds&lt;/i&gt; of when event itself occurred | 
**progress** | **Number** | Progress of the transaction, expressed as a percentage between 1 - 99 | 
**request_type** | **String** | Specifies the canonical model name of the request. Ex: DataCollectorNewUserRequest -&gt; newUser, NewEventRequest -&gt; newEvent,e tc | 
**send_timestamp** | **Number** | Epoch timestamp &lt;i&gt;in milliseconds&lt;/i&gt; of when event was sent to the API | 
**transaction_id** | **String** | Unique transaction ID | [optional] 
**user_id** | **String** | Unique ID of the user triggering the event | [optional] 
**category** | **String** | The name/type of the transaction | 


