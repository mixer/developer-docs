---
title: OAuth
---

## Introduction

!!! Familiar with OAuth? Checkout our [Quick Details](quickdetails) page and jump right in.

If you want to act as another user in chat, access a user's private resources as part of your app, or just want to use Mixer credentials to authenticate your users, you must use OAuth.

OAuth is a system that replaces traditional user/password combos with applications specific tokens. OAuth is used by many websites around the world and you've most likely already been using it as a User for many years.

With OAuth, your app can request a set of tokens for a certain user with a specific set of permissions. This way your app only gets access to what it needs and all other details will stay hidden. It's a win-win scenario for both your app's functionality, and our users' privacy.

To start using OAuth create an application as described below.

## Registering Your Application

To create an application, head over to your [OAuth Clients page](https://mixer.com/lab/oauth). Once there, click the blue "Create New Client" button and it'll open the creation form.

On this page you'll need to enter some basic details about your application, like its name, website and logo. All of these details will be displayed publicly to users of your app.

## Hosts

The hosts parameter is an important one; it tells us what domains your application can redirect to. This should be set to domains you control. You can use wildcards. For example, `\*.mixer.com`, will allow redirects to all subdomains on `mixer.com`, but not `mixer.com` itself. You can enter multiple hosts by separating them with commas.

## Using OAuth

Mixer follows the [OAuth 2.0 protocol](https://tools.ietf.org/html/rfc6749). Most popular languages will have a library to easily interface with an OAuth server. A partial list of suggested clients can be found on [this website](https://oauth.net/code/).

If you're interested in reading an in depth explanation of how OAuth works head [here](https://aaronparecki.com/articles/2012/07/29/1/oauth2-simplified).

! We **strongly** advise you to use an existing [OAuth client library](https://oauth.net/code/) whenever possible, instead of writing your own implementation. OAuth is hard to securely implement, and the time you spend trying to do so would be better spent building something awesome.

> To be clear, OAuth 2.0 at the hand of a developer with deep understanding of web security will likely result is a secure implementation. However, at the hands of most developers – as has been the experience from the past two years – 2.0 is likely to produce insecure implementations.
> Eran Hammer - Creator of [Hapi](https://hapijs.com/)

To use our OAuth implementation and obtain tokens for a user, you'll just need the URLs which can be found on the [Quick Details](quickdetails) page and your token from the [OAuth Clients page](https://mixer.com/lab/oauth).

## Using Tokens

Once you have tokens you should use them as Bearer Tokens within your requests. To do this, simply add a header to each of your requests:

`Authorization: Bearer <token>`

Our use of Bearer tokens follows the [Bearer Token Spec](https://tools.ietf.org/html/rfc6750).

## Scopes

To carry out operations while authenticating with OAuth tokens you will need to ensure that your requested token contains the appropriate OAuth Scopes. You can view a list of scopes on our [scopes page](/reference/oauth/scopes).

# Reauthorizing an Application

If a user is sent to the Authorize endpoint and they have already granted the permissions to the application before, Mixer will automatically skip the approval page for convenience, so the user does not have to approve again. In some cases this might be undesirable, and you can force the user to reapprove the application every time by passing `approval_prompt=force` in the Authorize endpoint's URL.
