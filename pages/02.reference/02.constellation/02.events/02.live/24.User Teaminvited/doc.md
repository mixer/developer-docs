# user:{id}:teamInvited

Sent when a user is invited to a team.

## Payload
**Type**: [Team](REST_LINK/Team)
**Description**:The team the user was invited to. This includes the team owner&#x27;s user object as &#x60;owner&#x60;.

## Example
```json
{
  "id": 7,
  "ownerId": 696,
  "token": "mixer",
  "name": "Mixer Team",
  "description": "<p>Mixer team streamers! </p>\n",
  "logoUrl": "https://uploads.mixer.com/team/logo/p0857ky5-7.png",
  "backgroundUrl": "https://uploads.mixer.com/team/background/7k5tsbnx-7.jpg",
  "totalViewersCurrent": 0,
  "createdAt": "2016-04-21T03:22:10.000Z",
  "updatedAt": "2017-06-05T16:38:10.000Z",
  "owner": {
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
  }
}
```
