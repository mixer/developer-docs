---
title: 'UserUpdate'
---
# UserUpdate

Sent when a user is updated, usually on status change. E.g. Modding, Subscribing, Banning.

## Examples
```json
{
  "type": "event",
  "event": "UserUpdate",
  "data": {
    "user": 12345,
    "roles": [
      "Banned",
      "Pro",
      "User"
    ],
  }
}
```

