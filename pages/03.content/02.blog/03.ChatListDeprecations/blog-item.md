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
- Removes the `/chats/{channelId}/friends` endpoint. This endpoint is not being used in any Mixer Application and we've seen a very small usage of it.
- Changes the calling pattern of `/chats/{channelId}/users.` This will affect pagination.
- Removing the `/chats/{channelId}/users/search` endpoint. Instead supply a `username` query parameter to `/chats/{channelId}/users` to search.


# Deprecating Chat Viewer List API V1

With V2 available we plan to deprecate the chat viewer list v1 API on 12/08/2018.

## What do I need to do?

Before 12/08/2018, if you use the V1 Chat Viewer List API. Move to V2.

## What do I do if I have questions?

Drop us a line [here](mailto:mixerdevinfo@microsoft.com).

## Documentation

REST Documentation for V2 endpoints being a part of our regular REST reference is in progress so until then the documentation for these new endpoints can be found on a separate page [here](/reference/chat/chatviewerlist).

We'll redirect this page back to the overall REST reference page once its in amongst the other endpoints.









