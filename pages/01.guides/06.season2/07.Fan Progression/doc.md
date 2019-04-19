# Fan Progression

In Fan Progression enabled channels each user will earn Hears for interacting with channel. Hearts will be earnt for various types of interactions including:
- Chatting
- Watching
- Spending Embers
- Subscribing

As Mixer grows with additional features the list of items which grant Hearts will also grow.

As users rank up, they unlock new badges which appear beside their username in chat:

![](badges.png)

As developers you can learn more about a user's rank using our API.

## Terminology Note

In our API you'll see the property name `level` used. Within our endpoints however we use the term `Rank`. Additionally our API uses the term `xp` which is referred to as Hearts within our endpoints.

## REST Endpoints

### Getting a user's rank

You can use GET `https://mixer.com/api/v1/ascension/channels/{channelId}/users/{userId}` to look up the rank of a particular user.

The response matches the payload of the [Level Up Constellation Event](/reference/constellation/events/live/fan%20progression).

### Getting a list of Levels
You can GET `https://mixer.com/api/v1/ascension/levels` to look up a list of ranks. The response contains an array called `levels` whose members contain the following properties.


| Property   | Type   | Description                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
| level      | uint   | The level number for this entry                                  |
| minXp      | uint   | The minimum Hearts points required for this level.               |
| color      | string | A hexadecimal color code for the color of this level.            |
| complement | string | A hexadecimal color code for the complement color of this level. |
| assetUrl   | string | A url path for the image for this level                          |

#### Example Level Object
```json
{
    "assetsUrl": "https://static.mixer.com/img/design/ui/fan-progression/v1_badges/silver/{variant}",
    "color": "#aaafb6",
    "complement": "#66A1F4",
    "level": 1,
    "minXp": 0
}
```

### Asset Urls
In the above example level object you'll see `{variant}`, you can replace variant with any of the following terms to get variations of the image for this rank:
- `cuttout.png`
- `small.png`
- `large.png`
- `large.gif`

## Constellation Events

You can subscribe to the [Level Up Constellation Event](/reference/constellation/events/live/fan%20progression) to receive an event when a user levels up in a channel.


## Further Questions
If you have further questions please send us an [email]((mailto:mixerdevinfo@microsoft.com)).

