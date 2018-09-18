---
title: 'Custom Controls'
---
# Custom Controls
Custom controls is a feature for Mixer Interactive that allows you to create Interactive experiences for Mixer viewers and streamers. Unlike our standard controls and prefabs, such as the button and joystick, this allow you to create rich and engaging experiences with effectively limitless customizability!

The magic here is that with custom controls you can completely change the look, behavior and feel of Interactive Experiences by developing your own controls from scratch, or by using some of our standard controls as a base. Controls are written in HTML, JavaScript, and CSS which are then uploaded and served from Mixers infrastructure at no cost to you. When combined with a Game Client in your Game or Application, they allow for a truly unique and customized experience that can fit the look and feel of your brand and ideas.

## Looking to Dive in?
If you're looking to dive straight into writing custom control experiences then you have two choices:

- [Use Preact](quickstart-preact) - Leverage the power of Preact, TypeScript and our Existing Controls to get started quickly.
- [Use HTML](quickstart-html) Start from scratch, use your favorite UI Library or Draw your Interactivity directly using a HTML Canvas.

You can also continue reading for an Overview on how the components of Custom Controls work.

## Custom Control Components

Custom Controls rely on several key components that work together to deliver an Interactive Experience on Mixer.

### Projects

In Mixer, Interactive creations are organized into Projects, which include a name, description, and authorship information. Each Project has multiple Versions, which contain specific information about the layout of controls, groups, and scenes. For more information about Interactive in general, check out our [Interactive Introduction](/guides/mixplay/introduction)

### Bundles

The collection of HTML, CSS and JavaScript that you develop when creating a Custom Controls experience is called an Interactive **Bundle**, and project versions can be assigned to load a specific Bundle.

![](./project-heirarchy.svg?classes=caption "The project "My Awesome Project" has three versions. Two we've assigned to the default bundle,called the interactive-launchpad, and for version 2.0 we've created a custom bundle.")

Bundles themselves can have multiple bundle versions. Bundles are initially created privately, accessible only to you. Once you decide to "publish" a bundle version to make it public, you wont be able to modify it. This ensures that you dont break users who are relying on released versions of your bundles.

### Controls

Within a Custom Control bundle are a set of Controls.

Controls are interactive elements within an Interactive experience such as a Button, Joystick or even a MiniMap. They allow users to give inputs and receive data from your Game or Application. They exist within scenes of an Interactive experience and have a free-form set of properties that can be used to modify their behavior or appearance. They can also send inputs and data to your Game Client which can in turn send data back to update the controls appearance or behavior.

All of Mixers standard controls and experiences such as Share your Controller are built using Custom Controls. They use [Preact](https://preactjs.com/), a super lightweight framework that takes care of the dirty work for you, and [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), a superset of JavaScript which gives you the option of adding type annotations to your code.

For more information on Mixers Standard Controls, check out [the documentation for them](../interactive/index.html#controls).

### Summary

In summary, when a streamer goes Interactive with a version of your Interactive Project, Mixer will look up the linked bundle for this version and load it onto the streamers channel page for any viewers watching. Theyll be connected through Mixer to your Game or Application where you can start receiving inputs and data to change and enhance a streamers game or broadcast.
