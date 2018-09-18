---
title: 'Live Events'
process:
    twig: true
twig_first: true
---
# Live Events

A live event looks like the following. Do note the socket event names are not liveloading events. Events you ask for over liveloading are always "live" events which contain the liveloading information. This separation is added so that other kinds of events can be distinguished from liveloading events.

```json
{"type": "event", "event": "live", "data": {"channel": "user:1:update", "payload": {"sparks": 10000}}}
```

# Events

|Name|Description|
|----|-----------|
{% for p in page.children %}
| [{{p.title}}]({{p.url}}) | TEST |
{% endfor %}
