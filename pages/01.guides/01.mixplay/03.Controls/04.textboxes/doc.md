---
title: 'Text Boxes'
---

# TextBoxes

TextBoxes are controls which can be used to get text input from participants. [Game Clients](/guides/mixplay/interactive-overview#the-game-client) receive events when participants either type or submit the text.


- `change` event is sent when the participant types in the textbox (This is not sent if the button has a submit button)
- `submit` event is sent when the participant submits the textbox

![Sample textbox control asking participants to enter their pet\'s name, costing 10 sparks to submit.](./textbox.png?classes=caption "Sample textbox control asking participants to enter their pet's name, costing 10 sparks to submit.")

Textboxes are customizable. These textbox properties can be edited from both the Interactive Studio and a Game Client:

1. Placeholder text display inside the textbox
1. Text displayed in the submit button associated with the textbox
1. Whether the textbox is multiline
1.  Whether the textbox has a submit button
1. Disabled state - Textboxes which are disabled cannot be interacted with
1. Cooldown duration - Prevents interaction until it expires
1. Spark cost (For more info about sparks, see [What are Sparks?](/guides/mixplay/sparks#what-are-sparks))
