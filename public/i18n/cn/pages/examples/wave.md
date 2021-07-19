<div class="instance i1">
    <div class="demo"></div>
    <div class="handlebar">
      <div class="btn btn-default open">开启</div>
      <div class="btn btn-default pause">暂停</div>
    </div>
</div>

源代码：

```javascript
new JParticles.Wave('#demo', {
    num: 3,
    // 绘制边框，即线条
    line: true,
    // 三条线依次的颜色
    lineColor: [
      'rgba(0, 190, 112, 0.5)',
      'rgba(0, 190, 112, 0.7)',
      'rgba(0, 190, 112, 0.9)',
    ],
    // 三条线依次的宽度
    lineWidth: [0.5, 0.7, 0.9],
    // 三条线依次距左的偏移值
    offsetLeft: [2, 1, 0],
    // 三条线都距顶偏移容器高度的 0.75 倍
    offsetTop: 0.75,
    // 三条线依次的波峰高度
    crestHeight: [10, 14, 18],
    // 三条线都只有两个波峰
    crestCount: 2,
    speed: 0.1,
})
```

### 语音搜索

<div class="instance i2">
    <div class="demo"></div>
	<div class="btn btn-default button-voice">按住模拟语音搜索</div>
</div>

源代码：

```javascript
const settings = {
    crestHeight: [10, 14, 18],
    speed: 0.1,
}

const effect = new JParticles.Wave('#demo', Object.assign({
    num: 3,
    lineColor: ['#e53d27', '#42e527', '#27C9E5'],
    lineWidth: [0.7, 0.9, 1],
    offsetTop: 0.65,
    crestCount: 2,
}, settings))

const element = document.querySelector('.button-voice')

// 波动效果
element.addEventListener('mousedown', function () {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
        const crestHeight = settings.crestHeight.map(item => {
          // 随机加减 20 波动值
          item += JParticles.utils.randomInRange(20, -20)

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
    const handleMouseup = () => {
        clearInterval(this.timer)
        effect.setOptions(settings)
        document.removeEventListener('mouseup', handleMouseup)
    }
    document.addEventListener('mouseup', handleMouseup)
})
```

### 水切面

<div class="instance i3">
    <div class="demo"></div>
    <div class="handlebar">
      <div class="btn btn-default open">开启</div>
      <div class="btn btn-default pause">暂停</div>
    </div>
</div>

源代码：

```javascript
new JParticles.Wave('#demo', {
    num: 1,
    // 不绘制边框
    line: false,
    // 填充
    fill: true,
    // 填充颜色
    fillColor: '#27C9E5',
    offsetTop: 0.75,
    crestHeight: 8,
    crestCount: 3,
    speed: 0.07,
})
```

### 遮罩（自定义Logo）

适用于纯文字的 Logo，像 GitHub 的文字 Logo 就很适合。

<div class="instance i4">
    <div class="demo"></div>
    <div class="handlebar">
      <div class="btn btn-default open">开启</div>
      <div class="btn btn-default pause">暂停</div>
    </div>
</div>

源代码：

```javascript
new JParticles.Wave('#demo', {
    num: 1,
    line: false,
    fill: true,
    fillColor: '#27C9E5',
    offsetTop: 0.5,
    crestHeight: 5,
    crestCount: 3,
    speed: 0.2,
    // 设置遮罩图片，实现遮罩效果（如果希望防止图片闪烁，可提前加载完图片后再创建特效）
    mask: 'https://raw.githubusercontent.com/Barrior/assets/main/github-logo-text.svg',
})
```

### 幽灵遮罩

> 幽灵遮罩（Ghost Mask）：灰度化遮罩图片作为背景，再裁剪出原始彩色图案。<br>
> ⚠️ 不支持 Safari，兼容的性能不好且成本不小。

适用于彩色的图像 Logo，像 Chrome 的 Logo 使用该效果就很适合。

<div class="instance i5">
    <div class="demo"></div>
    <div class="handlebar">
      <div class="btn btn-default open">开启</div>
      <div class="btn btn-default pause">暂停</div>
    </div>
</div>

源代码：

```javascript
new JParticles.Wave('#demo', {
    num: 2,
    line: false,
    fill: true,
    fillColor: 'rgba(0, 0, 0, 0.15)',
    offsetTop: 0.5,
    offsetLeft: [0, 1.5],
    crestHeight: 5,
    crestCount: 2,
    speed: 0.2,
    // 设置遮罩图片
    mask: 'https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg',
    // 设置模式为幽灵
    maskMode: 'ghost',
})
```

### 模拟加载

<div class="instance i6">
    <div class="demo"></div>
    <div class="handlebar">
      <div class="btn btn-default button-show">演示/重新演示</div>
    </div>
</div>

源代码：

```javascript
const effect = new JParticles.Wave('#demo', {
    num: 2,
    line: false,
    fill: true,
    fillColor: 'rgba(0, 0, 0, 0.15)',
    offsetTop: 0.99,
    offsetLeft: [0, 1.5],
    crestHeight: 5,
    crestCount: 2,
    speed: 0.2,
    mask: 'https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg',
    maskMode: 'ghost',
})

// 手动实现加载进度
function loading(progress) {
    if (progress < 100) {
        progress += 1
        // 通过 setOptions 方法更新配置数据实现向上加载的效果
        effect.setOptions({ offsetTop: 1 - progress / 100 })
        window.requestAnimationFrame(() => loading(progress))
    }
}

document.querySelector('.button-show').addEventListener('click', () => {
    loading(0)
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
	        <td>3</td>
	        <td>number</td>
	        <td>线条的个数，`(0, 1)` 显示为容器宽度相应倍数的个数，`0 & [1, +∞)` 显示具体个数。</td>
	    </tr>
	    <tr>
	        <td>fill</td>
	        <td>false</td>
	        <td>boolean 或 array</td>
	        <td>是否填充背景色，设置为 `false` 相关值无效。</td>
	    </tr>
	    <tr>
	        <td>fillColor</td>
	        <td>[]</td>
	        <td>string 或 array</td>
	        <td>填充的背景色，使用方法与 [`color`](/examples/quick-start#H7) 规则相同。</td>
	    </tr>
	    <tr>
	        <td>line</td>
	        <td>true</td>
	        <td>boolean 或 array</td>
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
	        <td>crestCount</td>
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
	    <tr>
	        <td>mask</td>
	        <td>无</td>
	        <td class="text-left">string 或 CanvasImageSource</td>
	        <td>遮罩图片，可为 `URL` 地址、 `Base64` 格式、 [Canvas 图像源](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage#%E5%8F%82%E6%95%B0)<sup>v3.1</sup>。</td>
	    </tr>
	    <tr>
	        <td>maskMode</td>
	        <td>normal</td>
	        <td>string</td>
	        <td>
	            遮罩模式，可选值为：
                `normal` 常规模式，
                `ghost` 幽灵模式。
            </td>
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
              更新参数值，当前能设置的参数有:
              `opacity, fill, fillColor, line, lineColor, lineWidth,
              offsetLeft, offsetTop, crestHeight, speed, mask, maskMode`。
          </td>
	    </tr>
    </tbody>
</table>
