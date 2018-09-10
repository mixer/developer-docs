---
title: Core
icon: News
icon_bg: pink
---
# Core API

Mixer's Core API is the bread and butter of Mixer's platform. It allows you to request various information about the Mixer Platform and the Users, Streamers and items on there. A lot of the Core API powers our Apps and Website so the Mixer team uses these docs too!

The Core API is comprised of two core concepts:
- REST - Retrieve and update information on Mixer
- Live Updates (Constellation) - Get Notifications about changes to information on Mixer.

# Rest
## What is REST?

If your friend was going to the store and you needed something, you might ask them to "get" something for you. After they get back, they might "put" that item away for you. These are the constructs we use in everyday life, and REST APIs attempt to build on those, but, rather than operating on physical items, you're dealing with objects on the computer.

When you send HTTP requests to webpages, each request contains a verb. Most browsing you do involves your web browser making GET requests—asking for this page, for instance! But there are several other verbs your browser uses:

- `GET` looks something up, as we've said
- `POST` creates something
- `PUT` updates something
- `PATCH` patch something
- `DELETE` destroys something

On our RESTful API, you make requests by calling `VERB https://mixer.com/api/v1/resources`. We'll abbreviate this as `VERB /resources` from now on. For instance, to create a new user, you would call `POST /users` (the endpoints are always plural). If you want to operate on a particular user object, you would append their ID to that URL, such as `GET /users/344` to return information about user ID `344`.

You can also run actions on a particular user by chaining on "actions", such as PUT /users/344/confirm, which is used to verify an account. Here's a full blueprint with some examples:

| Endpoint                    | Description                                                    | Example                        |
| --------------------------- | -------------------------------------------------------------- | ------------------------------ |
| GET /resources              | Returns a list of 'resource' objects.                          | GET /users                     |
| POST /resources             | Creates a new 'resource' object.                               | POST /users                    |
| GET /resources/{id}         | Returns information about the 'resource' with the provided ID. | GET /users/314                 |
| PUT /resources/{id}         | Updates a resource with the provided ID.                       | PUT /users/314                 |
| POST /resources/{id}/action | Runs some action on a 'resource'.                              | POST /users/314/action         |
| GET /resources/{id}/data    | Gets some nested information about a 'resource'.               | GET /users/314/avatar          |
| DELETE /resources/{id}      | Delete a resource from the server.                             | DELETE /channels/314/streamKey |
