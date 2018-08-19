# Methods

Method packets are sent from the client in a way very similar to JSON-RPC. This is the only packet the client may send to the server. A method may look like the following:

`{"type": "method", "method": "divide", "params": {"numerator": 16, "denominator": 4}, "id": 123}`

* `type` is always set to "method"
* `method` should be the name of the method to call
* `params` should be an object, not an array, of named arguments to pass into the method.
* `id` may be any `uint32`. It’s included in the reply packet and used to correlate replies from the socket. You should ensure that each request has a unique id within your session.


# Reply

Reply packets are sent in response to method packets. Replies are always sent in response to methods unless the socket closes before they may be sent. Some reply packets may look like the following:

`{"type": "reply", "result": 4, "error": null, "id": 123}`

`{"type": "reply", "result": null, "error": {"code": 1000, "message": "Cannot divide by zero"}, "id": 124}`

* `type` is always set to "reply"
* `id` is set to the id passed in the corresponding method packet
* `result` is the unstructured result of the method, or null
* `error` is an error which occurred, or null. If present it will always contain a "code" and an associated "message"

Note that if fatal errors occur as a result of a method call, a websocket close frame will be sent instead of a reply. The close frame’s code and associated message will be the same as that which otherwise would have been sent in reply.error.

# Error Codes
Constellation uses the 4xxx error code range reserved for use by applications in addition to the standard 1xxx codes. The following codes are in use:

* `1011` - Sent in a close or method reply if an unknown internal error occurs.
* `1012` - Sent in a close frame when we deploy or restart Constellation; clients should attempt to reconnect.
* `4006` - Error parsing payload as JSON
* `4007` - Error decompressing a supposedly-gzipped payload
* `4008` - Unknown packet type
* `4009` - Unknown method name call
* `4010` - Error parsing method arguments (not the right type or structure)
* `4011` - The user session has expired; if using a cookie, they should log in again, or get a bearer auth token if using an authorization header.
* `4106` - Unknown event used in a livesubscribe call
* `4107` - You do not have access to subscribe to that livesubscribe event
* `4108` - You are already subscribed to that livesubscribe event (during livesubscribe)
* `4109` - You are not subscribed to that livesubscribe event (in response to a liveunsubscribe method)
* `4110` - You cannot make more subscriptions (in response to a livesubscribe method). See liveloading limits.