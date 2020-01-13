# channel:{id}:patronageUpdate

Sent when a channel's patronage is updated. This happens as the result of a Skill or MixPlay action that costs Sparks.

| Property                | Type | Description                                                                |
| ----------------------- | ---- | -------------------------------------------------------------------------- |
| patronagePeriodId       | GUID | An ID for the patronage period this event contributes to                   |
| currentMilestoneGroupId | uint | The current group within this patronage period that this channel is in     |
| currentMilestoneId      | uint | The current Milestone within this patronage period that this channel is in |
| patronageEarned         | uint | The total amount of patronage earnt for this period. Measured in Sparks.   |

## Examples

```json
{
	"patronagePeriodId": "eb69c18d-8a3b-44cd-a78f-bec3b8d8914e",
	"currentMilestoneGroupId": 2,
	"currentMilestoneId": 1,
	"patronageEarned": 1721700
}
