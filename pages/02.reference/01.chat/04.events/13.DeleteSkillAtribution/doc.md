---
title: 'Delete Skill Attribution'
---
# Delete Skill Attribution

Sent when a skill has been cancelled from chat.

## Examples

```json
{
    "type": "event",
    "event": "DeleteSkillAttribution",
    "data": {
        "moderator": {
            "user_name": "USERNAME",
            "user_id": 12345,
            "user_roles": [
                "Mod",
                "User"
            ],
            "user_level": 12
        },
        "execution_id": "b6661250-3a31-11e6-830a-a1d867c5621f"
    }
}

```
