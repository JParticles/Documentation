### 1、获取 JParticles

> 通过以下几种方式获取 `JParticles`：

1. [GitHub Releases](https://github.com/Barrior/JParticles/releases) 下载最新或各个历史版本。
1. 通过 `npm install jparticles --save` 安装，[链接去 NPM](https://www.npmjs.com/package/jparticles) 。
1. 使用 CDN：[UNPKG](https://unpkg.com/jparticles/production/) 。

### 2、引入 JParticles

> 在页面内使用 `script` 标签引入即可，当然也支持模块化的加载方式，不过 `JParticles` 仍然在 `window` 对象上注册了一个同名的对象，用于插件拓展。

```html
<!DOCTYPE html>
<html>
<header>
    <meta charset="utf-8">

    <!-- 方式一：一次性引入所有特效 -->
    <!-- <script src="jparticles.all.js"></script> -->

    <!-- 方式二（推荐）：按需加载方式，先引入基础框架 -->
    <script src="jparticles.js"></script>
    <!-- 再引入特定的特效，如下面的粒子特效 -->
    <script src="particles.js"></script>

</header>
<body>
</body>
</html>
```

### 3、创建特效

> 准备一个空的 `DOM` 元素，设置一定宽高，用于显示粒子特效。  
> 使用 `new JParticles.特效名` 创建特效。

```html
<!DOCTYPE html>
<html>
<header>
    <meta charset="utf-8">
    <!-- 引入基础框架 -->
    <script src="jparticles.js"></script>
    <!-- 引入粒子特效 -->
    <script src="particles.js"></script>
</header>
<body>
    <!-- 准备一个空的 DOM 元素，设置一定宽高，不然生成的 Canvas 默认宽高为：485，300 -->
    <div id="demo" style="width: 400px; height: 250px;"></div>

    <script>
        // 使用 new JParticles.特效名 创建特效
        new JParticles.Particles('#demo')
    </script>
</body>
</html>
```

### 4、创建完成

> 这样我们的粒子运动特效就完成了！

<div class="instance">
    <div class="demo"></div>
</div>

### 5、进阶 · 方法（多加几分钟）

> 每个实例化的对象都包含以下两个方法，为了减少重复劳动，后面的示例就省略不写了。  
> `pause()` 暂停粒子运动  
> `open()` 开启粒子运动

<div class="instance-ctrls">
	<div class="btn btn-success open">点我·开启</div>
	<div class="btn btn-success pause">点我·暂停</div>
</div>

代码如下：

```javascript
const effect = new JParticles.Particles('#demo')

document.getElementById('open').addEventListener(() => {
    // 开启运动
    effect.open()
})

document.getElementById('pause').addEventListener(() => {
    // 暂停运动
    effect.pause()
})
```

### 6、事件

- 每个实例化的对象都包含 `onDestroy()` 事件， 当 `Canvas` 元素从 `DOM` 树中被移除触发此事件。
- 所有特效的事件都支持链式操作。
- 如无特别说明，每个事件都支持任意多个函数类型的参数，也支持任意多次调用，按顺序被执行，如下。

```javascript
effect
    .onDestroy(() => {
        console.log('Canvas 被移除了 - 最先被调用')
    }, () => {
        console.log('Canvas 被移除了 - 第二被调用')
    })
    .onDestroy(() => {
        console.log('Canvas 被移除了 - 第三被调用')
    })
```

一般情况 `onDestroy()` 不会被用到，但它是生命周期的一部分，或许哪时需要用到。

### 7、配置

#### 1、每个实例对象都接受两个参数，一个 selector，一个 options。

> `new JParticles.Name(selector, options)`

<table class="table table-bordered-inner table-striped">
    <thead>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>selector</td>
            <td>string 或 element</td>
            <td>必填，选择器字符串或原生 DOM 元素。</td>
        </tr>
        <tr>
            <td>options</td>
            <td>object</td>
            <td>可选，特效的配置参数。</td>
        </tr>
    </tbody>
</table>

#### 2、如无特别说明，每个插件的默认选项（options）都包含以下三个参数。

<table class="table table-bordered-inner table-striped">
    <thead>
        <tr>
            <th width="100">名称</th>
            <th width="100">默认值</th>
            <th width="150">类型</th>
            <th width="450">描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>opacity</td>
            <td>1</td>
            <td>number</td>
            <td>画布全局透明度，取值范围：`[0-1]`。</td>
        </tr>
        <tr>
            <td>color</td>
            <td>[]</td>
            <td>string 或 array</td>
            <td>
                <div>粒子颜色。</div>
                <ul>
                    <li>
                        空数组表示随机取色。
                    </li>
                    <li>
                        如果提供特定颜色的数组，如：`['red', 'blue', 'green']`，则表示粒子颜色在这三种色值之间随机取值。
                    </li>
                    <li>
                        如果为 `string` 类型，如：`'red'`，则表示粒子都填充为红色。
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>resize</td>
            <td>true</td>
            <td>boolean</td>
            <td>
              自适应窗口尺寸变化。如不需要自适应，应该设置为 `false`，以提高性能。
            </td>
        </tr>
    </tbody>
</table>

#### 3、通过暴露的全局接口 `JParticles.Name.defaultConfig` 可方便地修改某个特效的默认选项，示例如下：

```javascript
JParticles.Particles.defaultConfig = {
    opacity: 1,
    color: ['red', 'blue', 'green'],
    maxSpeed: 2,
    minSpeed: 1,
    // ...其他属性
}
```

#### 4、通过暴露的全局接口 `JParticles.commonConfig` 可方便地修改所有特效的公共选项，当前公共选项默认值如下：

```javascript
JParticles.commonConfig = {
    // 画布全局透明度
    opacity: 1,
    // 粒子颜色
    color: [],
    // 自适应窗口尺寸变化
    resize: true,
}
```

### 8、Easing 函数

#### 通过暴露的全局接口 `JParticles.easing` 可增加其他动画效果，以下为示例。

> 注意：`JParticles.easing` 只允许增加，不允许修改和删除已有的动画函数。  
> 增加新的动画可以参考：[jquery.easing.js](https://github.com/danro/jquery-easing/blob/master/jquery.easing.js) 或 [http://robertpenner.com/easing/](http://robertpenner.com/easing/)

```javascript
// JParticles.utils.extend 等同于 jQuery.extend，你也可以使用 Object.assign 替代
JParticles.utils.extend(JParticles.easing, {
    easeOutBounce: function (x, t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b
        } else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
        } else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
        } else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
        }
    },
})

// 或者
JParticles.easing.easeOutQuad = function (x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b
}
```

<table class="table table-bordered-inner table-striped">
    <thead>
        <tr>
            <th width="300">当前已有的函数名称</th>
            <th width="700">描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>linear</td>
            <td>匀速运动。</td>
        </tr>
        <tr>
            <td>swing</td>
            <td>等于 `easeInOutQuad`。</td>
        </tr>
        <tr>
            <td>easeInOutQuad</td>
            <td>先慢慢加速再慢慢减速。</td>
        </tr>
    </tbody>
</table>

### 9、小提示

1. 修改默认选项应放在 `new` 之前。
1. 每个 `JParticles` 插件的默认选项及示例请查看左侧的菜单。
1. 更丰富但可能描述不详的参数或用法，可以到项目样本目录看看（[JParticles/samples](https://github.com/Barrior/JParticles/tree/master/samples)）。
