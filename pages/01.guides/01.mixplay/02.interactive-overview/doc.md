---
title: 'Interactive Overview'
process:
    twig: true
---

## Interactive Overview

Four major components make up an interactive experience:

1. Game Client
1. Interactive Service
1. Interactive Project
1. Participants

![Diagram showing the structure of an interactive project](./HighLevelOverview.svg?classes=caption "Diagram showing the structure of an interactive project")

### The Game Client
A Game Client is software code which processes interactive events. It is written by developers who want to create an interactive experience. Game Clients connect to the [Interactive Service](#the-interactive-service) and listen to events and updates sent from the service to take action within their environment, thus affecting the broadcast.

A Game Client can be created for a variety of environments, such as:

- Within a game's current codebase
- In a third party mod of a game
- As a standalone application
- As a game's server-side service

### The Interactive Service

The Interactive Service is a service operated by Mixer. A Game Client connects to it to create an interactive session. Once a session is established, the service acts as a mediator for the Interactive session. The service manages data flow and state within the session by processing and distributing data sent to and from both the [Game Client](#the-gameclient) and [Participants](#participants). The Game Client sends messages to the service when it needs to update the session state or to interact with the session.

### An Interactive Project

An Interactive Project stores settings and metadata about an interactive experience. They are created by developers through the [Developer Lab](https://mixer.com/lab/interactive). Projects are owned by a single Mixer user but can be [shared](#sharing-your-project) with other users.

Within the Studio you can:

- Edit your project's name and description
- Create and store controls and scenes
- Control who can access your project
- Publish your project for everyone on Mixer to see and use

When a [Game Client](#the-gameclient) connects to the Interactive Service, it provides your project's ID to the service. The service reads this ID and sets up an interactive session with the saved settings and controls created in the Studio.

### Participants

Participants are viewers of a live stream. They are Mixer users watching a broadcast in a broadcaster's channel. When they join the channel, they are connected to the interactive session. They are provided with the controls within the Project, that they can use to affect the broadcast. A [Game Client](#the-gameclient) can react to events and interactive input to change the controls that are displayed to participants.

## Interactive Experience Structure

An Interactive experience contains hierarchical structure of various elements.

These elements are:

- Scenes
- Controls
- Groups
- Participants

![Diagram showing the Relationship between elements in the interactive hierarchy.](./InteractiveHierarchy.svg?classes=caption "Diagram showing the relationship between elements in the interactive hierarchy.")

## Scenes

A scene is a named collection of controls. Within a scene, controls are arranged on a grid. The grid's layout determines how the controls are displayed to participants.

The [Game Client](#the-gameclient) can add or remove controls from a scene. It controls which scenes (and controls) are shown to which participants throughout the session. Scenes are used to group controls together in a coherent fashion that is meaningful to the experience.

For example, in an adventure game, you might have a "Battle" scene displayed when a broadcaster's game character is in battle; a "Field" scene displayed when the character is walking around in the game world.

All [Interactive Projects](#an-interactive-project) have a default scene. Without any intervention from the [Game Client](#the-gameclient), all participants and [groups](#groups) are shown the default scene.

The [Game Client](#the-gameclient) can change the scene that a participant sees by updating the [group](#groups) they belong to.

## Groups
Individual participants can be segmented into groups. Participants within a group all see the same Scene and contribute input to the controls that are part of that scene. [Game Clients](#the-gameclient) can create and update groups any time, including changing the scene that the group is set to see. A participant can only be a member of one group at any time.

Groups can be used to create team-based experiences where groups compete to achieve a goal within the experience. Using an adventure game again as an example, you could create an "Allies" group and an "Adversaries" group.

The "Allies" group is provided with controls that gives them the ability to heal the character that the broadcaster is controlling or grant buffs to increase their chance of winning. Alternatively, the "Adversaries" group could spawn traps or monsters to try to get in the way of winning - using their controls.

Participants always start out in the default group but [Game Clients](#the-gameclient) can re-assign participants into any group.

## Controls
A control is an interactive element in a user interface within a scene. [Participants](#participants) can interact with the control using touch, keyboard, mouse, or controller. There are currently a variety of types of controls including Buttons, Joysticks, Labels, & Textboxes. Additional control types may be added in the future.

### Buttons

A button is a rectangular, interactive control within a scene. [Game Clients](#the-gameclient) receive events when participants interact with a button.


- `mousedown` event is sent when a button is pressed by a participant
- `mouseup` event is sent when a button is released by a participant
- `keydown` event is sent when the key (specified via key code on the button) is pressed by a participant
- `keyup` event is sent when the key (specified via key code on the button) is released by a participant

![Sample button control which costs the participant one spark if they click on it.](./button.png?classes=caption "Sample button control which costs the participant one spark if they click on it.")

Developers can use buttons to enable participants to vote, cause in-game actions to happen, or control in-game entities.

Buttons are highly customizable. These button properties can be edited from both the Interactive Studio and a Game Client:
1. Text displayed on the button
2. Spark cost (For more info about sparks, see [What are sparks?](#what-are-sparks))
3. Width of the progress bar, which is displayed at the bottom of a button
4. Disabled state - Buttons which are disabled cannot be interacted with
5. Cooldown duration - Prevents interaction until it expires
6. Key code - A keyboard key assignment to a button
7. Tooltip displayed when hovering over the button
8. Color of the background on the button
9. Color of the border on the button
10. Accent color applied to the cooldown spinner and progress bar
11. Focus Color applied to the border when focusing
12. Color of the text display on the button
13. Size of the text display on the button

### Joysticks

Joysticks are circular controls positioned within a scene that participants can click and drag. Moving a joystick sends an input event down to the Game Client with the coordinates of the joystick relative to its center. Joystick coordinates range between `-1 and 1`.

![A joystick display to a participant.](./joystick.png?classes=caption "An idle joystick displayed to a participant. Its coordinates are `0, 0`.")

![An illustration of the coordinate system for joysticks.](./joystickCoordinates.svg?classes=caption "An illustration of the coordinate system for joysticks. The top left is `-1, -1` and the bottom right is `1, 1`.")

### Labels

Labels are controls which can be used to display instructions and visually group controls together. As an example, a scene with buttons that either hurt or heal the player can have each section clearly labeled respectively above the buttons.

![Sample label control that is bold and italicized.](./label.png?classes=caption "Sample label control that is bold and italicized.")

Labels are customizable. These label properties can be edited from both the Interactive Studio and a Game Client:
1. Text displayed in the label
1. Size of the text in the label
1. Color of the text in the label
1. Whether the label is underlined
1. Whether the label is italicized
1. Whether the label is bold

### Textboxes

Textboxes are controls which can be used to get text input from participants. [Game Clients](#the-gameclient) receive events when participants either type or submit the text.


- `change` event is sent when the participant types in the textbox (This is not sent if the button has a submit button)
- `submit` event is sent when the participant submits the textbox

![Sample textbox control asking participants to enter their pet\'s name, costing 10 sparks to submit.](./textbox.png?classes=caption "Sample textbox control asking participants to enter their pet's name, costing 10 sparks to submit.")

Textboxes are customizable. These textbox properties can be edited from both the Interactive Studio and a Game Client:

1. Placeholder text display inside the textbox
1. Text displayed in the submit button associated with the textbox
1. Whether the textbox is multiline
1.  Whether the textbox has a submit button
1. Disabled state - Textboxes which are disabled cannot be interacted with
1. Cooldown duration - Prevents interaction until it expires
1. Spark cost (For more info about sparks, see [What are Sparks?](#what-are-sparks))

### Mouse

Mouse input allows you to get mouse events over video.  The mouse input control is pretty simplistic.  You can subscribe to receive mouse move on:

- `mousedown` (default) - this will only send mouse move events during a mousedown event
- `always` mouse move events are sent on hover and during mousedown
- `never` never send mouse move events.  You will still receive click events.

You can also adjust mouse move event throttling.  The `moveThrottle` duration, given in milliseconds, will throttle movement events sent to the game client.  The default is 50ms.

### Looking for More Customization?

If you're looking for more customization and more options for your interactive controls then checkout our new [Custom Controls](/reference/interactive_next/index.html) feature. It lets you create awesome experiences that are 100% custom and written in HTML, JavaScript and CSS.
