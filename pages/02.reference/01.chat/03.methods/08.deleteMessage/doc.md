# Delete Message

Delete a message from chat.

## Permissions

To delete a chat message you must use a valid OAuth token with the `chat:remove_message` scope.

## Arguments

1. The &#x60;id&#x60; property of the message to delete.

## Examples

### Request

```json
{
  "type": "method",
  "method": "deleteMessage",
  "arguments": ["8e07a0b0-3a2e-11e6-a9ef-0b7037d1fbdd"],
  "id": 10
}
```

### Response

```json
{
  "type": "reply",
  "error": null,
  "id": 10,
  "data": "Message deleted."
}
```
