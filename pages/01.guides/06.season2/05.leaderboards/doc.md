# Leader Boards

Formal REST documentation for Spark and Ember leader boards is coming soon but we've noticed some developers using them in their products and tools so we wanted to provide some preliminary documentation to help you out.

## Endpoint

GET `/api/v2/leaderboards/{type}/channels/{channelId}`

You can pass a query paramter of `limit` to determine how many entries to return. The default is `10` and the maximum is `100`.

Type must be one of the leader board types as specified below:

### Leader Board Types

- Sparks
  - `sparks-weekly` - Users ranked by the sparks they have given this week.
  - `sparks-monthly` - Users ranked by the sparks they have given this month.
  - `sparks-yearly` - Users ranked by the sparks they have given this Year.
  - `sparks-alltime` - Users ranked by the sparks they have given since Leaderboards Launched.
- Embers
  - `embers-weekly` - Users ranked by the embers they have given this week.
  - `embers-monthly` - Users ranked by the embers they have given this month.
  - `embers-yearly` - Users ranked by the embers they have given this year.
  - `embers-alltime` - Users ranked by the embers they have given since the launch of Embers.

### Response

The response is an array of leaderboard entries with the following fields:

- `username` - Username of the person in the leaderboard
- `statValue` - The amount of sparks or embers the user has contributed.
- `avatarUrl` - A link to the user's avatar.

### Example

```json
[
    {
        "username":"Connor",
        "statValue":9001,
        "avatarUrl":"https://uploads.beam.pro/avatar/asg4whr9-146.jpg"
    },
    ....
]
```
