# giveaway:start

Start a giveaway in the channel. After sending this method, the &#x27;HypeBot&#x27; user will publicly announce the winner of the giveaway, who will be randomly selected.

## Permissions

To start a giveaway you must use an OAuth token with the `chat:giveaway_start` scope.

## Examples

### Request

```json
{ "type": "method", "method": "giveaway:start", "arguments": [], "id": 11 }
```

### Response

```json
{ "type": "reply", "error": null, "id": 11, "data": "Starting a giveaway" }
```
