# ClearMessages

Clear all chat messages in the channel.

## Permissions

To clear all chat messages in a channel you must use an OAuth token with the `chat:clear_messages` scope.

## Arguments

## Examples

### Request

```json
{ "type": "method", "method": "clearMessages", "arguments": [], "id": 11 }
```

### Response

```json
{ "type": "reply", "error": null, "id": 11, "data": "Messages cleared." }
```
