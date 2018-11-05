---
title: Deprecations coming to Chat Viewer List
date: 14:00 11/05/2018
author: rifox
taxonomy:
    category: blog
    tag: [blog, sdk, client, deprecations]
---

As Mixer grows, our API needs to grow too. With this in mind we do have some deprecations coming up.

# Chat Viewer List API

With the introduction to V2 over, let's move onto the changes.

A new version of the Chat viewer List API is now available. It exists in the V2 path.

It has the following changes:
- Removes the `/chat/{channelId}/friends` endpoint. This endpoint is not being used in any Mixer Application and we've seen a very small usage of it.
- Changes the calling pattern of `/chat/{channelId}/users.` This will affect pagination.
- Moves `/chat/{channelId}/users and /chat/{channelId}/users/{userId}` to the V2 namespace.

You can find documenation for these new endpoints here.


# Deprecating Chat Viewer List API V1

With V2 available we plan to deprecate the chat viewer list v1 API on DATE.

## What do I need to do?

Before DATE, if you use the V1 Chat Viewer List API. Move to V2.

## What do I do if I have questions?

Drop us a line [here](mailto:mixerdevinfo@microsoft.com).






