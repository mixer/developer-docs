---
title: 'Skill Attribution'
---

# Skill Attribution

Sent from the server when a skill execution has been triggered by a user.

Within the data object's skill object you can see the currency and priced used to use this Skill.

For currencies:
- Embers - Indicates the skill used Embers
- Sparks - Indicates the skill used Sparks

## Examples

```json
{
    "type": "event",
    "event": "SkillAttribution",
    "data": {
        "id": "c2059394-fe40-11e8-8eb2-f2801f1b9fd1",
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
