Event
Event packets are sent when an action occurs which a client as asked to be notified about. Event packets look like the following:

{"type": "event", "event": "math_result", "data": 4}
type is always set to "event"
event is the string name of the event
data is unstructured information associated with the event. Usually this is the same as found within the liveloading/sails event of the same type.