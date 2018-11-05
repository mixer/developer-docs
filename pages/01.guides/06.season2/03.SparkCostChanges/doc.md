---
title: Spark Costing Change
---

## Introduction

!!! If you are unfamiliar with the Spark system, please first read our [Sparks Guide](/guides/mixplay/sparks).

! This change isn't currently live but we'll be rolling it out soon. Stand by for a confirmed date.

Season 2 has brought with it [Spark Patronage](https://blog.mixer.com), which meant that our previous way of handling Spark costing for MixPlay needs to change.

Previously, we allowed any cost value to be set in the `Cost` field within your MixPlay experiences. Going forward, as Season 2 rolls out, we'll be moving to costing being done via a discrete set of values using a Drop Down located in the [Developer Lab](https://mixer.com/lab). These values are established by Mixer and unfortunately are unable to be customized.

## Current Discrete Value List

Below you can find the current list of all values that we allow for Spark costs. We have established these costs based on data that we collected about the common Spark costs used across all of Mixer. We believe that these values should cover a majority of what is typically needed. However, if you feel that other values should be added, please open a suggestion on [our feedback site](https://feedback.mixer.com) and let us know!

This list will be updated as values are added or removed in the future.

* 0 (Free)
* 10
* 25
* 50
* 100
* 200
* 250
* 500
* 750
* 1000
* 2000
* 2500
* 5000
* 7500
* 10000
* Need more? Comment [here](https://watchmixer.uservoice.com/forums/382521-mixer-feedback-ideas/suggestions/35906746-new-spark-intervals-for-upcoming-spark-cost-change)

### Can you add more Items to this List?

YES!

Adding new values to this list is easy. We just had to start somewhere, these items are based on the most common spark costs we see on MixPlay today. If you'd like more added please [post/upvote this suggestion](https://watchmixer.uservoice.com/forums/382521-mixer-feedback-ideas/suggestions/35906746-new-spark-intervals-for-upcoming-spark-cost-change). 

## What do I need to do?

For this change you can do one of two things:
- Nothing - We'll handle the change for you: See Automatic Rounding Below.
- Update your Costs - We recommend you take a look at your existing MixPlay projects and align your spark costing to our new value set. With Season 2 and Skills this is also a good idea as our economy shifts with its Rollout.

### Automatic Rounding

Once this has fully rolled out, we'll be automatically rounding your spark costs to the nearest discrete value. For example, a button that had a previous Spark cost of `85` will automatically be rounded to `100`. The same logic would occur if a button had a previous cost of `100000`; it will become `10000`. The only exception here is instances where the cost would be rounded down to `0`. In these instances, the cost will been rounded up to `10` instead.

## Do I need to make any changes in my Game Client?

No, this update does not require that any changes be made within your [Game Client](/guides/mixplay/interactive-overview#the-game-client). Spark transaction handling is still done the same way as before.

## What about Dynamically Created Controls?

When dynamically created controls are created on the MixPlay service their Spark Cost will be adjusted to the nearest Discrete value. Our Applications will show this rounded value instead of the absolute value you create the control with.





