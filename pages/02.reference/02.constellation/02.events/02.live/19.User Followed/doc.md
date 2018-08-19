# user:{id}:followed

Sent when a user follows or unfollows a channel.

## Payload
|Name|Type|Description|
|----|----|-----------|
|following|[boolean](REST_LINK/boolean)|Whether the user just followed the channel (&#x60;true&#x60; if this was a follow and &#x60;false&#x60; if this was an unfollow).|
|channel|[Channel](REST_LINK/Channel)|The channel that the user just followed.|

## Example
```json
{
  "following": true,
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
}
```
