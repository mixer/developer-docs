# Ad-Break Trigger API (Beta)

**Trigger an ad-break on a channel.** Ad-break includes a single ad up to 30s long. Ad-break can be triggered up to 2 times every 15 minutes (see errors below). Ad-Break can only be run on an online channel. Ad-Break is not supported during co-streams or while hosting a channel.

## Endpoint

POST `/api/v2/ads/channels/{channelId}`

### Authentication

OAuth required for scope `chat:ad_break`

### Request Body

```json
{
    "requestId": "00000000-0000-0000-0000-000000000000"
}
```

-   `requestId` is any random GUID.

### Response

| Response | Description | Example |
| ----------- | ----------- | ----------- |
| 200 | Success | `{ "id": {ChannelID}}` |
| 400 | Bad Request (see chart below for error codes) | `{"errorCode": code, "errorMessage": "string"}` |
| 401 | Unauthorized | N/A |
| 403 | No permission to run ad | `{"errorCode": 42023, "errorMessage": "[Debug] The OAuth token is missing the chat:ad_break scope."}` |
| 404 | Empty Response Body | N/A |
| 429 | Throttled due to ad limit (2 every 15 minutes) | N/A |

#### 400s Error Code Breakdown

| Error Code | Description | String |
| ----------- | ----------- | ----------- |
| 42020 | Channel offline | "[Debug] Oops! You can't run ads while offline." |
| 42002 | Channel not found | "[Debug] Channel not found." |
| 42008 | Channel is co-streaming | "[Debug] Oops! You can't run ads while co-streaming." |
| 42007 | Channel is hosting someone else| "[Debug] Oops! You can't run ads while hosting." |
| 42004 | Feature not supported for channel | "[Debug] Oops! The ad break feature is not enabled for this channel." |
| 42018 | Deserialization Failure | "[Debug] Invalid channelId in path" |
| 42012 | Invalid Path Variable | "[Debug] The request body is invalid."|
