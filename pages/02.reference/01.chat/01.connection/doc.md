# Connection

To connect to the chat server, you first need to retrieve some connection details from our REST API. You can do this by calling the `GET /chats/{channelId}` REST endpoint where channelId is the channel id of the channel you wish to join and chat in.

You can find your channel id by going to `https://mixer.com/api/v1/channels/username?fields=id` in your browser, replacing username with your Mixer username.

If you are authenticated when you make the request, you will receive an authkey in the response for authentication purposes. You may join chat and read messages without being authenticated, but you will not be able to participate in chat.

This is what a typical response from the `GET /chats/{channelId}` endpoint looks like:

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

Once you have the details, you'll need to use them to connect to a chat server. The response's endpoints array contains a list of chat servers. You should connect to the first element in the array and if this fails fallback to subsequent elements if they are available.

When connecting to the chat socket, please pass your OAuth application's Client ID within the Client-ID header (or as a query parameter). Our official SDKs add this header for you; please refer to our Chat Tutorials for more information.

If you have not already, you can create an OAuth application within the Developer Lab.

After connecting to a server you must call the auth method.
