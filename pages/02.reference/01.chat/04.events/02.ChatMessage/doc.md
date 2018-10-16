---
title: 'ChatMessage'
---
# ChatMessage

Sent by the server when a client sends a message. It contains multiple message components, such as `text`, `emoticon`, `link`, and `tag`. The `meta` property of a message contains various attributes which define additional details about where the message comes from.

## Examples

#### Regular Message

A regular channel message seen by all users
```json
{
  "type": "event",
  "event": "ChatMessage",
  "data": {
    "channel": 12345,
    "id": "cfa8a5b0-2ec5-11e6-1234-f3d652ffec28",
    "user_name": "Username",
    "user_id": 12345,
    "user_roles": [
      "User"
    ],
    "user_level": 5,
    "user_avatar": "https://uploads.mixer.com/avatar/ed47s4h5-696.jpg",
    "message": {
      "message": [
        {
          "type": "text",
          "data": "Hello! ",
          "text": "Hello! "
        },
        {
          "type": "emoticon",
          "source": "builtin",
          "pack": "default",
          "coords": {
            "x": 96,
            "y": 0,
            "width": 24,
            "height": 24
          },
          "text": ":)"
        },
        {
          "type": "text",
          "data": " ",
          "text": " "
        },
        {
          "type": "link",
          "url": "http://mixer.com/mixer",
          "text": "mixer.com/mixer"
        },
        {
          "type": "emoticon",
          "source": "external",
          "pack": "https://uploads.mixer.com/emoticons/x.png",
          "coords": {
            "x": 24,
            "y": 48,
            "width": 24,
            "height": 24
          },
          "text": ":coolpartneremote"
        }
      ],
      "meta": {}
    }
  }
}
```
#### Whisper

A private whisper from one user to another which is only sent to the recipient. The `meta` object contains a `whisper` attribute which is `true`.
```json
{
  "type": "event",
  "event": "ChatMessage",
  "data": {
    "channel": 12345,
    "id": "eaf6e9b0-3a25-11e6-b410-e9a72fcede64",
    "user_name": "username",
    "user_id": 12345,
    "user_roles": [
      "User"
    ],
    "user_level": 5,
    "user_avatar": "https://uploads.mixer.com/avatar/ed47s4h5-696.jpg",
    "message": {
      "message": [
        {
          "type": "text",
          "data": "hi",
          "text": "hi"
        }
      ],
      "meta": {
        "whisper": true
      }
    },
    "target": "recipient username"
  }
}
```
#### Action

When a user uses `/me` in chat. The `meta` object contains a `me` attribute which is `true`.
```json
{
  "type": "event",
  "event": "ChatMessage",
  "data": {
    "channel": 12345,
    "id": "c46148d0-3a30-11e6-b368-2953589298fa",
    "user_name": "username",
    "user_id": 12345,
    "user_roles": [
      "User"
    ],
    "user_level": 5,
    "user_avatar": "https://uploads.mixer.com/avatar/ed47s4h5-696.jpg",
    "message": {
      "message": [
        {
          "type": "text",
          "data": "waves",
          "text": "waves"
        }
      ],
      "meta": {
        "me": true
      }
    }
  }
}
```
#### Tag

When a user tags another user with `@` e.g. `@username`
```json
{
  "channel": 12345,
  "id": "c46148d0-3a30-11e6-b368-2953589298fa",
  "user_name": "username",
  "user_id": 12345,
  "user_roles": [
    "User"
  ],
  "user_level": 5,
  "user_avatar": "https://uploads.mixer.com/avatar/ed47s4h5-696.jpg",
  "message": {
    "message": [
      {
        "text": "@username",
        "type": "tag",
        "username": "username",
        "id": 12345
      }
    ],
    "meta": {}
  }
}
```
#### Censored Message

A channel owner can configure their channel's [Catbot auto moderation](https://aka.ms/mixercatbot) settings so that unwanted chat messages are automatically dropped. If a message is sent and that message violates this filter, only channel moderators and the channel owner will receive that message, with the `censored` meta property set as shown below. Other users shall not receive the chat message.
```json
{
  "channel": 12345,
  "id": "c46148d0-3a30-11e6-b368-2953589298fa",
  "user_name": "username",
  "user_id": 12345,
  "user_roles": [
    "User"
  ],
  "user_level": 5,
  "user_avatar": "https://uploads.mixer.com/avatar/ed47s4h5-696.jpg",
  "message": {
    "message": [
      {
        "type": "text",
        "data": "A bad message.",
        "text": "A bad message."
      },
      {
        "type": "text",
        "data": "( Removed by CatBot )",
        "text": "( Removed by CatBot )"
      }
    ],
    "meta": {
      "censored": true
    }
  }
}
```
