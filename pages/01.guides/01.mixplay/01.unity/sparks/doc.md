---
title: 'Sparks'
visible: true
---

If you assign spark costs to buttons, you need to include the following code to have the sparks deduct:

```
    // Use this for initialization
    void Start () {
        MixerInteractive.OnInteractiveButtonEvent += OnInteractiveButtonEvent;
    }

    public void OnInteractiveButtonEvent(object sender, InteractiveButtonEventArgs e)
    {
        e.CaptureTransaction();
    }

```
