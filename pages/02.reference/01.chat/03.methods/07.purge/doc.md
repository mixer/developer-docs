# Purge

Purge a user&#39;s messages from that chat without timing them out.

## Permissions

To purge a user out you must use a valid OAuth token with the `chat:purge` scope.

## Arguments

1. The username of the user to purge.

## Examples

### Request

```json
{
  "type": "method",
  "method": "purge",
  "arguments": ["connor123"],
  "id": 5
}
```

### Response

```json
{
  "type": "reply",
  "error": null,
  "id": 5
}
```
