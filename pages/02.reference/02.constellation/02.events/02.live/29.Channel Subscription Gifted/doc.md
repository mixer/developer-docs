# channel:{id}:subscriptionGifted

Send when a subscription is gifted to a user within a channel

| Property             | Type   | Description                                               |
| -------------------- | ------ | --------------------------------------------------------- |
| giftReceiverId       | uint   | The userId of the user who received the gift subscription |
| gifterId             | uint   | The userId of the user who sent the subscription gift     |
| giftReceiverUsername | string | The username of the Subscription Gift Receiver            |
| gifterUsername       | string | The username of the Subscription Gift Giver               |

## Examples

```json
{ "giftReceiverId": 123,
  "gifterId": 123,
  "giftRecieverUsername": "username",
  "gifterUsername": "username"
}
```
