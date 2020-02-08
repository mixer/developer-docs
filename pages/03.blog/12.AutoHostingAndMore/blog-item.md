---
title: Auto Hosting and More
date: 16:00 02/07/2020
author: probableprime
taxonomy:
    category: blog
    tag: [blog]
---

# Auto Hosting and More

Hey everyone, its been a cool week and I wanted to bring some changes to everyone's attention.

Firstly there's some exciting changes for auto-hosting and developers, in Deek(one of the engineers behind auto-host)'s words:
> If you saw the announcement yesterday, we mentioned Auto-Hosting was being tested natively on Mixer.
>
> Well, one size does not always fit all, so while building this feature, we decided to expand some of the capabilities for you to all leverage :smile:
>
> Starting right now, if you have built your own auto-hosting tool for streamers, we encourage you to send the PUT /api/v1/{channelId}/hostee with auto: true in the body.
>
> If you have an overlay that listens for the hosted events, the results in the channel:{channelId}:hosted constellation event also have this same auto: true passed down with it!
>
> Now you have the opportunity to differentiate between a normal host and auto-hosting, enhancing the experience of your overlay, tools, etc. :slight_smile:
>
> You can find the updated documentation for the PUT to the hostee endpoint here:
https://dev.mixer.com/rest/index.html#channels__channelId__hostee_put
>
> And the updated documentation for the constellation event here:
https://dev.mixer.com/reference/constellation/events/live/channel%20hosted

Additionally, i've re-written our [Node.js ChatBot tutorial](https://dev.mixer.com/guides/chat/chatbot) to hopefully get around the confusing nested promise chain that used to be there. The code is more commented and explicit in its interactions and intentions.

I hope you all have a great weekend.

