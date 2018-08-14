# AttachEmotes

Enable an enhancement to the &#x60;ChatMessage&#x60; event. This will populate the &#x60;meta&#x60; property of the event with a hash containing the emoticon text mapped to the base64 PNG representation.

## Example

First send the request to attach emotes:

#### Request

```json
{
  "type": "method",
  "method": "attachEmotes",
  "arguments": [],
  "id": 12
}
```

#### Response

```json
{
  "type": "reply",
  "error": null,
  "id": 12
}
```

After this the `ChatMessage` event will contain a new property `emoticons` within the `meta` property. Emoticons is a map of emotes to their Base 64 Representation.

For example if a user used: `:)` then meta would contain:

```json
"meta": {
    "emoticons": {
    ":)": "iVBORw0KGgoAAAANSUhE...AAAElFTkSuQmCC"
    }
}
```

This works for partner and verified partner emotes too.
