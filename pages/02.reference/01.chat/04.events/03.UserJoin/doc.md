---
title: 'UserJoin'
---
# UserJoin

Sent when a user joins the chat. This is not emitted for unauthenticated users.

## Examples
```json

{
    "type": "event",
    "event": "UserJoin",
    "data": {
        "originatingChannel": 1,
        "username": "USERNAME",
        "roles": [
            "User"
        ],
        "id": 12345
    }
}
```

