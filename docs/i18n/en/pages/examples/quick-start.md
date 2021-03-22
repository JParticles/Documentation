### 1. Download

- Via NPM: [`npm install jparticles --save`](https://www.npmjs.com/package/jparticles)
- Via CDN: [UNPKG](https://unpkg.com/jparticles/)

### 2. Usage

- Use through the `script` tag

  ```html
    <!DOCTYPE html>
    <html>
    <header>
        <meta charset="utf-8">

        <!-- Way1: Import all effects -->
        <script src="https://unpkg.com/jparticles/browser/jparticles.all.js"></script>

        <!-- Way2(recommended): Import the basic dependencies -->
        <script src="https://unpkg.com/jparticles/browser/jparticles.base.js"></script>
        <!-- then import specific effect on-demand -->
        <script src="https://unpkg.com/jparticles/browser/particle.js"></script>

    </header>
    <body>
    </body>
    </html>
  ```

- Use in Vue project

  ```javascript
    <template>
      <div id="demo"></div>
    </template>

    <script>
    import { Particle } from 'jparticles'

    export default {
      mounted() {
        new Particle('#demo')
      }
    }
    </script>
  ```


- Use in React project

  ```javascript
    import { Particle } from 'jparticles'

    class Example extends React.Component {
      componentDidMount() {
        new Particle('#demo')
      }

      render() {
        return <div id="demo"></div>
      }
    }
  ```

### 3. Create effect
> Prepare an empty `DOM` element with certain width and height to show the particle effect.<br/>
> Use `new JParticles.effectName` to create effect.

```html
<!DOCTYPE html>
<html>
<header>
    <meta charset="utf-8">
    <!-- Import the basic dependencies -->
    <script src="https://unpkg.com/jparticles/browser/jparticles.base.js"></script>
    <!-- Import specific effect on-demand -->
    <script src="https://unpkg.com/jparticles/browser/particle.js"></script>
</header>
<body>
    <!-- 
        Prepare an empty `DOM` element with certain width and height, 
        otherwise the Canvas width and height will be defined as 485 and 300 by default.
    -->
    <div id="demo" style="width: 400px; height: 250px;"></div>

    <script>
        // Create effect.
        new JParticles.Particle('#demo')
    </script>
</body>
</html>
```

### 4. Completed
> So that our particle effect is completed!

<div class="instance">
    <div class="demo"></div>
</div>

### 5. Methods
> Each instance object contains the following two methods, in order to reduce duplication of effort, the latter example is omitted.<br/>
> `.pause()` Pause effect. <br/>
> `.open()` &nbsp;Open effect.

<div class="instance-handlebar">
	<div class="btn btn-success open">Click me to open</div>
	<div class="btn btn-success pause">Click me to pause</div>
</div>

The code same as follows:

```javascript
const effect = new JParticles.Particle('#demo')

document.getElementById('open').addEventListener('click', () => {
    // Open effect.
    effect.open()
})

document.getElementById('pause').addEventListener('click', () => {
    // Pause effect.
    effect.pause()
})
```

### 6. Events
- Each instance object contains `onDestroy()` event, which is trigger when the `Canvas` element is removed from the `DOM` tree.
- Support chaining operation for all events.
- Unless otherwise specified, each event support any number of function type parameters, also support any number of calls, execute accord to the order, as follows.

```javascript
effect
    .onDestroy(() => {
        console.log('Canvas has been removed - 1')
    }, () => {
        console.log('Canvas has been removed - 2')
    })
    .onDestroy(() => {
        console.log('Canvas has been removed - 3')
    })
```

Usually `onDestroy()` will not be used, but it is part of the lifecycle, sometimes it may be needed.

### 7. Settings

1. Each effect object accepts two parameters of `selector` and `options`.

    > `new JParticles.Name(selector, options)`

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


1. Unless otherwise specified, each effect has contains three options as the follows.

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
                <td>Canvas global transparency. Range: `[0-1]`.</td>
            </tr>
            <tr>
                <td>color</td>
                <td>[]</td>
                <td>string or array</td>
                <td class="module module-api">
                    <div>Particles color</div>
                    <ul>
                        <li>An empty array that mean random color.</li>
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
                <td>Whether to handle window size changes. If unneeded adaptive, set `false` to improve performance.</td>
            </tr>
        </tbody>
    </table>


1. Through the exposed global interface `JParticles.Name.defaultConfig`, you can easily modify the default options of a special effect in an overriding manner. An example is as follows:

    ```javascript
    Object.assign(JParticles.Particle.defaultConfig, {
        opacity: 1,
        color: ['red', 'blue', 'green'],
        maxSpeed: 2,
        minSpeed: 1,
        // ...other config
    })
    ```

1. Through the exposed global interface `JParticles.commonConfig`, it is convenient to modify the common options of all special effects in an overriding manner. The default values of the current common options are as follows:

    ```javascript
    Object.assign(JParticles.commonConfig, {
	    // Canvas global transparency
	    opacity: 1,
	    // Particles color
	    color: [],
	    // Handle window size changes
	    resize: true
    })
    ```

### 8. Easing

Through the exposed global interface `JParticles.easing`, you can easily add other easing functions in an overlay mode. The following is an example.

> Reference [jquery.easing.js](https://github.com/danro/jquery-easing/blob/master/jquery.easing.js) or [http://robertpenner.com/easing/](http://robertpenner.com/easing/)

```javascript
Object.assign(JParticles.easing, {
    easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    },
})
```

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

1. Modify the default options should be placed before `new`.
1. Please refer to the left menu for the default options and examples of special effects.
