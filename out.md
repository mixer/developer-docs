

# auth

Authenticate as an active user in a specified channel. Arguments are &#x60;channelId&#x60;, &#x60;userId&#x60;, &#x60;key&#x60;. 

 You can connect anonymously by supplying just the &#x60;channnelId&#x60; as an argument, but if you do this you will not be able to send messages or participate in chat. This can be useful for creating chat overlays.

## Permissions
To  you must use an OAuth token with the `` scope.

## Arguments
1. The **channel ID** of the channel you are joining.
1. The **user ID** of the user you are connecting as. This can be omitted if you are connecting anonymously.
1. The **authorization key** retrieved from a request to our REST API, as explained in the [Connection](#chat__connection) section. This can be omitted if you are connecting anonymously.
1. (The **test stream access key** used to join the channel. This final argument is completely optional, and should only be provided if you wish to join a channel actively in a Test Stream.)

## Examples
#### Authenticating as a User successfully.

#### Request



#### Response



#### Authenticating anonymously.

#### Request



#### Response



#### An unsuccessful authentication attempt.

#### Request



#### Response



#### Attempting to join a channel currently in Test Stream mode with an invalid or missing access key.

#### Request



#### Response





# msg

Send a chat message to the server. The server will reply with data identical to a [ChatMessage](#chat__events__) event.

## Permissions
To  you must use an OAuth token with the `` scope.

## Arguments
1. The message to send, as a string.

## Examples
### Request
```json
{"type":"method","method":"msg","arguments":["Hello World!"],"id":2}
```

### Response
```json
{"type":"reply","error":null,"id":2,"data":{"channel":12345,"id":"06cba8a0-3a4a-11e6-b410-e9a72fcede64","user_name":"username","user_id":12345,"user_level":5,"user_avatar":"https://uploads.mixer.com/avatar/ed47s4h5-696.jpg","user_roles":["User"],"message":{"message":[{"type":"text","data":"Hello World!","text":"Hello World!"}],"meta":{}}}}
```


# whisper

Send a whisper to another user in the chat.

## Permissions
To  you must use an OAuth token with the `` scope.

## Arguments
1. The username of the user that the whisper will be sent to.
1. The whisper&#x27;s message.

## Examples
### Request
```json
{"type":"method","method":"whisper","arguments":["targetUsername","message"],"id":5}
```

### Response
```json
{"type":"reply","error":null,"id":5,"data":{"channel":12345,"id":"077e31c0-3a34-11e6-89dd-6363b2f3be15","user_name":"username","user_id":12345,"user_roles":["User"],"user_level":5,"user_avatar":"https://uploads.mixer.com/avatar/ed47s4h5-696.jpg","message":{"message":[{"type":"text","data":"hi","text":"hi"}],"meta":{"whisper":true}},"target":"username"}}
```


# vote:choose

Cast a vote in the current poll.

## Permissions
To  you must use an OAuth token with the `` scope.

## Arguments
1. The numerical index of the option that the vote is being cast for.

## Examples
### Request
```json
{"type":"method","method":"vote:choose","arguments":[0],"id":3}
```

### Response
```json
{"type":"reply","error":null,"id":3,"data":true}
```


# vote:start

Start a poll in the channel.

## Permissions
To  you must use an OAuth token with the `` scope.

## Arguments
1. The poll&#x27;s question.
1. An array of possible options.
1. The duration of the poll, in seconds.

## Examples
### Request
```json
{"type":"method","method":"vote:start","arguments":["Turkey or Ham?",["Turkey","Ham"],30],"id":3}
```

### Response
```json
{"type":"reply","error":null,"id":3,"data":"Poll started."}
```


# timeout

Time a user out and purge their chat messages. They cannot send messages until the duration is over. The user being timed out must be in the channel.

## Permissions
To  you must use an OAuth token with the `` scope.

## Arguments
1. The username of the user who will be timed out.
1. The duration for which the user will be unable to send messages. A human-readable duration with units can be provided (such as &#x60;30s&#x60; or &#x60;1m15s&#x60;), or providing no unit will result in the value being taken as seconds.

## Examples
### Request
```json
{"type":"method","method":"timeout","arguments":["username","30s"],"id":4}
```

### Response
```json
{"type":"reply","error":null,"id":4,"data":"username has been timed out for 30s."}
```


# purge

Purge a user&#x27;s messages from that chat without timing them out.

## Permissions
To  you must use an OAuth token with the `` scope.

## Arguments
1. The username of the user to purge.

## Examples
### Request
```json
{"type":"method","method":"purge","arguments":["username"],"id":5}
```

### Response
```json
{"type":"reply","error":null,"id":5}
```


# deleteMessage

Delete a message from chat.

## Permissions
To  you must use an OAuth token with the `` scope.

## Arguments
1. The &#x60;id&#x60; property of the message to delete.

## Examples
### Request
```json
{"type":"method","method":"deleteMessage","arguments":["8e07a0b0-3a2e-11e6-a9ef-0b7037d1fbdd"],"id":10}
```

### Response
```json
{"type":"reply","error":null,"id":10,"data":"Message deleted."}
```


# clearMessages

Clear all chat messages in the channel.

## Permissions
To  you must use an OAuth token with the `` scope.

## Arguments

## Examples
### Request
```json
{"type":"method","method":"clearMessages","arguments":[],"id":11}
```

### Response
```json
{"type":"reply","error":null,"id":11,"data":"Messages cleared."}
```


# history

Request previous messages from this chat from before you joined.

## Permissions
To  you must use an OAuth token with the `` scope.

## Arguments
1. The number of messages to request. The maximum value is &#x60;100&#x60;.

## Examples
### Request
```json
{"type":"method","method":"history","arguments":[1],"id":1}
```

### Response
```json
{"type":"reply","error":null,"id":1,"data":[{"channel":12345,"id":"8e07a0b0-3a2e-11e6-a9ef-0b7037d1fbdd","user_name":"username","user_id":186526,"user_roles":["User"],"message":{"message":[{"type":"text","data":"historic message","text":"historic message"}],"meta":{}}}]}
```


# giveaway:start

Start a giveaway in the channel. After sending this method, the &#x27;HypeBot&#x27; user will publicly announce the winner of the giveaway, who will be randomly selected.

## Permissions
To  you must use an OAuth token with the `` scope.

## Arguments

## Examples
### Request
```json
{"type":"method","method":"giveaway:start","arguments":[],"id":11}
```

### Response
```json
{"type":"reply","error":null,"id":11,"data":"Starting a giveaway"}
```


# ping

A ping method. This is used in environments where websocket implementations do not natively support pings.

## Permissions
To  you must use an OAuth token with the `` scope.

## Arguments

## Examples
### Request
```json
{"type":"method","method":"ping","arguments":[],"id":12}
```

### Response
```json
{"type":"reply","error":null,"id":12}
```


# attachEmotes

Enable an enhancement to the &#x60;ChatMessage&#x60; event. This will populate the &#x60;meta&#x60; property of the event with a hash containing the emoticon text mapped to the base64 PNG representation.

## Permissions
To  you must use an OAuth token with the `` scope.

## Arguments

## Examples
#### Tells the chat server that you want emotes to be attached to chat messages.

#### Request



#### Response



#### The &#x60;ChatMessage&#x60; event will now look as follows:

#### Request



#### Response



