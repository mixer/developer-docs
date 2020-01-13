# user:{id}:update

Sent when the user model is changed.

## Payload
|Type|Description|
|----|-----------|
|[User](/rest/index.html#User)|Contains changes to the user model. Please note this event may not necessarily include the entire user resource. These payloads are intended to be treated as a patch for an existing model. For more information please see our page on [Patching Models from Live Updates](/guides/core/liveupdatesguides/patchingmodelsguide)|

