<div class="instance-1">
    <div class="demo"></div>
	<div class="ctrl">
		<div class="btn btn-default open">open</div>
		<div class="btn btn-default pause">pause</div>
	</div>
</div>

View Source:

	new JParticles.wave('#demo-1', {
	    num: 3,
	    // No fill
	    fill: false,
	    // Draw line
	    line: true
	    // The three lines color in turn
	    lineColor: ['rgba(0, 190, 112, .5)', 'rgba(0, 190, 112, .7)', 'rgba(0, 190, 112, .9)'],
	    // The three lines width in turn
	    lineWidth: [.5, .7, .9],
	    // The three lines are offset left in turn
	    offsetLeft: [2, 1, 0],
	    // The three lines are offset upward by 0.75 times the container height
	    offsetTop: .75,
	    // The three lines crest height in turn
	    crestHeight: [10, 14, 18],
	    // The three lines have two ripples
	    rippleNum: 2,
	    speed: .1
	});

### Voice search：

<div class="instance-2">
    <div class="demo"></div>
	<div class="btn btn-default voice">Press and hold to emulate voice search</div>
</div>

View Source:

	var settings = {
        crestHeight: [10, 14, 18],
        speed: .1
    };

	// JParticles.utils.extend equal to jQuery.extend, you can also instead width Object.assign
	var effect = new JParticles.wave('#demo-2', JParticles.utils.extend({
        num: 3,
        lineColor: ['#e53d27', '#42e527', '#27C9E5'],
        lineWidth: [.7, .9, 1],
        offsetTop: .65,
        rippleNum: 2
    }, settings));

	// Fluctuation effect
	document.querySelector('.voice').onmousedown = function () {
		clearInterval(this.timer);
        this.timer = setInterval(function () {
            var crestHeight = settings.crestHeight.map(function (item) {

                // Get random fluctuation values
                item += JParticles.utils.limitRandom(20, -20);

				// Adjust the value between (0, 1) as an integer
                if (item < 1 && item > 0) {
                    item = Math.ceil(item);
                }

                return item;
            });

			// Use setOptions() to control the fluctuation of the line
            effect.setOptions({
                crestHeight: crestHeight,
                speed: [.2, .14, .1]
            });
        }, 100);

		// Recover
		var self = this;
		document.onmouseup = function () {
			document.onmouseup = null;
		    clearInterval(self.timer);
		    effect.setOptions(settings);
		};
	};

### Water cut:

<div class="instance-3">
    <div class="demo"></div>
	<div class="ctrl">
		<div class="btn btn-default open">open</div>
		<div class="btn btn-default pause">pause</div>
	</div>
</div>

View Source:

	new JParticles.wave('#demo-3', {
	    num: 1,
		// Not draw line
        line: false,
		// fill
        fill: true,
		// fill the background color
        fillColor: '#27C9E5',
        offsetTop: .75,
        crestHeight: 8,
        rippleNum: 3,
        speed: .07
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
	        <td>3</td>
	        <td>number</td>
	        <td>Line number.</td>
	    </tr>
	    <tr>
	        <td>fill</td>
	        <td>false</td>
	        <td>boolean</td>
	        <td>Whether to fill background color, set to `false` the correlation value is invalid.</td>
	    </tr>
	    <tr>
	        <td>fillColor</td>
	        <td>[]</td>
	        <td>string or array</td>
	        <td>
	            fill the background color.<br>
				Use the same rules as the
	            <a class="dotted-line" href="#/en/examples/quick_start#2_Unless_otherwise_specified_each_plugin_has_contains_three_options_as_the_follows_" target="_blank">
	                color
	            </a>.
				<br>
				Other similar options are the same.
	        </td>
	    </tr>
	    <tr>
	        <td>line</td>
	        <td>true</td>
	        <td>boolean</td>
	        <td>Whether to draw lines, set to `false` the correlation value is invalid.</td>
	    </tr>
	    <tr>
	        <td>lineColor</td>
	        <td>[]</td>
	        <td>string or array</td>
	        <td>Line color.</td>
	    </tr>
	    <tr>
	        <td>lineWidth</td>
	        <td>[]</td>
	        <td>number or array</td>
	        <td>
	            Line width. The empty array is random `[.2, 2)` the width.
	        </td>
	    </tr>
	    <tr>
	        <td>offsetLeft</td>
	        <td>[]</td>
	        <td>number or array</td>
	        <td>
				The horizontal offset of the line, offset from the left of the Canvas.<br>
				`(0, 1)` is display as the number of corresponding multiples of the container width, `0 & [1, + ∞)` display the specific number.
			</td>
	    </tr>
	    <tr>
	        <td>offsetTop</td>
	        <td>[]</td>
	        <td>number or array</td>
	        <td>
				The vertical offset of the line, the distance from the midpoint of the line to the top of the Canvas.<br>
				`(0, 1)` is display as the number of corresponding multiples of the container height, `0 & [1, + ∞)` display the specific number.
			</td>
	    </tr>
	    <tr>
	        <td>crestHeight</td>
	        <td>[]</td>
	        <td>number or array</td>
	        <td>
				Crest height. `(0, 1)` is display as the number of corresponding multiples of the container height, `0 & [1, + ∞)` display the specific number.
			</td>
	    </tr>
	    <tr>
	        <td>rippleNum</td>
	        <td>[]</td>
	        <td>number or array</td>
	        <td>
				Ripple number, that is the number of sine cycles.<br>
				By default: `[1, 0.2 * Container width)`
			</td>
	    </tr>
	    <tr>
	        <td>speed</td>
	        <td>[]</td>
	        <td>number or array</td>
	        <td>Movement speed. By default: `[.1, .4)`</td>
	    </tr>
    </tbody>
</table>

### Methods and description

<table class="table table-bordered-inner table-striped">
    <thead>
	    <tr>
	        <th width="100">Name</th>
	        <th width="110">Params Type</th>
	        <th width="450">Description</th>
	    </tr>
    </thead>
    <tbody>
	    <tr>
	        <td>setOptions(newOptions)</td>
	        <td>newOptions: object</td>
	        <td>
				Dynamically set option values. Currently available options:<br>
				`opacity, fill, fillColor, line, lineColor, lineWidth, 
				offsetLeft, offsetTop, crestHeight, speed`
			</td>
	    </tr>
    </tbody>
</table>