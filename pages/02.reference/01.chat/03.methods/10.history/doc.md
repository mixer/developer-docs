# History

Request previous messages from this chat from before you joined.

## Arguments

1. The number of messages to request. The maximum value is `100`.

## Examples

### Request

```json
{ "type": "method", "method": "history", "arguments": [1], "id": 1 }
```

### Response

```json
{
  "type": "reply",
  "error": null,
  "id": 1,
  "data": [
    {
      "channel": 12345,
      "id": "8e07a0b0-3a2e-11e6-a9ef-0b7037d1fbdd",
      "user_name": "username",
      "user_id": 186526,
      "user_roles": ["User"],
      "message": {
        "message": [
          {
            "type": "text",
            "data": "historic message",
            "text": "historic message"
          }
        ],
        "meta": {}
      }
    }
  ]
}
```
