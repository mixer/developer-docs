# Whisper

Send a whisper to another user in the chat.

## Permissions

To send a chat whisper you must use a valid OAuth token with the `chat:whisper` scope.

## Arguments

1. The username of the user that the whisper will be sent to.
1. The whisper&#39;s message.

## Examples

### Request

```json
{
  "type": "method",
  "method": "whisper",
  "arguments": ["targetUsername", "message"],
  "id": 5
}
```

### Response

```json
{
    "type": "reply",
    "error": null,
    "id": 5,
    "data": {
        "channel": 12345,
        "id": "077e31c0-3a34-11e6-89dd-6363b2f3be15",
        "user_name": "username",
        "user_id": 12345,
        "user_roles": ["User"],
        "user_level": 5,
        "user_avatar": "https://uploads.mixer.com/avatar/ed47s4h5-696.jpg",
        "message": {
            "message": [
                {
                "type": "text",
                "data": "hi",
                "text": "hi"
                }
            ],
            "meta": {
                "whisper": true
            }
            },
            "target": "username"
        }
    }
}
```
