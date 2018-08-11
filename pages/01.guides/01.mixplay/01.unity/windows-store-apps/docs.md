---
title: 'Windows Store Apps'
visible: true
---

When building for Windows Store apps, make sure to:

**Run in the Editor once**   
You need to run your game in the Editor at least once. This will save relevant configuration information from the editor.

**InternetClient capability**   
If you don't already have the internetClient capability you will need to add it. Here is how to do that:
1. Go to File > Build Settings...
2. Select Windows Store in the platforms list.
3. Click the Player Settings... button.
4. Expand the Publishing Settings.
5. Scroll to the bottom and check the InternetClient checkbox.

**The first user is assumed to be the broadcaster**    
The SDK will always pick the first signed in user to authenticate with the Mixer service. If this is an issue for your game, open an issue and we can address it. This may cause an issue if you are doing testing and the first user is not an account with access to the Interactive Project.