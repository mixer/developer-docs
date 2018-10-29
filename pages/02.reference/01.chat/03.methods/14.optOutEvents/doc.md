# optOutEvents

Request to opt out from receiving certain events from chat socket.

## Arguments

1. An array of events to opt out from. For ex. UserJoin, UserLeave. Reference: [event](/reference/chat/events)

## Examples

### Request

```json
{ "type": "method", "method": "optOutEvents", "arguments": ["UserJoin", "UserLeave"], "id": 0 }
```

### Response

```json
{
  "type": "reply",
  "error": null,
  "id": 0,
  "data": {}
}
```
