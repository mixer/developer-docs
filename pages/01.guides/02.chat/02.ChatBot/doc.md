---
title: Creating a ChatBot
oauth: 'chat:connect chat:chat chat:bypass_slowchat'
clientId: true
---
# Creating a Chat Bot

For this tutorial, we will show you how to create a 'ping-pong' chat bot using either our [Node](https://github.com/mixer/client-node) or [Java](https://github.com/mixer/beam-client-java) libraries to communicate with the Mixer API. We'll also take a look at how you can talk to the API directly with [curl](https://curl.haxx.se/) and [wscat](https://github.com/websockets/wscat).

We'll be using OAuth for authentication. In the Node tutorial code below, click "Click here to get your token" to grab a token for the tutorial. You can read more about how OAuth works on our [OAuth page](/reference/oauth)


[mixer-tabs active=1]

[mixer-tab title="Node"]

## Prerequisites
1. Get [NodeJS and NPM](https://nodejs.org/en/) for your platform, we suggest the latest version.
1. [Create a new project with npm.](https://docs.npmjs.com/cli/init)
1. Run `npm install --save @mixer/client-node ws`, this installs the dependencies required for this example to run.

## Writing the Code
Our Node implementation uses promises and async/await. There's a great guide on these concepts [here](https://javascript.info/async).

Before we can connect to the chat servers, we must authenticate with Mixer. In our example we are going to use an implicit OAuth token for authentication. The required OAuth scopes are `chat:connect chat:chat`. If you'd like more information on authentication please read [our page on OAuth](https://dev.mixer.com/reference/oauth).

```js
    // Load in some dependencies
    const Mixer = require('@mixer/client-node');
    const ws = require('ws');

    // Instantiate a new Mixer Client
    const client = new Mixer.Client(new Mixer.DefaultRequestRunner());

    /* With OAuth we don't need to log in. The OAuth Provider will attach
     * the required information to all of our requests after this call.
     * They'll also be authenticated with the user information of the user
     * who owns the token provided.
     */
    client.use(new Mixer.OAuthProvider(client, {
        tokens: {
            access: 'Click here to get your Token!',
            // Tokens retrieved via this page last for 1 year.
            expires: Date.now() + (365 * 24 * 60 * 60 * 1000)
        },
    }));
```
All this code does is get everything setup, after this point we have a file which has an authenticated Mixer user ready to go but we don't actually know who they are. An OAuth token doesn't tell us who owns it. Let's find out who they are, You can add the following code to the bottom of the code from our first section.
```js
    /*
     * Gets our Currently Authenticated Mixer user's information.
     * This returns an object full of useful information about
     * the user whose OAuth Token we provided above.
     */
    async function getUserInfo() {
        // Users Current will return information about the user who owns the OAuth
        // token registered above.
        return client.request('GET', 'users/current')
        .then(response => response.body);
    }
    getUserInfo().then(userInfo => {
        console.log(`Hi, ${userInfo.username}!`);
    });
```
If you run this now you should see the username of the user account who owns the token you supplied. If you don't double check you're supplying the correct token.

If the correct username appears then you can continue. Connecting to chat has several parts:
1. Getting connection information
2. Creating a chat socket and connecting it to a Channel.

Now, we'll write functions for both of these steps and link them together in the code you've written above shortly. Let's start with getting the connection information(step 1):
```js
    /**
     * Gets connection information from Mixer's chat servers
     * @param {Number} channelId The channelId of the channel you'd like to get connection information for.
     * @returns {Promise.<>}
     */
    async function getConnectionInformation(channelId) {
        return new Mixer.ChatService(client).join(channelId).then(response => response.body);
    }
```
We don't need to call this function yet but for reference, when called this function will ask Mixer's servers for some connection information. The response should look something like this:
```json
    {
        "endpoints":[
            "wss://chat1-dal.mixer.com:443",
            "wss://chat2-dal.mixer.com:443"
        ],
        "authkey": "1c0e251998ac7112f42c71a23d4b67b3",
        "permissions":[
            "change_ban",
            "edit_options",
            "change_role",
            "bypass_links",
            "bypass_slowchat",
            "remove_message",
            "clear_messages",
            "timeout",
            "giveaway_start",
            "poll_vote",
            "poll_start",
            "connect",
            "chat"
        ]
    }
```
Of particular importance here is the authentication key(`authkey`), this is needed to authenticate with chat. It is transient and as such only lasts for a few minutes. Don't save or record these, they should be used immediately upon receipt.

Once we have this information we need to create a Chat Socket, this is step 2 from our list above. It creates a chat socket and instructs that socket to start. It also calls the socket's `auth` method to authenticate with the Chat server so that you can Chat.

It uses our previous function `getConnectionInformation` to get the authkey but you do need to supply it with a userId and a channelId. Don't worry about running this yet, we'll piece stuff together after this is done:
```js
/**
* Creates a Mixer chat socket and authenticates
* @param {number} userId The user to authenticate as
* @param {number} channelId The channel id of the channel you want to join
* @returns {Promise.<>}
*/
async function joinChat(userId, channelId) {
    const joinInformation = await getConnectionInformation(channelId);
    // Create a chat socket and "boot" it(start it up and connect it)
    const socket = new Mixer.Socket(ws, joinInformation.endpoints).boot();

    /* Authenticates with the Chat Server, this requires 3 arguments:
     * - The Channel Id of the channel you are connection to.
     * - The user id of the user you are wanting to chat as.
     * - The authentication key received from the server.
     * The order of these arguments is VERY important.
     */
    return socket.auth(channelId, userId, joinInformation.authkey).then(() => socket);
}
```

The last step is to edit our original code, so that it uses these two new functions. We need to change the section of code that starts with `getUserInfo().then(`. Replace it all with:
```js
    // Get our Bot's User Information, Who are they?
    getUserInfo().then(async userInfo => {

        /* Join our target Chat Channel, in this case we'll join
         * our Bot's channel.
         * But you can replace the second argument of this function
         * with ANY Channel ID.
         */
        const socket = await joinChat(userInfo.id, userInfo.channel.id);

        //Send a message once connected to chat.
        socket.call('msg', [`Hi! I'm connected!`]);
        // Add more socket stuff here:
    }):
```

If you run this you should now see your bot in **its own channel**, where it should have sent "Hi! I'm Connected!". If not double check everything over or refer to the bottom of this tutorial where the final code sample is. It'll show you how everything should look.

If this is working correctly then we can move on to making it respond to some commands. We're going to:
1. Make it send a message to anyone who joins greeting them.
2. Make it respond to the command !ping.

In both of these cases place these new sections of code underneath the comment `Add more socket stuff here:` line:

Greeting a user who joins:
```js
    // Greet a joined user
    socket.on('UserJoin', data => {
        socket.call('msg', [`Hi ${data.username}! I'm pingbot! Write !ping and I will pong back!`]);
    });
```

Reacting to the !ping command:
```js
    // React to our !ping command
    // When there's a new chat message.
    socket.on('ChatMessage', data => {
        // Does the message start with !ping
        if (data.message.message[0].data.toLowerCase().startsWith('!ping')) {
            // Respond with pong
            socket.call('msg', [`@${data.user_name} PONG!`]);
            console.log(`Ponged ${data.user_name}`);
        }
    });
```

Run the bot again and you should now see it greeting users who join and responding to the !ping command. You can find our finished code below if you're having trouble piecing things together.

Once you've got it working try:
- Adding more commands
- Sending a whisper

Final Code:
```js
    // Load in some dependencies
    const Mixer = require('@mixer/client-node');
    const ws = require('ws');

    // Instantiate a new Mixer Client
    const client = new Mixer.Client(new Mixer.DefaultRequestRunner());

    /* With OAuth we don't need to log in. The OAuth Provider will attach
     * the required information to all of our requests after this call.
     * They'll also be authenticated with the user information of the user
     * who owns the token provided.
     */
    client.use(new Mixer.OAuthProvider(client, {
        tokens: {
            access: 'Click here to get your Token!',
            // Tokens retrieved via this page last for 1 year.
            expires: Date.now() + (365 * 24 * 60 * 60 * 1000)
        },
    }));

    /* Gets our Currently Authenticated Mixer user's information. This returns an object
     * full of useful information about the user whose OAuth Token we provided above.
     */
    async function getUserInfo() {
        // Users Current will return information about the user who owns the OAuth
        // token registered above.
        return client.request('GET', 'users/current').then(response => response.body);
    }

    /**
     * Gets connection information from Mixer's chat servers
     * @param {Number} channelId The channelId of the channel you'd like to get connection information for.
     * @returns {Promise.<>}
     */
    async function getConnectionInformation(channelId) {
        return new Mixer.ChatService(client).join(channelId).then(response => response.body);
    }

    /**
    * Creates a Mixer chat socket and authenticates
    * @param {number} userId The user to authenticate as
    * @param {number} channelId The channel id of the channel you want to join
    * @returns {Promise.<>}
    */
    async function joinChat(userId, channelId) {
        const joinInformation = await getConnectionInformation(channelId);
        // Chat connection
        const socket = new Mixer.Socket(ws, joinInformation.endpoints).boot();

        return socket.auth(channelId, userId, joinInformation.authkey).then(() => socket);
    }

    // Get our Bot's User Information, Who are they?
    getUserInfo().then(async userInfo => {

        /* Join our target Chat Channel, in this case we'll join 
         * our Bot's channel.
         * But you can replace the second argument of this function with ANY Channel ID.
         */
        const socket = await joinChat(userInfo.id, userInfo.channel.id);

        // Send a message once connected to chat.
        socket.call('msg', [`Hi! I'm connected!`]);

        // Greet a joined user
        socket.on('UserJoin', data => {
            socket.call('msg', [`Hi ${data.username}! I'm pingbot! Write !ping and I will pong back!`]);
        });

        // React to our !ping command
        // When there's a new chat message.
        socket.on('ChatMessage', data => {
            if (data.message.message[0].data.toLowerCase().startsWith('!ping')) {
                // Respond with pong
                socket.call('msg', [`@${data.user_name} PONG!`]);
                console.log(`Ponged ${data.user_name}`);
            }
        });

        // Handle errors
        socket.on('error', error => {
            console.error('Socket error');
            console.error(error);
        });
    });
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
Set up a standard project for your environment and include [beam-client-java](https://github.com/mixer/beam-client-java) as a dependency. You can find information about how to include it in your project on the github page for the client.

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
        MixerAPI mixer = new MixerAPI("Click here to get your Client ID!","Click here to get your Token!");
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

With authentication and connection out of the way, we need to hook up the greet event and the `!ping` command. The greet event is set up by registering an `EventHandler` for the `UserJoinEvent`.

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
        MixerAPI mixer = new MixerAPI("Click here to get your Client ID!","Click here to get your Token!");

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
- Read our [Chat Reference](/reference/chat) for information on how to do other cool things in Chat.
