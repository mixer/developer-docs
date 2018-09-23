# Timeout

Time a user out and purge their chat messages. They cannot send messages until the duration is over. The user being timed out must be in the channel.

## Permissions

To time a user out you must use a valid OAuth token with the `chat:timeout` scope.

## Arguments

1. The username of the user who will be timed out.
1. The duration for which the user will be unable to send messages. A human-readable duration with units can be provided (such as `30s` or `1m15s`), or providing no unit will result in the value being taken as seconds. You can also use the string `clear` to clear a timeout.

## Examples

### Request

```json
{
  "type": "method",
  "method": "timeout",
  "arguments": ["username", "30s"],
  "id": 4
}
```

### Response

```json
{
  "type": "reply",
  "error": null,
  "id": 4,
  "data": "username has been timed out for 30s."
}
```
