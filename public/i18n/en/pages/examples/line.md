<div class="instance i1">
    <div class="demo"></div>
    <div class="handlebar">
        <div class="btn btn-default open">open</div>
        <div class="btn btn-default pause">pause</div>
    </div>
</div>

Source:

```javascript
new JParticles.Line('#demo')
```

### Fixed Angle

<div class="instance i2">
    <div class="demo"></div>
    <div class="handlebar">
        <div class="btn btn-default open">open</div>
        <div class="btn btn-default pause">pause</div>
    </div>
</div>

Source:

```javascript
new JParticles.Line('#demo', {
	reservedLines: 12,
	// Set the maximum angle to be the same as the minimum angle
	maxDegree: 70,
	minDegree: 70,
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
	        <td>
	            Number of lines.  
	            `(0, 1)` is display as the number of corresponding multiples of the container width, `0 & [1, +∞)` is display as the specific number.  
	        </td>
	    </tr>
	    <tr>
	        <td>color</td>
	        <td>[]</td>
	        <td>string or array</td>
	        <td>The color of the line. Rule reference: [`color`](/examples/quick-start#H7).</td>
	    </tr>
	    <tr>
	        <td>maxWidth</td>
	        <td>2</td>
	        <td>number</td>
	        <td>The maximum border width of the line.</td>
	    </tr>
	    <tr>
	        <td>minWidth</td>
	        <td>1</td>
	        <td>number</td>
	        <td>The minimum border width of the line.</td>
	    </tr>
	    <tr>
	        <td>maxSpeed</td>
	        <td>3</td>
	        <td>number</td>
	        <td>The maximum speed.</td>
	    </tr>
	    <tr>
	        <td>minSpeed</td>
	        <td>1</td>
	        <td>number</td>
	        <td>The minimum speed.</td>
	    </tr>
	    <tr>
	        <td>maxDegree</td>
	        <td>90</td>
	        <td>number</td>
	        <td>The maximum degree. Counterclockwise calculation: 3 o'clock direction is 0 degrees, 12 o'clock direction is 90 degrees.</td>
	    </tr>
	    <tr>
	        <td>minDegree</td>
	        <td>80</td>
	        <td>number</td>
	        <td>The minimum degree.</td>
	    </tr>
	    <tr>
	        <td>createOnClick</td>
	        <td>true</td>
	        <td>boolean</td>
	        <td>Whether to create a new line by mouse click.</td>
	    </tr>
	    <tr>
	        <td>numberOfCreations</td>
	        <td>3</td>
	        <td>number</td>
	        <td>The number of lines created when the click event is triggered.</td>
	    </tr>
	    <tr>
	        <td>removeOnOverflow</td>
	        <td>true</td>
	        <td>boolean</td>
	        <td>Whether to remove the line when it overflows the canvas.</td>
	    </tr>
	    <tr>
	        <td>overflowCompensation</td>
	        <td>20</td>
	        <td>number</td>
	        <td>Overflow compensation value, that is, how many pixels will be removed before overflow, and the minimum value is 0.</td>
	    </tr>
	    <tr>
	        <td>reservedLines</td>
	        <td>6</td>
	        <td>number</td>
	        <td>The number of lines retained in the canvas.</td>
	    </tr>
    </tbody>
</table>
