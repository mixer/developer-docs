---
title: Controls
process:
    markdown: true
    twig: true
twig_first: true
---

# Controls
A control is an interactive element in a user interface within a MixPlay scene. [Participants](/guides/mixplay/interactive-overview#participants) can interact with the control using touch, keyboard, mouse, or controller.

Mixer has a variety of controls available to use out of the box and we're always looking to add more in the future. Each control has its own page here on the dev site so that we can provide as much detail as possible.

## Control Types

{% for p in page.children %}
- [{{p.title}}]({{p.url}})
{% endfor %}


## Custom Controls

If you're looking for more customization and more options for your interactive controls then checkout our new [Custom Controls](/guides/mixplay/customcontrols/introduction) feature. It lets you create awesome experiences that are 100% custom and written in HTML, JavaScript and CSS.
