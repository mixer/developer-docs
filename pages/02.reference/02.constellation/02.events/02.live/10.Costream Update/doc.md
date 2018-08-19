# costream:{id}:update

Sent when a costream model is changed (e.g. when a streamer joins/leaves the costream, or when the costream&#x27;s settings have been changed).

## Payload
|Type|Description|
|----|-----------|
|[Costream](REST_LINK/Costream)|The full costream model after the costream has been changed.|

## Example
```json
{
  "channels": [
    {
      "id": 588,
      "token": "HypeBot",
      "userId": 696
    },
    {
      "id": 314,
      "token": "Mixer",
      "userId": 344
    }
  ],
  "capacity": 4,
  "layout": {
    "name": "grid",
    "order": [
      588,
      314
    ]
  },
  "startedAt": "2017-07-13T16:44:15.684Z",
  "id": "2e86ca56-671f-4690-9fdb-1050d3c8e90d"
}
```
