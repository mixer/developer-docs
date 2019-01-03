# vote:start

Start a poll in the channel.

## Permissions

To vote on a poll you must use a valid OAuth token with the `chat:poll_vote` scope.

## Arguments

1. The poll&#39;s question.
1. An array of possible options.
1. The duration of the poll, in seconds.

## Examples

### Request

```json
{
  "type": "method",
  "method": "vote:start",
  "arguments": ["Turkey or Ham?", ["Turkey", "Ham"], 30],
  "id": 3
}
```

### Response

```json
{
  "type": "reply",
  "error": null,
  "id": 3,
  "data": "Poll started."
}
```
