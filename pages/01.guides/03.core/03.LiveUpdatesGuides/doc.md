---
title: Live Updates Guides
process:
    markdown: true
    twig: true
twig_first: true
---

# Live Updates Guides

Mixer's Core API has a Live Updates component which will send you events when certain items happen or change within Mixer's systems. You can use these to ensure your application is always up to date on what's happening on Mixer.

## Live Updates guides

Below please find our Live Updates Guides and Tutorials:

{% for p in page.children %}
- [{{p.title}}]({{p.url}})
{% endfor %}


## More Information

If you're looking for more information check out our [reference material](reference/constellation/introduction).
