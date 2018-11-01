# channel:{id}:skill

Sent when a skill is executed on a channel. The payload varies depending on the Skill being executed. As we add new Skills check back here for updated payloads.

| Property         | Type   | Description                                                                                                                      |
| ---------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------- |
| channelId        | uint   | Channel Id the Skills is being executed on                                                                                       |
| skillId          | GUID   | Unique identifier for the Skill                                                                                                  |
| executionId      | GUID   | Id for this execution of the Skill. Can be used to cancel.                                                                       |
| manifest         | Object | An object containing technical details on how to execute the Skill including Skill resources. Updated documentation coming soon! |
| parameter        | Object | Any parameters asociated with the Skill                                                                                          |
| socketUrl        | string | Used to provide a socket for users to connect to when the Skill is a rally e.g. Beachball                                        |
| triggeringUserId | uint   | User Id of the user who executed this skill                                                                                      |


## Examples

```json
{
	"channelId": 53411,
	"skillId": "f3598535-7fcd-4287-9ad4-b915f418af0a",
	"executionId": "538f43b7-ba88-47bf-885c-80a76dd86845",
	"manifest": {},
	"parameters": {},
	"socketUrl": null,
	"triggeringUserId": 46205
}
