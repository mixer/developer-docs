---
title: 'Game Clients'
---

## Game Clients

In interactive, a *game client* refers to an application that runs on a streamer's computer and powers the experience. Game clients can be any application, but typically take the form of an actual game that is sending state information to Mixer viewers that allows them to interact.

## Sending Custom Data

With custom controls its now possible to send custom data between your custom controls and your game client. You can send in two directions: from the custom control to the game client, and from the game client to the custom control.

### Sending data from a custom control

Custom controls have the ability to send custom data back to a game client using the CDK Standard Library Methods. Sending data from a custom control is done using the `giveInput` method of the
interactive protocol.

```javascript
mixer.socket.call('giveInput', {
    controlID: 'my-control',
    event: 'my-custom-event',
    dataFieldOne: 1,
    someOtherObject: {
        full: 'of exciting data!',
    },
});
```
The only required parameter in a [`giveInput`](/guides/mixplay/protocol/specification#giveinput-client-method) message is the `controlID` which tells the game client which control in the scene received input. For this to work, ensure that you have a control with the id `my-control`, such as:
```json
[
    {
        "sceneID": "default",
        "controls": [
            {
                "controlID": "my-control",
                "kind": "button",
                "text": "My First Button",
                "position": [
                    {
                        "width": 10,
                        "height": 8,
                        "size": "large",
                        "x": 0,
                        "y": 0
                    }
                ]
            }
        ]
    }
]
```

Aside from the `controlID` parameter, you can set any field on a giveInput call, including nested objects.

### Sending data from a game client

There are two ways to send data from a game client to a custom control. Using **properties** provide a way to send data that is attached to objects in the interactive protocol and is immediately available to newly connected participants. **Events** provide a simple way to send ephemeral events that get delivered instantaneously to participants, but do not get sent to participants that join after the event is sent.

#### Sending data using properties

The interactive protocol defines a number of objects that are sent to new clients that connect:
- Scenes
- Controls
- Groups
- Participants

!!!  Note that participants are persisted for the duration a participant is connected. Once a participant disconnects, their meta properties are deleted.

Setting a property on an object is as easy as defining it. You'll receive a participant object similar to the following upon connecting:

```json
{
    "sessionID": "e1fefc78-d4cc-4c69-b2d9-b36ed5c52893",
    "userID": 1,
    "username": "Mr_Tester",
    "level": 42,
    "lastInputAt": 1520463222192,
    "connectedAt": 1520463222192,
    "disabled": false,
    "groupID": "default",
    "sparks": 500
}
```

You can then set custom properties and use the matching `update*` method for the object you are setting properties on. In this case, pass the following data in the participant array in a call to `updateParticipants`:

```json
{
    "sessionID": "e1fefc78-d4cc-4c69-b2d9-b36ed5c52893",
    "userID": 1,
    "username": "Mr_Tester",
    "level": 42,
    "lastInputAt": 1520463222192,
    "connectedAt": 1520463222192,
    "disabled": false,
    "groupID": "default",
    "sparks": 500,
    "my-custom-object": {
        "with": "custom data"
    }
}
```

The custom data will be sent to the respective participant in an `onParticipantUpdate` event. Likewise, if you set custom data on a scene, control, or group, an update event will be sent to the participants that need to see the update.

Once you've set a property, you can later delete it by setting it to `null` with an update event (e.g. `onParticipantUpdate`):
```json
{
    "my-custom-object": null
}
```

Here are examples of data you could set on each object type:

- Participant
  - A participant's individual score in a game, to be displayed in the custom control
- Scene
  - The name of the map that participants are interacting with
- Group
  - The name of the group of players (e.g. `"Red Team"`)
- Control
  - A custom visual property such as color

You can of course go way beyond just those!

#### Sending data using events

It is sometimes convenient to send a packet of data at an instant in time rather than attach a property to an object that persists. Interactive allows you to send an event using the `broadcastEvent` method:

```json
{
    "scope": [
        "group:default"
    ],
    "data": {
        "my-custom-object": {
            "with": "custom data"
        }
    }
}
```

Note that you may include more than one scope, which specifies who should receive the event. You can specify things like: `group:default` or `participant:e1fefc78-d4cc-4c69-b2d9-b36ed5c52893`. For more information see the [interactive protocol reference](/guides/mixplay/protocol/specification).

## Custom Data Tutorial

Now that we've covered the ways to send custom data between your custom controls and game client, let's walk through a simple example using the [minimal game client](https://github.com/mixer/interactive-node-samples/tree/master/minimal-game-client). Although this sample is written in JavaScript, [Mixer provides SDKs](/downloads) in many languages and environments to plug into your game.

In this example we'll create a custom control that allows users to move the the Hello World text to the location of their choosing by clicking on the video overlay. The custom control will send the location of the click on the video to the game client, which will then update the location of the title and send it out to all connected participants.

## Setup the Project

First, clone the Mixer samples project and install the dependencies:

```
    git clone https://github.com/mixer/interactive-node-samples
    cd interactive-node-samples/minimal-game-client
    npm install
```

Next, follow the instructions in the README to add the `applicationId` and `versionId` to the `mixerauth.json` file. Once that's done, verify that everything works by running `npm run start`. The application will prompt you to enter a shortcode on Mixer to authenticate, and then should connect to your channel without error.

## Send data from a custom control

Now that we have a game client connected, it's time to send some data from the custom control to the game client. We'll make a simple UI where viewers can click on a location in the video and the position of the mouse click will be relayed to the game client. To get started, open up your quickstart project and add the following to the bottom of the `initMixer()` function:

```javascript
const overlay = document.getElementById('overlay');
overlay.addEventListener('click', function handleOverlayClicked (event) {
    mixer.socket.call('giveInput', {
        controlID: 'overlay',
        event: 'click',
        position: {
            x: event.offsetX / overlay.offsetWidth,
            y: event.offsetY / overlay.offsetHeight,
        },
    });
});
```

This sets up a click listener so that when the participant clicks on the overlay we can send the coordinates of the click down to the game. Now save and run the quickstart project (using `npm run start`), and then connect the CDK to interactive. Now when you click on the overlay element over the video, you should see the events in the output of the game client:

```json
{"type":"method","method":"giveInput","params":{"participantID":"eb6baf2b-ba96-49d6-a3ea-7d76a42198e1","input":{"controlID":"overlay","event":"click","position":{"x":0.6435868331441543,"y":0.3217821782178218}}},"id":0,"seq":11,"discard":true}
```

## Sending the title position

Next we need to handle updates to the location of the title on the game client and inform other connected clients when the location changes. Open the minimal game client project and add the following to the start of the `goLive()` function, which is called when the game client has set up its scenes and is ready to start.

```javascript
this.client.state.getControl('overlay').on('click', (clickEvent) => {
    this.client.updateControls({
        sceneID: 'default',
        controls: [
            {
                controlID: 'overlay',
                titlePosition: clickEvent.input.position,
            },
        ],
    });
});
```

This sets up a listener for the `click` event we're sending from the custom control. When that event is received, we set a meta property on the overlay called `titlePosition` which the custom control will use to position the title.

## Handle control updates

Next, we need to handle the event the game client sends with the title position. Go back to the custom control source and add the following to the `initMixer()` function, before calling `mixer.isLoaded()`:

```javascript
const titleElement = document.getElementById('title');
function handleControlUpdate (update) {
    const filteredControls = update.controls.filter(c => c.controlID === 'overlay');
    if (filteredControls.length !== 1) {
        return;
    }

    const overlayControl = filteredControls[0];
    titleElement.style.left = `${overlayControl.titlePosition.x * 100}%`;
    titleElement.style.top = `${overlayControl.titlePosition.y * 100}%`;
}

mixer.socket.on('onControlUpdate', handleControlUpdate);
```

This method sets up a listener for the `handleControlUpdate` event, which occurs whenever the game client updates the title position on the overlay control. When it receives that event, it sets the position of the title to where the last user clicked.

Restart your game client, go to the CDK, and connect to interactive. You should now be able to click on the overlay atop the video and see the title element move around. Nice!

## Handling initial state

One of the advantages of using meta properties is that they exist in the interactive protocol - so new participants that are just joining get the full state of the game. But if you reload the page right now you might be surprised to see that the title is in the default position - not where you expect it to be. Why? Because we haven't handled the scene create and update events! Go back to your custom control and add the following just below the `handleControlUpdate` event handler:

```javascript
function handleSceneUpdate (update) {
    const filteredScenes = update.scenes.filter(c => c.sceneID === 'default');
    if (filteredScenes.length !== 1) {
        return;
    }

    const defaultScene = filteredScenes[0];
    handleControlUpdate(defaultScene);
}

mixer.socket.on('onSceneUpdate', handleSceneUpdate);
mixer.socket.on('onSceneCreate', handleSceneUpdate);
```

This now properly handles the `onSceneCreate` event, which is what fires when interactive initially loads, and the `onSceneUpdate` event, which fires when a scene is updated. You should now be able to go back to the CDK and reload to your hearts content knowing that each time you connect to interactive you (and other participants) will get the latest position of the title.
