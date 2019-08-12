---
title: 'Introduction'
---

![](https://static.mixer.com/img/design/ui/ftue-modal/season-2-logo.png?classes=centered)
# Welcome to Season 2

!!! If you haven't already we suggest reading our [blog post](https://blog.mixer.com) first.

Season 2 is the next evolution of the Mixer platform. It provides a great way to engage more deeply with your community on Mixer.

## Leader Boards

Check out our leaderboard guide [here](/guides/season2/leaderboards).

## Embers

Read our Embers guide [here](/guides/season2/embers).

## Skills

Skills are new forms of expression for users to interact with streamers. Skills cost sparks to execute and can be level or role locked. Each Skill can be uniquely Identified by its ID. There are 3 types of Skill:

1. Stickers - Stickers are rendered in Chat you can read about the format of a Sticker [here](/reference/chat/events/chatmessage#skill)
2. Effects - Effects render over the Chat area. These generate constellation events and a [Chat Attribution Message](/reference/chat/events/skillattribution)
3. Rallies - These render over the video area and above the MixPlay layer.

### Skill Events

You'll see some new events in regards to Skills in both Chat and Constellation.

| Type       | Name                   | Details                                                                            |
| ---------- | ---------------------- | ---------------------------------------------------------------------------------- |
| Chat Event | Skill Attribution      | Sent when a non-chat based skill is used in a channel. More info [here](/reference/chat/events/skillattribution)      |
| Chat Event | DeleteSkillAttribution | Sent when a skill has been canceled by a channel moderator. More info [here](/reference/chat/events/deleteskillatribution) |
| Chat Event | ChatMessage (Stickers) | A new format for chat messages which contain a Sticker. More info [here](/reference/chat/events/chatmessage#skill)     |
| Constellation | channel:{id}:skill  | Sent when a Skill is fired on a channel. For payload see [here](/reference/constellation/events/live/channel%20skill)|


### Skill Moderation

Moderators in a channel can cancel a skill by deleting the attribution message in chat. A method is also available for developers, when this method is called the active skill will be canceled or deleted. Sparks are not refunded when this happens. The method is called [CancelSkill](/reference/chat/methods/cancelskill).


### Skill Endpoints
Formal REST Documentation is coming soon but until then take a look at the following endpoints:
- POST `/api/v1/catalog/skills/channels/{channelId}?locale=en-US` with a body `{"globalLevel":<your level>}`  - Requires authentication via JWT or XToken.

## Spark Patronage

With Mixer's new Spark Patronage system sparks are now counted against a spark milestone for partners. Each Milestone has a defined start and end date. During a milestone period sparks spent on MixPlay and Skills contribute to the milestone.

### Spark Patronage Events

As a spark milestone progresses you'll see regular constellation events as users spend sparks:

| Name                   | Details                                                                            |
| ---------------------- | ---------------------------------------------------------------------------------- |
| channel:{id}:patronageUpdate| Sent when spark patronage for a channel is updated. For payload see [here](/reference/constellation/events/live/patronage%20update)|


### Endpoints

Formal REST Documentation is coming soon but until then take a look at the following endpoints:
- GET `/api/v2/levels/patronage/channels/{id}/status` for the patronage status of a channel
- GET `/api/v2/levels/patronage/resources/{patronagePeriodId}` for information about the current milestone.

## FAQ

There's also a [developer orientated FAQ](/guides/season2/faq). We'll be keeping this up to date as we roll out Season 2.



