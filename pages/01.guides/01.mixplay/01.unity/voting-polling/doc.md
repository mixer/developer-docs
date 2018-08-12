---
title: 'Voting and Polling'
visible: true
---

The Unity plugin does support a way to do voting or polling via dynamic button creation. And example of voting would be if you have a choose your own adventure or a trivia game. In the case of the Trivia game, the simplest way to accomplish this would be to create one scene in Interactive Studio with buttons representing your poll choices. You can use set the InteractiveButtonControl.ButtonText property to update the text on those buttons when the question in the trivia game changes.

But what if you don't have a set number of button choices? You could create a different scene in Interactive Studio for each possible set of button choices. However, that may be difficult to manage if you have lots of different permutations. 

A better solution could be dynamic scene creation. This feature allows you to create new scenes, update buttons on a scene on the fly. The way to do dynamic scene creation is:

1. Use the MixerInteractive.SendInteractiveMessage API to send the "updateScenes" message. This message takes the ID of the scene you want to update, the list of controls, and their properties. You can find the format for that message in the [Protocol](https://dev.mixer.com/reference/interactive/protocol/protocol.pdf) document.

2. If you want to, you can also listen for replies from the service that your scene update was successful by registering an event handler with the MixerInteractive.OnInteractiveMessageEvent event handler.