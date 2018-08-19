# Developer Documentation

The Mixer Developer Site uses Markdown files to generate the content on the site. By contributing to these files you'll be improving our Documentation. For Mixer Staff members you can also use the Developer Site Admin panel.

To gain access to the panel please contact Richard Fox.

## File Headers

The top portion of each file is a block of [YAML](http://yaml.org/) this controls various settings about the pages. Be sure that this is valid YAML before committing.

We'll be adding some tests to ensure valid yaml is used before PRs can be merged in due course.

## Folder Structure

Grav uses folders for page titles. This allows supplementary files such as images to be placed neatly with the content which it supports.

When creating a new article, start by making a folder. Always give this a numeric prefix as this allows us to order the folders later in the admin panel. For example `01.coolstuff`.

The file within the folder should usually be `doc.md`. `doc` is the name of the template that should be used. Doc is usually the correct template but there are exceptions. This should be picked up in PRs.

### Note

Remember that even though the folder structure may seem odd, you're contributing to a live CMS. Its primarily designed for WYSIWYG editing and due to this the structure might seem odd when editing it manually.



WORK IN PROGRESS, contact rifox for more information.
