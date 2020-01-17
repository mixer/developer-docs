---
title: 'Application Identification'
---
# Application Identification

With many applications and developers consuming Mixer's APIs and SDKs it can be difficult for the Mixer team to diagnose and help you when there's an issue. But did you know there's a way to help Mixer in this regard?

Its very simple you just need to include some form of Identification with your requests / connections. In some cases these are required by the service or endpoint that you're connecting to but it also doesn't hurt to include them with all requests. In the future we **MAY** require this but right now this is an **optional** enhancement that you can make to your requests.

Below you'll find guidance on how to do this for each area of Mixer's developer platform.

## REST, Chat & Constellation

For REST and Chat you can identify your application in a number of ways:
1. Include a standard `User-Agent` header with a value that matches your Application / Company name. For example Mixer might use "Mixer Mobile App / 1.2.3" for version 1.2.3 of its mobile application. You can read more about User-Agent headers [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent?target=_blank)
1. Specify a `Client-ID` header with a value that matches your OAuth Application's Client ID


## MixPlay
Due to the nature of how MixPlay works there is no need to carry out any additional steps to identify a MixPlay Application.
