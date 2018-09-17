# Embeds

Mixer provides a set of embeddable components so that you can bring parts of the Mixer platform to your website.

The parts included are:
- The Video Player
- Chat
- MixPlay Controls

## Getting an Embed URL

To get the embed URL for a channel simply add the Channel's name to the following URLS where it says `<channel name>`:
- For the Video Player: https://mixer.com/embed/player/<channel name>
- For Chat: https://mixer.com/embed/chat/<channel name>
- For MixPlay: https://mixer.com/embed/controls/<channel name>

## Adding the Embed

Once you have a URL just create a HTML `iframe` with the `src` property set to the url. For example:
```html
<iframe src="https://mixer.com/embed/player/mixer"></iframe>
```
Would embed the Mixer Channel's Video Player.

## Video Options

For the video player you can provide extra query parameters on the URL to control various settings of the embed:
- `disableCostream` - Set this to true to prevent the Embed from display CoStreams.
- `disableLowLatency` - Set this to true to disable FTL Playback. This will make the video HLS instead.
- `muted` - Set this to true to mute the video player on load.
- `vod` - Provide a VOD Id here to Embed a VOD.
- `t` - Provide a time here to skip to this time within the vod
- `disableLinks` - Set this to true to prevent links within the Embed
- `hideChannel` - Set this to true to hide the channel/"Watch on Mixer" link for this embed.


# Chat Options

For the Chat Embed you can provide extra query parameters on the URL to control various settings:
- `composer` - Set this to false to hide the composition/text entry part of chat. This also hides the viewer count.


# Embed Styling & Sizing
As our embeds are just iframes you can style them using CSS. Give them a HTML class or ID and then write rules for them. If you set the IFrame's size the embed will automatically adjust to reflect the new size. A good set of standard styling is:

```css
iframe {
    border: 0px;
    overflow: hidden;
}
```
This removes the default grey border most browsers will give iframes and prevent any scrollbars from appearing which can look unsightly.
