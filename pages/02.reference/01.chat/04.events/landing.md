---
title: 'Events'
process:
    twig: true
twig_first: true
---

# Event
An event is received from the chat server when an event occurs in the channel's chat. This includes chat messages themselves, polls, and role changes. The full list can be found in the Events section below.

| Property | Description                                                        |
| -------- | ------------------------------------------------------------------ |
| type     | Must be event.                                                     |
| vent     | The event name.                                                    |
| data     | Associated event data - may be of any type, specific to the event. |


## Events
{% for p in page.children %}
- [{{p.title}}]({{p.url}})
{% endfor %}
