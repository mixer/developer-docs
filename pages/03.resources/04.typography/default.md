---
title: Typography
---

! Details on the full capabilities of Spectre.css can be found in the [Official Spectre Documentation](https://picturepan2.github.io/spectre/elements.html)

The **mixer-dev** theme is the new default theme for Grav built with [Spectre.css](https://picturepan2.github.io/spectre/) the lightweight, responsive and modern CSS framework. Spectre provides  basic styles for typography, elements, and a responsive layout system that utilizes best practices and consistent language design.

### Headings

# H1 Heading `40px`

## H2 Heading `32px`

### H3 Heading `28px`

#### H4 Heading `24px`

##### H5 Heading `20px`

###### H6 Heading `16px`

```html
# H1 Heading
# H1 Heading `40px`</small>`

<span class="h1">H1 Heading</span>
```

### Buttons
<button class="btn">default button</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-error">Error</button>
<button class="btn disabled" tabindex="-1">disabled button</button>

### Paragraphs

Lorem ipsum dolor sit amet, consectetur [adipiscing elit. Praesent risus leo, dictum in vehicula sit amet](#), feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.

Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.

### Markdown Semantic Text Elements

**Bold** `**Bold**`

_Italic_ `_Italic_`

~~Deleted~~ `~~Deleted~~`

`Inline Code` `` `Inline Code` ``

### HTML Semantic Text Elements

<abbr>I18N</abbr> `<abbr>`

<cite>Citation</cite> `<cite>`

<kbd>Ctrl + S</kbd> `<kbd>`

Text<sup>Superscripted</sup> `<sup>`

Text<sub>Subscxripted</sub> `<sub>`

<u>Underlined</u> `<u>`

<mark>Highlighted</mark> `<mark>`

<time>20:14</time> `<time>`

<var>x = y + 2</var> `<var>`

### Blockquote

> The advance of technology is based on making it fit in so that you don't really even notice it,
> so it's part of everyday life.
>
> <cite>- Bill Gates</cite>

```markdown
> The advance of technology is based on making it fit in so that you don't really even notice it,
> so it's part of everyday life.
>
> <cite>- Bill Gates</cite>
```

### Unordered List

* list item 1
* list item 2
    * list item 2.1
    * list item 2.2
    * list item 2.3
* list item 3

```markdown
* list item 1
* list item 2
    * list item 2.1
    * list item 2.2
    * list item 2.3
* list item 3
```

### Ordered List

1. list item 1
1. list item 2
    1. list item 2.1
    1. list item 2.2
    1. list item 2.3
1. list item 3

```markdown
1. list item 1
1. list item 2
    1. list item 2.1
    1. list item 2.2
    1. list item 2.3
1. list item 3
```

### Table

| Name                        | Genre                         | Release date         |
| :-------------------------- | :---------------------------: | -------------------: |
| The Shawshank Redemption    | Crime, Drama                  | 14 October 1994      |
| The Godfather               | Crime, Drama                  | 24 March 1972        |
| Schindler's List            | Biography, Drama, History     | 4 February 1994      |
| Se7en                       | Crime, Drama, Mystery         | 22 September 1995    |

```markdown
| Name                        | Genre                         | Release date         |
| :-------------------------- | :---------------------------: | -------------------: |
| The Shawshank Redemption    | Crime, Drama                  | 14 October 1994      |
| The Godfather               | Crime, Drama                  | 24 March 1972        |
| Schindler's List            | Biography, Drama, History     | 4 February 1994      |
| Se7en                       | Crime, Drama, Mystery         | 22 September 1995    |
```

### Notices

The notices styles are actually provided by the `markdown-notices` plugin but are useful enough to include here:

! This is a warning notification

!! This is a error notification

!!! This is a default notification

!!!! This is a success notification

```markdown
! This is a warning notification

!! This is a error notification

!!! This is a default notification

!!!! This is a success notification
```

### Code Tabs

[mixer-tabs active=1]
[mixer-tab title="First Tab"]

In tempor sed sapien eu porttitor. Aliquam cursus facilisis ante. Etiam neque nunc, blandit vel lacus et, faucibus accumsan lacus. Proin posuere varius purus quis faucibus. Quisque et enim vitae orci [placerat tincidunt](#) id ac eros. Fusce et gravida libero.

Phasellus cursus odio ex, in **mattis lorem tincidunt** vel. Donec nibh odio, dapibus non ligula a, semper ornare massa. Nulla consectetur eu nunc sed ultrices. Integer at turpis dolor.

[/mixer-tab]
[mixer-tab title="Second Tab"]

In tempor sed sapien **eu porttitor**. Aliquam cursus facilisis ante. Etiam neque nunc, blandit vel lacus et, faucibus accumsan lacus. Proin posuere varius purus quis faucibus. [Quisque et enim](#) vitae orci placerat tincidunt id ac eros. Fusce et gravida libero.

Phasellus cursus odio ex, in mattis lorem tincidunt vel. [Donec nibh odio](#), dapibus non ligula a, semper ornare massa. Nulla consectetur eu nunc sed ultrices. Integer at turpis dolor.

[/mixer-tab]
[mixer-tab title="Third Tab"]

Mixer Interactive enables viewers, also known as participants, to directly control the environment in and around streamer’s broadcasts by interacting with user interface controls. When a broadcast has interactivity enabled, controls appear beneath the video on the viewer’s screen. These controls dynamically change according to live events and update in response to different situations that occur within the broadcast.

Developers and producers can create interactive experiences which can run as a part of a game, entirely as a standalone application, or as a tool. These experiences are then used by broadcasters to make their broadcasts interactive.

When a viewer interacts with the controls, their input is sent directly to the experience, allowing the developers to see exactly who is interacting and what they are doing. This level of engagement allows for the creation of truly unique and interactive experiences that let viewers and broadcasters experience Mixer broadcasts on a whole new level.

[/mixer-tab]
[/mixer-tabs]

```
[raw]
[mixer-tabs active=1]
[mixer-tab title="First Tab"]

Tab 1 content....

[/mixer-tab]
[mixer-tab title="Second Tab"]

Tab 2 content....

[/mixer-tab]
[mixer-tab title="Third Tab"]

Tab 3 content....

[/mixer-tab]
[/mixer-tabs]
[/raw]
```

### Icons

[mixer-icon icon="PlayerRemove" class="large mx-2 my-2" /]
[mixer-icon icon="PlayerAdd" class="large mx-2 my-2" /]
[mixer-icon icon="Family" class="large mx-2 my-2" /]
[mixer-icon icon="MultiPlayer" class="large mx-2 my-2" /]
[mixer-icon icon="InternetWithController" class="large mx-2 my-2" /]
[mixer-icon icon="Keyboard" class="large mx-2 my-2" /]
[mixer-icon icon="Related" class="large mx-2 my-2" /]
[mixer-icon icon="Smiley" class="large mx-2 my-2" /]
[mixer-icon icon="NewReleases" class="large mx-2 my-2" /]
[mixer-icon icon="Add" class="large mx-2 my-2" /]
[mixer-icon icon="CheckBoxChecked" class="large mx-2 my-2" /]
[mixer-icon icon="CheckBox" class="large mx-2 my-2" /]
[mixer-icon icon="ChevronDown" class="large mx-2 my-2" /]
[mixer-icon icon="ChevronUp" class="large mx-2 my-2" /]
[mixer-icon icon="ChevronLeft" class="large mx-2 my-2" /]
[mixer-icon icon="ChevronRight" class="large mx-2 my-2" /]
[mixer-icon icon="ArrowDown" class="large mx-2 my-2" /]
[mixer-icon icon="Share" class="large mx-2 my-2" /]
[mixer-icon icon="Download" class="large mx-2 my-2" /]
[mixer-icon icon="GamerScore" class="large mx-2 my-2" /]
[mixer-icon icon="Menu" class="large mx-2 my-2" /]
[mixer-icon icon="Accept" class="large mx-2 my-2" /]
[mixer-icon icon="Close" class="large mx-2 my-2" /]
[mixer-icon icon="Broadcasting" class="large mx-2 my-2" /]
[mixer-icon icon="RadioBtnOff" class="large mx-2 my-2" /]
[mixer-icon icon="RadioBtnOn" class="large mx-2 my-2" /]
[mixer-icon icon="Info" class="large mx-2 my-2" /]
[mixer-icon icon="Trending" class="large mx-2 my-2" /]
[mixer-icon icon="GripperBarHorizontal" class="large mx-2 my-2" /]
[mixer-icon icon="Send" class="large mx-2 my-2" /]
[mixer-icon icon="Feedback" class="large mx-2 my-2" /]
[mixer-icon icon="CellPhone" class="large mx-2 my-2" /]
[mixer-icon icon="TagPlayStyle" class="large mx-2 my-2" /]
[mixer-icon icon="Filter" class="large mx-2 my-2" /]
[mixer-icon icon="Upload" class="large mx-2 my-2" /]
[mixer-icon icon="LiveText" class="large mx-2 my-2" /]
[mixer-icon icon="GiftCard" class="large mx-2 my-2" /]
[mixer-icon icon="LikeSolid" class="large mx-2 my-2" /]
[mixer-icon icon="Unknown" class="large mx-2 my-2" /]
[mixer-icon icon="UnknownMirrored" class="large mx-2 my-2" /]
[mixer-icon icon="CaretSolidDown" class="large mx-2 my-2" /]
[mixer-icon icon="Forward" class="large mx-2 my-2" /]
[mixer-icon icon="Back" class="large mx-2 my-2" /]
[mixer-icon icon="IncidentTriangle" class="large mx-2 my-2" /]
[mixer-icon icon="AlertSolid" class="large mx-2 my-2" /]
[mixer-icon icon="Tablet" class="large mx-2 my-2" /]
[mixer-icon icon="News" class="large mx-2 my-2" /]
[mixer-icon icon="SendSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerSparksSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerSparks" class="large mx-2 my-2" /]
[mixer-icon icon="MixerHomeSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerViewersSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerViewers" class="large mx-2 my-2" /]
[mixer-icon icon="MixerCoStreamingSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerCoStreaming" class="large mx-2 my-2" /]
[mixer-icon icon="MixerInteractiveSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerInteractive" class="large mx-2 my-2" /]
[mixer-icon icon="MixerChatSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerComplaintSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerTrendingSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerSettingsSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerProfileSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerFTLRocketSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerFTLRocketDisabledSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerBroadcastSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerScreenBroadcastSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerHeartSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerHeartDisabledSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerSearch" class="large mx-2 my-2" /]
[mixer-icon icon="MixerWhisper" class="large mx-2 my-2" /]
[mixer-icon icon="MixerReport" class="large mx-2 my-2" /]
[mixer-icon icon="MixerBan" class="large mx-2 my-2" /]
[mixer-icon icon="MixerTimeout" class="large mx-2 my-2" /]
[mixer-icon icon="MixerAdd" class="large mx-2 my-2" /]
[mixer-icon icon="MixerRemove" class="large mx-2 my-2" /]
[mixer-icon icon="MixerDelete" class="large mx-2 my-2" /]
[mixer-icon icon="MixerDeleteSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerDeleteForeverSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerEditSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerSaveSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerPlaySolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerPauseSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerFullscreenEdit" class="large mx-2 my-2" /]
[mixer-icon icon="MixerFullscreen" class="large mx-2 my-2" /]
[mixer-icon icon="MixerVolumeOffSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerVolumeMuteSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerVolumeDownSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerVolumeUpSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerOpenInNew" class="large mx-2 my-2" /]
[mixer-icon icon="MixerFilterList" class="large mx-2 my-2" /]
[mixer-icon icon="MixerRefresh" class="large mx-2 my-2" /]
[mixer-icon icon="MixerMoreVertical" class="large mx-2 my-2" /]
[mixer-icon icon="MixerContentCopy" class="large mx-2 my-2" /]
[mixer-icon icon="MixerStarSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerStar" class="large mx-2 my-2" /]
[mixer-icon icon="MixerSmileySolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerIndeterminateCheckboxSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerTVMonitor" class="large mx-2 my-2" /]
[mixer-icon icon="MixerRingerOffSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerPoll" class="large mx-2 my-2" /]
[mixer-icon icon="MixerPollSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerUserCircleSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerLiveTV" class="large mx-2 my-2" /]
[mixer-icon icon="MixerOnDemandVideo" class="large mx-2 my-2" /]
[mixer-icon icon="MixerControlInteractive" class="large mx-2 my-2" /]
[mixer-icon icon="MixerControlTactile" class="large mx-2 my-2" /]
[mixer-icon icon="MixerRingerPausedSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerBeakerSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerPIPBottomLeft" class="large mx-2 my-2" /]
[mixer-icon icon="MixerPIPBottomRight" class="large mx-2 my-2" /]
[mixer-icon icon="MixerPIPTopLeft" class="large mx-2 my-2" /]
[mixer-icon icon="MixerPIPTopRight" class="large mx-2 my-2" /]
[mixer-icon icon="MixerPIPBottomMiddle" class="large mx-2 my-2" /]
[mixer-icon icon="MixerPIPTopMiddle" class="large mx-2 my-2" /]
[mixer-icon icon="MixerPIPLeftMiddle" class="large mx-2 my-2" /]
[mixer-icon icon="MixerPIPRightMiddle" class="large mx-2 my-2" /]
[mixer-icon icon="MixerProfile" class="large mx-2 my-2" /]
[mixer-icon icon="MixerTrending" class="large mx-2 my-2" /]
[mixer-icon icon="MixerFilterListFlipped" class="large mx-2 my-2" /]
[mixer-icon icon="MixerHeart" class="large mx-2 my-2" /]
[mixer-icon icon="MixerFlag" class="large mx-2 my-2" /]
[mixer-icon icon="MixerUserAdd" class="large mx-2 my-2" /]
[mixer-icon icon="MixerUserRemove" class="large mx-2 my-2" /]
[mixer-icon icon="MixerHalfStar" class="large mx-2 my-2" /]
[mixer-icon icon="MixerVODClip" class="large mx-2 my-2" /]
[mixer-icon icon="MixerSort" class="large mx-2 my-2" /]
[mixer-icon icon="MixerDevicesOther" class="large mx-2 my-2" /]
[mixer-icon icon="MixerVODClipSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerUserHosting" class="large mx-2 my-2" /]
[mixer-icon icon="MixerUserHostingSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerRewindSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerFastforwardSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerClosedCaptionSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerClosedCaptionInternationalSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerHypezoneInline" class="large mx-2 my-2" /]
[mixer-icon icon="MixerFilter" class="large mx-2 my-2" /]
[mixer-icon icon="MixerFTLRocket" class="large mx-2 my-2" /]
[mixer-icon icon="MixerAudienceTeen" class="large mx-2 my-2" /]
[mixer-icon icon="MixerAudience" class="large mx-2 my-2" /]
[mixer-icon icon="MixerShare" class="large mx-2 my-2" /]
[mixer-icon icon="MixerRinger" class="large mx-2 my-2" /]
[mixer-icon icon="MixerRingerOff" class="large mx-2 my-2" /]
[mixer-icon icon="MixerRingerSnooze" class="large mx-2 my-2" /]
[mixer-icon icon="MixerRingerSolid" class="large mx-2 my-2" /]
[mixer-icon icon="MixerShareController" class="large mx-2 my-2" /]
[mixer-icon icon="MixerRingerPaused" class="large mx-2 my-2" /]
[mixer-icon icon="MixerPartner" class="large mx-2 my-2" /]
[mixer-icon icon="MixerLevel" class="large mx-2 my-2" /]

```
[raw][mixer-icon icon="LikeSolid" class="large mx-2 my-2" /][/raw]
```

[mixer-icon icon="LikeSolid" class="mx-2 my-2 valign-middle" /]
[mixer-icon icon="LikeSolid" class="large mx-2 my-2 valign-middle" /]
[mixer-icon icon="LikeSolid" class="x-large mx-2 my-2 valign-middle" /]

```
[raw]
[mixer-icon icon="LikeSolid" class="mx-2 my-2 valign-middle" /]
[mixer-icon icon="LikeSolid" class="large mx-2 my-2 valign-middle" /]
[mixer-icon icon="LikeSolid" class="x-large mx-2 my-2 valign-middle" /]
[/raw]
```

### Code Highlighting

Uses highlight js for code. Surround blocks in [raw]```[/raw] with the language name for proper highlighting.

see [this page](https://highlightjs.org/static/demo/) for language listings.

[mixer-tabs active=1]
[mixer-tab title="Node"]
[raw]```javascript[/raw]
```javascript
const crypto = require('crypto');

function isRequestValid(req, secret, body) {
    const hmac = crypto.createHmac('SHA384', secret);
    hmac.update(body);
    const digest = hmac.digest('hex').toUpperCase();
    return req.headers['poker-signature'] === `sha384=${digest}`;
}
```
[/mixer-tab]
[mixer-tab title="Python"]
[raw]```python[/raw]
```python
import hmac

# Using Flask-style requests, you may need to adjust it :)
def is_request_valid(request, body: str, secret: str):
    hm = hmac.new(bytes(secret, 'utf-8'), digestmod='SHA384')
    hm.update(bytes(body, 'utf-8'))
    expected = 'sha384=' + hm.hexdigest().upper())
    return hmac.compare_digest(request.headers['poker-signature'], expected)
```
[/mixer-tab]
[mixer-tab title="C#"]
[raw]```cs[/raw]
```cs
// Using asp.net style requests, you may need to adjust it :)
public bool IsRequestValid(IHttpContext context, string secret, string body) {
    var hmac = new HMACSHA384(Encoding.UTF8.GetBytes(secret));
    var hash = BitConverter.ToString(hmac.ComputeHash(Encoding.UTF8.GetBytes(body))).Replace("-", string.Empty);
    return context.HttpContext.Request.Headers["Poker-Signature"].Equals($"sha384={hash}");
}
```
[/mixer-tab]
[mixer-tab title="Go"]
[raw]```go[/raw]
```golang
func IsRequestValid(r *http.Request, secret, body []byte) bool {
	mac := hmac.New(sha512.New384, secret)
	mac.Write(body)
	actual := []byte("sha384=" + strings.ToUpper(hex.EncodeToString(mac.Sum(nil))))
	return hmac.Equal([]byte(r.Header.Get("Poker-Signature")), actual)
}
```
[/mixer-tab]
[mixer-tab title="PHP"]
[raw]```php[/raw]
```php
function isRequestValid($secret) {
  $body = file_get_contents('php://input');
  $expected = "sha384=" . strtoupper(hash_hmac('sha384', $body, $secret));
  return hash_equals($expected, $_SERVER['HTTP_POKER_SIGNATURE']);
}
```
[/mixer-tab]
[/mixer-tabs]
---

MALM MALM MALM
