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
        "user_avatar": "https://uploads.mixer.com/avatar/ed47s4h5-696.jpg"
    }
}
```
