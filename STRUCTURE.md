# Structure Information

## Areas

We have 2 main types of content on the Developer Site and they are for different audiences:
- Guides - Tutorials and Information meant to guide a reader through a topic.
- Reference - Technical reference, designed to give a reader exactly what they need. Designed for users who already know what they are looking for.

## Folder Structure

The Mixer Developer Site uses Grav to generate the site.

Grav uses folders for page titles. This allows supplementary files such as images to be placed neatly with the content which it supports.

When creating a new article or page, always start by making a folder. Always give this folder a numeric prefix as this allows us to order the folders later in the admin panel. For example `01.coolstuff`.

The file within the folder should usually be `doc.md`. `doc` is the name of the template that Grav will use to render the file. `doc` is usually the correct template but there are exceptions. If you need to use a different template it will be picked up in a PR.

## Content Structure

The main content for the developer site is written in [Markdown](https://daringfireball.net/projects/markdown/) and usually makes up the body of a page.

Some HTML tags can be used but these should be limited wherever possible.

We also have some custom markdown processing that enables us to add extra features. Examples of these can be found on the [Hidden Typography page](https://dev.mixer.com/resources/typography) of the site. This page is a scratch pad that we use to test our rendering.

## File Headers

The top portion of each file is a block of [YAML](http://yaml.org/) this controls various settings about the pages. Be sure that this is valid YAML before committing. For possible values check out Grav's Documentation: https://learn.getgrav.org/content.

We'll be adding some tests to ensure valid yaml is used before PRs can be merged in due course.
