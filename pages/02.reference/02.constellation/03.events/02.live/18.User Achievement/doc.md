# user:{id}:achievement

Sent when a user achievement earning is updated.

## Payload
|Type|Description|
|----|-----------|
|[AchievementEarning](/rest/index.html#AchievementEarning)|The updated achievement.|

## Example
```json
{
  "id": 70155,
  "earned": false,
  "progress": 0.2703,
  "createdAt": "2016-02-09T09:59:30.000Z",
  "updatedAt": "2017-07-13T16:39:27.000Z",
  "achievement": "followers-plat",
  "user": 696,
  "Achievement": {
    "slug": "followers-plat",
    "name": "Followers Platinum",
    "description": "Have at least ten thousand followers.",
    "sparks": 0
  }
}
```
