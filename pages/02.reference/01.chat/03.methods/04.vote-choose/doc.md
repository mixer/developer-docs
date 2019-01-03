# vote:choose

Cast a vote in the current poll.

## Permissions

To vote on a poll you must use a valid OAuth token with the `chat:poll_vote` scope.

## Arguments

1. The numerical index of the option that the vote is being cast for.

## Examples

### Request

```json
{
  "type": "method",
  "method": "vote:choose",
  "arguments": [0],
  "id": 3
}
```

### Response

```json
{
  "type": "reply",
  "error": null,
  "id": 3,
  "data": true
}
```
