# ping

A ping method. This should be used in environments that do not support Native WebSocket Pings. An example of this is Chat implementations in with a web browser.

## Example

### Request

```json
{ "type": "method", "method": "ping", "arguments": [], "id": 12 }
```

### Response

```json
{ "type": "reply", "error": null, "id": 12 }
```
