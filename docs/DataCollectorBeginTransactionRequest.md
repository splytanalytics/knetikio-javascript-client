# KnetikIO.DataCollectorBeginTransactionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timeout** | **Number** | Timeout (in seconds) for the transaction | [optional] 
**timeout_mode** | **String** | Timeout mode for the transaction. With TXN, the timeout is reset when an update is posted to the same transaction. With ANY, the timeout is reset when an update is posted for any transaction w/ the same user/device | [optional] 
**transaction_id** | **String** | Unique transaction ID | [optional] 
**category** | **String** | The name/type of the transaction | 


<a name="TimeoutModeEnum"></a>
## Enum: TimeoutModeEnum


* `TXN` (value: `"TXN"`)

* `ANY` (value: `"ANY"`)




