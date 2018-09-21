---
title: 'Getting Started - Preact'
---
## Introduction

Mixers standard set of controls (Button, Joystick, etc.) are built with [Preact](https://preactjs.com/), a super- ghtweight- brary for interacting with the DOM, and [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), a superset of JavaScript which gives you the option of adding type annotations to your code.

With both of these tools combined Custom Control development can be a blast. We recommend these tools to develop your custom controls. If youd rather try out plain HTML & JavaScript, you can follow our [HTML Guide](/guides/mixplay/customcontrols/gettingstartedwithhtml) instead.

## Quickstart

### Prerequisites

You first need to [install Node.js](https://nodejs.org/en/download/) on your computer. We require Node.js version 8.0.0 or higher. Node.js lets you run our build scripts and tools. Youll also need a decent code editor. We recommend [Visual Studio Code](https://code.visualstudio.com/) as a powerful editor with great JavaScript support out-of-the-box.

### Downloading the Control Development Kit

After Node.js is installed youll need to download our Control Development Kit (CDK). The CDK powers custom control development with an integrated set of tools such as previewing, testing and more. You can download the CDK [here](https://aka.ms/MixerCDK). Once youve downloaded the installer, double click on it to open it. This will install and then run the CDK.

### Create a Project

Once the CDK is running youll see the following screen:
![The Start Screen of the CDK](../cdkStartScreen.png)

Custom Controls are stored within Projects in the CDK so the first step is to create a new project. To do this select the new project option in the File menu along the top of the CDK. This will launch a wizard which will guide you through the steps to create your new project.

First, select the folder that the project will be created in. We recommend you create a new folder to store all of your Custom Control projects so that they are organized. For example you could put them in `D:\dev\custom-controls\`.

![Screenshot, showing the Preact template selected](./cdkPreact.png)

Next, you will be asked to choose your Starter Template. For this guide, choose the Preact template.

You will be asked to choose a control layout. For this guide, please select "Full Screen".

Youll then be asked to enter some details about your project; feel free to fill these in. This is your chance to explain what the project is about.

Once youve clicked "Create My Project", the CDK will spin up a new project for you. This will download the template and install its dependencies. This will take a few moments. Behind the scenes here were setting up your new project as a standard [NPM Module](https://docs.npmjs.com/getting-started/creating-node-modules) which is built using [Webpack](https://webpack.js.org/).

The CDK will tell you when the installation completes, and give you the option to open your projects folder in an IDE (if it can detect one) or in your file browser. You can also do this at any time by clicking your project name in the top action bar of the CDK and selecting "Open Folder".

### Login

In order for some parts of the CDK to work such as uploading or publishing you need to login to the tool with your Mixer user account. We recommend you do this now so that it is done and you dont need to to worry about it. Click the "Not Logged In" Icon in the top right of the CDK to begin the login process.

### Customize

Now that everything is running, it is time to open the directory for your project in your favorite editor and start poking around! The controls will automatically update and reload within the CDK whenever you edit a file.

### Iterate

Now that youre all set up, its time to iterate on your custom controls and build the experience you are looking for. Continue editing files locally within your favorite editor and preview the changes- ve within the CDK. You dont need to upload or publish your custom controls until youre happy with them; everything can be done locally using the CDK to preview and test your changes.

When youre ready, check out our [Workflow Section](/guides/mixplay/customcontrols/workflow) for more about testing your integration and the publication/upload process.

## Next Steps
- Learn how to create and modify custom controls [here](/guides/mixplay/customcontrols/workflow)
- Read more about writing interactive game clients here [here](/guides/mixplay/customcontrols/gameclients)
- Ask questions and get help [on Gitter](https://gitter.im/Mixer/developers)).

## Preact Controls

### But Really, What is a Control?

When thinking about controls, it's important to remember that there are two consumers: the web frontend as seen by viewers and the Interactive Studio as seen by other developers and some streamers. You are free to only focus on the viewers if you don't need to use the Studio and don't intend to share your integration with other developers. But, keeping this duality in mind is important for understanding the considerations around which controls are designed.

In the Preact Custom Control framework, an Interactive control is "just" a class, that happens to be decorated with `@Mixer.Control`. The decorator registers the class internally and it is also examined by the CDK during the upload process, to allow the control to be edited and placed in the Studio. We also provide a useful base component, [PreactControl](https://github.com/mixer/cdk-preact-starter/blob/master/src/alchemy/preact/Control.tsx).


```jsx
import * as Mixer from '@mixer/cdk-std';
import { h } from 'preact';

import { PreactControl } from './alchemy/preact';

@Mixer.Control({ kind: 'helloWorld' })
export class HelloWorldControl extends PreactControl {
    render() {
        return <h1>Hello world!</h1>;
    }
}
```

After you create your custom control, you should pass it into the [register()](https://github.com/mixer/cdk-preact-starter/blob/e6af46a9a78cbd671bb8844764f0839f76c4708f/src/index.tsx#L13) function.

```jsx
import { HelloWorldControl } from './HelloWorld';

// ...

const registry = new Mixer.Registry().register(Button, Joystick, HelloWorldControl, PreactScene);

// ...
```

## Inputs

!!! If you dont intend to allow your integration to be editable in the studio, you can skip this section entirely.

Inputs can be defined on scenes and controls. These are class properties that are settable from the GUI of the Studio, and they must be decorated with `@Mixer.Input` decorator. Input types are restricted to what the GUI is able to provide.

All JavaScript primitive types&mdash;numbers, strings, booleans&mdash;are able to be provided and can be inferred automatically. For other types, you must specify them manually. You can find a full list of available input kinds [here](https://github.com/mixer/cdk-std/blob/6ad36f167fef3a641273858aec6aba5366e40fd5/src/decoration.ts#L106-L133). For example:

```jsx
import * as Mixer from '@mixer/cdk-std';
import { h } from 'preact';

import { PreactControl } from './alchemy/preact';

@Mixer.Control({ kind: 'helloWorld' })
export class HelloWorldControl extends PreactControl {
    /**
     * Position of the control. This is required if you want to edit your
     * controls in the Interactive Studio!
     */
    @Mixer.Input() public dimensions: Mixer.IDimensions;

    /**
     * Text to display in the control. The "string" type can be seen an inferred,
     * and people will be able to set it in the GUI.
     */
    @Mixer.Input() public text: string;

    /**
     * Color of the text. The kind is specified manually here.
     */
    @Mixer.Input({ kind: Mixer.InputKind.Color }) public color: string;

    render() {
        return <h1 style={`color:${this.color}`}>{this.text}</h1>;
    }
}
```

From your game client, you can set properties that _aren't_ statically-defined inputs. If you do, you can access them by calling `this.control.get('myCustomProperty')` anywhere in your class.

## Positioning

The custom control framework provides a simple, effective means to add CSS styles and classes to your Preact components. On top of this, there are two layout engines that control where exactly controls are positioned. The Interactive Studio's editing experience is built to these layout engines, and if you're curious to take a look at them you can find the source [here](https://github.com/mixer/cdk-preact-starter/blob/master/src/alchemy/preact/Layout.tsx).

### Layout
The important part is that whatever styles the layout engine chooses for a control, it will be passed into the control and accessible in `this.props.style` within the class. You then, generally, want to pass these styles into a wrapper element around your content. Let's modify our example to do that:

```jsx
@Mixer.Control({ kind: 'helloWorld' })
export class HelloWorldControl extends PreactControl {
    @Mixer.Input() public dimensions: Mixer.IDimensions;
    @Mixer.Input() public text: string;
    @Mixer.Input({ kind: Mixer.InputKind.Color }) public color: string;

    render() {
        return <div style={this.props.style.compile()}>
            <h1 style={`color:${this.color}`}>{this.text}</h1>
        </div>;
    }
}
```

### Static Styles

CSS can be written in plain stylesheets which are included in your control bundle. In the launchpad project, you'll see that there is a `style.scss` file that serves as an entry point, and imports other stylesheets that contain rules for buttons and joysticks.

If you havent used CSS before, check out Mozilla's [Introduction to CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS).

If you know your way around already, youll notice that the stylesheets are written in [Sass](http://sass-lang.com/). Sass is a preprocessor that adds useful new features on top of CSS, which you can take advantage of if youd- ke to.

### Styles in JavaScript

Often, youll want to programmatically apply styles based on some JavaScript state,- ke in the example in the `RuleSet` class. This provides a simple, convenient way to translate JavaScript objects into CSS properties. Lets make some CSS:

```jsx
import { RuleSet, css } from './alchemy/Style';

// This outputs: `color:#fff;background-color:#000;width:500
console.log(
  new RuleSet({
    color: '#fff',
    backgroundColor: '#000',
    width: 500,
  }).compile();
);


// css() is a shortcut for that. Outputs: `color:#fff`.
console.log(css({ color: '#fff' }))
```

You can combine sets of rules together. This is quite helpful if you want to add your own styles to whats inherited from the layout engine in `this.props.style`. Say we wanted to apply that `color` CSS rule to the _entire_ container...

```jsx
@Mixer.Control({ kind: 'helloWorld' })
export class HelloWorldControl extends PreactControl {
    @Mixer.Input() public dimensions: Mixer.IDimensions;
    @Mixer.Input() public text: string;
    @Mixer.Input({ kind: Mixer.InputKind.Color }) public color: string;

    render() {
        const style = this.props.style.concat({ color: this.color });
        return <div style={style.compile()}><h1>{this.text}</h1></div>;
    }
}
```

### Conditional Classes

We also provide a helper to conditionally apply classes to an element. Lets make the button have the class `is-awesome` only when the input `awesome` is true.

```jsx
@Mixer.Control({ kind: 'helloWorld' })
export class HelloWorldControl extends PreactControl {
    @Mixer.Input() public dimensions: Mixer.IDimensions;
    @Mixer.Input() public text: string;
    @Mixer.Input() public awesome: boolean;

    render() {
        return <div
            style={this.props.style.compile()}
            class={classes({ isAwesome: this.awesome })}
        >
            <h1>{this.text}</h1>
        </div>;
    }
}
```

## Giving Input

Control input events are also quite free-form. The Interactive server attaches special logic to certain actions, such as creating Spark transactions on buttons with a cost, but youre free to do pretty much whatever you want here.

Input is given by calling `this.control.giveInput` inside the class. It takes an object which must have an `event` property, and can contain arbitrary other data. Using our previous HelloWorldControl example, lets turn that into a button that sends an event with the viewers username whenever they press it:

```jsx
@Mixer.Control({ kind: 'helloWorld' })
export class HelloWorldControl extends PreactControl {
    @Mixer.Input() public dimensions: Mixer.IDimensions;
    @Mixer.Input() public text: string;
    @Mixer.Input({ kind: Mixer.InputKind.Color }) public color: string;

    render() {
        return <button onMouseDown={this.fire} style={`color:${this.color}`}>
            {this.text}
        </button>;
    }

    /**
     * This function gets called when the user presses their mouse on the
     * button. @bind is needed here to preserve function context (a JavaScript
     * language quirk).
     */
    @bind
    fire() {
        const participant = this.control.state.participant;
        this.control.giveInput({
            event: 'clicked',
            username: participant.get('username'),
        });
    }
}
```

## Custom Scenes

The launchpad provides a [basic scene](href='https://github.com/mixer/cdk-preact-starter/blob/master/src/alchemy/preact/Scene.tsx') out of the box, but you are free to add your own scenes, or customize or replace it!

Say you had some specific scene, the `leaderboard`, for which you wanted to have some scene-level logic or styling applied. Like controls, scenes are decorated with the `@Mixer.Scene` decorator. There can be one scene defined as the default, and other scene classes that can be used instead for specific scene names.

Let's define that leaderboard scene. We'll extend the default scene and add a title over our controls:

```jsx
import * as Mixer from '@mixer/cdk-std';
import { h } from 'preact';

import { PreactScene, Translate } from './alchemy/preact';

@Mixer.Scene({ id: 'leaderboard' })
export class LeaderboardScene extends PreactScene<{}> {
    render() {
        return <div>
            <h1><Translate string="And the winners are..." /></h1>
        </div>;
    }
}
```

Like controls, you need to pass it into the `register()` function:

```jsx
import { HelloWorldControl } from './HelloWorld';
import { LeaderboardScene } from './LeaderboardScene';

// ...

const registry = new Mixer.Registry().register(
    Button, Joystick, HelloWorldControl, PreactScene, LeaderboardScene);

// ...
```

And that's it! Whenever the `leaderboard` scene is registered, it'll use your custom class and show `And the winners are...`.

Like controls, you can also define and access `@Mixer.Input` properties on scenes.

## Internationalization

Internationalization is a important next step to take to ensure that your Interactive integration is accessible to all streamers and viewers; there are more people who in the world who dont speak your native language than those who do! Custom controls provide interntionalization as a first-class citizen.

### TL;DR

You have a folder `locales` that contain JSON files for various locales. These map string "keys" to their translations. For example, an `en-us.json` file can contain:

```js
{ clickMe: Click Me }
```

You can get the appropriate translation in a Preact control using the `&lt;Translate /&gt;` component:

```jsx
import { h } from 'preact';
import { PreactControl, Translate } from './alchemy/preact';

class MyButton extends PreactControl {
    render() {
        return <button><Translate string="clickMe" /></button>
    }
}
```

### Writing Translations

In the default custom control template, youll find a folder called `locales`. In this folder is a bunch of JSON documents. The names of these documents,- ke `en-us.json`, correspond to a language. The general form for what a locale string "is" is formally defined in [BCP47](http://www.ietf.org/rfc/bcp/bcp47.txt) but, for the most part, they take the form of `language-dialect`.

```
$ ls locales
    en-us.json
    en-gb.json
    zh.json
```

Inside each file is a map of keys to translated text. Theres nothing special about the keys, theyre just what you use to reference the translation. For example:

##### en-us.json

```js
{ clickMe: Click Me }
```

##### zh.json

```js
{ clickMe: 点击这个 }
```

Now, whenever you translate the string `clickMe`, itll show the right text.

#### Advanced Syntax

Under the hood, we use the ICU Message Syntax powered by Format.js. Format.js has an [excellent guide](https://formatjs.io/guides/message-syntax/) for details about its syntax. In ICU messages you can easil;y define interpolations and plural forms, and format numbers, times, dates, and ordinals.

Also, when we parse JSON, we actually parse it as [JSON5](https://github.com/json5/json5). This extends standard JSON formatting by adding features such as multiline strings&mdash;especially useful for those complex ICU rules! For example, here's how you could tell the user how main points they have:

```js
{
    displayScore: "You have {count, plural, \
        =0 {no points} \
        =1 {one point} \
        =2 {a couple points} \
        other {# points}}"
}
```

### Using Translations

The right locale for the current user is automatically pulled by the [: code &lt;Translate /&gt;](https://github.com/mixer/cdk-preact-starter/blob/master/src/alchemy/Locales.ts):) component. This component is probably what youll be using in most of your code, you should rarely if ever need to touch the Locales class directly.

You should pass it a `string` property to specify what key it should translate by. For example, to translate the "clickMe" string above, you can do something along these- nes:

```jsx
import { h } from 'preact';
import { PreactControl, Translate } from './alchemy/preact';

class MyButton extends PreactControl {
    render() {
        return <button><Translate string="clickMe" /></button>
    }
}
```

Any other properties you pass in will be give to the translator to interpolate. Going back to that plural example, heres how you could create a score counter:

```jsx
import { Component, h } from 'preact';
import { Translate } from './alchemy/preact';

class ScoreBoard extends Component {

    // ...

    render() {
        return <div class="score-board">
            <Translate string="displayScore" count={this.score} />
        </div>;
    }

    // ...

}
```

If the `string` you pass into interpolate doesnt exist in the localization, it will be printed without modification.
