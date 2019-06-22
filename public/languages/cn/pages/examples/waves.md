<div class="instance i1">
    <div class="demo"></div>
    <div class="ctrls">
      <div class="btn btn-default open">开启</div>
      <div class="btn btn-default pause">暂停</div>
    </div>
</div>

查看源代码：

```javascript
new JParticles.Waves('#demo-1', {
    num: 3,
    // 不填充
    fill: false,
    // 绘制边框，即线条
    line: true,
    // 三条线依次的颜色
    lineColor: [
      'rgba(0, 190, 112, .5)',
      'rgba(0, 190, 112, .7)',
      'rgba(0, 190, 112, .9)',
    ],
    // 三条线依次的宽度
    lineWidth: [0.5, 0.7, 0.9],
    // 三条线依次距左的偏移值
    offsetLeft: [2, 1, 0],
    // 三条线都向上偏移容器高度的 0.75 倍
    offsetTop: 0.75,
    // 三条线依次的波峰高度
    crestHeight: [10, 14, 18],
    // 三条线都只有两个波峰（波纹）
    rippleNum: 2,
    speed: 0.1,
})
```

### 语音搜索：

<div class="instance i2">
    <div class="demo"></div>
	  <div class="btn btn-default button-voice">按住模拟语音搜索</div>
</div>

查看源代码：

```javascript
const settings = {
    crestHeight: [10, 14, 18],
    speed: 0.1,
}

// JParticles.utils.extend 等同于 jQuery.extend，你也可以使用 Object.assign 替代
const effect = new JParticles.Waves('#demo-2', JParticles.utils.extend({
    num: 3,
    lineColor: ['#e53d27', '#42e527', '#27C9E5'],
    lineWidth: [0.7, 0.9, 1],
    offsetTop: 0.65,
    rippleNum: 2,
}, settings))

const element = document.querySelector('.button-voice')

// 波动效果
element.addEventListener('mousedown', function () {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
        const crestHeight = settings.crestHeight.map(item => {
          // 获取随机波动值
          item += JParticles.utils.limitRandom(20, -20)
  
          // 处理 (0, 1) 之间的值为整数
          if (item > 0 && item < 1) {
            item = Math.ceil(item)
          }
  
          return item
        })
  
        // 通过 setOptions() 来控制线条的波动
        effect.setOptions({
          crestHeight,
          speed: [0.2, 0.14, 0.1],
        })
    }, 100)

    // 还原
    const mouseupHandler = () => {
        clearInterval(this.timer)
        effect.setOptions(settings)
        document.removeEventListener('mouseup', mouseupHandler)
    }
    document.addEventListener('mouseup', mouseupHandler)
})
```

### 水切面：

<div class="instance i3">
    <div class="demo"></div>
    <div class="ctrls">
      <div class="btn btn-default open">开启</div>
      <div class="btn btn-default pause">暂停</div>
    </div>
</div>

查看源代码：

```javascript
new JParticles.Waves('#demo-3', {
    num: 1,
    // 不绘制边框
    line: false,
    // 填充
    fill: true,
    // 填充颜色
    fillColor: '#27C9E5',
    offsetTop: 0.75,
    crestHeight: 8,
    rippleNum: 3,
    speed: 0.07,
})
```

### 默认参数及描述

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
	        <td>3</td>
	        <td>number</td>
	        <td>线条的个数。</td>
	    </tr>
	    <tr>
	        <td>fill</td>
	        <td>false</td>
	        <td>boolean</td>
	        <td>是否填充背景色，设置为 `false` 相关值无效。</td>
	    </tr>
	    <tr>
	        <td>fillColor</td>
	        <td>[]</td>
	        <td>string 或 array</td>
	        <td>
	            填充的背景色。  
				      使用方法与 [`color`](#/examples/quick_start#7.2) 规则相同。  
				      其他雷同属性同理。
	        </td>
	    </tr>
	    <tr>
	        <td>line</td>
	        <td>true</td>
	        <td>boolean</td>
	        <td>是否绘制边框，设置为 `false` 相关值无效。</td>
	    </tr>
	    <tr>
	        <td>lineColor</td>
	        <td>[]</td>
	        <td>string 或 array</td>
	        <td>边框颜色。</td>
	    </tr>
	    <tr>
	        <td>lineWidth</td>
	        <td>[]</td>
	        <td>number 或 array</td>
	        <td>线条宽度，空数组则随机 `[0.2, 2)` 的宽度。</td>
	    </tr>
	    <tr>
	        <td>offsetLeft</td>
	        <td>[]</td>
	        <td>number 或 array</td>
	        <td>
              线条的横向偏移值，距离 `Canvas` 画布左边的偏移值。  
              `(0, 1)` 表示容器宽度的倍数，`0 & [1, +∞)` 表示具体数值。
          </td>
	    </tr>
	    <tr>
	        <td>offsetTop</td>
	        <td>[]</td>
	        <td>number 或 array</td>
	        <td>
              线条纵向偏移值，线条中点到 `Canvas` 画布顶部的距离。  
              `(0, 1)` 表示容器高度的倍数，`[1, +∞)` 表示具体数值。
          </td>
	    </tr>
	    <tr>
	        <td>crestHeight</td>
	        <td>[]</td>
	        <td>number 或 array</td>
	        <td>波峰高度，`(0, 1)` 表示容器高度的倍数，`0 & [1, +∞)` 表示具体数值。</td>
	    </tr>
	    <tr>
	        <td>rippleNum</td>
	        <td>[]</td>
	        <td>number 或 array</td>
	        <td>波纹个数，即正弦周期个数。默认随机 `[1, 0.2 * 容器宽度)`。</td>
	    </tr>
	    <tr>
	        <td>speed</td>
	        <td>[]</td>
	        <td>number 或 array</td>
	        <td>运动速度，默认随机 `[0.1, 0.4)`。</td>
	    </tr>
    </tbody>
</table>

### 方法及描述

<table class="table table-bordered-inner table-striped">
    <thead>
	    <tr>
	        <th width="100">名称</th>
	        <th width="200">参数类型</th>
	        <th width="450">描述</th>
	    </tr>
    </thead>
    <tbody>
	    <tr>
	        <td>setOptions(newOptions)</td>
	        <td>newOptions: object</td>
	        <td>
              动态设置选项值。当前能设置的选项有:  
              `opacity, fill, fillColor, line, lineColor, lineWidth, 
              offsetLeft, offsetTop, crestHeight, speed`。
          </td>
	    </tr>
    </tbody>
</table>
