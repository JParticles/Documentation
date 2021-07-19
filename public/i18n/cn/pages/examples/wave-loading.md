`WaveLoading` 是对 `Wave` 的封装，提供虚拟进度加载的功能。

<div class="instance i1">
    <div class="demo"></div>
    <div class="handlebar">
      <div class="btn btn-default done">完成加载</div>
      <div class="btn btn-default reload">重新演示</div>
    </div>
</div>

源代码：

```javascript
const loading = new JParticles.WaveLoading('#demo', {
    // 文本字体格式：[font style][font weight][font size][font family]
    // 同 CSS 一样，必须包含 [font size] 和 [font family]
    font: 'normal 900 16px Arial',

    // 对于不需要自适应的，应该设置为 false，减少计算，提高性能
    resize: false,
})

loading.onProgress(progress => {
    // 当进度大于等于 60 时，设置进度文本颜色为白色。
    if (progress >= 60) {
        loading.setOptions({
            textColor: '#fff',
        })
    }
})

// 调用 done() 方法通知 loading 完成加载
document.querySelector('.done').addEventListener('click', () => {
    loading.done()
})
```

### 加载页面

<div class="instance i2">
    <div class="container">
        <div class="img-frame text-center-vertical"></div>
    </div>
    <div class="mask"></div>
    <div class="demo">点击·加载</div>
    <div class="handlebar">
        <div class="btn btn-default reload">重新加载</div>
    </div>
</div>

源代码：

```javascript
// 扩展 easing 函数
Object.assign(JParticles.easing, {
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

const loading = new JParticles.WaveLoading('#demo', {
    font: 'normal 900 16px Arial',
    resize: false,
    // 使用新的函数效果
    easing: 'easeOutBounce',
})

loading.onFinished(() => {
    // 加载完成后，隐藏遮罩及 loading 动画。
    // 开一个 50ms 的定时器，为了让 100% 这几个字能被看见。
    setTimeout(() => {
        document.querySelector('.mask').style.display = 'none'
        document.querySelector('#demo').style.display = 'none'
    }, 50)
})

// 创建页面
const iframe = document.createElement('iframe')
iframe.addEventListener('load', () => loading.done())
iframe.src = 'https://jparticles.js.org'
document.querySelector('#demo').parentNode.appendChild(iframe)
```

### 遮罩（自定义Logo）

适用于纯文字的 Logo，像 GitHub 的文字 Logo 就很适合。

<div class="instance i3">
    <div class="demo"></div>
    <div class="handlebar">
      <div class="btn btn-default done">完成加载</div>
      <div class="btn btn-default reload">重新演示</div>
    </div>
</div>

源代码：

```javascript
new JParticles.WaveLoading('#demo', {
	fillColor: '#27C9E5',
	crestHeight: 5,
	crestCount: 3,
	speed: 0.2,
	// 加载进度文本格式为空字符串时，不显示进度文本
	textFormatter: '',
	// 取消边框圆角
	borderRadius: '',
	// 设置遮罩图片，实现遮罩效果（如果希望防止图片闪烁，可提前加载完图片后再创建特效）
	mask: 'https://raw.githubusercontent.com/Barrior/assets/main/github-logo-text.svg',
})
```

### 幽灵遮罩

> 幽灵遮罩（Ghost Mask）：灰度化遮罩图片作为背景，再裁剪出原始彩色图案。<br>
> ⚠️ 不支持 Safari，兼容的性能不好且成本不小。

适用于彩色的图像 Logo，像 Chrome 的 Logo 使用该效果就很适合。

<div class="instance i4">
    <div class="demo"></div>
    <div class="handlebar">
      <div class="btn btn-default done">完成加载</div>
      <div class="btn btn-default reload">重新演示</div>
    </div>
</div>

源代码：

```javascript
new JParticles.WaveLoading('#demo', {
	num: 2,
	textColor: '#fff',
	textFormatter: '加载中...%d%',
	fillColor: 'rgba(0, 0, 0, 0.15)',
	offsetLeft: [0, 1.5],
	crestHeight: 5,
	crestCount: 2,
	speed: 0.2,
	// 加载时长设置为 10s
	duration: 10000,
	// 设置遮罩图片
	mask: 'https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg',
	// 设置模式为幽灵
	maskMode: 'ghost',
})
```

### 参数及描述

<table class="table table-bordered-inner table-striped">
    <thead>
	    <tr>
	        <th width="100">名称</th>
	        <th width="200">默认值</th>
	        <th width="100">类型</th>
	        <th width="450">描述</th>
	    </tr>
    </thead>
    <tbody>
	    <tr>
	        <td>font</td>
	        <td>normal 400 16px Arial</td>
	        <td>string</td>
	        <td>
              文本字体格式：[font style] [font weight] [font size] [font family]<br>
              同 `CSS` 一样，必须包含 `[font size]` 和 `[font family]`。
          </td>
	    </tr>
	    <tr>
	        <td>textColor</td>
	        <td>#333</td>
	        <td>string</td>
	        <td>进度文本的颜色。</td>
	    </tr>
	    <tr>
	        <td>textFormatter</td>
	        <td>loading...%d%</td>
	        <td>string</td>
	        <td>进度文本模板，`%d` 将被替换成取整的进度值，空字符串则不显示文本。</td>
	    </tr>
	    <tr>
	        <td>borderRadius</td>
	        <td>50%</td>
	        <td>string</td>
	        <td>画布外边框圆角，[CSS 属性值](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)。</td>
	    </tr>
	    <tr>
	        <td>duration</td>
	        <td>5000</td>
	        <td>number</td>
	        <td>加载到 `99%` 的时长，单位毫秒 (`ms`)，用时越久，越慢加载到 `99%`。</td>
	    </tr>
	    <tr>
	        <td>easing</td>
	        <td>swing</td>
	        <td>string</td>
	        <td>
              加载过程的动画，默认支持两种：
              `linear` 匀速，
              `swing` 先慢慢加速再慢慢减速。
              更多请阅读 [Easing](/examples/quick-start#H8) 函数。
          </td>
	    </tr>
	    <tr>
	        <td>num</td>
	        <td>1</td>
	        <td colspan="2">参考 Wave 的 num 参数。</td>
	    </tr>
	    <tr>
	        <td>line</td>
	        <td>false</td>
	        <td colspan="2">参考 Wave 的 line 参数。</td>
	    </tr>
	    <tr>
	        <td>fill</td>
	        <td>true</td>
	        <td colspan="2">参考 Wave 的 fill 参数。</td>
	    </tr>
	    <tr>
	        <td>fillColor</td>
	        <td>#27C9E5</td>
	        <td colspan="2">参考 Wave 的 fillColor 参数。</td>
	    </tr>
	    <tr>
	        <td>offsetLeft</td>
	        <td>0</td>
	        <td colspan="2">参考 Wave 的 offsetLeft 参数。</td>
	    </tr>
	    <tr>
	        <td>crestHeight</td>
	        <td>4</td>
	        <td colspan="2">参考 Wave 的 crestHeight 参数。</td>
	    </tr>
	    <tr>
	        <td>crestCount</td>
	        <td>1</td>
	        <td colspan="2">参考 Wave 的 crestCount 参数。</td>
	    </tr>
	    <tr>
	        <td>speed</td>
	        <td>0.3</td>
	        <td colspan="2">参考 Wave 的 speed 参数。</td>
	    </tr>
    </tbody>
</table>

**** 小提示：除了以上参数和 `offsetTop` 外，其他 [Wave 的所有参数](/examples/wave#h6) 也可用于 WaveLoading。***

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
              offsetLeft, offsetTop, crestHeight, speed, mask, maskMode, font, textColor, textFormatter, borderRadius`。
          </td>
	    </tr>
	    <tr>
	        <td>done()</td>
	        <td>无</td>
	        <td>让加载进度立即完成。</td>
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
	        <td>onProgress()</td>
	        <td>function</td>
	        <td>进度每次改变的时候触发的事件，函数接收一个 `progress` 参数，表示当前进度值。</td>
	    </tr>
	    <tr>
	        <td>onFinished()</td>
	        <td>function</td>
	        <td>进度加载到 `100%` 后触发的事件。</td>
	    </tr>
    </tbody>
</table>
