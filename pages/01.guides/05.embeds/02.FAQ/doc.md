# FAQ

# I'm having trouble getting Embeds working with my Android App, What can I do?

Assuming you're using a standard Android WebView try enabling domStorage on it, as our embed uses localstorage to remember some settings.

To do this set the `domStorageEnabled` property on your webview's settings object to true. E.g.:
```Java
myWebView.settings.domStorageEnabled = true
```
