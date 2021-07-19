<div class="instance i1">
  <div class="demo"></div>
	<div class="handlebar">
		<div class="btn btn-default open">open</div>
		<div class="btn btn-default pause">pause</div>
	</div>
</div>

Source:

```javascript
new JParticles.Particle('#demo', {
    // The straight line distance between the two particle centers
    proximity: 90,
    // All points are within the range of 100(including) for the fixed point radius,
    // the distance between the center points is less than
    // or equal to the `proximity` value, then connection
    range: 100,
})
```

### Parallax(support gyroscope feature on mobile device)

<div class="instance i2">
  <div class="demo"></div>
	<div class="handlebar">
		<div class="btn btn-default open">open</div>
		<div class="btn btn-default pause">pause</div>
	</div>
</div>

Source:

```javascript
new JParticles.Particle('#demo', {
    color: '#25bfff',
    lineShape: 'cube',
    range: 2000,
    proximity: 100,
    // Turn on parallax effect
    parallax: true,
})
```

### Stars

<div class="instance i3">
  <div class="demo"></div>
	<div class="handlebar">
		<div class="btn btn-default open">open</div>
		<div class="btn btn-default pause">pause</div>
	</div>
</div>

Source:

```javascript
new JParticles.Particle('#demo', {
    // Set range to 0, the particles are not connected
    range: 0,
    num: 0.1,
    minSpeed: 0.01,
    maxSpeed: 0.05,
    minR: 0.2,
    maxR: 1.2,
})
```

### Custom Shapes

<div class="instance i4">
  <div class="demo"></div>
	<div class="handlebar">
		<div class="btn btn-default open">open</div>
		<div class="btn btn-default pause">pause</div>
	</div>
</div>

Source:

```javascript
new JParticles.Particle('#demo', {
    num: 100,
    maxR: 30,
    minR: 30,
    range: 0,
    color: ['#fff888', '#f9cd76', '#f7b26e', '#d5d02c'],
    // custom shapes
    shape: [
        'triangle', 'star', 'star:4:0.5', 'star:30:0.9',
        'https://raw.githubusercontent.com/Barrior/assets/main/bubble-colorful.png',
        'https://raw.githubusercontent.com/Barrior/assets/main/bubble.png'
    ],
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
	        <td>0.12</td>
	        <td>number</td>
	        <td>
	            Number of particles.
	            `(0, 1)` is display as the number of corresponding multiples of the container width, `0 & [1, +∞)` is display as the specific number.
	        </td>
	    </tr>
	    <tr>
	        <td>maxR</td>
	        <td>2.4</td>
	        <td>number</td>
	        <td>The maximum radius of particles. `(0, +∞)`</td>
	    </tr>
	    <tr>
	        <td>minR</td>
	        <td>0.6</td>
	        <td>number</td>
	        <td>The minimum radius of particles. `(0, +∞)`</td>
	    </tr>
	    <tr>
	        <td>maxSpeed</td>
	        <td>1</td>
	        <td>number</td>
	        <td>The maximum speed of particles. `(0, +∞)`</td>
	    </tr>
	    <tr>
	        <td>minSpeed</td>
	        <td>0.1</td>
	        <td>number</td>
	        <td>The minimum speed of particles. `(0, +∞)`</td>
	    </tr>
	    <tr>
	        <td>shape<sup>v3.2.0</sup></td>
	        <td>circle</td>
	        <td class="text-left">string or CanvasImageSource or array</td>
	        <td>
            The shape of the particles can be selected from the following.<br>
            1. Built-in shapes：`circle`, `triangle`, `star`.<br>
            2. The shape represented by the prefix `star`, syntax: `star:[sides]:[concave value]`, for example: `star:5:0.5`, which means a five-pointed star.<br>
            3. Support HTTP, Base64, [CanvasImageSource](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage#%E5%8F%82%E6%95%B0) images.
          </td>
	    </tr>
	    <tr>
	        <td>proximity</td>
	        <td>0.2</td>
	        <td>number</td>
	        <td>
	            How close two dots need to be.<br>
	            If the distance of two dots are less than or equal to `proximity` value and conform the `range` condition then the two dots are connected.<br>
				      `(0, 1)` is display as the number of corresponding multiples of the container width, `0 & [1, + ∞)` is display as the specific number.
	        </td>
	    </tr>
	    <tr>
	        <td>range</td>
	        <td>0.2</td>
	        <td>number</td>
	        <td>
	            Connection range of the fixed point.<br>
	            The larger the range, the more connection, when it equals to 0, particles are not connected and its relevant options are invalid.<br>
	            `(0, 1)` is display as the number of corresponding multiples of the container width, `0 & [1, + ∞)` is display as the specific number.<br>
	            (Fixed point: the mouse point on canvas, randomly generate a point at the beginning)
	        </td>
	    </tr>
	    <tr>
	        <td>lineWidth</td>
	        <td>0.2</td>
	        <td>number</td>
	        <td>The border width of connected lines.</td>
	    </tr>
	    <tr>
	        <td>lineShape</td>
	        <td>spider</td>
	        <td>string</td>
	        <td>
              Shape of the connected lines:<br>
              `spider`: spread like a spider.<br>
              `cube`: closing like a cube.
			</td>
	    </tr>
	    <tr>
	        <td>eventElem</td>
	        <td>null</td>
	        <td>null or element</td>
	        <td>
	          Element that triggers a move event to change the coords of the fixed point.
	          `Null` means the `Canvas` or assigns a DOM element, such as the `document`.
	        </td>
	    </tr>
	    <tr>
	        <td>parallax</td>
	        <td>false</td>
	        <td>boolean</td>
	        <td>If `true`, turn on parallax effect. The parallax effect and the particles moving are support gyroscope feature on mobile devices.</td>
	    </tr>
	    <tr>
	        <td>parallaxLayer</td>
	        <td>[1, 2, 3]</td>
	        <td>array</td>
	        <td>
	          Define the number of layers in the parallax layer and the size of each layer, similar to z-index in CSS.<br>
			  Value range: `[0, +∞)`, the smaller the value, the strength the effect, it is not moving at all when it equals to 0.<br>
			  Example of defining four layers of particles: `[1, 3, 5, 10]`.
	        </td>
	    </tr>
	    <tr>
	        <td>parallaxStrength</td>
	        <td>5</td>
	        <td>number</td>
	        <td>The smaller the value, the strength the effect. `(0, +∞)`</td>
	    </tr>
    </tbody>
</table>
