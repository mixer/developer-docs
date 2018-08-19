# Methods

A method is sent to the chat server the server will respond with a Reply packet.

| Property  | Description                                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------- |
| type      | Must be method.                                                                                                             |
| method    | The method name to execute.                                                                                                 |
| arguments | An array of arguments, specific per method type.                                                                            |
| id        | Must be a unique numeric ID. If the method you sent has a reply, the numeric ID will be sent back down in the Reply packet. |

# Reply
A reply is received from the server in response to a Method packet.

| Property | Description                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| type     | Must be reply.                                                                                                     |
| error    | If an error has not occurred null, otherwise an error message.                                                     |
| data     | Associated event data - may be of any type, specific to the event.                                                 |
| id       | Must be a unique numeric ID. The ID will match the ID sent in the Method packet that this reply is in response to. |