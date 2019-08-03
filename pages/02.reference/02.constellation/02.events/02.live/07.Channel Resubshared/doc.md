# channel:{id}:resubShared

Sent when a user who has recently resubscribed to the channel chooses to &#x27;share&#x27; their resubscription, by clicking the &#x27;Share&#x27; button within the site chat. This event is preferred to the &#x60;channel:{id}:resubscribed&#x60; event if your integration reacts with some form of celebration, but you should be aware that this event will not fire at all for a resubscription if the user does not choose to share it. The body is identical to that of the &#x60;channel:{id}:resubscribed&#x60; event.

## Payload
|Name|Type|Description|
|----|----|-----------|
|user|[User](/rest/index.html#User)|The user who just subscribed to the channel.|
|since|[IsoDate](/rest/index.html#IsoDate)|The date for when the user first subscribed, from the start of the recurring billing period.|
|until|[IsoDate](/rest/index.html#IsoDate)|The date for when the subscription expires.|
|totalMonths|[uint](/rest/index.html#uint)|The number of months the user has been subscribed since the beginning of time.|

## Example
```json
{
  "user": {
    "level": 5,
    "social": {},
    "id": 696,
    "username": "HypeBot",
    "verified": true,
    "experience": 72,
    "sparks": 1620,
    "avatarUrl": "https://uploads.mixer.com/avatar/ed47s4h5-696.jpg",
    "bio": "",
    "primaryTeam": null,
    "createdAt": "2015-02-19T17:43:07.000Z",
    "updatedAt": "2017-05-25T16:26:14.000Z",
    "deletedAt": null
  },
  "since": "2017-09-25T11:00:00.000Z",
  "until": "2017-12-25T11:00:00.000Z",
  "totalMonths": 3
}
```
