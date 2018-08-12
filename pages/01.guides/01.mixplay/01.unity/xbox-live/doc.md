---
title: 'Xbox Live'
visible: true
---

This page is meant to provide useful information to those working with Mixer and Xbox Live within the Unity SDK.

### Using Xbox Test accounts with Mixer
To test with accounts from your sandbox, you can add this query parameter: “sandbox=<your sandbox here>” to the URL. For instance: https://mixer.com/?sandbox=xdks.1

This will allow you to log into Mixer with your Xbox Live test accounts.

To log in:
1. Click the Login button in the upper, right.
2. In the dialog, click the **Log in with your Microsoft account** button.
3. This will show a second dialog where you can enter your credentials for your Xbox Live test account.

If you encounter this error message "There was an error logging you in: Content isolation not authorized." make sure you are not logged into Mixer in another tab or browser with a non-sandbox account. The easiest way to get around this is to open an in-private browser session.

### Duplicate DLL issues
If you are using the Unity plugin for Xbox Live, you will have issues with duplicate DLLs. 

The error will look like this for the Editor:

```   
error CS1703: An assembly `Newtonsoft.Json' with the same identity has already been imported. Consider removing one of the references
Assets/MixerInteractive/Source/DLLs/Win32/Newtonsoft.Json.dll (Location of the symbol related to previous error)
Assets/Xbox Live/Libs/Unity/Newtonsoft.Json.dll (Location of the symbol related to previous error)

Compilation failed: 1 error(s), 0 warnings
```   

If you build for UWP, you will get this error:

```    
Plugin 'Newtonsoft.Json.dll' is used from several locations:
 Assets/Xbox Live/Libs/UWP/Newtonsoft.Json.dll would be copied to <PluginPath>/Newtonsoft.Json.dll
 Assets/MixerInteractive/Source/DLLs/UWP/Newtonsoft.Json.dll would be copied to <PluginPath>/Newtonsoft.Json.dll
Please fix plugin settings and try again.

UnityEditor.Modules.DefaultPluginImporterExtension:CheckFileCollisions(String)
UnityEditorInternal.PluginsHelper:CheckFileCollisions(BuildTarget) (at C:/buildslave/unity/build/Editor/Mono/Plugins/PluginsHelper.cs:25)
UnityEditor.HostView:OnGUI()
```    

The simplest way to solve this problem is to disable the duplicate DLLs from the Xbox Live Plugin. Here's how to do that:
1. Go to Assets/Xbox Live/Libs/Unity and select Newtonsoft.Json.dll.
2. In the inspector, uncheck the checkbox for **Editor** and click Apply. You want to make sure none of the boxes are checked. This will disable the duplicated dll.
3. Go to Assets/Xbox Live/Libs/UWP and select Newtonsoft.Json.dll.
4. In the inspector, uncheck the checkboxes for **Standalone** and **WSAPlayer** and click **Apply**. You want to make sure none of the boxes are checked. This will disable the duplicated dll.

### Broadcasting from your DevKit
Note that you don't need to broadcast to test interactive. If you're broadcasting from your DevKit you'll be automatically placed in Test Stream mode.


### Certification    
There are no certification requirements for Mixer. Mixer functionality will not be tested during certification.