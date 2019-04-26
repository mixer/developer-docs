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
---

Never shown, overridden by a template.
