---
title: Live UnSubscribe
---

# liveunsubscribe

A liveunsubscribe method can be used to stop listening to previously-subscribed-to events:

```json
{"type": "method", "method": "liveunsubscribe", "params": {"events": ["user:1:update", "channel:1:followed"]}, "id": 42}
```

* events is an array of events to unsubscribe from. Note that if you are not subscribed to one or more of the events, no error is returned.

A liveunsubscribe reply looks like the following:
```json
{"type": "reply", "result": null, "error": null, "id": 42}
```
