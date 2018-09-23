# user:{id}:notify

Sent when the user receives a new notification. Notifications of the same type will always follow the same structure. This event requires authentication.

## Payload
|Type|Description|
|----|-----------|
|[Notification](/rest/index.html#/Notification)|The new notification.|

## Example
```json
{
  "id": "2e86ca56-671f-4690-9fdb-1050d3c8e90d",
  "userId": 696,
  "trigger": "",
  "type": "follow",
  "sentAt": "2017-07-13T16:21:09.294270964Z",
  "payload": {
    "type": "follow",
    "channelOwnerId": 588,
    "triggeringUser": {
      "level": 12,
      "social": {},
      "id": 314,
      "username": "Mixer",
      "verified": true,
      "experience": 182251,
      "sparks": 204863,
      "avatarUrl": "https://uploads.mixer.com/avatar/yc9q94zf-344.jpg",
      "bio": null,
      "primaryTeam": null,
      "createdAt": "2016-07-20T17:26:50.000Z",
      "updatedAt": "2016-08-17T18:21:07.000Z",
      "deletedAt": null
    }
  }
}
```
