# ClearMessages

Sent when the server clears all messages in chat.

## Examples
```json
{
  "type": "event",
  "event": "ClearMessages",
  "data": {
    "clearer": {
      "user_name": "USERNAME",
      "user_id": 12345,
      "user_roles": [
        "Mod",
        "User"
      ],
      "user_level": 12
    }
  }
}
```

