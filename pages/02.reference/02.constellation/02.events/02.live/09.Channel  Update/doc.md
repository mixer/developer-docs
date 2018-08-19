# channel:{id}:update

Sent when the channel model is changed.

## Payload
**Type**: [Channel](REST_LINK/Channel)
**Description**:Contains changes to the channel model. Please note this event may not necessarily include the entire channel resource. For example, when a channel goes online, an event with the key &#x60;online&#x60; going to &#x60;true&#x60; is sent.

