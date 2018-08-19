# user:{id}:teamRemoved

Sent when a user leaves a team or rejects its invite.

## Payload
**Type**: [Team](REST_LINK/Team)
**Description**:The team the user left.

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
  "updatedAt": "2017-06-05T16:38:10.000Z"
}
```
