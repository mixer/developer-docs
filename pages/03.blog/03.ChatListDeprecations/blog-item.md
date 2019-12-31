---
title: Deprecations coming to Chat Chatters List
date: 14:00 11/05/2018
author: probableprime
taxonomy:
    category: blog
    tag: [blog, sdk, client, deprecations]
---

Updated on Feb 20, 2019.

As Mixer grows, our API needs to grow too. This sometimes leads to deprecations. With the power of our new developer site, we're taking a more active role in announcing them. You'll see a blog post from our team detailing the changes we're making and what you need to do. The first example of this is with the deprecation of V1 of the Chat Chatters List API.

# Chat Chatters List API

A new version of the Chatters List API is now available. It exists in the V2 path. See "[What is V2?](https://dev.mixer.com/guides/core/whatsv2)" for more info on the V2 path.

The new API has the following changes:
- Removes the `/chats/{channelId}/friends` endpoint. This endpoint is not being used in any Mixer Application and we've seen a very small usage of it globally in our telemetry.
- Changes the calling pattern of `/chats/{channelId}/users.` This will affect pagination.
- Removes the `/chats/{channelId}/users/search` endpoint. Instead supply a `username` query parameter to `/chats/{channelId}/users` to search.
- Removes some fields from the `ChatUser` model:
    - Removes the nested `user` field which contained:
        - `level` - Level of the ChatUser.
        - `experience` - Experience of the ChatUser.


# Deprecating the Chatters List API V1

With V2 available, we plan to deprecate the V1 Chatters List API on March 25, 2019. We're closely monitoring the use of these endpoints and we're actively reaching out to all parties we see who are still on the V1 API.

## What do I need to do?

Before March 25, 2019, if you use the V1 Chat Chatters List API, please move to V2. On this date the V1 endpoint will be removed.

## What do I do if I have questions?

Drop us a line [here](mailto:mixerdevinfo@microsoft.com).

## Documentation

REST Documentation for V2 endpoints being a part of our regular REST reference is in progress so until then the documentation for these new endpoints can be found on a separate page [here](/reference/chat/chatchatterslist).

We'll redirect this page back to the overall REST reference page once its in amongst the other endpoints.

That's all for now, keep an eye on this blog for more posts and cool things coming soon.









