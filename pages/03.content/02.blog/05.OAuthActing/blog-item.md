---
title: Changes to OAuth and Resource Access
date: 18:00 04/26/2019
author: rifox
taxonomy:
    category: blog
    tag: [blog, oauth, client, deprecations]
---
# Changes to OAuth and Resource Access

With Mixer's OAuth flows it's easy for you as a developer to request and receive permissions to carry out operations on a user's account or channel. We're always excited to see the tools and utilities that are being created by our Developer Community.

However, we've recently been made aware of an unintended side effect of our OAuth Systems. When receiving an OAuth Token, this token enabled you to act as the user who's owns the returned token on other resources that this user has access to. The most common cases of this are:

- When the user is a channel editor on another channel than their own
- When the user is a moderator in a channel other than their own

To resolve this we need to make some changes to OAuth. We're going to start preventing this above use case unless a new OAuth Scope is requested on the OAuth Token. This new scope is `user:act_as` its listed on [our OAuth Scope Page](/reference/oauth/scopes).

## What we're doing to help.
We recognize this is a sudden change and as such we're grandfathering existing tokens into this new system by adding the `user:act_as` scope on our end.

We'll be doing this from 2019-04-24 until 2019-05-13 which gives you 2 weeks to make the change below.

Grandfathered tokens that are refreshed will keep the new scope so this is only for **new** authentications with your OAuth Client.

## What you need to do.

If you're operating a cloud based bot or services which uses a **single** user account's **OAuth Token** to moderate or edit **multiple other channels**, please ensure that when requesting a new token that you add `user:act_as` to the scopes requested.



