# KnetikIO.NewEventRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **String** | Unique ID of the device triggering the event | [optional] 
**event_properties** | **Object** | A key/value list of properties for this event. Values can be numerical, strings or booleans, proper typing matters (quoted vs unquoted) | [optional] 
**event_timestamp** | **Number** | Epoch timestamp &lt;i&gt;in milliseconds&lt;/i&gt; of when event itself occurred | 
**request_type** | **String** | Specifies the canonical model name of the request. Ex: DataCollectorNewUserRequest -&gt; newUser, NewEventRequest -&gt; newEvent,e tc | 
**result** | **String** | The outcome of the transaction. Can be anything from a code to a word to a boolean depending on your neeeds. Ex: success, 200, invalid, insufficient_funds, etc | 
**send_timestamp** | **Number** | Epoch timestamp &lt;i&gt;in milliseconds&lt;/i&gt; of when event was sent to the API | 
**transaction_id** | **String** | Unique transaction ID | [optional] 
**user_id** | **String** | Unique ID of the user triggering the event | [optional] 
**category** | **String** | The name/type of the transaction | 


