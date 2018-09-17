---
title: Protocol Overview
process:
	twig: true
---
## MixPlay Protocol Overview

Mixer's Interactive protocol is defined in a separate [downloadable document](/user/pages/mixplay/protocol.pdf) that has precise implementation details. This section provides an introduction to the protocol.

### Wire Format
The Interactive Service communicates using a protocol similar to [JSON-RPC](http://jsonrpc.org/historical/json-rpc-1-2-proposal.html) except that it is bi-directional. Clients and Servers can both call and respond to methods.

The protocol operates over a standard WebSocket connection. Both [Participants](#participants) and [Game Clients](#the-gameclient) use the same protocol definition, but different subsets of methods are available to each.

### Packets
The protocol contains two types of packets: `methods` and `replies`.

#### Method
A method is a request for a connected entity to perform an operation. Methods are sent by both the client and the server. When a method is received, it is processed and acknowledged by the recipient, who can then reply to the method with a result or an error.

A method can contain parameters which get provided to the recipient.

Methods contain an additional property called `discard`, which when `true`, indicates that the recipient can choose not to respond. Methods that can be treated as events have the `discard` property set to `true`.

#### Reply
A reply is sent from a recipient back to the caller informing them about the result after executing the method that was sent. It can contain a `result` or an `error` which indicates what went wrong.

For full packet implementation details, please refer to the protocol specification which you can download [here](/reference/interactive/protocol/protocol.pdf).

### Compression
By default, packets on the wire are transmitted as plain text, but the Game Client can opt to use [GZIP](https://tools.ietf.org/html/rfc1952) or [LZ4](https://lz4.github.io/lz4/) compression. To do this, the Game Client must call a method providing its supported compression formats. The server will then respond with its chosen compression format.

### Authentication
A Game Client needs to authenticate as a Mixer user when establishing an interactive session. There are two authentication methods available.

#### OAuth 2.0
Mixer supports [OAuth 2.0](https://tools.ietf.org/html/rfc6749) flows which enable you to get a valid [OAuth 2.0 Bearer](https://tools.ietf.org/html/rfc6750) token. Tokens can be passed in the `Authorization` header when you initiate a connection to the interactive service.

The only required scope for an interactive connection is `interactive:robot:self`. For more information about Mixer's OAuth, go to [OAuth reference page](/reference/oauth/index.html).

#### XToken
You can provide a Xbox Live XToken in the `Authorization` header when you initiate a connection to the interactive service. This authentication method is useful for Universal Windows Platform (UWP) applications that are Xbox Live enabled, as well as games on Xbox One.
