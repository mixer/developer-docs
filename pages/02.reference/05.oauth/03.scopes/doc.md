---
title: OAuth Scopes
---

# OAuth Scopes

To request access to a users' account you need to use scopes. Scopes limit the amount of access a certain application has to the account. The full list of scopes which can be requested are listed below. These are also listed on the endpoints themselves over on the REST API reference.


| Scope                        | Description                                                      |
| ---------------------------- | ---------------------------------------------------------------- |
| user:act_as                  | Let's you act as this user on other resources                    |
| achievement:view:self        | View your earned achievements.                                   |
| channel:analytics:self       | View your channel analytics.                                     |
| channel:clip:create:self     | Create new clips from videos on your channel.                    |
| channel:clip:delete:self     | Allows deleting existing clips on your channel.                  |
| channel:costream:self        | Manage your costreaming requests.                                |
| channel:deleteBanner:self    | Delete your channel banner                                       |
| channel:details:self         | View your channel details.                                       |
| channel:follow:self          | Follow and unfollow other channels.                              |
| channel:partnership          | Create and view partnership applications.                        |
| channel:partnership:self     | Manage your partnership status.                                  |
| channel:streamKey:self       | View your channel's stream key.                                  |
| channel:teststream:view:self | Watch your test streams.                                         |
| channel:update:self          | Update your channel settings                                     |
| chat:bypass_catbot           | Bypasses the catbot chat filter.                                 |
| chat:bypass_filter           | Bypass the chat content filter.                                  |
| chat:bypass_links            | Bypass links being disallowed in chat.                           |
| chat:bypass_slowchat         | Bypass slowchat settings on channels.                            |
| chat:cancel_skill            | Cancel a skill.                                                  |
| chat:change_ban              | Manage bans in chats.                                            |
| chat:change_role             | Manage roles in chats.                                           |
| chat:chat                    | Interact with chats on your behalf.                              |
| chat:clear_messages          | Clear messages in chats where authorized.                        |
| chat:connect                 | Connect to chat.                                                 |
| chat:edit_options            | Edit chat options, including links settings and slowchat.        |
| chat:giveaway_start          | Start a giveaway in chats where authorized.                      |
| chat:poll_start              | Start a poll in chats where authorized.                          |
| chat:poll_vote               | Vote in chat polls.                                              |
| chat:purge                   | Clear all messages from a specific user in chat.                 |
| chat:remove_message          | Remove own and other's messages in chat.                         |
| chat:timeout                 | Change timeout settings in chats.                                |
| chat:view_deleted            | View deleted messages in chat.                                   |
| chat:whisper                 | Gives the ability to whisper in a channel                        |
| delve:view:self              | View your Mixer homepage experience and recommendations.         |
| interactive:manage:self      | Create, update and delete the interactive games in your account. |
| interactive:robot:self       | Run as an interactive game in your channel.                      |
| invoice:view:self            | View the users invoices.                                         |
| log:view:self                | View and manage your security log.                               |
| oauth:manage:self            | View and manage your OAuth clients.                              |
| recording:manage:self        | Manage the users VODs.                                           |
| redeemable:create:self       | Create redeemables after performing a purchase.                  |
| redeemable:redeem:self       | Use users redeemable.                                            |
| redeemable:view:self         | View users redeemables.                                          |
| resource:find:self           | View emoticons and other graphical resources you have access to. |
| subscription:cancel:self     | Cancel your subscriptions.                                       |
| subscription:create:self     | Create new subscriptions.                                        |
| subscription:renew:self      | Renew your existing subscriptions.                               |
| subscription:view:self       | View who you're subscribed to.                                   |
| team:administer              | Administrate teams the user has rights in.                       |
| team:manage:self             | Create, join, leave teams and set the users primary team.        |
| transaction:cancel:self      | Cancel pending transactions.                                     |
| transaction:view:self        | View your pending transactions.                                  |
| user:analytics:self          | View your user analytics                                         |
| user:details:self            | View your email address and other private details.               |
| user:getDiscordInvite:self   | View users discord invites.                                      |
| user:log:self                | View your user security log.                                     |
| user:notification:self       | View and manage your notifications.                              |
| user:seen:self               | Mark a VOD as seen for the user.                                 |
| user:update:self             | Update your account, including your email but not your password. |
| user:updatePassword:self     | Update your password.                                            |
