---
title: 'Button'
---
# Button

A button is a rectangular, interactive control within a scene. [Game Clients](/guides/mixplay/interactive-overview#the-game-client) receive events when participants interact with a button.


- `mousedown` event is sent when a button is pressed by a participant
- `mouseup` event is sent when a button is released by a participant
- `keydown` event is sent when the key (specified via key code on the button) is pressed by a participant
- `keyup` event is sent when the key (specified via key code on the button) is released by a participant

![Sample button control which costs the participant one spark if they click on it.](./button.png?classes=caption "Sample button control which costs the participant one spark if they click on it.")

Developers can use buttons to enable participants to vote, cause in-game actions to happen, or control in-game entities.

Buttons are highly customizable. These button properties can be edited from both the Interactive Studio and a Game Client:
1. Text displayed on the button
2. Spark cost (For more info about sparks, see [What are sparks?](/guides/mixplay/sparks#what-are-sparks))
3. Width of the progress bar, which is displayed at the bottom of a button
4. Disabled state - Buttons which are disabled cannot be interacted with
5. Cooldown duration - Prevents interaction until it expires
6. Key code - A keyboard key assignment to a button
7. Tooltip displayed when hovering over the button
8. Color of the background on the button
9. Color of the border on the button
10. Accent color applied to the cooldown spinner and progress bar
11. Focus Color applied to the border when focusing
12. Color of the text display on the button
13. Size of the text display on the button
14. The background image of the button
