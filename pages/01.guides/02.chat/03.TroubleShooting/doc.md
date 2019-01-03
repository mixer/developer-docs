---
title: 'Troubleshooting'
---
# Troubleshooting

## Getting `UNOTFOUND` a lot?

This error means that the chat server you're connecting to can't find a record of you when you try to authenticate. This can be caused by a number of reasons so make sure to check the following things:

- That you're not confusing channelIds and userIds. These are two different numbers.
- That the channel you're trying to connect to is valid and has not been suspended or banned.
- That you've retrieved an authentication key from the `GET /chats/{channelId}` endpoint recently. Authentication keys expire after a short period.
- That you're calling the auth method with 3 arguments that are not null in the following order:
  - The **channel** id of the channel you wish to chat in encoded as a **Number**.
  - The **user** id of the user you wish to chat as encoded as a **Number**.
  - An **authentication** key retrieved from `GET /chats/{channelId}`, where channelId matches the first argument. It should be encoded as a **String**.
