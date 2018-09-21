# user:{id}:resubscribed

Sent when an automatic resubscription to a channel happens.

## Payload
|Name|Type|Description|
|----|----|-----------|
|channel|[uint](/rest/index.html#/uint)|The ID of the channel the user subscribed to.|
|since|[IsoDate](/rest/index.html#/IsoDate)|The date for when the user first subscribed, from the start of the recurring billing period.|
|until|[IsoDate](/rest/index.html#/IsoDate)|The date for when the subscription expires.|
|totalMonths|[uint](/rest/index.html#/uint)|The number of months the user has been subscribed since the beginning of time.|

## Example
```json
{
  "channel": 588,
  "since": "2017-09-25T11:00:00.000Z",
  "until": "2017-12-25T11:00:00.000Z",
  "totalMonths": 3
}
```
