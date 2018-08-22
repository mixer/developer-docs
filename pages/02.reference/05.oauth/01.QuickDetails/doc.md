# Quick details

If you're familiar with OAuth, feel free to dig in! You can register your OAuth application on your [OAuth Clients page](https://mixer.com/lab/oauth). After getting a Client ID there, you can use provide these endpoints to your OAuth client library to dig in:

-   Authorize endpoint: `https://mixer.com/oauth/authorize`
-   Token endpoint: `https://mixer.com/api/v1/oauth/token`

## Token Expiry
| Type                                                                | Expiry Time | Notes                                                                                 |
| ------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------- |
| [Access Token](https://tools.ietf.org/html/rfc6749#section-1.4)     | 6 Hours     |
| [Refresh Token](https://tools.ietf.org/html/rfc6749#section-1.5)    | 1 Year      | This is single use. If used, a new refresh token is issued with the new access token. |
| [Implicit Token](https://tools.ietf.org/html/rfc6749#section-1.3.2) | 1 Year      | These are only given out by an Implicit Grant                                         |

# Scopes

For a list of scopes see our [scopes page](scopes).
