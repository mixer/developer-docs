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
link: </api/v2/chat/160788/users?limit=50&showLurkers=False&continuationToken=ABC123>; rel = "next"
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

For more information on the structure of link headers see their rfc [here](https://tools.ietf.org/html/rfc5988).
