# PollStart

Initially sent when a new poll is started. Then, over the course of a poll, it is re-sent with information about the poll's progress.

## Examples
```json
{
    "type": "event",
    "event": "PollStart",
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
        "voters": 0,
        "responses": {
            "Good.": 0,
            "Bad.": 0
        }
    }
}
```

