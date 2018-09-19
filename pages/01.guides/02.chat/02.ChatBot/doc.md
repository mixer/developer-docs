---
title: Creating a ChatBot
oauth: 'chat:connect chat:chat chat:bypass_slowchat'
clientId: true
---
# Creating a Chat Bot

For this tutorial, we will show you how to create a 'ping-pong' chat bot using either our [Node](https://github.com/mixer/client-node), [Java](https://github.com/mixer/beam-client-java) or [Python](https://github.com/mixer/beam-client-python) libraries to communicate with the Mixer API. We'll also take a look at how you can talk to the API directly with [curl](https://curl.haxx.se/) and [wscat](https://github.com/websockets/wscat).

We'll be using OAuth for authentication. In the tutorial code below, click "Click here to get your token" to grab a token for the tutorial. You can read more about how OAuth works on our [OAuth page](https://mixerdev.azurewebsites.net/reference/oauth)


[mixer-tabs active=1]

[mixer-tab title="Node"]

## Prerequisites
1. Get [NodeJS and NPM](https://nodejs.org/en/) for your platform.
1. [Create a new project with npm.](https://docs.npmjs.com/cli/init)
1. Run `npm install --save @mixer/client-node ws`

## Writing the Code
Our Node implementation uses Bluebird promises; you can find out more about them [here](http://bluebirdjs.com/docs/api-reference.html).

Before we can connect to the chat servers, we must authenticate ourselves with the backend. In our example we are going to use an implicit OAuth token for authentication. The required scopes are `chat:connect chat:chat`.

```js
    const Mixer = require('@mixer/client-node');
    const ws = require('ws');

    let userInfo;

    const client = new Mixer.Client(new Mixer.DefaultRequestRunner());

    // With OAuth we don't need to log in. The OAuth Provider will attach
    // the required information to all of our requests after this call.
    client.use(new Mixer.OAuthProvider(client, {
        tokens: {
            access: 'Click here to get your Token!',
            expires: Date.now() + (365 * 24 * 60 * 60 * 1000)
        },
    }));

    // Gets the user that the Access Token we provided above belongs to.
    client.request('GET', 'users/current')
    .then(response => {
        console.log(response.body);

        // Store the logged in user's details for later reference
        userInfo = response.body;

        // Returns a promise that resolves with our chat connection details.
        return new Mixer.ChatService(client).join(response.body.channel.id);
    })
    .then(response => {
        const body = response.body;
        console.log(body);
        // TODO: Connect to chat, we'll do this in the next tutorial step :)!
    })
    .catch(error => {
        console.error('Something went wrong.');
        console.error(error);
    });
```
The result will look something like this. You can see an array of chat servers that we can connect to within the endpoints array:
```json
    { endpoints:
    [ 'wss://chat1-dal.mixer.com:443',
        'wss://chat2-dal.mixer.com:443' ],
    authkey: '1c0e251998ac7112f42c71a23d4b67b3',
    permissions:
    [ 'change_ban',
        'edit_options',
        'change_role',
        'bypass_links',
        'bypass_slowchat',
        'remove_message',
        'clear_messages',
        'timeout',
        'giveaway_start',
        'poll_vote',
        'poll_start',
        'connect',
        'chat' ] }
```
Next we will use this response to connect to the chat server. Let's write a `createChatSocket()` function and connect to chat.

```js
    const Mixer = require('@mixer/client-node');
    const ws = require('ws');

    let userInfo;

    const client = new Mixer.Client(new Mixer.DefaultRequestRunner());

    // With OAuth we don't need to log in. The OAuth Provider will attach
    // the required information to all of our requests after this call.
    client.use(new Mixer.OAuthProvider(client, {
        tokens: {
            access: 'Click here to get your Token!',
            expires: Date.now() + (365 * 24 * 60 * 60 * 1000)
        },
    }));

    // Gets the user that the Access Token we provided above belongs to.
    client.request('GET', 'users/current')
    .then(response => {
        console.log(response.body);

        // Store the logged in user's details for later reference
        userInfo = response.body;

        // Returns a promise that resolves with our chat connection details.
        return new Mixer.ChatService(client).join(response.body.channel.id);
    })
    .then(response => {
        const body = response.body;
        console.log(body);
        return createChatSocket(userInfo.id, userInfo.channel.id, body.endpoints, body.authkey);
    })
    .catch(error => {
        console.error('Something went wrong.');
        console.error(error);
    });

    /**
    * Creates a Mixer chat socket and sets up listeners to various chat events.
    * @param {number} userId The user to authenticate as
    * @param {number} channelId The channel id to join
    * @param {string[]} endpoints An array of endpoints to connect to
    * @param {string} authkey An authentication key to connect with
    * @returns {Promise.<>}
    */
    function createChatSocket (userId, channelId, endpoints, authkey) {
        const socket = new Mixer.Socket(ws, endpoints).boot();

        // You don't need to wait for the socket to connect before calling
        // methods. We spool them and run them when connected automatically.
        socket.auth(channelId, userId, authkey)
        .then(() => {
            console.log('You are now authenticated!');
            // Send a chat message
            return socket.call('msg', ['Hello world!']);
        })
        .catch(error => {
            console.error('Oh no! An error occurred.');
            console.error(error);
        });

        // Listen for chat messages. Note you will also receive your own!
        socket.on('ChatMessage', data => {
            console.log('We got a ChatMessage packet!');
            console.log(data);
            console.log(data.message); // Let's take a closer look
        });

        // Listen for socket errors. You will need to handle these here.
        socket.on('error', error => {
            console.error('Socket error');
            console.error(error);
        });
    }
```
Running this code will now connect you to chat and you'll see something like this in the console. The JSON object on the 3rd line is the chat message packet your bot sent to the server when it connected.

```
You are now authenticated!
We got a ChatMessage packet!
{ channel: 131630,
  id: '9bc8a940-326a-11e6-9af9-8d8f189ce625',
  user_name: 'your_username',
  user_id: <your_userid>,
  user_roles: [ 'Owner' ],
  message: { message: [ [Object] ], meta: {} } }
{ message: [ { type: 'text', data: 'Hello world!', text: 'Hello world!' } ],
  meta: {} }
```

Now that we have a chat connection with authentication working, we can add the rest of the bot code. When a user joins the channel, it will greet them. If a user types `!ping` into chat, it will response with their name and "PONG!". To do this, we'll re-write parts of the `createChatSocket()` function. The final code is below; check it out!

```js
    const Mixer = require('@mixer/client-node');
    const ws = require('ws');

    let userInfo;

    const client = new Mixer.Client(new Mixer.DefaultRequestRunner());

    // With OAuth we don't need to log in. The OAuth Provider will attach
    // the required information to all of our requests after this call.
    client.use(new Mixer.OAuthProvider(client, {
        tokens: {
            access: 'Click here to get your Token!',
            expires: Date.now() + (365 * 24 * 60 * 60 * 1000)
        },
    }));

    // Gets the user that the Access Token we provided above belongs to.
    client.request('GET', 'users/current')
    .then(response => {
        userInfo = response.body;
        return new Mixer.ChatService(client).join(response.body.channel.id);
    })
    .then(response => {
        const body = response.body;
        return createChatSocket(userInfo.id, userInfo.channel.id, body.endpoints, body.authkey);
    })
    .catch(error => {
        console.error('Something went wrong.');
        console.error(error);
    });

    /**
    * Creates a Mixer chat socket and sets up listeners to various chat events.
    * @param {number} userId The user to authenticate as
    * @param {number} channelId The channel id to join
    * @param {string[]} endpoints An array of endpoints to connect to
    * @param {string} authkey An authentication key to connect with
    * @returns {Promise.<>}
    */
    function createChatSocket (userId, channelId, endpoints, authkey) {
        // Chat connection
        const socket = new Mixer.Socket(ws, endpoints).boot();

        // Greet a joined user
        socket.on('UserJoin', data => {
            socket.call('msg', [`Hi ${data.username}! I'm pingbot! Write !ping and I will pong back!`]);
        });

        // React to our !pong command
        socket.on('ChatMessage', data => {
            if (data.message.message[0].data.toLowerCase().startsWith('!ping')) {
                socket.call('msg', [`@${data.user_name} PONG!`]);
                console.log(`Ponged ${data.user_name}`);
            }
        });

        // Handle errors
        socket.on('error', error => {
            console.error('Socket error');
            console.error(error);
        });

        return socket.auth(channelId, userId, authkey)
        .then(() => {
            console.log('Login successful');
            return socket.call('msg', ['Hi! I\'m pingbot! Write !ping and I will pong back!']);
        });
    }
```

[/mixer-tab]

[mixer-tab title="Java"]
## Prerequisites
- Java 1.8 or above
- A Java IDE such as:
  - Eclipse
  - IntelliJ
  - NetBeans
- A Java Project Manager such as:
  - Maven
  - Gradle

## Project Setup
Set up a standard project for your environment and include [beam-client-java](https://github.com/mixer/beam-client-java) as a dependency.


To set up `beam-client-java` with **Maven**, first add the Mixer repo to your `pom.xml` as a repository as follows:
```
<repositories>
  <repository>
    <id>beam-snapshots</id>
    <url>https://maven.mixer.com/content/repositories/snapshots/</url>
  </repository>
</repositories>
And secondly, add this project as a dependency in your pom.xml:

<dependencies>
  <dependency>
    <groupId>com.mixer</groupId>
    <artifactId>api</artifactId>
    <version>6.0.0-SNAPSHOT</version>
  </dependency>
</dependencies>
```

To set up `beam-client-java` with **Gradle**, first add the Mixer repo to your `build.gradle` as a repository as follows:
```
repositories {
    maven {
        name = "beam"
        url = "https://maven.mixer.com/content/repositories/snapshots"
    }
}
```
And secondly, add this project as a dependency in your build.gradle:
```
dependencies {
    compile "com.mixer:api:6.0.0-SNAPSHOT"
}
```

## Writing the Code

Let's start by creating a Main class for our tutorial and importing required libraries. We'll also instantiate a `MixerAPI` object with an implicit OAuth token. The required scopes are `chat:connect chat:chat`.

```java
import com.mixer.api.MixerAPI;
import com.mixer.api.resource.MixerUser;
import com.mixer.api.resource.chat.MixerChat;
import com.mixer.api.resource.chat.events.IncomingMessageEvent;
import com.mixer.api.resource.chat.events.UserJoinEvent;
import com.mixer.api.resource.chat.methods.AuthenticateMessage;
import com.mixer.api.resource.chat.methods.ChatSendMethod;
import com.mixer.api.resource.chat.replies.AuthenticationReply;
import com.mixer.api.resource.chat.replies.ReplyHandler;
import com.mixer.api.resource.chat.ws.MixerChatConnectable;
import com.mixer.api.services.impl.ChatService;
import com.mixer.api.services.impl.UsersService;

import java.util.concurrent.ExecutionException;

public class Chat {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        MixerAPI mixer = new MixerAPI("Click here to get your Client ID!", "Click here to get your Token!");
    }
}
```

Next we need to get a reference to a `MixerChat` object that we can connect to. To do this we'll log in using the details from above, and use the `MixerUser` object to get their `MixerChannel`. We can then pass this to the `ChatService` to get a `MixerChatConnectable` object. This object allows us to connect to chat!

```java
//...
MixerUser user = mixer.use(UsersService.class).getCurrent().get();
MixerChat chat = mixer.use(ChatService.class).findOne(user.channel.id).get();
MixerChatConnectable chatConnectable = chat.connectable(mixer);
//...
```

Now we need to connect and authenticate with an `AuthenticateMessage`. As this is sent asynchronously, we'll need to wait for it to finish before we can send anything to chat. Our `ReplyHandler` takes care of that.

```java
if (chatConnectable.connect()) {
    chatConnectable.send(AuthenticateMessage.from(user.channel, user, chat.authkey), new ReplyHandler<AuthenticationReply>() {
        public void onSuccess(AuthenticationReply reply) {
            chatConnectable.send(ChatSendMethod.of("Hello World!"));
        }
        public void onFailure(Throwable var1) {
            var1.printStackTrace();
        }
    });
}
```

With authentication and connection out of the way, we just need to hook up the greet event and the `!ping` command. The greet event is set up by registering an `EventHandler` for the `UserJoinEvent`.

```java
//...
chatConnectable.on(UserJoinEvent.class, event -> {
    chatConnectable.send(ChatSendMethod.of(
        String.format("Hi %s! I'm pingbot! Write !ping and I will pong back!",
        event.data.username)));
});
//...
```

The last thing to do is to set up the !ping command. We will listen for `IncomingMessageEvent` and check whether the message we receive starts with `!ping`.

```java
//...
chatConnectable.on(IncomingMessageEvent.class, event -> {
    if (event.data.message.message.get(0).text.startsWith("!ping")) {
        chatConnectable.send(ChatSendMethod.of(String.format("@%s PONG!",event.data.userName)));
    }
});
//...
```

Putting everything together into one file, you get a completed ping-pong Java Mixer Bot!

```java
import com.mixer.api.MixerAPI;
import com.mixer.api.resource.MixerUser;
import com.mixer.api.resource.chat.MixerChat;
import com.mixer.api.resource.chat.events.IncomingMessageEvent;
import com.mixer.api.resource.chat.events.UserJoinEvent;
import com.mixer.api.resource.chat.methods.AuthenticateMessage;
import com.mixer.api.resource.chat.methods.ChatSendMethod;
import com.mixer.api.resource.chat.replies.AuthenticationReply;
import com.mixer.api.resource.chat.replies.ReplyHandler;
import com.mixer.api.resource.chat.ws.MixerChatConnectable;
import com.mixer.api.services.impl.ChatService;
import com.mixer.api.services.impl.UsersService;

import java.util.concurrent.ExecutionException;

public class Chat {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        MixerAPI mixer = new MixerAPI("Click here to get your Client ID!", "Click here to get your Token!");

        MixerUser user = mixer.use(UsersService.class).getCurrent().get();
        MixerChat chat = mixer.use(ChatService.class).findOne(user.channel.id).get();
        MixerChatConnectable chatConnectable = chat.connectable(mixer);

        if (chatConnectable.connect()) {
            chatConnectable.send(AuthenticateMessage.from(user.channel, user, chat.authkey), new ReplyHandler<AuthenticationReply>() {
                public void onSuccess(AuthenticationReply reply) {
                    chatConnectable.send(ChatSendMethod.of("Hello World!"));
                }
                public void onFailure(Throwable var1) {
                    var1.printStackTrace();
                }
            });
        }

        chatConnectable.on(IncomingMessageEvent.class, event -> {
            if (event.data.message.message.get(0).text.startsWith("!ping")) {
                chatConnectable.send(ChatSendMethod.of(String.format("@%s PONG!",event.data.userName)));
            }
        });

        chatConnectable.on(UserJoinEvent.class, event -> {
            chatConnectable.send(ChatSendMethod.of(
                    String.format("Hi %s! I'm pingbot! Write !ping and I will pong back!",
                    event.data.username)));
        });
    }
}
```
[/mixer-tab]

[/mixer-tabs]

## Where to Go Next?

- Try changing the above code to go to a different channel page.
- Read our [Chat Reference](reference/chat) for information on how to do other cool things in Chat.
