---
title: 'Interactive Overview'
process:
    markdown: true
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

The Interactive Service is a service operated by Mixer. A Game Client connects to it to create an interactive session. Once a session is established, the service acts as a mediator for the Interactive session. The service manages data flow and state within the session by processing and distributing data sent to and from both the [Game Client](#the-game-client) and [Participants](#participants). The Game Client sends messages to the service when it needs to update the session state or to interact with the session.

### An Interactive Project

An Interactive Project stores settings and metadata about an interactive experience. They are created by developers through the [Developer Lab](https://mixer.com/lab/interactive). Projects are owned by a single Mixer user but can be [shared](/guides/mixplay/managing-project-access#sharing-an-interactive-project) with other users.

Within the Studio you can:

- Edit your project's name and description
- Create and store controls and scenes
- Control who can access your project
- Publish your project for everyone on Mixer to see and use

When a [Game Client](#the-game-client) connects to the Interactive Service, it provides your project's ID to the service. The service reads this ID and sets up an interactive session with the saved settings and controls created in the Studio.

### Participants

Participants are viewers of a live stream. They are Mixer users watching a broadcast in a broadcaster's channel. When they join the channel, they are connected to the interactive session. They are provided with the controls within the Project, that they can use to affect the broadcast. A [Game Client](#the-game-client) can react to events and interactive input to change the controls that are displayed to participants.

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

The [Game Client](#the-game-client) can add or remove controls from a scene. It controls which scenes (and controls) are shown to which participants throughout the session. Scenes are used to group controls together in a coherent fashion that is meaningful to the experience.

For example, in an adventure game, you might have a "Battle" scene displayed when a broadcaster's game character is in battle; a "Field" scene displayed when the character is walking around in the game world.

All [Interactive Projects](#an-interactive-project) have a default scene. Without any intervention from the [Game Client](#the-game-client), all participants and [groups](#groups) are shown the default scene.

The [Game Client](#the-game-client) can change the scene that a participant sees by updating the [group](#groups) they belong to.

## Groups
Individual participants can be segmented into groups. Participants within a group all see the same Scene and contribute input to the controls that are part of that scene. [Game Clients](#the-game-client) can create and update groups any time, including changing the scene that the group is set to see. A participant can only be a member of one group at any time.

Groups can be used to create team-based experiences where groups compete to achieve a goal within the experience. Using an adventure game again as an example, you could create an "Allies" group and an "Adversaries" group.

The "Allies" group is provided with controls that gives them the ability to heal the character that the broadcaster is controlling or grant buffs to increase their chance of winning. Alternatively, the "Adversaries" group could spawn traps or monsters to try to get in the way of winning - using their controls.

Participants always start out in the default group but [Game Clients](#the-game-client) can re-assign participants into any group.

## Controls

Controls are UI Elements within a MixPlay experience. Participants interact with them to send events to your game or application. You can read more about controls in our dedicated [controls section](/guides/mixplay/controls).
