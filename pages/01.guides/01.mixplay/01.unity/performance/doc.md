---
title: 'Performance'
visible: true
---

What if your game is being broadcast to 1000+ viewers? Will it handle the load? In this article, we will talk about scale considerations and how to deal with them.

As with any performance problem, make sure it is a problem before investing in fixing it. The expensive parts will be JSON parsing by the SDK so the more messages, the more CPU used. For AAA console games that are using 100% of the CPU, performance at scale may be an issue.

### Throttle messages
You can use the setBandwidthThrottle message using the MixerInteractive.SendMessage API. This message will allow you to specify which messages to throttle. You can use the special value of '0' which will tell the service to stop all messages of that type.

A good set of messages to throttle are participantJoin, participantLeave and giveInput.

For more information, refer to the [protocol spec](https://dev.mixer.com/reference/interactive/protocol/protocol.pdf)

### Throttle button input
You can throttle button input by using the InteractiveButton.SetDisabled API to disable the button, set a cooldown using the MixerInteractive.TriggerCoolDown method, or assign the button a spark cost. Each of these techniques will limit the amount of input from the audience.

### Throttle joystick input
In Interactive Studio, you can change the sampling rate of the joystick. This will limit the rate of joystick messages sent to the client.