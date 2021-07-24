<div class="instance i1">
    <div class="demo"></div>
    <div class="handlebar">
        <div class="btn btn-default open">开启</div>
        <div class="btn btn-default pause">暂停</div>
    </div>
</div>

源代码：

```javascript
new JParticles.Snow('#demo')
```

### 自定义形状

<div class="instance i2">
    <div class="demo"></div>
    <div class="handlebar">
        <div class="btn btn-default open">开启</div>
        <div class="btn btn-default pause">暂停</div>
    </div>
</div>

源代码：

```javascript
new JParticles.Snow('#demo', {
    maxR: 10,
    minR: 10,
    maxSpeed: 0.3,
    minSpeed: 0.1,
    swing: false,
    // 配置形状
    shape: [
        'triangle', 'star', 'star:4:0.5',
        'https://raw.githubusercontent.com/Barrior/assets/main/gift.png'
    ],
})
```

### 微信聊天撒花动画

<div class="instance i3">
    <div class="demo"></div>
    <div class="handlebar">
        <div class="btn btn-default fall-again">再次演示</div>
    </div>
</div>

源代码：

```javascript
const effect = new JParticles.Snow('#demo', {
    num: 2,
    maxR: 10,
    minR: 10,
    maxSpeed: 0.3,
    minSpeed: 0.3,
    swing: false,
    shape: 'https://raw.githubusercontent.com/Barrior/assets/main/gift.png',
    // 随机创建雪花的持续时间
    duration: 3000,
})

// 再次演示
document.querySelector('.fall-again').addEventListener('click', () => {
  effect.fallAgain()
})
```

### 参数及描述

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
	        <td>num</td>
	        <td>6</td>
	        <td>number</td>
	        <td>初次或随机创建的雪花数量（最多）。</td>
	    </tr>
	    <tr>
	        <td>color</td>
	        <td>#fff</td>
	        <td>string 或 array</td>
	        <td>雪花的颜色。规则参考：[`color`](/examples/quick-start#H7)</td>
	    </tr>
	    <tr>
	        <td>maxR</td>
	        <td>6.5</td>
	        <td>number</td>
	        <td>雪花最大半径。</td>
	    </tr>
	    <tr>
	        <td>minR</td>
	        <td>0.4</td>
	        <td>number</td>
	        <td>雪花最小半径。</td>
	    </tr>
	    <tr>
	        <td>maxSpeed</td>
	        <td>0.6</td>
	        <td>number</td>
	        <td>雪花飘落最大运动速度。</td>
	    </tr>
	    <tr>
	        <td>minSpeed</td>
	        <td>0.1</td>
	        <td>number</td>
	        <td>雪花飘落最小运动速度。</td>
	    </tr>
	    <tr>
	        <td>shape<sup>v3.2.0</sup></td>
	        <td>circle</td>
	        <td class="text-left">string 或 CanvasImageSource 或 array</td>
	        <td>
            雪花的形状，可以选以下几种。<br>
            1、内置的形状：`circle`、`triangle`、`star`。<br>
            2、以 `star` 前缀表示的形状，语法：`star:[边数]:[凹值]`, 例如：`star:5:0.5`，表示五角星。<br>
            3、支持 HTTP、Base64、[CanvasImageSource](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage#%E5%8F%82%E6%95%B0) 图像。
          </td>
	    </tr>
	    <tr>
	        <td>duration<sup>v3.4.0</sup></td>
	        <td>-</td>
	        <td>number</td>
	        <td>随机创建雪花的持续时间，单位毫秒。</td>
	    </tr>
	    <tr>
	        <td>swing</td>
	        <td>true</td>
	        <td>boolean</td>
	        <td>是否随机变换飘落的方向。</td>
	    </tr>
	    <tr>
	        <td>swingInterval</td>
	        <td>2000</td>
	        <td>number</td>
	        <td>变换方向的时间间隔，单位毫秒。</td>
	    </tr>
	    <tr>
	        <td>swingProbability</td>
	        <td>0.06</td>
	        <td>number</td>
	        <td>变换方向的概率（达到时间间隔后），取值范围 `[0, 1]`。</td>
	    </tr>
    </tbody>
</table>

### 方法及描述

<table class="table table-bordered-inner table-striped">
    <thead>
	    <tr>
	        <th width="100">名称</th>
	        <th width="100">参数类型</th>
	        <th width="450">描述</th>
	    </tr>
    </thead>
    <tbody>
	    <tr>
	        <td>fallAgain()<sup>v3.4.0</sup></td>
	        <td>-</td>
	        <td>雪花再次降落，当有设置 `duration` 参数时有效。</td>
	    </tr>
    </tbody>
</table>

### 事件及描述

<table class="table table-bordered-inner table-striped">
    <thead>
	    <tr>
	        <th width="100">名称</th>
	        <th width="110">参数类型</th>
	        <th width="450">描述</th>
	    </tr>
    </thead>
    <tbody>
	    <tr>
	        <td>onFinished()<sup>v3.4.0</sup></td>
	        <td>function</td>
	        <td>雪花全部降落后触发的事件，当有设置 `duration` 参数时有效。</td>
	    </tr>
    </tbody>
</table>
