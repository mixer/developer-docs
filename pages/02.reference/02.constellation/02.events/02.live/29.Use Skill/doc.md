# user:{id}:skillUsed

Sent when a user uses an ember skill on a channel. This happens as the result of a Skill action that costs Embers. This event requires authentication.

| Property                |  Type  | Description                                                                |
| ----------------------- | ------ | -------------------------------------------------------------------------- |
| triggeringuserid        | uint   | The ID of the user that executed the                                       |
| currency                | string | Currently this value is only "embers"                                      |
| amount                  | uint   | The amount of currency spent to execute the skill                          |
| skillid                 | string | The ID of the skill executed                                               |

## Examples

```json
{
	"triggeringuserid": 12345,
	"currency": "embers",
	"amount": 50,
	"skillid": "3c8f4d71-1736-4e03-8e7b-13bca00cbf82"
}
