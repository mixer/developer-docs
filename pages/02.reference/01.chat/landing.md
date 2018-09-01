---
title: Chat
media_order: ""
body_classes: ""
order_by: ""
order_manual: ""
---

# Chat

## Introduction

Our chat servers use a standard secure websocket protocol `wss://`. Messages are sent and received in standard JSON in the form of packets.

## Packets
There are 3 types of packets sent over the socket: [method](methods), [reply](methods), and [event](events) packets. The former two are typical RPC-style packets; think of sending them as calling a function or method and getting a return value back, but over the network.

We go into more detail below, but a typical exchange between the server and client might look like this:
```
Client: {"type":"method","method":"auth","arguments":[1,1,"fc3f865c156f32cac0755cde007654a8"],"id":0}
Server: {"type":"reply","error":null,"id":0,"data":{"authenticated":true,"roles":["Owner"]}}
Client: {"type":"method","method":"msg","arguments":["Hello world :)"],"id":2}
Server: {"type":"reply","error":null,"id":2,"data":{"channel":1,"id":"6351f9e0-3bf2-11e6-a3b3-bdc62094c158","user_name":"connor","user_id":1,"user_roles":["Owner"],"message":{"message":[{"type":"text","data":"Hello world ","text":"Hello world!"}],"meta":{}}}}
Server: {"type":"event","event":"ChatMessage","data":{"channel":1,"id":"6351f9e0-3bf2-11e6-a3b3-bdc62094c158","user_name":"connor","user_id":1,"user_roles":["Owner"],"message":{"message":[{"type":"text","data":"Hello world ","text":"Hello world!"}],"meta":{}}}}
```
