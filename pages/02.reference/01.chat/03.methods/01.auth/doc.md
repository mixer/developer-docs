# Auth

Authenticate as an active user in a specified channel. Arguments are `channelId`, `userId`, `key`. You can connect anonymously by supplying just the `channnelId` as an argument, but if you do this you will not be able to send messages or participate in chat. This can be useful for creating chat overlays.

# Arguments

1. The **channel ID** of the channel you are joining.",
1. "The **user ID** of the user you are connecting as. This can be omitted if you are connecting anonymously.",
1. "The **authorization key** retrieved from a request to our REST API, as explained in the [Connection](#chat__connection) section. This can be omitted if you are connecting anonymously.",
1. (The **test stream access key** used to join the channel. This final argument is completely optional, and should only be provided if you wish to join a channel actively in a Test Stream.)

## Examples

### Authenticating Successfully

#### Request

```json
{
  "type": "method",
  "method": "auth",
  "arguments": [12345, 54321, "key"],
  "id": 0
}
```

#### Response

```json
{
  "type": "reply",
  "error": null,
  "id": 0,
  "data": {
    "authenticated": true,
    "roles": ["Owner"]
  }
}
```

### Authenticating Anonymously

#### Request

```json
{
  "type": "method",
  "method": "auth",
  "arguments": [12345],
  "id": 0
}
```

#### Response

```json
{
  "authenticated": false,
  "roles": []
}
```

### An Unsuccessful Authentication Attempt

#### Request

```json
{
  "type": "method",
  "method": "auth",
  "arguments": [12345, 12345, "Not an AuthKey"],
  "id": 0
}
```

#### Response

```json
{
  "type": "reply",
  "error": "UNOTFOUND",
  "id": 0
}
```

### Test Streams

Attempting to join a channel currently in Test Stream mode with an invalid or missing access key.

#### Request

```json
{
  "type": "method",
  "method": "auth",
  "arguments": [12345, 12345, "authkey"],
  "id": 0
}
```

#### Response

```json
{
  "type": "reply",
  "error": "UACCESS",
  "id": 0
}
```
