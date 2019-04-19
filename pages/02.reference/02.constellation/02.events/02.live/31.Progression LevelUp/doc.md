# progression:{channelId}:levelup

Sent when a user levels up in a channel, to the channel they level upped in.

| Property  | Type             | Description                                                |
| --------- | ---------------- | ---------------------------------------------------------- |
| level     | ProgressionLevel | The channelId of the channel this gift subscription is for. |
| userId    | uint             | The userId of the user who leveled up.                      |
| timestamp | string           | The timestamp of this event.                                |
| total     | uint             | The total exp of this user.                                 |

## ProgressionLevel
| Property    | Type   | Description                            |
| ----------- | ------ | -------------------------------------- |
| nextLevelXp | uint   | The XP required for the next level     |
| currentXp   | uint   | The current XP for the user            |
| level       | uint   | The level of the user                  |
| minXp       | uint   | The minimum xp required for this level |
| color       | string | the color of this level                |
| complement  | string | the color complement for this level    |
| assetsUrl   | string | The asset url for this level           |
| name        | string | The name of the level                  |


## Examples

```json
{ "userId": 1234,
  "timestamp": "2019-04-19T19:45:07Z",
  "total": 120,
  "level": {
    "nextLevelXp": 250,
    "currentXp": 120,
    "level": 2,
    "minXp": 100,
    "color": "#aaafb6",
    "complement": "#66A1F4",
    "assetsUrl": "https://static.mixer.com"
  }
}
```
