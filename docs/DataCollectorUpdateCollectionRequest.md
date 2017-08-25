# KnetikIO.DataCollectorUpdateCollectionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **Number** | Final balance after the transaction | 
**balance_modification** | **Number** | The amount changed (delta) in the transaction | 
**currency** | **Boolean** | Whether the unit being updated is a currency unit or not | 
**device_id** | **String** | Unique ID of the device triggering the event | [optional] 
**event_properties** | **Object** | A key/value list of properties for this event. Values can be numerical, strings or booleans, proper typing matters (quoted vs unquoted) | [optional] 
**event_timestamp** | **Number** | Epoch timestamp &lt;i&gt;in milliseconds&lt;/i&gt; of when event itself occurred | 
**name** | **String** | Name of the unit/collection/currency being updated | 
**request_type** | **String** | Specifies the canonical model name of the request. Ex: DataCollectorNewUserRequest -&gt; newUser, NewEventRequest -&gt; newEvent,e tc | 
**send_timestamp** | **Number** | Epoch timestamp &lt;i&gt;in milliseconds&lt;/i&gt; of when event was sent to the API | 
**user_id** | **String** | Unique ID of the new device | 


