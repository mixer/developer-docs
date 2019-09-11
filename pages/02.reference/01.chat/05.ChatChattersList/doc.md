---
title: 'Chat Chatters List'
---

# Chat Chatters List V2 Endpoints

## GET /api/v2/chats/{channelId}/users

Returns a list of users connected to this Channel's chat.

### Request

#### URI Parameters
* channelId: uint - The ID of the channel you wish to chat in.

#### Query Parameters

* limit: uint? [1≤integer≤100] - Amount of items per page.
* showLurkers: boolean? - Show lurkers in the channel for staff user (Authed API and requires JWT Token)
* continuationToken: string? - An opaque token. ContinuationToken to paginate through all chat users in the channel. See [Continuation Tokens](/guides/core/continuationtokens) for more info on how these work. We recommend using the link header provided on the response.
* username: string? - Name fragment to search users by.


### Response

**Success Http Code**: 200 OK

#### Headers

* link:  string - [RFC5988](https://tools.ietf.org/html/rfc5988) links, which contains links next page. Example: `<some/path?limit=50&showLurkers=false&continuationToken=XXX>; rel="next"`

#### Body

**Media Type**: application/json

**Data Type**: Array<[ChatUser](#ChatUserType)>

## GET /api/v2/chats/{channelId}/users/{userId}

Returns a specific user by their ID from the Chatters list. If they are not in the channel you will recieve a 404.

### Request

#### URI Parameters:

* channelId: uint - The ID of the channel you wish to chat in.
* userId: uint - The user ID that this chat user belongs to.

### Response

**Success Http Code**: 200 OK

### Body

**Media Type:** application/json

**Data Type:** ChatUser

### ChatUser Type

Represents a user within chat for a channel and provides details about their status within the channel.

#### Properties

* userId:  uint - The user ID that this chat user belongs to.
* username:  string - The username.
* userRoles:  Array<[Role](https://dev.mixer.com/rest/index.html#Role)> - The roles the user has in this chat.

## Rate limiting
Follows the same rate limiting bucket for chats as [here](https://dev.mixer.com/guides/core/ratelimits)
