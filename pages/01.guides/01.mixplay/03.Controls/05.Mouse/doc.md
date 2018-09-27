# Mouse

Mouse input allows you to get mouse events over video.  The mouse input control is pretty simplistic.

## Events
You can subscribe to receive mouse move on:

- `mousedown` (default) - this will only send mouse move events during a mousedown event
- `always` mouse move events are sent on hover and during mousedown
- `never` never send mouse move events.  You will still receive click events.

## Throttling

You can also adjust mouse move event throttling. The `moveThrottle` duration, given in milliseconds, will throttle movement events sent to the game client.  The default is 50ms.
