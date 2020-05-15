---
title: 'FAQ'
---

# Frequently Asked Questions

### What does Mixer's Test Streaming protect?

Whilst enabled, Test Streaming will protect the following items whilst it is enabled:
- Your Channel's Video Broadcast
- Your Channel's Chat Activity

### Which platforms support Test Streams?

Test Streams are currently supported on:
- Desktop Web
- Mobile Web
- Xbox

### Does Test Streaming work with Native Broadcasting on Windows 10 and Xbox?

Yes!

### Do Test Streams work with Co-Streaming?

Not at this time.

### How does Test Streaming work with Xbox Developer Accounts / Developer Kits?

To test with accounts from your sandbox, you can add this query parameter: `sandbox=` to the URL. For instance: `https://mixer.com/?sandbox=XDKS.1`

**IMPORTANT: Sandbox IDs are case sensitive!** Note: the uppercase in "XDKS.1". "xdks.1" will not work!

This will allow you to log into Mixer with your Xbox Live test accounts.

To log in:

1. Click the Login button in the upper, right.
1. In the dialog, click the Log in with your Microsoft account button.
1. This will show a second dialog where you can enter your credentials for your Xbox Live test account.

If you encounter this error message `There was an error logging you in: Content isolation not authorized.` make sure you are not logged into Mixer in another tab or browser with a non-sandbox account. The easiest way to get around this is to open an in-private browser session.

If your Xbox Account is **not** in the following Sandboxes:

- RETAIL
- MSFT.1
- MSFT.DEBUG
- WJPTRC.0

Then when broadcasting your account will automatically be put into test stream mode. This will protect your project.

### Can I use Test Streaming for a Private or Ticketed Event/Conference/Presentation?

No, this is not supported. Mixer is not a platform for Private content.

### I'm a Mixer Partner can I use Test Streaming?

Yes, read [this article for more information](https://watchbeam.zendesk.com/hc/en-us/articles/360000169791-Test-Streams-for-Partners).


### Can the link to access the test stream be generated before I go Live?

No, this is unfortunately not possible.
