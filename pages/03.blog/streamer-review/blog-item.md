---
title: Streamer Review API & Developer Information
date: 16:00 08/29/2019
author: rifox
taxonomy:
    category: blog
    tag: [blog]
---

As mentioned on our [blog](https://blog.mixer.com/2019/08/26/community-update-streamer-review-and-more/). We're launching a new streamer review system which requires all non-partnered streamers to go through a process before they can stream on Mixer.

# What does this mean for Developers of Applications like OBS and XSplit?

When this feature becomes mandatory on 09/04 all existing stream keys for users who have not been through the review process will be revoked. Until the user carries out the Streamer Review flow they will not have a stream key.

In endpoints where one would usually be included it will be omitted.

# What about OAuth?

If your application requests the `channel:streamKey:self` scope for a user that has not completed the Streamer Review flow then the OAuth Process will not be able to be completed. The user will be halted on the "Authorize" screen where a message will be displayed letting them know where to go to complete the flow. No tokens will be generated.

# What about existing Stream Keys I have saved or cached?

These will be reset/invalidated and when your application tries to use them the standard "invalid streamkey" message will be returned.

If you have further questions please [reach out to us](mailto:mixerdevinfo@microsoft.com).
