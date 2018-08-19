 # livesubscribe

A livesubscribe method allows users to subscribe to #[a(href='#events_live_events') liveloading events]. The number of events you can subscribe to is limited; please see #[a(href='#introduction__liveloading_limits') liveloading limits]

```json
{"type": "method", "method": "livesubscribe", "params": {"events": ["user:1:update", "channel:1:followed"]}, "id": 42}
```
* `events` is an array of events to subscribe to. Note that either all events are successfully subscribed to, or a failure occurs and no events are subscribed to. Either do or do not, there is no try.

A livesubscribe reply looks like one of the following:
* A successful reply:
    ```json
    {"type": "reply", "result": null, "error": null, "id": 42}
    ```
* A reply with an invalid event:
    ```json
    {"type": "reply", "result": null, "error": {"code": 4106, "message": "Unknown event \"my silly event\" "}, "id": 42}
    ```
* A reply for an event you do not have permission to see:
    ```json
    {"type": "reply", "result": null, "error": {"code": 4107, "message": "You do not have permission to subscribe to \"user:1:secrets\""}, "id": 42}')
    ```

* A reply for an event you are already subscribed to:
    ```json
    {"type": "reply", "result": null, "error": {"code": 4108, "message": "Attempt to duplicate subscription to \"user:1:update\""}, "id": 42}')
    ```
