# hello
A hello event is sent down to the client when they first connect.

```json
{"type": "event", "event": "hello", "data": {"authenticated": true}}
```
`authenticated` is `true` if the session is authenticated as a user.
