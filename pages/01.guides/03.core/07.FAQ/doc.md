---
title: 'FAQ'
---

# Frequently Asked Questions

## How do I get a list of channels playing a game?

On Mixer the game a channel is playing is called a "type" this is because we have non-gaming listings within our site such as IRL and Art.

To find a list of channels playing a game first find its typeId using the [query parameter of the types endpoint](https://dev.mixer.com/rest/index.html#types_get?target=_blank).

Once you have its id use it to filter the channels list using the [channels endpoint's `where` parameter](https://dev.mixer.com/rest/index.html#channels_get?target=_blank).

Here's a final example url for Minecraft: `https://mixer.com/api/v1/channels?where=typeId:eq:127929`

## How do I find out if someone is following a channel?

Use the [relationship endpoint](https://dev.mixer.com/rest/index.html#channels__channelId__relationship_get?target=_blank) to find the follow state and roles of a user for a channel.

## Why am I getting a CSRF Token Error? <a id="csrf"></a>

CSRF(Cross-Site Request Forgery) is an attack that can force you to perform actions on a site, CSRF Tokens prevent this. Mixer.com handles CSRF Tokens automatically but as a Mixer Developer you should not be seeing this message. If you're receiving it then check the following:
- If you're authenticating with this request check that you're formatting the header correctly:
  - The Authorization header is `Authorization` not `Auth` or `Authentication`
  - The Header value should be `Bearer <your token>`
- If you're not authenticating, ensure that you're **Not** providing an Authentication header.
