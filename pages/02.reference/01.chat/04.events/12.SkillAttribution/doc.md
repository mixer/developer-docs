---
title: 'Skill Attribution'
---

# Skill Attribution

Sent from the server when a skill execution has been triggered by a user.


## Examples

```json
{
    "type": "event",
    "event": "SkillAttribution",
    "data": {
        "id": "6e291af8-fd5d-4c9a-8303-b2232cba294d",
        "skill": {
            "skill_id": "d314fb50-70e9-4f59-96f8-98a5f24737ef",
            "skill_name": "Sticker",
            "execution_id": "f319fb50-70e9-4f59-96f8-98a5f24737ef",
            "icon_url": "https://mixer.com/skill.png",
            "cost": 100,
            "currency": "Sparks"
        },
        "user_name": "USERNAME",
        "user_id": 12345,
        "user_roles": [
            "User"
        ],
        "user_level": 12,
        "user_avatar": "https://uploads.mixer.com/avatar/ed47s4h5-696.jpg",
        "message": {
            "message": [
                {
                    "type": "text",
                    "data": "Hello! ",
                    "text": "Hello! "
                },
                {
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
                    "type": "text",
                    "data": " ",
                    "text": " "
                },
                {
                    "type": "link",
                    "url": "http://mixer.com/mixer",
                    "text": "mixer.com/mixer"
                },
                {
                    "type": "emoticon",
                    "source": "external",
                    "pack": "https://uploads.mixer.com/emoticons/x.png",
                    "coords": {
                        "x": 24,
                        "y": 48,
                        "width": 24,
                        "height": 24
                    },
                    "text": ":coolpartneremote"
                },
                {
                    "type": "image",
                    "text": "image_name",
                    "url": "https://mixer.com/image.png"
                }
            ],
            "meta": {}
        }
    }
}
```
