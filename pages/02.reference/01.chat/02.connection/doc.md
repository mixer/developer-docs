# Connection
Connecting to Chat for a Mixer Channel currently requires one WebSocket Connection per Mixer Channel.

## Prerequisites
To connect to chat for a single channel, you'll first need to retrieve some connection details from our REST API. You can do this by calling the `GET /chats/{channelId}` REST endpoint where channelId is the channel id of the channel you wish to join and chat in.

You can find your channel id by going to `https://mixer.com/api/v1/channels/<username>?fields=id` in your browser, replacing username with your Mixer username.

When requesting the channel connection details if you provide a source of Authentication, such as an OAuth Access Token, you will receive an `authkey`, the authkey is a short lived token which should only be used once to immediate call the Chat [`auth`](/reference/chat/methods/auth) method when you open the websocket connection. It should only be used for chat and is invalid for any other API.

This is what a typical **authenticated** response from the `GET /chats/{channelId}` endpoint looks like:

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Type: application/json; charset=utf-8
Date: Sun, 26 Jun 2016 22:50:41 GMT

{
    "authkey": "b41e9ae6b14df18c59f415419b1f827c",
    "endpoints": [
        "wss://chat.mixer.com:443"
    ],
    "permissions": [
        "chat",
        "connect",
        "poll_vote"
    ]
}
```


This is what a typical **unauthenticated** response from the `GET /chats/{channelId}` endpoint looks like, you'll notice the `authkey` is missing:

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Type: application/json; charset=utf-8
Date: Sun, 26 Jun 2016 22:50:41 GMT

{
    "endpoints": [
        "wss://chat.mixer.com:443"
    ],
    "permissions": [
        "chat",
        "connect",
        "poll_vote"
    ]
}
```

If you want to speak in chat you will need to ensure you have `authkey`.


## Opening a Connection
Once you have the details, you'll need to use them to connect to a chat server.

The response's endpoints array contains a list of chat servers. You should connect to the first element in the array and if this fails fallback to subsequent elements if they are available. Once an address is selected, open a websocket connection to the address that is chosen.

When connecting to the chat socket, please pass your OAuth application's Client ID within the Client-ID header (or as a query parameter).

Our official SDKs add this header for you; please refer to our Chat Tutorials for more information.


## Participating in Chat

After connecting to a server if you want to participate in chat you must call the [auth](/reference/chat/methods/auth) method with the `authkey` retrieved above.
