# channel:{id}:currencySpent

Sent when a user spends currency on a channel. This currently only gets triggered when Embers are spent on a channel, in the future other transactional items will cause events to be sent on this channel. This event does not require authentication.

| Property         | Type   | Description                                                                     |
| ---------------- | ------ | ------------------------------------------------------------------------------- |
| triggeringUserId | uint   | The ID of the user that executed this currency spend                            |
| currencyType     | string | The currency type of this currency spend, currently this value is only "embers" |
| price            | uint   | The amount of currency spent in this transaction                                |
| itemId           | string | The ID of the item purchased                                                    |

## Examples

```json
{
        "triggeringUserId": 12345,
        "currency": "embers",
        "amount": 50,
        "itemId": "3c8f4d71-1736-4e03-8e7b-13bca00cbf82"
}
```
