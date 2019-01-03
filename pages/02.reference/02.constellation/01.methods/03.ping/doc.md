# ping

A ping method should only be used in environments where websocket implementations do not natively support pings, such as browsers.

```json
{"id":1,"type":"method","method":"ping","params":null}
```

A ping reply is a blank reply packet with a matching id.

```json
{"id":1,"type":"reply","result":{},"error":null}
```
