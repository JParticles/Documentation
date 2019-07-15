<div class="instance i1">
  <div class="demo"></div>
	<div class="ctrls">
		<div class="btn btn-default open">open</div>
		<div class="btn btn-default pause">pause</div>
	</div>
</div>

View Source:

```javascript
new JParticles.Particles('#demo-1', {
    // The straight line distance between the two particle centers is 90
    proximity: 90,
    // All points are within the range of 100(including) for the positioning point radius,
    // the distance between the center points is less than 
    // or equal to the `proximity` value, then the connection
    range: 100,
})
```

<div class="instance i2">
  <div class="demo"></div>
	<div class="ctrls">
		<div class="btn btn-default open">open</div>
		<div class="btn btn-default pause">pause</div>
	</div>
</div>

View Source:

```javascript
new JParticles.Particles('#demo-2', {
    color: '#25bfff',
    lineShape: 'cube',
    range: 2000,
    proximity: 100,
    // Turn on parallax effect
    parallax: true,
})
```

<div class="instance i3">
  <div class="demo"></div>
	<div class="ctrls">
		<div class="btn btn-default open">open</div>
		<div class="btn btn-default pause">pause</div>
	</div>
</div>

View Source:

```javascript
new JParticles.Particles('#demo-3', {
  // When the range is equals to 0, the particles are not connected
  range: 0,
  num: 18,
  maxR: 20,
  minR: 10,
  maxSpeed: 3,
})
```

### Options

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
	            It's meaningless to pass in `0`, and the other similar parameters are the same.
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
	        <td>proximity</td>
	        <td>0.2</td>
	        <td>number</td>
	        <td>
	            How close two dots need to be.  
	            If the distance of two dots are less than or equal to `proximity` value and conform the `range` condition then the two dots are connected.  
				      `(0, 1)` is display as the number of corresponding multiples of the container width, `0 & [1, + ∞)` is display as the specific number.
	        </td>
	    </tr>
	    <tr>
	        <td>range</td>
	        <td>0.2</td>
	        <td>number</td>
	        <td>
	            The range for the fixed point. the
	            定位点的范围，范围越大连线越多，等于 `0` 时，不连线，相关值无效。  
				      `(0, 1)` 显示为容器宽度相应倍数的值，`0 & [1, +∞)` 显示具体值。  
	            (定位点：即鼠标移动到画布时的鼠标点，一开始默认生成一点)。
	        </td>
	    </tr>
	    <tr>
	        <td>lineWidth</td>
	        <td>0.2</td>
	        <td>number</td>
	        <td>Line width.</td>
	    </tr>
	    <tr>
	        <td>lineShape</td>
	        <td>spider</td>
	        <td>string</td>
	        <td>
              Shape of the connected lines:  
              `spider:` spread like a spider.  
              `cube:` closing like a cube.
			    </td>
	    </tr>
	    <tr>
	        <td>eventElem</td>
	        <td>null</td>
	        <td>null 或 element</td>
	        <td>
	          Element that triggers a move event to change the position point.  
	          `Null` means the `Canvas` or assigns a DOM element, such as the `document`.
	        </td>
	    </tr>
	    <tr>
	        <td>parallax</td>
	        <td>false</td>
	        <td>boolean</td>
	        <td>If true, turn on parallax effect. The parallax effect and the particles moving are support gyroscope feature on mobile devices.</td>
	    </tr>
	    <tr>
	        <td>parallaxLayer</td>
	        <td>[1, 2, 3]</td>
	        <td>array</td>
	        <td>
	            定义粒子在视差图层里的层数及每层的层级大小，类似 `CSS` 里的 `z-index`。取值范围: `[0, +∞)`，值越小视差效果越强烈，`0` 则不动。  
              定义四层粒子示例：`[1, 3, 5, 10]`。
	        </td>
	    </tr>
	    <tr>
	        <td>parallaxStrength</td>
	        <td>5</td>
	        <td>number</td>
	        <td>视差强度，值越小视差效果越强烈 `(0, +∞)`。</td>
	    </tr>
    </tbody>
</table>
