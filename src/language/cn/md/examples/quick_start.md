### 1、获取 JParticles
> 通过以下几种方式获取 `JParticles`：

1. [GitHub Releases](https://github.com/Barrior/JParticles/releases) 下载最新或各个版本。 
1. 通过 `npm install jparticles --save` 安装，[链接去 NPM](https://www.npmjs.com/package/jparticles) 。

### 2、引入 JParticles
> 在页面内使用 `script` 标签引入即可，当然也支持模块化的加载方式，不过 `JParticles` 仍然在 `window` 对象上注册了一个同名的对象，用于插件拓展。

	<!DOCTYPE html>
	<html>
	<header>
	    <meta charset="utf-8">

	    <!-- 引入所有特效 -->
	    <!-- <script src="jparticles.all.js"></script> -->

	    <!-- 推荐：根据需要加载，引入基础框架 -->
	    <script src="jparticles.js"></script>
	    <!-- 引入粒子特效 -->
	    <script src="particle.js"></script>

	</header>
	<body>
	</body>
	</html>

### 3、创建特效
> 准备一个具有一定宽高的 `DOM` 元素，用于显示粒子特效。<br/>
> 使用 `new JParticles.特效名` 创建特效。

	<!DOCTYPE html>
	<html>
	<header>
	    <meta charset="utf-8">
	    <!-- 推荐：根据需要加载，引入基础框架 -->
	    <script src="jparticles.js"></script>
	    <!-- 引入粒子特效 -->
	    <script src="particle.js"></script>
	</header>
	<body>
	    <!-- 准备一个具有一定宽高的 DOM 元素，不然生成的 Canvas 默认宽高为：485，300 -->
	    <div id="demo" style="width: 400px; height: 250px;"></div>
	
	    <script>
	        // 使用 new JParticles.特效名 创建特效
	        new JParticles.particle('#demo');
	    </script>
	</body>
	</html>

### 4、创建完成
> 这样我们的粒子运动特效就完成了！

<div class="instance">
    <div class="demo"></div>
</div>

### 5、进阶 · 方法（多加几分钟）
> 每个用实例化的对象都包含以下两个方法，为了减少重复劳动，后面的示例就省略不写了。<br/>
> `.pause()` 暂停粒子运动 <br/>
> `.open()`  &nbsp;开启粒子运动

<div class="instance-ctrl">
	<div class="btn btn-success open">点我·开启</div>
	<div class="btn btn-success pause">点我·暂停</div>
</div>

代码如下：

    var effect = new JParticles.particle('#demo');

    document.getElementById('open').onclick = function() {
        // 开启运动
        effect.open();
    };

    document.getElementById('pause').onclick = function() {
        // 暂停运动
        effect.pause();
    };


### 6、事件
- 每个用实例化的对象都包含 `onDestroy()` 事件， 当 `Canvas` 元素从 `DOM` 树中被移除触发此事件。<br/>
- 所有特效的事件都支持链式操作。
- 如无特别说明，每个事件方法都支持任意多个函数类型的参数，也支持任意多次调用，按顺序被执行，如下。
> 一般情况 `onDestroy()` 不会被用到，但它是生命周期的一部分，或许哪时需要用到。

	effect
		.onDestroy(function () {
			console.log('Canvas 被移除了 - 1');
		}, function () {
			console.log('Canvas 被移除了 - 2');
		})
		.onDestroy(function () {
			console.log('Canvas 被移除了 - 3');
		})

### 7、配置
#### 1、每个实例对象都接受两个参数，一个selector，一个options。
> `new JParticles.name(selector, options)`

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
            <td>必填，选择器字符串或原生 DOM 元素</td>
        </tr>
        <tr>
            <td>options</td>
            <td>object</td>
            <td>可选，特效的配置参数</td>
        </tr>
    </tbody>
</table>

#### 2、如无特别说明，每个插件的默认配置都包含以下三个参数。

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
            <td>画布全局透明度，取值范围：[0-1]</td>
        </tr>
        <tr>
            <td>color</td>
            <td>[]</td>
            <td>string 或 array</td>
            <td class="module module-api">
                <div>粒子颜色</div>
                <ul>
                    <li>
                        空数组表示随机取色。
                    </li>
                    <li>
                        特定颜色的数组，如：['red', 'blue', 'green']，则表示粒子颜色在这三种色值之间随机获取。
                    </li>
                    <li>
                        当为string类型时，如：'red'，则表示粒子都填充为红色。
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>resize</td>
            <td>true</td>
            <td>boolean</td>
            <td>自适应窗口尺寸变化，如不需要自适应，请设置为 false，提高性能。</td>
        </tr>
    </tbody>
</table>

#### 3、通过暴露的全局接口 `JParticles.name.defaultConfig` 可方便地修改某个特效的默认配置，示例如下：

	JParticles.particle.defaultConfig = {
	    opacity: 1,
	    color: ['red', 'blue', 'green'],
	    maxSpeed: 2,
	    minSpeed: 1,
	    // ...其他属性
	};

#### 4、通过暴露的全局接口 `JParticles.commonConfig` 可方便地修改所有特效的公共默认配置，当前公共默认配置如下：

	JParticles.commonConfig = {
	    // 画布全局透明度
	    opacity: 1,
	    // 粒子颜色
	    color: [],
	    // 自适应窗口尺寸变化
	    resize: true
	}

#### 5、小提示：
1. 修改默认配置应放在 `new` 之前。
1. 每个 `JParticles` 插件的默认配置及示例请查看左侧的菜单。