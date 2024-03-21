<div class="instance i1">
    <div class="demo"></div>
    <div class="handlebar">
        <div class="btn btn-default open">open</div>
        <div class="btn btn-default pause">pause</div>
    </div>
</div>

Source:

```javascript
new JParticles.Snow('#demo')
```

### Custom Shapes

<div class="instance i2">
    <div class="demo"></div>
    <div class="handlebar">
        <div class="btn btn-default open">open</div>
        <div class="btn btn-default pause">pause</div>
    </div>
</div>

Source:

```javascript
new JParticles.Snow('#demo', {
  maxR: 10,
  minR: 10,
  maxSpeed: 0.3,
  minSpeed: 0.1,
  swing: false,
  // custom shapes
  shape: [
    'triangle', 'star', 'star:4:0.5',
    'https://raw.githubusercontent.com/Barrior/assets/main/gift.png'
  ],
})
```

### Spin Animation

<div class="instance i3">
    <div class="demo"></div>
    <div class="handlebar">
        <div class="btn btn-default open">open</div>
        <div class="btn btn-default pause">pause</div>
    </div>
</div>

Source:

```javascript
new JParticles.Snow('#demo', {
  maxR: 20,
  minR: 10,
  maxSpeed: 0.3,
  minSpeed: 0.1,
  shape: [
    'star',
    'https://raw.githubusercontent.com/Barrior/assets/main/gift.png',
    'https://raw.githubusercontent.com/Barrior/assets/main/smiling-face.gif',
  ],
  // open spin animation
  spin: true,
})
```

### Animation of WeChat chat page

<div class="instance i4">
    <div class="demo"></div>
    <div class="handlebar">
        <div class="btn btn-default fall-again">Fall Again</div>
    </div>
</div>

Source:

```javascript
const effect = new JParticles.Snow('#demo', {
    num: 2,
    maxR: 10,
    minR: 10,
    maxSpeed: 0.3,
    minSpeed: 0.3,
    swing: false,
    shape: 'https://raw.githubusercontent.com/Barrior/assets/main/gift.png',
    // Duration of random creation of snowflakes
    duration: 3000,
})

// fall again
document.querySelector('.fall-again').addEventListener('click', () => {
  effect.fallAgain()
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
	        <td>6</td>
	        <td>number</td>
	        <td>The number of snowflakes created for the first time or randomly (maximum).</td>
	    </tr>
	    <tr>
	        <td>color</td>
	        <td>#fff</td>
	        <td>string or array</td>
	        <td>The color of the snow. Rule reference: [`color`](/examples/quick-start#H7)</td>
	    </tr>
	    <tr>
	        <td>maxR</td>
	        <td>6.5</td>
	        <td>number</td>
	        <td>The maximum radius of the snow.</td>
	    </tr>
	    <tr>
	        <td>minR</td>
	        <td>0.4</td>
	        <td>number</td>
	        <td>The minimum radius of the snow.</td>
	    </tr>
	    <tr>
	        <td>maxSpeed</td>
	        <td>0.6</td>
	        <td>number</td>
	        <td>The maximum speed of the snow.</td>
	    </tr>
	    <tr>
	        <td>minSpeed</td>
	        <td>0.1</td>
	        <td>number</td>
	        <td>The minimum speed of the snow.</td>
	    </tr>
	    <tr>
	        <td>shape<sup>v3.2.0</sup></td>
	        <td>circle</td>
	        <td class="text-left">string or CanvasImageSource or array</td>
	        <td>
            The shape of the snowflake can be selected from the following.<br>
            1. Built-in shapes：`circle`, `triangle`, `star`.<br>
            2. The shape represented by the prefix `star`, syntax: `star:[sides]:[concave value]`, for example: `star:5:0.5`, which means a five-pointed star.<br>
            3. Support HTTP, Base64, [CanvasImageSource](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage#%E5%8F%82%E6%95%B0) images.
          </td>
	    </tr>
	    <tr>
	        <td>duration<sup>v3.4.0</sup></td>
	        <td>-</td>
	        <td>number</td>
	        <td>The duration of randomly creating snowflakes, in milliseconds.</td>
	    </tr>
	    <tr>
	        <td>swing</td>
	        <td>true</td>
	        <td>boolean</td>
	        <td>Whether to randomly change the direction of falling.</td>
	    </tr>
	    <tr>
	        <td>swingInterval</td>
	        <td>2000</td>
	        <td>number</td>
	        <td>The time interval for changing direction, in milliseconds.</td>
	    </tr>
	    <tr>
	        <td>swingProbability</td>
	        <td>0.06</td>
	        <td>number</td>
	        <td>The probability of changing direction (after reaching the time interval), the value range is `[0, 1]`.</td>
	    </tr>
	    <tr>
	        <td>spin<sup>v3.5.0</sup></td>
	        <td>false</td>
	        <td>boolean</td>
	        <td>Whether the particle spins.</td>
	    </tr>
	    <tr>
	        <td>spinMaxSpeed<sup>v3.5.0</sup></td>
	        <td>5</td>
	        <td>number</td>
	        <td>The maximum speed of particle spin. `(0, 360)`</td>
	    </tr>
	    <tr>
	        <td>spinMixSpeed<sup>v3.5.0</sup></td>
	        <td>1</td>
	        <td>number</td>
	        <td>The minimum speed of particle spin. `(0, 360)`</td>
	    </tr>
    </tbody>
</table>

### Methods

<table class="table table-bordered-inner table-striped">
    <thead>
	    <tr>
	        <th width="100">Name</th>
	        <th width="100">Arguments Type</th>
	        <th width="450">Description</th>
	    </tr>
    </thead>
    <tbody>
	    <tr>
	        <td>fallAgain()<sup>v3.4.0</sup></td>
	        <td>-</td>
	        <td>The snowflakes fall again, which is valid when the `duration` parameter is set.</td>
	    </tr>
    </tbody>
</table>

### Events

<table class="table table-bordered-inner table-striped">
    <thead>
	    <tr>
	        <th width="100">Name</th>
	        <th width="110">Arguments Type</th>
	        <th width="400">Description</th>
	    </tr>
    </thead>
    <tbody>
	    <tr>
	        <td>onFinished()<sup>v3.4.0</sup></td>
	        <td>function</td>
	        <td>An event triggered after all snowflakes have landed, valid when the `duration` parameter is set.</td>
	    </tr>
    </tbody>
</table>
