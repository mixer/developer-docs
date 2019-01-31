# channel:{id}:skillUsed

Sent when a user uses an ember skill on a channel. This happens as the result of a Skill or MixPlay action that costs Embers.

| Property                |  Type  | Description                                                                |
| ----------------------- | ------ | -------------------------------------------------------------------------- |
| username                | string | The username of the skill user                                             |
| currency                | string | Currently this value is only "embers"                                      |
| amount                  | uint   | The amount of currency spent to execute the skill                          |
| itemname                | uint   | The friendly name of the skill execute                                     |

## Examples

```json
{
	"username": "HappyViewer",
	"currency": "embers",
	"amount": 50,
	"itemname": "Goat Sticker"
}
