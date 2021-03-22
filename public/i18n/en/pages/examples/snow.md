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
    </tbody>
</table>
