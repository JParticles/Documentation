### 1. Download JParticles
> Download `JParticles` in the following ways:

1. Download the latest or every version from [GitHub Releases](https://github.com/Barrior/JParticles/releases).
1. Use `npm install jparticles --save`, [link to NPM](https://www.npmjs.com/package/jparticles).
2. Use CDN : [UNPKG](https://unpkg.com/jparticles/production/).

### 2. Import JParticles
> You can use `script` tag to import JParticles in a page, or you can use AMD or CMD to load. However, `JParticles` is still register an object of the same name in the `window` for plugin extensions.

	<!DOCTYPE html>
	<html>
	<header>
	    <meta charset="utf-8">

	    <!-- Import all effects -->
	    <!-- <script src="jparticles.all.js"></script> -->

	    <!-- Recommend: on-demand loading. Import basic dependence -->
	    <script src="jparticles.js"></script>
	    <!-- Import particle effect -->
	    <script src="particle.js"></script>

	</header>
	<body>
	</body>
	</html>

### 3. Create effect
> Prepare an empty `DOM` element with a certain width and height to show particle effect.<br/>
> Use `new JParticles.name` to create effect.

	<!DOCTYPE html>
	<html>
	<header>
	    <meta charset="utf-8">
	    <!-- Recommend: on-demand loading. Import basic dependence -->
	    <script src="jparticles.js"></script>
	    <!-- Import particle effect -->
	    <script src="particle.js"></script>
	</header>
	<body>
	    <!-- 
			Prepare an empty `DOM` element with a certain width and height, 
			otherwise the Canvas width and height defaults to 485 and 300.
		-->
	    <div id="demo" style="width: 400px; height: 250px;"></div>
	
	    <script>
	        // Use `new JParticles.name` to create effect.
	        new JParticles.particle('#demo');
	    </script>
	</body>
	</html>

### 4. Completed
> So that our particle movement effect is complete!

<div class="instance">
    <div class="demo"></div>
</div>

### 5. Advanced · Public methods
> Each instance object contains the following two methods, in order to reduce duplication of effort, the latter example is omitted.<br/>
> `.pause()` Pause movement. <br/>
> `.open()`  &nbsp;Open movement.

<div class="instance-ctrl">
	<div class="btn btn-success open">Click me to open</div>
	<div class="btn btn-success pause">Click me to pause</div>
</div>

The code is as follows:

    var effect = new JParticles.particle('#demo');

    document.getElementById('open').onclick = function () {
        // Open movement.
        effect.open();
    };

    document.getElementById('pause').onclick = function () {
        // Pause movement.
        effect.pause();
    };


### 6. Events
- Each instance object contains `onDestroy()` event, which is trigger when the `Canvas` element is removed from the `DOM` tree.
- All effects has support chaining operation for events.
- Unless otherwise specified, each event support any number of function type parameters, also support any number of calls, execute accord to the order, as follows.
> Usually `onDestroy()` will not be used, but it is part of the lifecycle, sometimes it may be needed.

	effect
		.onDestroy(function () {
			console.log('Canvas has been removed - 1');
		}, function () {
			console.log('Canvas has been removed - 2');
		})
		.onDestroy(function () {
			console.log('Canvas has been removed - 3');
		})

### 7. Settings
#### 1. Each instance object accept two parameters, one is the `selector`, one is the `options`.
> `new JParticles.name(selector, options)`

<table class="table table-bordered-inner table-striped">
    <thead>
        <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>selector</td>
            <td>string or element</td>
            <td>[Required] Selector string or native DOM element.</td>
        </tr>
        <tr>
            <td>options</td>
            <td>object</td>
            <td>[Optional] Configuration parameter.</td>
        </tr>
    </tbody>
</table>

#### 2. Unless otherwise specified, each plugin has contains three options as the follows.

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
            <td>opacity</td>
            <td>1</td>
            <td>number</td>
            <td>Canvas global transparency, Range: `[0-1]`</td>
        </tr>
        <tr>
            <td>color</td>
            <td>[]</td>
            <td>string or array</td>
            <td class="module module-api">
                <div>Particles color</div>
                <ul>
                    <li>
                        An empty array indicates random color.
                    </li>
                    <li>
                        If an array of specific colors is provide, such as: `['red', 'blue', 'green']`, the particle color is randomly obtain between the three color values.
                    </li>
                    <li>
                        If a string is provide, such as: `'red'`, then the particles are fill with red.
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>resize</td>
            <td>true</td>
            <td>boolean</td>
            <td>
				Adaptive window size change.<br>
				If not adaptive, set `false` to improve performance.
			</td>
        </tr>
    </tbody>
</table>

#### 3. The default config of a special effect can be easily change by exposed the global interface `JParticles.name.defaultConfig`, as follows:

	JParticles.particle.defaultConfig = {
	    opacity: 1,
	    color: ['red', 'blue', 'green'],
	    maxSpeed: 2,
	    minSpeed: 1,
	    // ...other properties
	};

#### 4. The common config of all effects can be easily change by exposed the global interface `JParticles.commonConfig`, the current public common config is as follows:

	JParticles.commonConfig = {
	    // Canvas global transparency
	    opacity: 1,
	    // Particles color
	    color: [],
	    // Adaptive window size change
	    resize: true
	}

### 8. Easing function
#### Add other animations you can use the exposed global interface `JParticles.easing`, an example as follows.
> Note: `JParticles.easing` only allows you to add, do not to change or delete existing functions.<br>
> Add other new animations please reference to [http://easings.net](http://easings.net)

	// JParticles.utils.extend equal to jQuery.extend, you can also instead with Object.assign
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

	// or
	JParticles.easing.easeOutQuad = function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	};

<table class="table table-bordered-inner table-striped">
    <thead>
        <tr>
            <th width="500">The name of the existing function</th>
            <th width="500">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>linear</td>
            <td>Uniform motion.</td>
        </tr>
        <tr>
            <td>swing</td>
            <td>Equal to easeInOutQuad </td>
        </tr>
        <tr>
            <td>easeInOutQuad</td>
            <td>First slowly accelerated and then slowly slow down.</td>
        </tr>
    </tbody>
</table>

### 9. Tips
1. Change the default options should be place before `new`.
1. Please check the menu on the left to know the default config and examples of each `JParticles` plugin.
1. You can also clone the [JParticles](https://github.com/Barrior/JParticles) project and look at the `samples` directory, which is a richer but potentially unexplained demos.