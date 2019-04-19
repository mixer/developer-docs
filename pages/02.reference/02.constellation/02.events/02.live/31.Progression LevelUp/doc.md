# progression:{channelId}:levelup

Sent when a user levels up in a channel, to the channel they ranked upped in.

| Property  | Type             | Description                                                |
| --------- | ---------------- | ---------------------------------------------------------- |
| level     | ProgressionLevel | The current level information of the user who leveled up.  |
| userId    | uint             | The userId of the user who leveled up.                     |
| timestamp | string           | The timestamp of this event.                               |
| total     | uint             | The total Hearts of this user.                             |

## ProgressionLevel
| Property    | Type   | Description                           |
| ----------- | ------ | ------------------------------------- |
| nextLevelXp | uint   | The required xp for the next rank     |
| currentXp   | uint   | The current Hearts for the user       |
| level       | uint   | The rank of the user                  |
| minXp       | uint   | The minimum xp required for this rank |
| color       | string | the color of this rank                |
| complement  | string | the color complement for this rank    |
| assetsUrl   | string | The asset url for this rank           |
| name        | string | The name of the rank                  |

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
