<div class="instance-1">
    <div class="demo"></div>
	<div class="ctrl">
		<div class="btn btn-default done">Click me to finish loading</div>
		<div class="btn btn-default reload">Re-demo</div>
	</div>
</div>

View Source:

	var loading = new JParticles.waveLoading('#demo-1', {

	    // [font style][font weight][font size][font family]
	    // The text style, like css, must contain [font size] and [font family]
	    font: 'normal 900 16px Arial',

		smallFont: 'normal 900 14px Arial',

		// Set to `false` to improve performance 
		// because here is no need to self-adaption
        resize: false
	});
	
	loading
	    .onProgress(function (progress) {
	
			// Set text color to white if the progress more than 60%
	        if (progress >= 60) {
	            loading.setOptions({
	                color: '#fff'
	            });
	        }

			// Return a string means the loading text is apply `font` style,
			// do not apply `smallFont` related styles
	        return 'loading...' + Math.ceil(progress) + '%';

			// Return an object means the `text` is apply `font` style,
			// the `smallText` apply `smallFont` related styles
            // return {
            //     text: 'loading...' + Math.ceil(progress),
            //     smallText: '%'
            // }
	    });

	// Call `done()` method to finish loading
	document.querySelector('.done').onclick = function () {
        loading.done();
    };
	
### Load Image · In the same way you can load WEB page

<div class="instance-2">
	<div class="container">
		<div class="frame text-center-vertical"></div>
	</div>
    <div class="mask"></div>
	<div class="demo">Click me to load</div>
	<div class="ctrl">
		<div class="btn btn-default reload">Reload</div>
	</div>
</div>

View Source:

	// Extend `easing` function
	JParticles.utils.extend(JParticles.easing, {
        easeOutBounce: function (x, t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        }
    });

	var loading = new JParticles.waveLoading('#demo-2', {
	    font: 'normal 900 16px Arial',
        resize: false,

		// Change an easing animation effect
        easing: 'easeOutBounce'
	});
	
	loading
	    .onProgress(function (progress) {
	        if (progress >= 60) {
	            loading.setOptions({
	                color: '#fff'
	            });
	        }
	        return 'loading...' + Math.ceil(progress) + '%';
	    })
	    .onFinished(function () {

			// Hide the mask and loading animation after loading done.
			// Open a 50ms timer in order to the `100%` can be seen.
			setTimeout(() => {
                document.querySelector('.mask').style.display = 'none';
				document.querySelector('#demo-2').style.display = 'none';
            }, 50);
	    });

	var img = document.createElement('img');
	img.src = 'https://barrior.github.io/storage/love.jpg';
	img.onload = function () {
		loading.done();
	};
	document.querySelector('#demo-2').parentNode.appendChild(img);

### Default parameters and description

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
	        <td>'normal 900 20px Arial'</td>
	        <td>string</td>
	        <td>
				[font style][font weight][font size][font family] <br>
        		The text style, like css, must contain [font size] and [font family]
			</td>
	    </tr>
	    <tr>
	        <td>smallFont</td>
	        <td>'normal 900 14px Arial'</td>
	        <td>string</td>
	        <td>Small font style apply to the "%".</td>
	    </tr>
	    <tr>
	        <td>smallFontOffsetTop</td>
	        <td>1</td>
	        <td>number</td>
	        <td>
				The offset value of the small font relative to the midpoint.<br>
        		This is the adjustment of the detail to make the show look better.
			</td>
	    </tr>
	    <tr>
	        <td>color</td>
	        <td>#333</td>
	        <td>string</td>
	        <td>Progress text color.</td>
	    </tr>
	    <tr>
	        <td>fillColor</td>
	        <td>#27C9E5</td>
	        <td>string</td>
	        <td>Fill the background color.</td>
	    </tr>
	    <tr>
	        <td>offsetLeft</td>
	        <td>0</td>
	        <td>number</td>
	        <td>
				The horizontal offset of the line, offset from the left of the Canvas.<br>
				`(0, 1)` is display as the number of corresponding multiples of the container width, `0 & [1, + ∞)` display the specific number.
			</td>
	    </tr>
	    <tr>
	        <td>crestHeight</td>
	        <td>4</td>
	        <td>number</td>
	        <td>
				Crest height. `(0, 1)` is display as the number of corresponding multiples of the container height, `0 & [1, + ∞)` display the specific number.
			</td>
	    </tr>
	    <tr>
	        <td>rippleNum</td>
	        <td>1</td>
	        <td>number</td>
	        <td>Ripple number, that is the number of sine cycles.</td>
	    </tr>
	    <tr>
	        <td>speed</td>
	        <td>0.3</td>
	        <td>number</td>
	        <td>The wave movement speed.</td>
	    </tr>
	    <tr>
	        <td>duration</td>
	        <td>5000</td>
	        <td>number</td>
	        <td>
				Load to `99%` of the length of time (ms), <br>
				with the longer, the slowly load to `99%`.
			</td>
	    </tr>
	    <tr>
	        <td>easing</td>
	        <td>swing</td>
	        <td>string</td>
	        <td>
				Load the animation of the process.<br>
				By default support two types as follows:<br>
				`linear`: Uniform motion.<br>
				`swing`: First slowly accelerated and then slowly slow down.<br>
				Add other new animations please reference to 
				<a class="dotted-line" href="#/en/examples/quick_start#8_Easing_function" target="_blank">
					Easing function
				</a>.
			</td>
	    </tr>
    </tbody>
</table>

### Methods and Description

<table class="table table-bordered-inner table-striped">
    <thead>
	    <tr>
	        <th width="100">Name</th>
	        <th width="160">Params Type</th>
	        <th width="450">Description</th>
	    </tr>
    </thead>
    <tbody>
	    <tr>
	        <td>setOptions(newOptions)</td>
	        <td>newOptions: object</td>
	        <td>
				Dynamically set option values. Currently available options: <br>
				`opacity, color, font, smallFont, smallFontOffsetTop,
				fillColor, offsetLeft, crestHeight, speed`
			</td>
	    </tr>
	    <tr>
	        <td>done()</td>
	        <td>no arguments</td>
	        <td>Let the loading progress be finish immediately.</td>
	    </tr>
    </tbody>
</table>

### Events and Description

<table class="table table-bordered-inner table-striped">
    <thead>
	    <tr>
	        <th width="150">Name</th>
	        <th width="200">Arguments Type</th>
	        <th width="400">Description</th>
	    </tr>
    </thead>
    <tbody>
	    <tr>
	        <td>onProgress()</td>
	        <td>function</td>
	        <td>
				This event is trigger each time the progress is change, and a return value is accepted.<br>
				The return value type is `{string | object}`.
			</td>
	    </tr>
	    <tr>
	        <td>onFinished()</td>
	        <td>function</td>
	        <td>This event is trigger when the progress is loaded to `100%`.</td>
	    </tr>
    </tbody>
</table>