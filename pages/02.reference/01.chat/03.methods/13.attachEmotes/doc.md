# AttachEmotes

Enable an enhancement to the `ChatMessage` and `SkillAttribution` events. This will populate the `meta` property of the event with a hash containing the emoticon or image text mapped to the base64 PNG representation.

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

After calling `attacheEmotes`, `ChatMessage` events will contain new properties within the `meta` segment of the message:
- `emoticons` is a map of emotes to their Base 64 Representation.
- `images` is a map of images to their Base 64 Representation.

For example if a user used: `:)` then meta would contain:

```json
"meta": {
    "emoticons": {
    ":)": "iVBORw0KGgoAAAANSUhE...AAAElFTkSuQmCC"
    }
}
```

This works for partner and verified partner emotes too.

Here's a full `ChatMessage` event packet with an image and an emote:

```json
{
	"type": "event",
	"event": "ChatMessage",
	"data": {
		"channel": 143,
		"id": "f1e092c0-9c8c-11e6-91dd-55a101b33e4e",
		"user_name": "Jamy",
		"user_id": 162,
		"user_roles": [
			"Owner"
		],
		"message": {
			"message": [{
					"type": "emoticon",
					"source": "builtin",
					"pack": "default",
					"coords": {
						"x": 96,
						"y": 0,
						"width": 24,
						"height": 24
					},
					"text": ":)"
				},
				{
					"type": "image",
					"text": "image_name",
					"url": "https://mixer.com/image.png"
				}
			],
			"meta": {
				"emoticons": {
					":)": "iVBORw0KGgoAAAANSUhE...AAAElFTkSuQmCC"
				},
				"images": {
					"image_name": "iVBORw0KGgoAAAANSUhE...AAAElFTkSuQmCC"
				}
			}
		}
	}
}
```
