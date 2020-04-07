---
title: March Changes Summary
date: 16:00 04/07/2020
author: probableprime
taxonomy:
    category: blog
    tag: [blog]
---

# March Changes Summary

Hey everyone, March was a very cool month at Mixer. You can read more about Mixer's general changes over on [our main blog](https://blog.mixer.com/2020/03/17/new-homepage-features-and-more/) but I wanted to call out some specific items here that are especially relevant to our developers.

## Emotes

As announced in the above linked blog post, we've released a set of brand new larger global emotes. Additionally we are slowly rolling out the ability of our partnered broadcasters to upload new larger emotes. With this you will be seeing larger emotes coming down in our Chat WebSocket frames. To help with these new emote sizings we've produced a [new page on the Mixer Developer site which details emote processing](/guides/chat/emotes).

## Subscription Events

Due to some changes in subscriptions, we've added a new property to the `channel:{id}:resubShared` event. This property `currentStreak` will tell you how long the number of consecutive months the user has been subscribed to this channel. The existing `totalMonths` property provides the total number of months the user has been subscribed since the beginning of time. You can read more about this on the [event's documentation page](/reference/constellation/events/live/channel%20resubshared).

## Moderation Events

Within Chat several events can cause a Purge of all of a user's chat messages. In some cases it wasn't clear why a purge had been initiated. We've added properties to the `PurgeMessage` event type which inform you of what the cause of the Purge. You can read about these on the [event's reference page](/reference/chat/events/purgemessage).

## Ad Breaks

As announced in the blog post mentioned we've also released a Beta Ad Break feature which allows streamers to trigger advertisement breaks on their channel. With this feature we've also added a developer API which let's you use OAuth to trigger an ad break on a channel's behalf. You can read about how to do this on the [dedicated ad break page](/guides/core/adbreaks).

## A quick note on OAuth

We've noticed a couple of oddities with some user's use of OAuth so I wanted to provide a couple of reminders:

* When using OAuth tokens, Mixer uses Bearer tokens. You can read about them in great detail [here](https://tools.ietf.org/html/rfc6750) but in summary:
  * The value of the `Authorization` header should be `Bearer <OAUTH TOKEN HERE>` for example `Bearer abc123` where `abc123` is the token.
* Please remember to take a look at our prior notice surrounding [resource access and OAuth](/blog/oauthacting)

## Final Notes
When reporting issues or problems with our API please ensure that you're including as much information as possible. Follow our [Application Identification guide](/guides/core/applicationidentification) and ensure you're including:

* Your OAuth Client ID
* Timestamps of when the issue occurs
* The volume of requests that are failing
* Any response bodies that have error information
* Any values of the `ms-cv` header you can acquire this header is called a [Correlation Vector](https://github.com/microsoft/CorrelationVector) and can help us find your issue.

Thanks for reading as always please feel free to [contact us](mailto:mixerdevinfo@microsoft.com) with any questions.



