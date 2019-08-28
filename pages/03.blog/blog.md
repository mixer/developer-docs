---
content:
    items: '@self.children'
    limit: 10
    filter:
        published: true
        type: 'blog-item'
    order:
        by: date
        dir: desc
    pagination: true
tntsearch:
    index: false
feed:
    limit: 15
    description: Mixer Developer Blog Feed
---

Never shown, overridden by a template.
