---
title: 'PurgeMessage'
---
# PurgeMessage

Sent when a user's messages are purged. Note: The moderator object is only set when a user is purged from in chat. The ban event triggers a purge but the object is not defined.

## Examples
```json
{
  "type": "event",
  "event": "PurgeMessage",
  "data": {
    "moderator": {
      "user_name": "USERNAME",
      "user_id": 12345,
      "user_roles": [
        "Mod",
        "User"
      ],
      "user_level": 12
    },
    "user_id": 12345
  }
}
```

