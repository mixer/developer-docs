# channel:{id}:resubscribed

Sent when an automatic resubscription to a channel happens.

## Payload
|Name|Type|Description|
|----|----|-----------|
|user|[User](REST_LINK/User)|The user who just subscribed to the channel.|
|since|[IsoDate](REST_LINK/IsoDate)|The date for when the user first subscribed, from the start of the recurring billing period.|
|until|[IsoDate](REST_LINK/IsoDate)|The date for when the subscription expires.|
|totalMonths|[uint](REST_LINK/uint)|The number of months the user has been subscribed since the beginning of time.|

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
