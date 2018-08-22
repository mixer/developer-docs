# Authenticating with a short code

For convenience, we also provide an alternative authentication method where the user is prompted to enter a temporary code to approve your application. This method makes sense for situations where it is more difficult to embed a browser or require keyboard input from the user.

Your application sends a POST request to the /oauth/shortcode endpoint to receive a short-lived, six-digit code and a longer handle.
Your application asks the user to go to mixer.com/go and enter the code.
Your application polls /oauth/shortcode/check/{handle} with the value of handle to check if the code has been used.
If the user entered the code and accepted your application, you will receive an OAuth authorization code, code, which you will then pass to the /oauth/token endpoint through the standard authorization_code process.
