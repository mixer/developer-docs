---
title: 'Known Issues'
visible: true
---

**Interactive Studio UI doesn’t update**   
You may see rare cases where Interactive Studio appears to be connected, but shouldn’t be or vice versa. When in doubt, refresh the browser and the state will be fixed.

Also note: If you make edits in Interactive Studio while your game is currently connected, you will need to reconnect from your game to see the updates.

**Switching the Mixer interactive project**   
The SDK currently has issues with saving project information (OAuth Client ID and Project Version ID) for one project and then changing it to another project. As a workaround, you can delete the file: \Assets\Streaming Assets\interactiveconfig.data and that will clear the previous project’s cached data.

**.Net 4.6 support**  
.Net 4.6 is experimental in the Unity editor. The SDK doesn't explicitly not work, but you may find issues with .Net 4.6. We don't officially support Unity on .Net 4.6 at the moment. If you need .Net 4.6 support, open an issue to let us know.