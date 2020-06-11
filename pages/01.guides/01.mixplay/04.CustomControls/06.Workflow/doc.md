---
title: 'Workflow'
---

# Workflow
We try to provide the best experience for creating awesome Interactive integrations from inception to massive popularity. This can be broken down into a couple phases:

- [Local Development](#local-development), iterating on custom Interactive bundles on your own computer;
- [End-to-end testing](#end-to-end-testing), connecting to your controls from your local computer with a game client connected to the Mixer server;
- [Final touches and publishing](#final-touches-publishing), running your controls in production and publishing them.

## Local Development

The CDK automatically builds and displays your controls as you edit them in real time. Just leave the CDK open and work on your files locally.

On the left-hand side of the CDK, you'll see a control schema, which controls the display and positioning of controls.

![](./cdkOverview.png?classes=caption "Overview of CDK showing various sections")

This is the state "tree" that's created when placing controls in the Interactive Studio, and is what is modified when your game client calls protocol methods like `createScene`, `updateControl`, `deleteControl`, and so on. There are several other tabs which let you edit what the controls "see" as the currently connected participant and groups.

You can edit this state tree and see your controls update in real time, and as you edit the local source files, the CDK will automatically recompile and update your controls. You can open a Developer Tools window by clicking the dev tools button just above the control preview. This allows you to view errors and debug source code. [Here](https://developer.chrome.com/devtools) is great introduction to using the Developer Tools.

There are also controls on the editor to allow you to simulate how your controls look on different displays and devices. To access the Device Emulation pane, choose "View" in the top-left and ensure "Device Emulation" is checked.

## End-To-End Testing

You've got some controls built and ready to test out, fantastic! Let's get those running on your Mixer channel for some End-to-End Testing. You'll need a couple of things in place before doing this:


- You'll need an Interactive Project to Link the Controls to. If you haven't done so already, go ahead and create a version in the [Developer Lab](https://mixer.com/lab/interactive).
- You'll need an Interactive Game Client to process your inputs. If you need help creating a game client, check out our reference [here](/guides/mixplay/customcontrols/gameclients)
- If your project is unreleased, you should put your channel in [Test Stream Mode](/guides/test-streams/introduction) at this time.

Armed with both of these items, you can get started with End-to-End Testing. To do this, click the "Run" menu and then "On my Channel Page". This process will prompt you to link your Control bundle to an Interactive Project. You can select any Project you have on your Mixer Account.

The CDK will then save your controls and bundle them up as a private bundle on Mixer. Only you will be able to use this bundle and assign it to Interactive Projects.

Once your controls are uploaded, go ahead and connect your game client to your Mixer channel. You'll now see the controls active when you visit your channel on Mixer. You _could_ bundle and re-upload your controls whenever you want to test out changes, but there's a better way!

Head back to the CDK and re-vist the run menu. This time select "Run on my Computer". This time the controls will load in the CDK preview area and will be connected to our Interactive Service. Connect your Game Client as before and you'll be able to send events and interact with your controls all from the comfort of your own Computer. Every time you edit the files, they'll reload and reconnect to the interactive service. Using this method, you can develop your controls very quickly and easily.

## Final Touches &amp; Publishing

Once you're happy with your controls and integration into your Application or Game, you should upload the control bundle once more. You can do this using the Run menu again, or you can select the "Build and upload controls" option in the drop down menu shown when you click your project's name in the top right. This will ensure that your controls are all up to date and on Mixer.
