---
title: 'Live Updates Tutorial'
---

# Introduction
In this tutorial we're going to connect to Constellation and subscribe to Live Loading updates of your channel. If your viewer count or channel title changes, you'll receive an update within your code that you can respond to.

## Writing the Code

[mixer-tabs]

[mixer-tab title="Node & TypeScript" active=1]
## Prerequisites
- Get [NodeJS and NPM](https://nodejs.org/en/) for your platform.
- Create a [new project](https://docs.npmjs.com/cli/init) with npm.
- Run `npm install --save carina ws`

# Usage

We'll be using [Carina](https://github.com/mixer/carina) for this tutorial. Carina is Mixer's Node Constellation client. It makes talking to Constellation super easy.

Let's start by importing and setting up all of the modules which we'll need and defining our channel id.

You can find your channel id by going to [https://mixer.com/api/v1/channels/username?fields=id](https://mixer.com/api/v1/channels/%7Busername%7D?fields=id) in your browser, replacing username with your Mixer username.

```js
const Carina = require('carina').Carina;
const ws = require('ws');

Carina.WebSocket = ws;

const channelId = 1234;
```

Next we'll create an instance of Carina to use for our code. We pass an object of options to the constructor. `isBot` must be set to true if you're writing an automated bot.
```js
const ca = new Carina({
    queryString: {
        'Client-ID': 'Click here to get your Client ID!',
    },
    isBot: true,
}).open();
```

To receive Live Loading events you need to subscribe to them. We'll just need `channel:{id}:update`. For a full list of events check our [Constellation reference guide](/reference/constellation/events). You subscribe to events within Carina by using the `subscribe` method.

```js
ca.subscribe(`channel:${channelId}:update`, data => {
    // ...
});
```

The second argument to the subscribe method is a function which will be called with the data when the event is sent. Inside the function you can do a lot with the data but for now we'll just log it to the console.

```js
ca.subscribe(`channel:${channelId}:update`, data => {
    console.log(data);
});
```
That's it! Save the file as 'constellation.js' and run it with `node constellation.js` from your terminal. Try updating your channel details.

For example, if you update your channel title to 'test', you'll get an object from the event that looks like this:

```json
{ name: "test" }
```

Try updating your channel description, age rating or selected game for more examples.

The final code can be found below:

```js
const Carina = require('carina').Carina;
const ws = require('ws');

Carina.WebSocket = ws;

const channelId = 1234;

const ca = new Carina({
    queryString: {
        'Client-ID': 'Click here to get your Client ID!',
    },
    isBot: true,
}).open();

ca.subscribe(`channel:${channelId}:update`, data => {
    console.log(data);
});
```

Carina also works with TypeScript and your Browser. For more information, check out its [GitHub page](https://github.com/mixer/carina).
[/mixer-tab]
[/mixer-tabs]

## Further Ideas
- Why not combine Constellation with our REST API and make something super cool?
- Use some of the other Constellation events to get events about your stream.
