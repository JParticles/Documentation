<div class="instance i1">
    <div class="demo"></div>
    <div class="handlebar">
      <div class="btn btn-default open">open</div>
      <div class="btn btn-default pause">pause</div>
    </div>
</div>

Source:

```javascript
new JParticles.Wave('#demo', {
    num: 3,
    // Draw line
    line: true,
    // The colors of the three lines in sequence
    lineColor: [
      'rgba(0, 190, 112, 0.5)',
      'rgba(0, 190, 112, 0.7)',
      'rgba(0, 190, 112, 0.9)',
    ],
    // The width of the three lines in turn
    lineWidth: [0.5, 0.7, 0.9],
    // The offset value of the three lines from the left in turn
    offsetLeft: [2, 1, 0],
    // All three lines are 0.75 times the height of the top offset container
    offsetTop: 0.75,
    // The height of the crests of the three lines in sequence
    crestHeight: [10, 14, 18],
    // All three lines have only two crests
    crestCount: 2,
    speed: 0.1,
})
```

### Voice Search：

<div class="instance i2">
    <div class="demo"></div>
	<div class="btn btn-default button-voice">Press and hold to emulate voice search</div>
</div>

Source:

```javascript
const settings = {
    crestHeight: [10, 14, 18],
    speed: 0.1,
}

const effect = new JParticles.Wave('#demo', Object.assign({
    num: 3,
    lineColor: ['#e53d27', '#42e527', '#27C9E5'],
    lineWidth: [0.7, 0.9, 1],
    offsetTop: 0.65,
    crestCount: 2,
}, settings))

const element = document.querySelector('.button-voice')

// Fluctuating effect
element.addEventListener('mousedown', function () {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
        const crestHeight = settings.crestHeight.map(item => {
          // Randomly add or subtract 20 fluctuation values
          item += JParticles.utils.randomInRange(20, -20)

          // Process the value between (0, 1) as an integer
          if (item > 0 && item < 1) {
            item = Math.ceil(item)
          }

          return item
        })

        // Use `setOptions()` to control the fluctuation of the line
        effect.setOptions({
          crestHeight,
          speed: [0.2, 0.14, 0.1],
        })
    }, 100)

    // Restore
    const handleMouseup = () => {
        clearInterval(this.timer)
        effect.setOptions(settings)
        document.removeEventListener('mouseup', handleMouseup)
    }
    document.addEventListener('mouseup', handleMouseup)
})
```

### Water cut:

<div class="instance i3">
    <div class="demo"></div>
    <div class="handlebar">
		<div class="btn btn-default open">open</div>
		<div class="btn btn-default pause">pause</div>
    </div>
</div>

Source:

```javascript
new JParticles.Wave('#demo', {
    num: 1,
    // Set the line parameter to false
    line: false,
    // Set the fill parameter to true
    fill: true,
    // Set fill color
    fillColor: '#27C9E5',
    offsetTop: 0.75,
    crestHeight: 8,
    crestCount: 3,
    speed: 0.07,
})
```

### Mask(for custom Logo)

It is suitable for pure text logos, such as GitHub's text logo is very suitable.

<div class="instance i4">
    <div class="demo"></div>
    <div class="handlebar">
	    <div class="btn btn-default open">open</div>
		<div class="btn btn-default pause">pause</div>
    </div>
</div>

Source:

```javascript
new JParticles.Wave('#demo', {
    num: 1,
    line: false,
    fill: true,
    fillColor: '#27C9E5',
    offsetTop: 0.5,
    crestHeight: 5,
    crestCount: 3,
    speed: 0.2,
    // Set the mask image to achieve the mask effect.
	// if you want to prevent the image from flickering, you can create special effects after loading the image in advance.
    mask: 'https://raw.githubusercontent.com/Barrior/assets/main/github-logo-text.svg',
})
```

### Ghost Mask

> The gray-scale mask picture is used as the background, and then the original color pattern is cut out.

It is suitable for color image logo, such as Chrome's text logo is very suitable.

<div class="instance i5">
    <div class="demo"></div>
    <div class="handlebar">
      <div class="btn btn-default open">open</div>
      <div class="btn btn-default pause">pause</div>
    </div>
</div>

Source:

```javascript
new JParticles.Wave('#demo', {
    num: 2,
    line: false,
    fill: true,
    fillColor: 'rgba(0, 0, 0, 0.15)',
    offsetTop: 0.5,
    offsetLeft: [0, 1.5],
    crestHeight: 5,
    crestCount: 2,
    speed: 0.2,
	// Set the mask image
    mask: 'https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg',
    // Set the mode to ghost
    maskMode: 'ghost',
})
```

### Simulate Loading

<div class="instance i6">
    <div class="demo"></div>
    <div class="handlebar">
      <div class="btn btn-default button-show">Start/Restart</div>
    </div>
</div>

Source:

```javascript
const effect = new JParticles.Wave('#demo', {
    num: 2,
    line: false,
    fill: true,
    fillColor: 'rgba(0, 0, 0, 0.15)',
    offsetTop: 0.99,
    offsetLeft: [0, 1.5],
    crestHeight: 5,
    crestCount: 2,
    speed: 0.2,
    mask: 'https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg',
    maskMode: 'ghost',
})

// Manually implement loading progress
function loading(progress) {
    if (progress < 100) {
        progress += 1
        // Update the configuration data through the `setOptions()` method to achieve the effect of upward loading
        effect.setOptions({ offsetTop: 1 - progress / 100 })
        window.requestAnimationFrame(() => loading(progress))
    }
}

document.querySelector('.button-show').addEventListener('click', () => {
    loading(0)
})
```

### Parameters

<table class="table table-bordered-inner table-striped">
    <thead>
	    <tr>
	        <th width="100">Name</th>
	        <th width="100">Default</th>
	        <th width="150">Type</th>
	        <th width="450">Description</th>
	    </tr>
    </thead>
    <tbody>
	    <tr>
	        <td>num</td>
	        <td>3</td>
	        <td>number</td>
	        <td>The number of lines, `(0, 1)` shows the number of corresponding multiples of the container width, `0 & [1, +∞)` shows the specific number.</td>
	    </tr>
	    <tr>
	        <td>fill</td>
	        <td>false</td>
	        <td>boolean or array</td>
	        <td>Whether to fill background color, set to `false` the correlation value is invalid.</td>
	    </tr>
	    <tr>
	        <td>fillColor</td>
	        <td>[]</td>
	        <td>string or array</td>
	        <td>
	            The filling background color is used in the same way as [`color`](/examples/quick-start#H7) rules.
	        </td>
	    </tr>
	    <tr>
	        <td>line</td>
	        <td>true</td>
	        <td>boolean or array</td>
	        <td>Whether to draw lines, set to `false` the correlation value is invalid.</td>
	    </tr>
	    <tr>
	        <td>lineColor</td>
	        <td>[]</td>
	        <td>string or array</td>
	        <td>The color of lines.</td>
	    </tr>
	    <tr>
	        <td>lineWidth</td>
	        <td>[]</td>
	        <td>number or array</td>
	        <td>
	            The width of lines. An empty array means a random width of `[0.2, 2)`.
	        </td>
	    </tr>
	    <tr>
	        <td>offsetLeft</td>
	        <td>[]</td>
	        <td>number or array</td>
	        <td>
			    The horizontal offset value of the line, the offset value from the left side of the canvas.
               `(0, 1)` indicates a multiple of the container width, `0 & [1, +∞)` indicates a specific value.
			</td>
	    </tr>
	    <tr>
	        <td>offsetTop</td>
	        <td>[]</td>
	        <td>number or array</td>
	        <td>
				The vertical offset value of the line, the distance from the midpoint of the line to the top of the canvas.
				`(0, 1)` indicates a multiple of the container width, `0 & [1, +∞)` indicates a specific value.
			</td>
	    </tr>
	    <tr>
	        <td>crestHeight</td>
	        <td>[]</td>
	        <td>number or array</td>
	        <td>
				The height of the crest, `(0, 1)` indicates the multiple of the container height, 
				`0 & [1, +∞)` indicates the specific value.
			</td>
	    </tr>
	    <tr>
	        <td>crestCount</td>
	        <td>[]</td>
	        <td>number or array</td>
	        <td>
				The number of ripples, that is, the number of sine cycles. 
				Random `[1, 0.2 * canvas width)` by default.
			</td>
	    </tr>
	    <tr>
	        <td>speed</td>
	        <td>[]</td>
	        <td>number or array</td>
	        <td>Movement speed. By default: `[.1, .4)`</td>
	    </tr>
	    <tr>
	        <td>mask</td>
	        <td>none</td>
	        <td>string</td>
	        <td>The mask image can be in `URL` address or `Base64` format.</td>
	    </tr>
	    <tr>
	        <td>maskMode</td>
	        <td>normal</td>
	        <td>string</td>
	        <td>
	            Mask mode, optional values are:<br>
                `normal`: normal mode.<br>
                `ghost`: Ghost mode.
            </td>
	    </tr>
    </tbody>
</table>

### Methods

<table class="table table-bordered-inner table-striped">
    <thead>
	    <tr>
	        <th width="100">Name</th>
	        <th width="110">Arguments Type</th>
	        <th width="450">Description</th>
	    </tr>
    </thead>
    <tbody>
	    <tr>
	        <td>setOptions(newOptions)</td>
	        <td>newOptions: object</td>
	        <td>
				Update the parameter value, the current parameters that can be set are:
				`opacity, fill, fillColor, line, lineColor, lineWidth,
              offsetLeft, offsetTop, crestHeight, speed, mask, maskMode`
			</td>
	    </tr>
    </tbody>
</table>
