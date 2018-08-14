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