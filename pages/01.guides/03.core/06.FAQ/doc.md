---
title: 'FAQ'
---

# Frequently Asked Questions

## How do I get a list of channels playing a particular game?

On Mixer the game a channel is playing is called a "type" this is because we have non-gaming listings within our site such as IRL and Art.

To find a list of channels playing a game first find its typeId using the [query parameter of the types endpoint](https://dev.mixer.com/rest/index.html#types_get?target=_blank).

Once you have its id use it to filter the channels list using the [channels endpoint's `where` parameter](https://dev.mixer.com/rest/index.html#channels_get?target=_blank).

Here's a final example url for Minecraft: `https://mixer.com/api/v1/channels?where=typeId:eq:127929`

## How do I find out if someone is following a channel?

Use the [relationship endpoint](https://dev.mixer.com/rest/index.html#channels__channelId__relationship_get?target=_blank) to find the follow state and roles of a user for a channel.
