# UserTimeout

Sent only to a user when they are timed out. The duration provided is measured in milliseconds.

## Examples
```json
{
  "type": "event",
  "event": "UserTimeout",
  "data": {
    "user": {
      "user_name": "username",
      "user_id": 102534,
      "user_roles": [
        "Pro",
        "User"
      ]
    },
    "duration": 59998
  }
}
```

