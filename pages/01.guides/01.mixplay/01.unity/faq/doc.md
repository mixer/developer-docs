---
published: true
visible: true
---

**Q**: Can I restyle the MixerDialog prefab?   
**A**: Absolutely. The MixerDialog component is included for your convenience, but you are free to restyle it to match your game’s aesthetic or even build your own. The user just needs a way to enter the code in the Mixer website for authentication so you are free to show that in any way that makes sense.

**Q**: What is the difference between the MixerInteractive.* APIs and the InteractivityManager.* APIs?   
**A**: The MixerInteractive.* APIs are just a thin wrapper around the InteractivityManager.* APIs that them easier to use in Unity. For instance, they automatically calling the InteractivityManager.SingletonInstance.DoWork() method in update and raise events on the game thread so you can handle them without getting a wrong thread exception. They also include conditional checks so they won’t cause build errors on platforms that the Mixer SDK does not support yet.

