# channel:{id}:subscriptionGifted

Send when a subscription is gifted to a user within a channel

| Property                | Type | Description                                                                |
| ----------------------- | ---- | -------------------------------------------------------------------------- |
| giftReceiverId          | uint | The userId of the user who received the gift subscription                  |
| gifterId                | uint | The userId of the user who sent the subscription gift                      |

## Examples

```json
{ "giftReceiverId": 123,
  "gifterId": 123
}
```
