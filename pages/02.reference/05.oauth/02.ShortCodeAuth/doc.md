# Short Code Authentication

For convenience, Mixer has added an additional alternative authentication method where the user is prompted to enter a temporary code to approve your application.

This method is intended for scenarios where it is harder to embed a browser or require a user to type.

We recommend using shortcode for:

-   Console Authentication Flows
-   Authentication Flows that are Built into Games

We do not recommend using shortcode for:

-   Web Applications
-   Desktop Applications

# Short Code Flow

-   Your application sends a `POST` request to the `/oauth/shortcode endpoint` to receive a short-lived, six-digit `code` and a longer handle.
-   Your application asks the user to go to mixer.com/go and enter the `code`.
-   Your application polls `/oauth/shortcode/check/{handle}` with the value of handle to check if the `code` has been used.
-   If the user entered the code and accepted your application, you will receive an OAuth authorization code, `code`, which you will then pass to the /oauth/token endpoint through the [standard authorization_code process](https://tools.ietf.org/html/rfc6749#section-4.1.3).
