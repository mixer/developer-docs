---
title: Constellation
---

# Constellation

Constellation is a service on Mixer used for many features. The most useful for Developers is liveloading.

## Liveloading

Liveloading is an event system on Mixer. When models update, users follow channels, or anything else happens that clients might want to be aware of an event is sent. Users must subscribe to Events to receive them.

!!! Pro tip: you can view liveloading in-action by viewing your [websocket](http://blittle.github.io/chrome-dev-tools/network/websockets.html) log on mixer.com.

Want us to call you instead? Check out our [Webhooks](TODO) system!

## Limits
A single IP address can subscribe to up to 1,000,000 events. Beyond this number you will need multiple IP Addresses to receive events.

## Clients
A number of clients already support Constellation. Try them out for a jump start into Constellation.

* **JavaScript**: [Carina](https://github.com/mixer/carina)
* **Java**: [beam-client-java](https://github.com/mixer/beam-client-java)
* **Swift**: [beam-client-swift](https://github.com/mixer/beam-client-swift)

## Session
Users authenticate to Constellation by sending authentication details in socket headers. No external API are endpoints needed.

Users remain connected to Constellation throughout their session. During the session, they may subscribe to events happening on the site and get notifications when those events occur.

## Protocol
Constellation is based on JSON-RPC with additional support for an event system. Initially a user connects to constellation.mixer.com with a standard WebSocket connection. Aside from standard websocket headers, the following headers may also be passed:

* **authorization**: may contain an OAuth Bearer token to authenticate with for 3rd party apps, rather than using a cookie. This will indicate to Constellation that the user is a bot.
* **client-id**: may contain the Client ID of an OAuth application created in the Developer Lab. This should be passed if you do not wish to authenticate.
* **x-sec-websocket-protocol**: if set to cnstl-gzip, Constellation may choose to send websocket frames down as binary, gzipped JSON rather than plain text. Passing this is generally handled by websocket clients themselves, and are usually configured by specifying a preferred subprotocol.

  The client may detect gzipped frames by the fact that they are binary messages and begin with the magic bytes 0x1f and 0x8b as the first and second payload byte, respectively.

* **x-is-bot**: this must be set to true if the client is an automated bot rather than a human user and you are not using an authorization header. Failure to set this may cause the account to be banned.
All headers may instead be passed as query parameters if necessary.

! Users connecting to Constellation must connect with either the Authorization header or Client-ID header.

## Packets
There are three packet types: method, reply, and event. These are sent over the websocket as JSON encoded messages. Messages to the client may be gzipped if `x-supports-gzip` was passed in the headers, messages sent to Constellation are always allowed to be gzipped.
