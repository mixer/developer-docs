---
title: Introduction
---

## Introduction

MixPlay enables viewers, also known as participants, to directly control the environment in and around streamer’s broadcasts by interacting with user interface controls. When a broadcast has interactivity enabled, controls appear beneath the video on the viewer’s screen. These controls dynamically change according to live events and update in response to different situations that occur within the broadcast.

Developers and producers can create interactive experiences which can run as a part of a game, entirely as a standalone application, or as a tool. These experiences are then used by broadcasters to make their broadcasts interactive.

When a viewer interacts with the controls, their input is sent directly to the experience, allowing the developers to see exactly who is interacting and what they are doing. This level of engagement allows for the creation of truly unique and interactive experiences that let viewers and broadcasters experience Mixer broadcasts on a whole new level.

## Getting Started

Interested in making an Interactive Project? Let's get started!

### Prerequisites
Before you begin, we recommend that you have:


- [A Mixer user account](https://watchbeam.zendesk.com/hc/en-us/articles/208104776-Creating-an-Account)
- Some knowledge of programming, unless you're using an existing Game Client or Interactive Application
- An awesome idea or existing code base or game to work from

### Choose a SDK

If you're making a Game Client from scratch, you'll need to use an Interactive SDK.

| Environment | Repository / Download | Documentation | Description |
| ----------- | ----------------------|---------------|-----------------|
| Typescript, Node.js & Browsers | [GitHub](https://github.com/mixer/interactive-node) | [API Reference](https://mixer.github.io/interactive-node) | Great for creating Interactive tools and utilities. Suitable for beginners. |
| Java | [GitHub](https://github.com/mixer/interactive-java) | [API Reference](https://mixer.github.io/interactive-java) | Add Mixer interactive to your Java project. |

Download the appropriate SDK that your project needs from the repository and create a new project in your favorite IDE.

### Create a new Interactive Project

Interactive projects are created and configured in the [Developer Lab](https://mixer.com/lab/interactive).

Go to the [Developer Lab](https://mixer.com/lab/interactive) and click on the **plus** button to create a new project.

![Screenshot showing the location of the create new project button](./studio/createNewProject.png?classes=caption "Screenshot shows the location of the Create new project button.")

You'll then be prompted to enter a name for your project. Enter a suitable name for your project.

After creating the project, you can still modify your project using the editor.

### Configure, build, and publish the project

The project editor contains tabs where each tab is a step in the creation of your project. Use the project editor to configure, build, and publish your project.

![studio editor tabs](./studio/editorTabs.png)

The editor consists of these four tabs:

- Info - Edit the project name and metadata
- Build - Configure Scenes and Controls
- Code - Hook your Game Client up to the Project and start coding
- Publish - Submit your project for review by the Mixer team.

### Info
The info step is your opportunity to describe your project and provide potential users with all the information they need to get up and running.
It is important to describe what your project does and how to install it in a clear and concise way so that users understand what you have developed and how to use it. Be sure to include some information on how users can contact you if they need help or want to report an issue.
During the pre-publish review process, the Mixer team examines your project more closely. We use this information to gain an understanding of what your project does, so be as thorough as possible.

### Build

The build step is where you design your scenes and controls for your project. The interface is divided up into three sections:

- Scenes
- Controls
- Grid

#### Scenes section

This is where you'll manage the scenes for your project. Scenes can be created, renamed, or deleted here. You can also select a specific scene that you would like to manage controls for.

![studio scenes](./studio/scenes.png)

#### Controls section

This is where you'll manage the controls in your project. You can create, rename, change the type, adjust properties, or delete controls here.

![studio controls](./studio/controls.png)

#### Grid section

The grid is how you specify the layout of your controls for the scene. There are three different layouts for which you can set the look of the scene: small (mobile phones), medium (tablets), and large (desktops). These different layouts are indicated by icons in the upper left area of the grid section.

To add a control to the grid, click and drag the control from the Controls section on to the Grid section. Once the control has been added to the grid you have the ability to resize, reposition, or remove the control.

For more detail on the configuration of the controls on the scene, the `View JSON` option in the top right of the grid section will display the relevant JSON for the scene.
Once you are finished building your scenes/controls, press the Save button in the top right of the grid section.

![studio grid](./studio/grid_with_controls.png)

### Code

The code step is to help you complete the code portion of your project. This is usually done after you have set up the scenes and controls. This is also where you can grab the `Project Version ID` which is displayed in the center of the screen.

You will need to write your own Game Client to connect to the Interactive service. For SDK downloads, documentation, and samples, go to [Choose a SDK](#choose-a-sdk).

### Publishing your Project

If you'd like to publish your project to allow other users to utilize it please [email us](mailto:mixerdevinfo@microsoft.com).


## Where to get help

Have questions? Stuck? We're here to help! Please feel free to reach out at any time.

- [Contact Us](mailto:mixerdevinfo@microsoft.com) - Send us an email.
- [Gitter](https://gitter.im/Mixer/developers) - Chat with our team and other developers.
- [Community Discord](https://discord.gg/mixer) - Hang out with other developers in our community Discord.
