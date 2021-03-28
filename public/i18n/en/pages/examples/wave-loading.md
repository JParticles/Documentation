<div class="instance i1">
    <div class="demo"></div>
    <div class="handlebar">
      <div class="btn btn-default done">Done</div>
      <div class="btn btn-default reload">Reload</div>
    </div>
</div>

Source:

```javascript
const loading = new JParticles.WaveLoading('#demo', {
    // Font format: [font style][font weight][font size][font family]
    // Same as CSS, [font size] and [font family] is required
    font: 'normal 900 16px Arial',

	// Set `false` to improve performance if unneeded handle window size change
    resize: false,
})

loading.onProgress(progress => {
    // Set the progress text color to white when the progress is greater than or equal to 60
    if (progress >= 60) {
        loading.setOptions({
            textColor: '#fff',
        })
    }
})

// Call `done()` method to notify it to finish loading
document.querySelector('.done').addEventListener('click', () => {
    loading.done()
})
```

### Load WEB page

<div class="instance i2">
    <div class="container">
        <div class="img-frame text-center-vertical"></div>
    </div>
    <div class="mask"></div>
    <div class="demo">Click me to load</div>
    <div class="handlebar">
        <div class="btn btn-default reload">Reload</div>
    </div>
</div>

Source:

```javascript
// Extend easing function
Object.assign(JParticles.easing, {
    easeOutBounce: function (x, t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b
        } else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
        } else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
        } else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
        }
    },
})

const loading = new JParticles.WaveLoading('#demo', {
    font: 'normal 900 16px Arial',
    resize: false,
    // Use new easing function
    easing: 'easeOutBounce',
})

loading.onFinished(() => {
	// After loading, hide the mask and loading animation.
    // Start a 50ms timer, in order to make the words 100% visible.
    setTimeout(() => {
        document.querySelector('.mask').style.display = 'none'
        document.querySelector('#demo').style.display = 'none'
    }, 50)
})

// Create WEB page
const iframe = document.createElement('iframe')
iframe.addEventListener('load', () => loading.done())
iframe.src = 'https://jparticles.js.org'
document.querySelector('#demo').parentNode.appendChild(iframe)
```

### Mask(for custom Logo)

It is suitable for pure text logos, such as GitHub's text logo is very suitable.

<div class="instance i3">
    <div class="demo"></div>
    <div class="handlebar">
      <div class="btn btn-default done">Done</div>
      <div class="btn btn-default reload">Reload</div>
    </div>
</div>

Source:

```javascript
new JParticles.WaveLoading('#demo', {
	fillColor: '#27C9E5',
	crestHeight: 5,
	crestCount: 3,
	speed: 0.2,
	// The progress text is not displayed when the loading progress text format is an empty string
	textFormatter: '',
	// Cancel the rounded corners of the border
	borderRadius: '',
	// Set the mask image to achieve the mask effect.
	// if you want to prevent the image from flickering, you can create special effects after loading the image in advance.
	mask: 'https://raw.githubusercontent.com/Barrior/assets/main/github-logo-text.svg',
})
```

### Ghost Mask

> The gray-scale mask picture is used as the background, and then the original color pattern is cut out.

It is suitable for color image logo, such as Chrome's text logo is very suitable.

<div class="instance i4">
    <div class="demo"></div>
    <div class="handlebar">
      <div class="btn btn-default done">Done</div>
      <div class="btn btn-default reload">Reload</div>
    </div>
</div>

Source:

```javascript
new JParticles.WaveLoading('#demo', {
	num: 2,
	textColor: '#fff',
	textFormatter: '加载中...%d%',
	fillColor: 'rgba(0, 0, 0, 0.15)',
	offsetLeft: [0, 1.5],
	crestHeight: 5,
	crestCount: 2,
	speed: 0.2,
	// The loading time is set to 10s
	duration: 10000,
	// Set the mask image
	mask: 'https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg',
	// Set the mode to ghost
	maskMode: 'ghost',
})
```

### Parameters

<table class="table table-bordered-inner table-striped">
    <thead>
	    <tr>
	        <th width="100">Name</th>
	        <th width="200">Default</th>
	        <th width="100">Type</th>
	        <th width="450">Description</th>
	    </tr>
    </thead>
    <tbody>
	    <tr>
	        <td>font</td>
	        <td>normal 400 16px Arial</td>
	        <td>string</td>
	        <td>
				Font format: [font style][font weight][font size][font family] <br>
    			Same as CSS, [font size] and [font family] is required.
         	</td>
	    </tr>
	    <tr>
	        <td>textColor</td>
	        <td>#333</td>
	        <td>string</td>
	        <td>The color of the progress text.</td>
	    </tr>
	    <tr>
	        <td>textFormatter</td>
	        <td>loading...%d%</td>
	        <td>string</td>
	        <td>Progress text template, `%d` will be replaced with rounded progress value, empty string will not display text.</td>
	    </tr>
	    <tr>
	        <td>borderRadius</td>
	        <td>50%</td>
	        <td>string</td>
	        <td>Rounds the corners of Canvas outer border edge. [Derived from CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius).</td>
	    </tr>
	    <tr>
	        <td>duration</td>
	        <td>5000</td>
	        <td>number</td>
	        <td>The time to load to `99%`, in milliseconds, the longer it takes, the slower it is to load to `99%`.</td>
	    </tr>
	    <tr>
	        <td>easing</td>
	        <td>swing</td>
	        <td>string</td>
	        <td>
			  The animation of the loading process supports two types: <br>
              `linear`: uniform speed<br>
              `swing`: accelerates slowly and then decelerates slowly.<br>
              Read more about the [Easing](/examples/quick-start#H8) function.
          </td>
	    </tr>
	    <tr>
	        <td>num</td>
	        <td>1</td>
	        <td colspan="2">Refer to the num parameter of Wave.</td>
	    </tr>
	    <tr>
	        <td>line</td>
	        <td>false</td>
	        <td colspan="2">Refer to the line parameter of Wave.</td>
	    </tr>
	    <tr>
	        <td>fill</td>
	        <td>true</td>
	        <td colspan="2">Refer to the fill parameter of Wave.</td>
	    </tr>
	    <tr>
	        <td>fillColor</td>
	        <td>#27C9E5</td>
	        <td colspan="2">Refer to the fillColor parameter of Wave.</td>
	    </tr>
	    <tr>
	        <td>offsetLeft</td>
	        <td>0</td>
	        <td colspan="2">Refer to the offsetLeft parameter of Wave.</td>
	    </tr>
	    <tr>
	        <td>crestHeight</td>
	        <td>4</td>
	        <td colspan="2">Refer to the crestHeight parameter of Wave.</td>
	    </tr>
	    <tr>
	        <td>crestCount</td>
	        <td>1</td>
	        <td colspan="2">Refer to the crestCount parameter of Wave.</td>
	    </tr>
	    <tr>
	        <td>speed</td>
	        <td>0.3</td>
	        <td colspan="2">Refer to the speed parameter of Wave.</td>
	    </tr>
    </tbody>
</table>

**** Tips: In addition to the above parameters and `offsetTop`, other [Wave parameters](/examples/wave#h6) can also be used for WaveLoading.***

### Methods

<table class="table table-bordered-inner table-striped">
    <thead>
	    <tr>
	        <th width="100">Name</th>
	        <th width="200">Arguments Type</th>
	        <th width="300">Description</th>
	    </tr>
    </thead>
    <tbody>
	    <tr>
	        <td>setOptions(newOptions)</td>
	        <td>newOptions: object</td>
	        <td>
              Update the parameter value, the current parameters that can be set are:
              `opacity, fill, fillColor, line, lineColor, lineWidth,
              offsetLeft, offsetTop, crestHeight, speed, mask, maskMode, font, textColor, textFormatter, borderRadius`.
			</td>
	    </tr>
	    <tr>
	        <td>done()</td>
	        <td>no arguments</td>
	        <td>Let the loading progress complete immediately.</td>
	    </tr>
    </tbody>
</table>

### Events

<table class="table table-bordered-inner table-striped">
    <thead>
	    <tr>
	        <th width="100">Name</th>
	        <th width="200">Arguments Type</th>
	        <th width="400">Description</th>
	    </tr>
    </thead>
    <tbody>
	    <tr>
	        <td>onProgress()</td>
	        <td>function</td>
	        <td>
			  An event that is triggered every time the progress changes. The function receives a `progress` parameter, which represents the current progress value.
			</td>
	    </tr>
	    <tr>
	        <td>onFinished()</td>
	        <td>function</td>
	        <td>Event triggered after progress is loaded to `100%`.</td>
	    </tr>
    </tbody>
</table>