---
title: 'Cancel Skill'
---

# Cancel Skill

Calling this chat Method with an active Skill Execution ID will cancel the skill. For example, in the case of beach ball it will halt the beach ball game. Sparks are **not** refunded to the user who triggered the Skill.

## Permissions

You will need a valid OAuth token with the `chat:cancel_skill` Scope to cancel a skill.

## Arguments

1. `executionId` - The Execution id that you'd like to cancel, you can get this from the [`SkillAttribution`](/reference/chat/events/skillattribution) event when a skill is activated.

## Examples

### Request

```json
{
  "type": "method",
  "method": "cancelSkill",
  "arguments": ["8e07a0b0-3a2e-11e6-a9ef-0b7037d1fbdd"],
  "id": 10
}
```

### Response

```json
{
  "type": "reply",
  "error": null,
  "id": 10,
  "data": "Skill execution cancelled."
}
```

