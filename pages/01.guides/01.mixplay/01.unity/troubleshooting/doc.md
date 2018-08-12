---
title: 'Troubleshooting'
visible: true
---

# General Issues
**Compile errors when importing the Mixer SDK**   
You may see errors like:
```
"System.Exception: Package directory not found: \.nuget\packages\System.Private.DataContractSerialization\4.10".
```
To fix it, you can close and open Unity.

**InteractivityState never changes to InteractivityEnabled**   
If you want to connect to the interactivity service, you need to enter your OAuth Client ID and Version ID in the Mixer Editor. You can get to the Mixer Editor by going to the Mixer menu and selecting Mixer Editor.

Also make sure the code that is calling MixerInteractive.GoInteractive is getting called.

**Mixer code dialog won’t disappear or your game is not receiving input messages**   
Unity pauses automatically when focus is not on the editor. To fix this, you can go to the Mixer Editor and click the "Run in background" button. You can get to the Mixer Editor by going to the Mixer menu and selecting Mixer Editor.

**Channel page looks connected, but the SDK is not connected**   
If you are still connected to your channel page in between pressing play and pause in the Unity editor, the UI will appear as thought you are connected. This is because the SDK will not immediately disconnect after exiting play mode in the editor. It will eventually disconnect. If you want it to disconnect immediately, you need to call MixerInteractive.StopInteractive() from your game.

**Connected elsewhere**   
If you get a message about being connected from another client, close Unity and your browser and try again.

**Control is missing**   
Your control may be missing because you need to add the control to each of the Small Grid (phones), Medium Grid (Tablets) and Large Grid (Desktops) layouts in Interactive Studio. For instance, if you only added your control to the Large Grid (Desktops) and you open your browser not full screen, depending on the size of your monitor you may get one of the other views that does not have your control in it. 

**Cannot connect**   
If it is not one of the above issues, the next most common cause is a mismatch between your OAuth Client ID, Project Version ID and the user you are logged in as. Make sure the OAuth Client ID is not associated with the Project Version ID. You can find this information in the Interactive Studio ([https://mixer.com/i/studio](https://mixer.com/i/studio)). Additionally, you must be logged in as the Mixer user who created the Interactive project when you go to [http://mixer.com/go](http://mixer.com/go).

**Duplicate reference build errors**   
If you see a build errors like: 
```
error CS1703: An assembly `Newtonsoft.Json' with the same identity has already been imported. Consider removing one of the references
```
This means there are two copies of the DLL. The Mixer SDK uses Newtonsoft.Json and WebSocketSharp.dll. If there are duplicate DLL reference errors, you can select one of the DLLs and in the inspector exclude all platforms so that only one version of the DLL is included.

**eTag mismatch**  
If you see an error like the following: 
```
{"id":7,"type":"reply","error":{"code":4005,"message":"Etag mismatch","path":"<value>"}}
```
Please create a new issue on this GitHub repo. Etags are managed by the service and the SDK so if there is a mismatch it is most likely not a bug in your code. Also make sure to download the latest mixer.unitypackage from the releases section in this repo.

**Switching Mixer accounts for a Desktop build and don't have the Unity editor**   
For desktop builds, let's say you have entered a short code for one user, but now you want to use a different user. If you are on a computer with the Unity editor, you can go to the Mixer Editor, the **Advanced** section. You can view the Mixer editor by going to the Unity menu **Mixer** > **Open Mixer Editor**. There is a button labeled **Clear saved login information**. Clicking this button will clear the login information for the previous user.

If you are on a different computer that doesn't have the Unity editor, you can achieve the same effect by:
1. Open the start menu
2. Type “cmd”
3. Open the “Command Prompt” program
4. Type this in the command prompt: reg delete HKEY_CURRENT_USER\Software\MixerInteractive\Configuration
5. At the confirmation prompt, type: yes
6. Press enter
7. You can verify it’s deleted by typing: reg query HKEY_CURRENT_USER\Software\MixerInteractive\Configuration

If it’s removed, then you will see the text: ERROR: The system was unable to find the specified registry key or value.

# Troubleshooting Xbox One       
**Make sure you are signed in**    
Mixer requires a user to be signed in to Xbox Live. If a user is not signed in, the SDK will not be able to connect to Mixer.

**Make sure the signed in account has access to the project** 
The signed in account must have access to the project. The easiest way to do this is using [share codes](https://github.com/mixer/interactive-unity-plugin/wiki/Using-Share-Codes) (then you don't have to worry about matching accounts).

**Don't use Fiddler**     
Fiddler causes parts of the Xbox One operating system to not function correctly. You may get errors unrelated to the Mixer plugin or your code if it is enabled.

**Make sure your channel is disconnected**     
There are operating system behavior where Mixer may still think you are connected to your channel, even though your game is terminated. The only way to ensure you are not connected to your channel, is to go to your channel on the Mixer website and verify it says you are "offline". The most sure way to do this is to reboot the Xbox One console and wait roughly 15 seconds.

**Using the debugger**     
There is a known issue with Unity, debugging and native code. Mixer uses native code for Xbox One support. Unfortunately, threads will intermittently freeze which can cause errors unrelated to your code or the Mixer SDK. That is not to say don't use the debugger, but if you do happen to run into a Mixer issue that only repros while you are in the debugger this could be the cause.

**Advanced troubleshooting**       
For advanced troubleshooting, you can turn on verbose logging. This can be done in the Mixer Editor, in the **Advanced** section. You can view the Mixer editor by going to the Unity menu **Mixer** > **Open Mixer Editor**.

**Other issues**   
If you find issues, you can report them on the Git repo: [https://github.com/mixer/interactive-unity-plugin/issues](https://github.com/mixer/interactive-unity-plugin/issues)
You can submit feedback at: [https://feedback.mixer.com](https://feedback.mixer.com)