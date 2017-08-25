# KnetikIO.DataCollectorBeginTransactionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **String** | Unique ID of the device triggering the event | [optional] 
**event_properties** | **Object** | A key/value list of properties for this event. Values can be numerical, strings or booleans, proper typing matters (quoted vs unquoted) | [optional] 
**event_timestamp** | **Number** | Epoch timestamp &lt;i&gt;in milliseconds&lt;/i&gt; of when event itself occurred | 
**request_type** | **String** | Specifies the canonical model name of the request. Ex: DataCollectorNewUserRequest -&gt; newUser, NewEventRequest -&gt; newEvent,e tc | 
**send_timestamp** | **Number** | Epoch timestamp &lt;i&gt;in milliseconds&lt;/i&gt; of when event was sent to the API | 
**timeout** | **Number** | Timeout (in seconds) for the transaction | [optional] 
**timeout_mode** | **String** | Timeout mode for the transaction. With TXN, the timeout is reset when an update is posted to the same transaction. With ANY, the timeout is reset when an update is posted for any transaction w/ the same user/device | [optional] 
**transaction_id** | **String** | Unique transaction ID | [optional] 
**user_id** | **String** | Unique ID of the user triggering the event | [optional] 
**category** | **String** | The name/type of the transaction | 


<a name="TimeoutModeEnum"></a>
## Enum: TimeoutModeEnum


* `TXN` (value: `"TXN"`)

* `ANY` (value: `"ANY"`)




