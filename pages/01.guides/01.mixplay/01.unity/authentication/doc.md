---
title: 'Authentication'
visible: true
---

Authentication to Mixer is different depending on where your game is running. The table below will help you understand how authentication works on each platform.

| Platform                      | Authentication Method                 | Notes  |
|-------------------------------|---------------------------------------|---|
| Unity Editor                  | Uses a short code                     | You can use the provided short code dialog prefab as is, customize it or create your own  |
| Windows Standalone (Desktop)  | Uses a short code                     | You can use the provided short code dialog prefab as is, customize it or create your own  | 
| Xbox One                      | Uses the signed in Xbox Live account  | With Xbox One builds, in practice there are no cases where an Xbox One user is playing the game but not signed in.  |
| Windows Store                 | Uses the signed in Xbox Live account, but falls back to using a short code if there is no Xbox Live user signed in.  | There have been some reported issues so if you encounter issues, let us know by either logging a new issue or commenting on an existing one  |