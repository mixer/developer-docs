---
title: 'PollEnd'
---
# PollEnd

Sent when a poll has ended.

## Examples
```json
{
    "type": "event",
    "event": "PollEnd",
    "data": {
        "originatingChannel": 1,
        "q": "How's the weather?",
        "answers": [
            "Good.",
            "Bad."
        ],
        "author": {
            "user_name": "USERNAME",
            "user_id": 12345,
            "user_roles": [
            "Mod"
            ]
        },
        "duration": 29996,
        "endsAt": 1465533783407,
        "voters": 5,
        "responses": {
            "Good.": 2,
            "Bad.": 3
        }
    }
}
```

