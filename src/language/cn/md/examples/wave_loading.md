<div class="instance-1">
    <div class="demo"></div>
	<div class="ctrl">
		<div class="btn btn-default done">点击·完成加载</div>
		<div class="btn btn-default reload">重新演示</div>
	</div>
</div>

查看源代码：

	var loading = new JParticles.waveLoading('#demo-1', {

	    // [font style][font weight][font size][font family]
	    // 文本样式，同css一样，必须包含 [font size] 和 [font family]
	    font: 'normal 900 16px Arial',

		smallFont: 'normal 900 14px Arial',

		// 对于不需要自适应的，应该设置为 false，
        // 减少计算，提高性能
        resize: false
	});
	
	loading
	    .onProgress(progress => {
	
			// 当进度大于等于 60 时，设置进度文本颜色为白色。
	        if (progress >= 60) {
	            loading.setOptions({
	                color: '#fff'
	            });
	        }

			// 返回字符串，文本都应用为 font 样式，不应用 smallFont 相关样式。
	        return '加载中...' + Math.ceil(progress) + '%';

			// 如果返回对象，text 应用为 font 样式，
            // smallText 应用为 smallFont，smallFontOffsetTop 样式。
            // return {
            //     text: '加载中...' + Math.ceil(progress),
            //     smallText: '%'
            // }
	    });

	// 调用 `done()` 方法来完成加载。
	document.querySelector('.done').onclick = function () {
        loading.done();
    };
	
### 加载图片，加载页面同理

<div class="instance-2">
	<div class="container">
		<div class="frame text-center-vertical"></div>
	</div>
    <div class="mask"></div>
	<div class="demo">点击·加载</div>
	<div class="ctrl">
		<div class="btn btn-default reload">重新加载</div>
	</div>
</div>

查看源代码：

	// 扩展 easing 函数
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

		// 换一种 easing 动画效果
        easing: 'easeOutBounce'
	});
	
	loading
	    .onProgress(progress => {
	        if (progress >= 60) {
	            loading.setOptions({
	                color: '#fff'
	            });
	        }
	        return '加载中...' + Math.ceil(progress) + '%';
	    })
	    .onFinished(() => {

			// 加载完成后，隐藏遮罩及 loading 动画。
	        // 开一个 50ms 的定时器，为了让 100% 这几个字能被看见。
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

### 默认参数及描述

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
	        <td>'normal 900 20px Arial'</td>
	        <td>string</td>
	        <td>
				[font style][font weight][font size][font family] <br>
        		文本样式，同 css 一样，必须包含 [font size] 和 [font family]
			</td>
	    </tr>
	    <tr>
	        <td>smallFont</td>
	        <td>'normal 900 14px Arial'</td>
	        <td>string</td>
	        <td>小字体样式，应用于 `%`。</td>
	    </tr>
	    <tr>
	        <td>smallFontOffsetTop</td>
	        <td>1</td>
	        <td>number</td>
	        <td>
				小字体相对于中点向下的偏移值，<br>
        		细节的处理，为了让显示更好看。
			</td>
	    </tr>
	    <tr>
	        <td>color</td>
	        <td>#333</td>
	        <td>string</td>
	        <td>进度文本的颜色。</td>
	    </tr>
	    <tr>
	        <td>fillColor</td>
	        <td>#27C9E5</td>
	        <td>string</td>
	        <td>填充的背景色。</td>
	    </tr>
	    <tr>
	        <td>offsetLeft</td>
	        <td>0</td>
	        <td>number</td>
	        <td>
				线条的横向偏移值，距离 Canvas 画布左边的偏移值。<br>
				(0, 1) 表示容器宽度的倍数，0 & [1, +∞) 表示具体数值。
			</td>
	    </tr>
	    <tr>
	        <td>crestHeight</td>
	        <td>4</td>
	        <td>number</td>
	        <td>波峰高度，(0, 1) 表示容器高度的倍数，0 & [1, +∞) 表示具体数值。</td>
	    </tr>
	    <tr>
	        <td>rippleNum</td>
	        <td>1</td>
	        <td>number</td>
	        <td>波纹个数，即正弦周期个数。</td>
	    </tr>
	    <tr>
	        <td>speed</td>
	        <td>0.3</td>
	        <td>number</td>
	        <td>波浪的运动速度。</td>
	    </tr>
	    <tr>
	        <td>duration</td>
	        <td>5000</td>
	        <td>number</td>
	        <td>
				加载到 `99%` 的时长，单位毫秒(ms)，<br>
        		用时越久，越慢加载到 `99%`。
			</td>
	    </tr>
	    <tr>
	        <td>easing</td>
	        <td>swing</td>
	        <td>string</td>
	        <td>
				加载过程的动画。<br>
				默认支持两种：<br>
				`linear`: 匀速。<br>
				`swing`: 先慢慢加速再慢慢减速。<br>
				更多请阅读
				<a class="dotted-line" href="#/examples/quick_start#easing" target="_blank">
					Easing 函数
				</a>。
			</td>
	    </tr>
    </tbody>
</table>

### 方法及描述

<table class="table table-bordered-inner table-striped">
    <thead>
	    <tr>
	        <th width="100">名称</th>
	        <th width="160">参数类型</th>
	        <th width="450">描述</th>
	    </tr>
    </thead>
    <tbody>
	    <tr>
	        <td>setOptions(newOptions)</td>
	        <td>newOptions: object</td>
	        <td>
				动态设置属性值。当前能设置的属性有: <br>
				`opacity, color, font, smallFont, smallFontOffsetTop,
				fillColor, offsetLeft, crestHeight, speed`
			</td>
	    </tr>
	    <tr>
	        <td>done()</td>
	        <td>无参数</td>
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
	        <td>
				进度每次改变的时候触发此事件，接受一个返回值，返回值类型为：`{string | object}`。
			</td>
	    </tr>
	    <tr>
	        <td>onFinished()</td>
	        <td>function</td>
	        <td>进度加载到 `100%` 后触发此事件。</td>
	    </tr>
    </tbody>
</table>