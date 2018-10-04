# UserLeave

Sent when a user leaves the chat. This is not emitted for unauthenticated users.

## Examples
```json
{
    "type": "event",
    "event": "UserLeave",
    "data": {
        "originatingChannel": 1,
        "username": "USERNAME",
        "id": 12345
    }
}
```

