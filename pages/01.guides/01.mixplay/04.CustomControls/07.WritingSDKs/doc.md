---
title: 'Writing SDks'
---

# Writing SDKs
This page serves as a guideline for writing game client libraries SDKs for Interactive with awareness for the flexibility lent by Custom Controls. Specifics may vary between languages. This guide is meant to be descriptive of best practices and patterns, not prescriptive. Where relevant, examples are given from our own SDKs and codebases.

!!!  If you haven't already, check out the [Interactive Protocol Reference](/guides/mixplay/protocol/specification).This guide will make references to it.


## State Model

Resources are the basis of Interactive. Currently there are four resource types: groups, participants, scenes, and controls. Resources have common behaviors. Most are created, updated, and deleted in approximately the same way, and all resources allow the user to store and update custom properties. They all have a unique ID, a memory footprint (accessible via the `getMemoryStats` method), and are JSON serializable with the same base algorithms. It makes sense to derive this behavior in a common way through inheritance or composition.

Event emitters are often used on resources so that consumers can listen to updates and deletions on specific resource instances.

Various languages necessitate different approaches to dynamic, user-defined properties, and these can often be challenging to implement. In loosely or dynamically typed languages like Python, properties can each be attached and detached from resource instances on the fly. In statically typed object-oriented languages like the Java SDK, it usually makes sense to provide a generic base Resource that consumers can inherit from, along with a mechanism for the consumer to pass that class to some kind of registry.

## Talking to Interactive

Most callable methods on the protocol allow for bulk changes to be made. Using these, when possible, reduces the amount of network and computation load for the users computer. Depending on practices in the language you're using, it may make sense to automatically bulk updates on behalf of the developer. For example, a JavaScript client library might defer sending control updates until the next event loop tick so that it's able to automatically bundle together any synchronous updates that the developer makes.

Many Interactive methods are fire-and-forget methods. In the protocol document, methods which cannot return an error are called with [`discard:true`](/guides/mixplay/protocol/specification) in their examples and don't have any listed "Unsuccessful Replies". For these methods, you need not wait for confirmation from the service; unless the users connection drops before they arrive, they will be successful.

The Interactive protocol provides compression algorithms you can use in the Interactive protocol. Using these can significantly reduce bandwidth consumption at the cost of increased CPU load. Whether to enable these is a choice that should ultimately be left up to the consumer of your SDK, but the ability to switch between protocols should not be omitted.

## Receiving Input

It's important to remember that input you get from the service should be treated as untrusted. The service does some minimal validation on it:

1. Messages that are too large are rejected
1. Messages that don't adhere to its variant of JSON (yes, there are variations) are rejected
1. Inputs that don't have certain properties on it, like the [`controlID`](https://seriot.ch/parsing_json.php), are thrown away

However, the service is loose by necessity. It cannot predict and validate every possible input that a custom control might give, and these inputs are given from untrusted user machines. Therefore, as tempting as it may seem, don't create magic wrappers that allow custom controls to call or set any property on any game object, and dont' assume that a certain ID will fit into your 64-byte `char *`. Validate!

You should also take care to protect the game from too much valid input. If a large streamer picks up your game and interacts with an audience of tens or hundreds of thousands, you don't want the game to fall over. The Interactive service provides a means to throttle input by event name in the `setBandwidthThrottle`. It usually does not make sense for the SDK to handle dynamic throttling itself, but the consumer should be able to change them readily. Reasonable default throttles are a good idea to protect game developers who may not anticipate those massive load spikes; average bandwidth in the United States is, at the time of writing, in the mid-3 Mbit/s range. You can also squelch an event entirely by setting its throttle to zero.
