---
title: 'PurgeMessage'
---
# PurgeMessage

Sent when a user's messages are purged. Note: `cause.type` can either be `ban`, `timeout`, or `globaltimeout`. If `cause.type` is `timeout` or `globaltimeout` then `cause.durationString` will exist, and is the raw value that was passed from the moderator.

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
    "user_id": 12345,
    "cause": {
        "type": "timeout",
        "durationString": "5m"
    }
  }
}
```

