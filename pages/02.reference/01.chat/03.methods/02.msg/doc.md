# MSG

Send a chat message to the server. The server will reply with data identical to a [ChatMessage](#chat__events__) event.

## Permissions

To send a chat message you must use a valid OAuth token with the `chat:chat` scope.

## Arguments

1. The message to send, as a string.

## Examples

### Request

```json
{
  "type": "method",
  "method": "msg",
  "arguments": ["Hello World!"],
  "id": 2
}
```

### Response

```json
{
    "type": "reply",
    "error": null,
    "id": 2,
    "data": {
    "channel": 12345,
    "id": "06cba8a0-3a4a-11e6-b410-e9a72fcede64",
    "user_name": "username",
    "user_id": 12345,
    "user_level": 5,
    "user_avatar": "https://uploads.mixer.com/avatar/ed47s4h5-696.jpg",
    "user_roles": ["User"],
    "message": {
        "message": [
            {
            "type": "text",
            "data": "Hello World!",
            "text": "Hello World!"
            }
        ],
        "meta": {}
    }
}
```
