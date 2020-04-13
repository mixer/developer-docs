---
title: 'Application Identification'
---
# Application Identification

Many applications and developers consume Mixer's APIs daily. To assist us in locating information about potential issues you may have we advise that you identify your application or platform to us through Application Identification.

To do this you need to include some form of Identification with your requests / connections. In some cases these are required by the service or endpoint due to the scenario you are using, for example OAuth Authentication, but in other cases this is an **optional** enhancement which will enable us to help you better.

In the future Mixer's APIs may change and require you to include these and as such it is our recommendation that you add these identifiers wherever possible whenever you can. Should these become required in the future we will notify you before this happens.


For each area of Mixer there is a slightly different recommendation, please see the items below for guidance on each area:

## REST, Chat & Constellation

For REST, Chat and Constellation the identification method is the same:
1. Include a standard `User-Agent` header with a value that matches your Application / Company name. For example Mixer might use "Mixer Mobile App / 1.2.3" for version 1.2.3 of its mobile application. You can read more about User-Agent headers [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent?target=_blank). This can be used for us to help you identify what area of your products or services are experiencing issues.
1. If you're using OAuth you can specify a `Client-ID` header with a value that matches your OAuth Application's Client ID. This will identify to us who you are as we can lookup your OAuth Application information from your Client ID.


## MixPlay
Due to the nature of how MixPlay works there is no need to carry out any additional steps to identify a MixPlay Application. A standard connection will provide us with all of the information about your application that we require.
