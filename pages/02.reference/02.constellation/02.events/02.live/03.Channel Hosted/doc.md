# channel:{id}:hosted

Sent when another user hosts the channel with the provided &#x60;id&#x60;. Note that this event is not subject to the spam prevention that the chat message is.

## Payload
|Name|Type|Description|
|----|----|-----------|
|hosterId|[uint](REST_LINK/uint)|The channel ID who just hosted the channel.|
|hoster|[Channel](REST_LINK/Channel)|The channel object who just hosted the channel.|

## Example
```json
{
  "hosterId": 588,
  "hoster": {
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
