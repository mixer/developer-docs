---
title: Patching Models from Live Updates
---
# Patching Models from Live Updates

With LiveUpdate events via Constellation it is common for the event payload to not contain the entire resource/model's properties.

For example when a channel goes online you will get a `channel:<id>:update` event that has a payload similar to this:
```json
{
    "online":true
}
```

This is because this event is meant to be treated like a patch operation on an existing model.

## Handling Patches

With this in mind to handle a patch-style event your application/code should do the following:
1. Use Mixer's REST API to fetch the Model in it's current state and cache this within Memory
2. Listen for Update events on this Model
3. When an update event comes in for the model, patch the properties onto the existing cached model.

For example let's say you had Mixer's Channel in a cache:
```json
{
    "id":123,
    "token":"Mixer",
    "online":false,
    .... rest of model
}
```

When the above channel update event comes in you would merge the properties into Mixer's Channel Object.

```json
{
    "id":123,
    "token":"Mixer",
    "online":false, => true
    .... rest of model
}
```
Which would result in the new updated Channel Model:

```json
{
    "id":123,
    "token":"Mixer",
    "online":true
    .... rest of model
}
```

Additionally, the same can be said for any sub-objects within a Model, these should be merged across to, from the update payload.

In many programming languages this is known as a deep merge.

