---
title: ''
media_order: ''
body_classes: ''
order_by: ''
order_manual: ''
---

# Chat
## Introduction
Our chat servers use a standard secure websocket protocol `wss://`. Messages are sent and received in standard JSON.

## Connection
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
        "wss://chat2-dal.mixer.com:443",
        "wss://chat1-dal.mixer.com:443"
    ],
    "permissions": [
        "chat",
        "connect",
        "poll_vote"
    ]
}
```
Once you have the details, you'll need to use them to connect to a chat server. The response's endpoints array contains a list of chat servers. You should choose one randomly to connect to. If you lose connection to this address, you should reconnect to a different server (you can choose randomly or use a round-robin strategy of your choosing).

When connecting to the chat socket, please pass your OAuth application's Client ID within the Client-ID header (or as a query parameter). Our official SDKs add this header for you; please refer to our Chat Tutorials for more information.

If you have not already, you can create an OAuth application within the Developer Lab.

After connecting to a server you must call the auth method.

## Packets
There are 3 types of packets sent over the socket: method, reply, and event packets. The former two are typical RPC-style packets; think of sending them as calling a function or method and getting a return value back, but over the network.

We go into more detail below, but a typical exchange between the server and client might look like this:
```
Client: {"type":"method","method":"auth","arguments":[1,1,"fc3f865c156f32cac0755cde007654a8"],"id":0}
Server: {"type":"reply","error":null,"id":0,"data":{"authenticated":true,"roles":["Owner"]}}
Client: {"type":"method","method":"msg","arguments":["Hello world :)"],"id":2}
Server: {"type":"reply","error":null,"id":2,"data":{"channel":1,"id":"6351f9e0-3bf2-11e6-a3b3-bdc62094c158","user_name":"connor","user_id":1,"user_roles":["Owner"],"message":{"message":[{"type":"text","data":"Hello world ","text":"Hello world!"}],"meta":{}}}}
Server: {"type":"event","event":"ChatMessage","data":{"channel":1,"id":"6351f9e0-3bf2-11e6-a3b3-bdc62094c158","user_name":"connor","user_id":1,"user_roles":["Owner"],"message":{"message":[{"type":"text","data":"Hello world ","text":"Hello world!"}],"meta":{}}}}
```
## Method
A method is sent to the chat server the server will respond with a Reply packet.

| Property  | Description                                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------- |
| type      | Must be method.                                                                                                             |
| method    | The method name to execute.                                                                                                 |
| arguments | An array of arguments, specific per method type.                                                                            |
| id        | Must be a unique numeric ID. If the method you sent has a reply, the numeric ID will be sent back down in the Reply packet. |

## Reply
A reply is received from the server in response to a Method packet.

| Property | Description                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| type     | Must be reply.                                                                                                     |
| error    | If an error has not occurred null, otherwise an error message.                                                     |
| data     | Associated event data - may be of any type, specific to the event.                                                 |
| id       | Must be a unique numeric ID. The ID will match the ID sent in the Method packet that this reply is in response to. |

## Event
An event is received from the chat server when an event occurs in the channel's chat. This includes chat messages themselves, polls, and role changes. The full list can be found in the Events section below.

| Property | Description                                                        |
| -------- | ------------------------------------------------------------------ |
| type     | Must be event.                                                     |
| vent     | The event name.                                                    |
| data     | Associated event data - may be of any type, specific to the event. |