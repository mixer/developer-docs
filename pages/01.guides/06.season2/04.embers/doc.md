---
title: Embers
---

# Embers

![](https://static.mixer.com/img/design/ui/embers/ember_48_4x.png?classes=centered)

!!! If you haven't already we suggest reading our [blog post](https://blog.mixer.com) first.

Back in November 2018 we introduced the first phase of [Season 2](https://blog.mixer.com/2018/11/01/season-2/) and now we're launching the next phase with Embers.

Embers are Mixer's new paid virtual currency. Users can purchase embers and then use them on Premium Skills on partnered channels on Mixer. As with the launch of Season 2, we understand that developers may have questions and we'll be answering them on this page. If you have further questions please [drop us a line](mailto:mixerdevinfo@microsoft.com).

## Skills

With the launch of embers we've added a new collection of Premium Skills. These Skills cost a varying amount of embers and are visually different from Spark based Skills.

### Attribution

One of the key changes with embers is that the use of an Ember's Skill can be accompanied by a message from the user that purchased the Ember Skill. This allows users to send a short message to the streamer with their Ember Skill. This message is shown in chat for the whole audience to see.

Higher priced ember skills are more noticeable in chat.

![](./attribution.png)


### Effects

Ember effects have the ability to be drawn over the channel page's video area which give them a lot more space to animate over.

As with Spark Effects, Ember Effects generate a ["SkillAttribution"](/reference/chat/events/skillattribution) Chat Event. This event indicates that the currency is "Embers" within the skill object.

### Stickers

Ember Stickers come in two varieties:

- Holographic - These stickers shine and shimmer within chat
- Animated - These stickers are fully animated.

![](./sticker.gif)

Ember Stickers are sent through Chat as a [ChatMessage](/reference/chat/events/chatmessage). You can identify an Ember sticker by looking at the "skill" property within the message meta data. If the currency is "Embers" then the sticker is an ember sticker.

Ember stickers will also have a regular message fragment within the message array. This message is passed through CATBot before being sent.

## Moderation

Ember Skills can be moderated identically to regular skills with:
[cancelSkill](/reference/chat/methods/cancelskill).

## FAQ

### Can I use Embers within MixPlay?

Not today, we're looking for ways to make this a possibility in the future though. Standby for updates.

### Can I use Embers within my Third Party Product?

Not today, we're looking for ways to make this a possibility in the future though. Standby for updates.

### What do I do if I have more questions?

If you have developer related questions please [drop us a line](mailto:mixerdevinfo@microsoft.com). For other queries. [mixer.com/contact](https://mixer.com/contact).





