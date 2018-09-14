---
title: Basic Tutorial
---

# Basic Tutorial - Let's write a Ranker!

This guide will walk you through the process of developing a bot which shows the tells the user their rank on Mixer, based on how many total viewers they have.

## Writing the Code

We’re going to be using our [Node](https://github.com/mixer/client-node), [Java](https://github.com/mixer/beam-client-java) and Python clients to build this app. The user will run it and it'll tell them how far they are from being the top streamer on Mixer!

[mixer-tabs active=1]

[mixer-tab title="Node"]
## Prerequisites
- Get [NodeJS and NPM](https://nodejs.org/en/) for your operating system/platform.
- Create a [new project](https://docs.npmjs.com/cli/init) with npm.
- Run `npm i -S @mixer/client-node`

## Usage
Let's start by importing all of the modules which we'll need.

```js
'use strict';

const Mixer = require('@mixer/client-node');

const client = new Mixer.Client(new Mixer.DefaultRequestRunner());
```

To get the user's channel name we'll ask for it from the command line and use this to make a REST request that will provide a response with their channel details. We'll then print out how many viewers the have on their channel.

```js
'use strict';

const Mixer = require('@mixer/client-node');

const client = new Mixer.Client(new Mixer.DefaultRequestRunner());

const channelName = process.argv[2];

client.use(new Mixer.OAuthProvider(client, {
    clientId: 'Click here to get your Client ID!',
}));

client.request('GET', `channels/${channelName}`)
.then(res => {
    const viewers = res.body.viewersTotal;
    console.log(`You have ${viewers} total views...`);
});
```

You've already got working code that connects and talks to our API. Go ahead, try it! Run `node rank.js <your_username>` in your terminal.

```
$ node rank.js connor4312
You have 595 total views...
```

Now it's time to dig up all that stuff you learned in your computer science course. We want to sort the channels on Mixer by the number of viewers they have, and loop through until we find the first channel that has less viewers than we do. To do this we'll have to make several calls to the API, and in Node this kind of chaining is often done through recursion.

We define a function simply called `run` that we initially call with page `0`. Each time it makes a request, it'll count up the channels it gets back and stop when it gets a channel less or as popular as we are.

// ...
let rank = 1;
const run = (page) => {
    return getChannelsDescending(page).then(res => {
        for (let i = 0; i < res.body.length; i++) {
            const channel = res.body[i];
            if (channel.viewersTotal <= viewers) {
                console.log(`Your rank on Mixer is ${rank}!`);
                return;
            }

            rank++;
        }

        console.log(`Your rank is at least ${rank}...`);
        return run(page + 1);
    });
};

return run(0);
// ...
Now we just need to fill in that mysterious `getChannelsDescending(page)` function with a call on the Mixer client. The client has several helpers here that are essentially light wrappers around the [request](https://github.com/request/request) package. So, we'll pass options in that we read from the [channel endpoint docs](LINK TO REST) to do what we need:

// ...
const run = (page) => {
    return client.request('GET', '/channels', {
        qs: {
            page,
            fields: 'viewersTotal',
            order: 'viewersTotal:DESC',
        },
    }).then(res => {
// ...
All together now, you can put this together into a single script...
```js
'use strict';

const Mixer = require('@mixer/client-node');

const client = new Mixer.Client(new Mixer.DefaultRequestRunner());

const channelName = process.argv[2];

client.use(new Mixer.OAuthProvider(client, {
    clientId: 'Click here to get your Client ID!',
}));

client.request('GET', `channels/${channelName}`)
.then(res => {
    const viewers = res.body.viewersTotal;
    console.log(`You have ${viewers} total viewers...`);

    let rank = 1;
    const run = (page) => {
        return client.request('GET', '/channels', {
            qs: {
                page,
                fields: 'viewersTotal',
                order: 'viewersTotal:DESC',
            },
        }).then(res => {
            for (let i = 0; i < res.body.length; i++) {
                const channel = res.body[i];
                if (channel.viewersTotal <= viewers) {
                    console.log(`Your rank on Mixer is ${rank}!`);
                    return;
                }

                rank++;
            }

            console.log(`Your rank is at least ${rank}...`);
            return run(page + 1);
        });
    };

    return run(0);
});
```
...and run it to get your rank on Mixer!

```
$ node rank.js connor4312 l337hax0r
You have 595 total viewers...
Your rank is at least 51...
Your rank is at least 101...
Your rank is at least 151...
Your rank is at least 201...
Your rank is at least 251...
Your rank is at least 301...
Your rank is at least 351...
Your rank is at least 401...
Your rank is at least 451...
Your rank is at least 501...
Your rank is at least 551...
Your rank is at least 601...
Your rank is at least 651...
Your rank is at least 701...
Your rank is at least 751...
Your rank on Mixer is 761!
```
[/mixer-tab]

[/mixer-tabs]
