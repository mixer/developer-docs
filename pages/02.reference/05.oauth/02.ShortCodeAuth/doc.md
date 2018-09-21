---
title: Shortcode OAuth
---
# Shortcode Authentication

For convenience, Mixer has added an additional alternative authentication method where the user is prompted to enter a temporary code to approve your application.

![Demonstration of the user going through the shortcode flow](./demo.gif)

This method is intended for scenarios where it is difficult to embed a browser or require the user to give keyboard input; you can display a six-digit linking code within your application, and then direct users to [mixer.com/go](https://mixer.com/go) to link their accounts. Alternately, if you have the ability to open a browser, you can add the six digit code to the query string, `https://mixer.com/go?code=ABC123` for example.

## Client Libraries

We have implementations in several languages, head to your project's repository for more usage information. If your language is not listed here, you can make the necessary API calls by hand; check out the [Shortcode Flow Specification](#shortcode-flow-specification) for a complete description of the calls you need to make.

| Language | Repository | Installation |
| ----------- | ----------------------|---------------|-----------------|
| Typescript, Node.js | [GitHub](https://github.com/mixer/shortcode-oauth/tree/master/nodejs) | `npm install --save @mixer/shortcode-oauth` |
| Python | [GitHub](https://github.com/mixer/shortcode-oauth/tree/master/python) | `pip install mixer_shortcode` |
| C# (.NET Standard) | [GitHub](https://github.com/mixer/shortcode-oauth/tree/master/csharp) | `nuget install Microsoft.Mixer.ShortcodeOAuth` |

[mixer-tabs active=0]
[mixer-tab title="Node"]
```javascript
const { ShortCodeExpireError, OAuthClient } = require('@mixer/shortcode-oauth');

const client = new OAuthClient({
  clientId: 'Click here to get your Client ID!',
  scopes: ['interactive:robot:self'],
});

const attempt = () =>
  client
    .getCode()
    .then(code => {
      console.log(`Go to mixer.com/go and enter ${code.code}`);
      return code.waitForAccept();
    })
    .catch(err => {
      if (err instanceof ShortCodeExpireError) {
        return attempt(); // loop!
      }

      throw err;
    });

attempt().then(tokens => console.log(`Token data`, tokens.data));
```
[/mixer-tab]
[mixer-tab title="Python"]
```python
from mixer_shortcode import OAuthClient, ShortCodeAccessDeniedError, ShortCodeTimeoutError
import asyncio

my_client_id = 'Click here to get your Client ID!'
scopes = ['interactive:robot:self']

async def get_access_token(client):
    code = await client.get_code()
    print("Go to mixer.com/go and enter {}".format(code.code))

    try:
        return await code.accepted()
    except ShortCodeAccessDeniedError:
        print("The user denied access to our client")
    except ShortCodeTimeoutError:
        print("Yo, you're too slow! Let's try again...")
        return await get_access_token(client)

async def run():
    async with OAuthClient(my_client_id, scopes=scopes) as client:
        token = await get_access_token(client)
        print("Access token: {}".format(token.access))

asyncio.get_event_loop().run_until_complete(run())
```
[/mixer-tab]
[mixer-tab title="C#"]
```cs
// Create your OAuth client. Specify your client ID, and which permissions you want.
var client = new OAuthClient(
    new OAuthOptions
    {
        ClientId = "Click here to get your Client ID!",
        Scopes = new[] { "interactive:robot:self" },
    });

// Use the helper GrantAsync to get codes. Alternately, you can run
// the granting/polling loop manually using client.GetSingleCodeAsync.
var tokens = await client.GrantAsync(
    code => Console.WriteLine($"Go to mixer.com/go and enter {code}"),
    CancellationToken.None);

// and that's it!
Console.WriteLine($"Access token: {tokens.AccessToken}");
Console.WriteLine($"Refresh token: {tokens.RefreshToken}");
Console.WriteLine($"Expires At: {tokens.ExpiresAt}");
```
[/mixer-tab]
[/mixer-tabs]

# Shortcode Flow Specification

0.  Register an OAuth application on the [Mixer Lab](http://mixer.com/lab). If you’re developing an integration which will run on users’ computers, you should not request a client secret.
1.  Call [POST /oauth/shortcode](/rest/index.html#oauth_shortcode_post) with your `client_id`, `client_secret` (if any) and space-delimited `scope` you want in the request body. This will typically look something like this:

        POST /api/v1/oauth/shortcode HTTP/1.1
        Accept: application/json, */*
        Host: mixer.com

        {
            "client_id": "fooclient",
            "scope": "interactive:robot:self"
        }

        HTTP/1.1 200 OK
        Content-Type: application/json; charset=utf-8

        {
            "code": "8WPVHT",
            "expires_in": 120,
            "handle": "Lc7eBcB78d5gZmqHOajMH3QnmFPrxLGr"
        }

2.  Display the short six-digit `code` to the user and prompt them to enter it on [mixer.com/go](https://mixer.com/go).
3.  Continuously poll [GET /oauth/shortcode/check/{handle}](/rest/index.html#oauth_shortcode_check__handle__get). It will give you one of a few statuses back:

    -   `204 No Content` indicates we’re still waiting on the user to enter the code.
    -   `403 Forbidden` indicates the user denied your requested permissions.
    -   `404 Not Found` indicates that the handle is invalid or expired.
    -   `200 OK` is returned once the user has granted your application access. The response body will contain an `code`.

    A poll which results in a 200 response might look something like this:

        GET /api/v1/oauth/shortcode/check/Lc7eBcB78d5gZ... HTTP/1.1
        Accept: application/json, */*
        Host: mixer.com

        HTTP/1.1 200 OK
        Content-Type: application/json; charset=utf-8

        {
            "code": "r2BTMKCZJJyIuoNE"
        }

4.  The client app should use this code as an OAuth Authorization Code which it can [exchange](https://tools.ietf.org/html/rfc6749#section-4.1.3) for access and refresh tokens. The `redirect_uri` in the exchange request is not required and will be ignored, but you must present a valid `client_id`. A request to exchange the tokens might look something like this:

        POST /api/v1/oauth/token HTTP/1.1
        Accept: application/json, */*
        Content-Type: application/json
        Host: mixer.com

        {
            "client_id": "fooclient",
            "code": "r2BTMKCZJJyIuoNE",
            "grant_type": "authorization_code"
        }

        HTTP/1.1 200 OK
        Content-Type: application/json; charset=utf-8

        {
            "access_token": "pHktaORPcQGejnz48rJQdDWh1AJpevs \
                TWnvKrZW5z2HP3lgEqhp9gzje1YfblIO2",
            "expires_in": 21599,
            "refresh_token": "HzCZSviiueoWsfcT6kh6d4n7SHUnfK \
                cFTRIOyHkgykjaCSIT5ctTqUKNTXfWsxfg",
            "token_type": "Bearer"
        }

5.  The response will include an `access_token`, which you should send in the Authorization header when you connect to Interactive, prefixed with `Bearer` per standard OAuth behavior. In the above example, the client would then connect to Interactive and present the header `Authorization: Bearer pHktaORPcQGejnz48rJQdDWh1AJpevsTWnvKrZW5z2...`.

![Overview of the mechanics of the alternative OAuth flow](/guides/mixplay/protocol/specification/simplified-oauth.svg)
