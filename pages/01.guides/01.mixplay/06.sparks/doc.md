---
title: Sparks
process:
    markdown: true
    twig: true
---

# Sparks

## What are Sparks?
Sparks are Mixer's virtual currency. You can make controls and interactions in your Interactive Game or Application cost sparks for a participant by giving them a cost. When participants interact with controls that have a spark cost, the cost is deducted from their spark balance.

## How are Sparks Earned?
Sparks are earnt by watching content on Mixer. Mixer users gain 50 sparks for every minute that they watch. Mixer broadcasters also earn sparks at the same rate. If a user subscribes to a channel or is a [Pro](https://mixer.com/pro) user, they'll earn double the rate of sparks (100 every minute).

## Can users buy Sparks?
Currently users cannot buy Sparks with real world money. That may change in the future, but we don’t have anything to share on those plans right now. If you have a cool idea for Sparks, you can share them over on our [feedback site](https://feedback.mixer.com).

## Best Practices for Sparks
When placing a spark cost on a control, it is important to remember to balance the cost against your Game or situation. For example, Interactions that potentially impact game balance should be priced higher than those that are less impacting. What might be surprising is that the majority of Mixer users (more than 90%) have between 500 and 1,000. The next largest tranche of users has between 1,001 and 10,000 Sparks, followed by those with more than 10,000 Sparks, but that’s a very small percentage of Mixer users (roughly 1%).

## Spark Transactions
![Diagram of a transaction's life cycle](./TransactionLifecycle.svg?classes=caption "Diagram of a spark transaction's life cycle, showing its transition between states.")

When a button with a spark cost is pressed, it creates a transaction. To deduct sparks from a participant, a [Game Client](/guides/mixplay/interactive-overview#the-game-client) must `capture` the transaction. If a transaction remains uncaptured for 5 minutes, it automatically expires, and the cost associated with the transaction is not deducted from the participant's spark balance.

This mechanism allows the [Game Client](/guides/mixplay/interactive-overview#the-game-client) to decide whether sparks should be deducted from a participant. This feature is a great way to ensure that input from a participant has been converted into the expected action associated with the button press before deducting sparks from their balance.

Note that deducted sparks are **not** transferred to the broadcaster.

# Scale Considerations
When developing an Interactive experience, it is very important to consider scale as a factor. Your experience might work perfectly for a small test stream where you and your team try some features out, but Mixer broadcasts are different. You need to ensure that your experience scales for more public broadcasts. You should aim to think about 4 levels of Scale:


- Small Broadcasts - Less than 100 Viewers
- Medium Broadcasts - 100 - 1000 Viewers
- Large Broadcasts - 1000+ Viewers
- Events - Potentially 10s or hundreds of thousands of viewers

When thinking about these levels it's important to ask yourself three questions:

- Is it fun?
- Is it balanced?
- Does it make sense?

Additionally, special considerations need to be made for Events. If you're planning a large scale event that uses Interactivity, please reach out and [contact us](mailto:mixerdevinfo@microsoft.com).

Mixer's interactive platform has several features that can help you deal with Scale.

## Throttling
You can set a bandwidth throttle for each event Mixer sends you from the Mixer Interactive Service. Bandwidth throttles control how fast data comes down from our service. Bandwidth throttles operate on a [leaky bucket algorithm](https://en.wikipedia.org/wiki/Leaky_bucket), and you can set various properties on the throttles to finely tweak how and when data comes down to your GameClient.

- `capacity` - How much data in bytes the throttle can hold before data is lost.
- `drainRate` - How fast the data drains from the bucket.

You can also set the capacity to 0, which would effectively disable this event from reaching you.

For an example of how this might be used, consider a very large viewership Broadcast whose interactivity does not rely on the events sent when a participant joins the interactive session. You could turn these off, which would prevent a lot of bandwidth as large amounts of users left and joined the stream.

Refer to your [chosen SDK](/guides/mixplay/introduction#choose-a-sdk) for documentation on how to set a bandwidth throttle on a particular event.

## Scale Testing
If you'd like to test your Experience at scale our team can help! We can work with you to arrange a test session with some of our team or even one of our Partnered broadcasters. Additionally, we have some internal testing tools that we can work with your team to run against a test build of your game. If you'd like to find out more, please [reach out to us](mailto:mixerdevinfo@microsoft.com).

If you've got a cool idea for Mixer and your game, please also [reach out to our team](mailto:mixerdevinfo@microsoft.com). We'd be happy to discuss ways to make your game awesome with Mixer.
