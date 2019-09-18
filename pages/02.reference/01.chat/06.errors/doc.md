---
title: 'Chat Error List'
---
# Chat Error List

Below is listed a table of errors which chat may generate in response to your actions which you should ensure your application is able to handle. If you notice an error that is missing, please [Reach Out](mailto:mixerdevinfo@microsoft.com).

| Error     | Description                                                                                                                                                                                                                                                                 | Recommendation                                                                                  |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `UNOTFOUND` | `UNOTFOUND` is returned in response to an `auth` method call when the `userId` and `authkey` combination used could not be matched together. This usually means that the user that you requested an authkey for is not the same as the user you're trying to authenticate as. | We have a dedicated section on another page to cover this [here](/guides/chat/troubleshooting). |
| `UNOTJSON`| This error means that your packet sent to the Chat server was not determined to be valid JSON.| Please ensure that you're sending valid JSON and try again.|
|`UACCESS`| This error means you don't have access to that channel, it could be from a number of reasons including you being banned from the channel or the channel being in test stream mode.| Verify you have access to the Channel's chat and that you are not banned and that if it is in test stream mode that you have the permission to view it.|
