---
title: 'Continuation Tokens'
---

# Continuation Tokens

Continuation tokens are a method used for pagination in endpoints starting with V2.

When you make a request to an endpoint that supports continuation tokens you will get the response and a continuation token back. This is usually found in the headers and often included in a link header.

## Example

```HTTP
GET /api/v2/people HTTP/1.1
Accept: application/json, */*
Host: mixer.com
link: </api/v2/chat/160788/users?limit=50&showLurkers=False&continuationToken=ABC123>; rel="next"
[
    {
        "name":"Katie"
    },
    {
        "name":"John"
    }
]
```

## Pagination with Continuation Tokens

To paginate with a continuation token, make the same request again but include the continuation token. The service will respond with the result and an additional continuation token.

Keep making requests using the new continuation token that is returned until the response no longer has a continuation token.

In Pseudocode:

```
FETCH THE ENDPOINT
    IF HTTP STATUS 200
        PROCESS THE RESPONSE BODY
        IF CONTINUATION TOKEN PRESENT
            FETCH ENDPOINT WITH NEW CONTINUATION TOKEN
            REPEAT
```

## Link Headers
Link headers are a standard header format defined in [RFC5988](https://tools.ietf.org/html/rfc5988). They're used to communicate various linking opportunities that a developer may have from a request that has just been made. In the above examples you'll see the `rel` property being set to "next" this means that the next page can be found with the preceding link.

We recommend using software libraries or packages for your environment to parse these instead of rolling your own. You should treat these headers as opaque entities.

A few examples of packages can be found below:
- Node.js - [parse-link-header](https://www.npmjs.com/package/parse-link-header)
- Java - There's a Parser in [`javax.ws.rs.core`](https://docs.oracle.com/javaee/7/api/javax/ws/rs/core/Link.html)
- Do you know of More? [Make a PR to add them!](https://github.com/mixer/developer-docs)
