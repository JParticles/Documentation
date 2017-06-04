<div class="instance-1">
    <div class="demo"></div>
	<div class="ctrl">
		<div class="btn btn-default open">open</div>
		<div class="btn btn-default pause">pause</div>
	</div>
</div>

View Source:

	new JParticles.particle('#demo-1', {
	    // The straight line distance between the two particle centers is 90
	    proximity: 90, 
		// All points are within the range of 100(including) for the positioning point radius,
		// the distance between the center points is less than 
		// or equal to the `proximity` value, then the connection
	    range: 100
	});

<div class="instance-2">
    <div class="demo"></div>
	<div class="ctrl">
		<div class="btn btn-default open">open</div>
		<div class="btn btn-default pause">pause</div>
	</div>
</div>

View Source:

	new JParticles.particle('#demo-2', {
    	color: '#25bfff',
		lineShape: 'cube',
        range: 2000,
        proximity: 100,
		// Turn on parallax effect
        parallax: true
	});

<div class="instance-3">
    <div class="demo"></div>
	<div class="ctrl">
		<div class="btn btn-default open">open</div>
		<div class="btn btn-default pause">pause</div>
	</div>
</div>

View Source:

	new JParticles.particle('#demo-3', {
    	// Range is equal to 0, no connection between particles
	    range: 0,
	    num: 18,
	    maxR: 20,
		minR: 10,
	    maxSpeed: 3
	});

### Default parameters and description

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
	            Number of particles.<br>
	            (0, 1) is display as the number of corresponding multiples of the container width, 0 & [1, + ∞) display the specific number.<br>
	            Pass 0 is meaningless, other similar parameters with the same.
	        </td>
	    </tr>
	    <tr>
	        <td>maxR</td>
	        <td>2.4</td>
	        <td>number</td>
	        <td>Particle maximum radius (0, +∞) </td>
	    </tr>
	    <tr>
	        <td>minR</td>
	        <td>0.6</td>
	        <td>number</td>
	        <td>Particle minimum radius (0, +∞) </td>
	    </tr>
	    <tr>
	        <td>maxSpeed</td>
	        <td>1</td>
	        <td>number</td>
	        <td>Particle maximum speed (0, +∞) </td>
	    </tr>
	    <tr>
	        <td>minSpeed</td>
	        <td>0.1</td>
	        <td>number</td>
	        <td>Particle minimum speed (0, +∞) </td>
	    </tr>
	    <tr>
	        <td>proximity</td>
	        <td>0.2</td>
	        <td>number</td>
	        <td>
	            The distance between the two points of the center of the circle.<br>
	            All points are within the `range` for the positioning point radius, the distance between the center points is less than or equal to the `proximity` value, then the connection.<br>
				(0, 1) is display as the number of corresponding multiples of the container width, 0 & [1, + ∞) display the specific number.
	        </td>
	    </tr>
	    <tr>
	        <td>range</td>
	        <td>0.2</td>
	        <td>number</td>
	        <td>
	            Positioning point range - The larger the range, the more connection, when equal to 0, it is not connected and the relevant value is invalid.<br>
				(0, 1) is display as the number of corresponding multiples of the container width, 0 & [1, + ∞) display the specific number.<br>
	            (Positioning point: the mouse to move to the Canvas when the mouse point, the beginning of the default generation)
	        </td>
	    </tr>
	    <tr>
	        <td>lineWidth</td>
	        <td>0.2</td>
	        <td>number</td>
	        <td>line width.</td>
	    </tr>
	    <tr>
	        <td>lineShape</td>
	        <td>spider</td>
	        <td>string</td>
	        <td>
				Currently supports the following two types:<br>
				spider: spread like spider.<br>
        		cube: closing like cube.
			</td>
	    </tr>
	    <tr>
	        <td>eventElem</td>
	        <td>null</td>
	        <td>null or element</td>
	        <td>
	            An element that triggers a move event to change the positioning point.<br>
				Null means the Canvas, or assigns a DOM element, such as the document.
	        </td>
	    </tr>
	    <tr>
	        <td>parallax</td>
	        <td>false</td>
	        <td>boolean</td>
	        <td>Parallax effect. Parallax effect and particle movement support gyroscope features at the mobile end.</td>
	    </tr>
	    <tr>
	        <td>parallaxLayer</td>
	        <td>[1, 2, 3]</td>
	        <td>array</td>
	        <td>
	            Define the number of layers in the parallax layer and the size of each layer, similar to z-index in CSS.<br>
        		Value range: [0, +∞), the smaller the value, the strength the effect, equal to 0 does not move.<br>
        		Example of defining four layers of particles: [1, 3, 5, 10]
	        </td>
	    </tr>
	    <tr>
	        <td>parallaxStrength</td>
	        <td>5</td>
	        <td>number</td>
	        <td>The smaller the value, the strength the effect (0, +∞) </td>
	    </tr>
    </tbody>
</table>