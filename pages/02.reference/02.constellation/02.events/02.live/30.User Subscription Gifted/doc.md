# user:{id}:subscriptionGifted

Sent to the **user who gifted the subscription** when a subscription is gifted to a user within a channel.

| Property             | Type   | Description                                                 |
| -------------------- | ------ | ----------------------------------------------------------- |
| channelId            | uint   | The channelId of the channel this gift subscription is for  |
| giftReceiverId       | uint   | The userId of the user who received the gift subscription   |
| giftReceiverUsername | string | The Username of the user who received the gift subscription |

## Examples

```json
{
  "channelId": 123,
  "giftReceiverId": 123,
  "giftReceiverUsername": "username"
}
```
