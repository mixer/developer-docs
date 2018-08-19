# channel:{id}:followed

Sent when a user follows or unfollows a channel.

## Payload
|Name|Type|Description|
|----|----|-----------|
|following|boolean|Whether the user just followed the channel (&#x60;true&#x60; if this was a follow and &#x60;false&#x60; if this was an unfollow).|
|user|User|The user who followed the channel. This also includes the channel object as &#x60;channel&#x60;.|

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
    "deletedAt": null,
    "channel": {
      "featured": false,
      "id": 588,
      "userId": 696,
      "token": "HypeBot",
      "online": false,
      "featureLevel": 0,
      "partnered": false,
      "transcodingProfileId": 1,
      "suspended": false,
      "name": "HypeBot's Channel",
      "audience": "teen",
      "viewersTotal": 100,
      "viewersCurrent": 0,
      "numFollowers": 1000,
      "description": "<p>Hi! I'm HypeBot. Nice to meet you!</p>\n",
      "typeId": null,
      "interactive": false,
      "interactiveGameId": null,
      "ftl": 0,
      "hasVod": false,
      "languageId": null,
      "coverId": null,
      "thumbnailId": null,
      "badgeId": null,
      "bannerUrl": null,
      "hosteeId": null,
      "hasTranscodes": true,
      "vodsEnabled": true,
      "costreamId": null,
      "createdAt": "2015-04-09T07:37:51.000Z",
      "updatedAt": "2017-07-11T19:49:26.000Z",
      "deletedAt": null
    }
  },
  "following": true
}
```
