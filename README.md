# Developer Documentation

The Mixer Developer Site uses these Markdown files to generate the content on the site. By contributing to these files you'll be improving our Documentation.

## How to Contribute

1. Clone the repo
2. Start a new branch for your tweak
3. Push it to GitHub - Use a Fork if you're not within the Mixer org.
4. Open a PR!

For Mixer Staff members you can also use the Developer Site Admin panel. To gain access to the panel please contact Richard Fox.

## Editing Content

### Areas

We have 2 main types of content on the Developer Site and they are for different audiences:
- Guides - Tutorials and Information meant to guide a reader through a topic.
- Reference - Technical reference, designed to give a reader exactly what they need. Designed for users who already know what they are looking for.

### File Headers

The top portion of each file is a block of [YAML](http://yaml.org/) this controls various settings about the pages. Be sure that this is valid YAML before committing. For possible values check out Grav's Documentation: https://learn.getgrav.org/content.

We'll be adding some tests to ensure valid yaml is used before PRs can be merged in due course.

### Folder Structure

The Mixer Developer Site uses Grav to generate the site.

Grav uses folders for page titles. This allows supplementary files such as images to be placed neatly with the content which it supports.

When creating a new article or page, always start by making a folder. Always give this folder a numeric prefix as this allows us to order the folders later in the admin panel. For example `01.coolstuff`.

The file within the folder should usually be `doc.md`. `doc` is the name of the template that Grav will use to render the file. `doc` is usually the correct template but there are exceptions. If you need to use a different template it will be picked up in a PR.
