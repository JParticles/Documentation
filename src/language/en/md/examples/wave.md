<div class="instance-1">
    <div class="demo"></div>
	<div class="ctrl">
		<div class="btn btn-default open">开启</div>
		<div class="btn btn-default pause">暂停</div>
	</div>
</div>

查看源代码：

	new JParticles.wave('#demo-1', {
	    num: 3,
	    // 不填充
	    fill: false,
	    // 绘制边框，即线条
	    line: true
	    // 三条线依次的颜色
	    lineColor: ['rgba(0, 190, 112, .5)', 'rgba(0, 190, 112, .7)', 'rgba(0, 190, 112, .9)'],
	    // 三条线依次的宽度
	    lineWidth: [.5, .7, .9],
	    // 三条线依次距左的偏移值
	    offsetLeft: [2, 1, 0],
	    // 三条线都向上偏移容器高度的 0.75 倍
	    offsetTop: .75,
	    // 三条线依次的波峰高度
	    crestHeight: [10, 14, 18],
	    // 三条线都只有两个波峰（波纹）
	    rippleNum: 2,
	    speed: .1
	});

### 语音搜索：

<div class="instance-2">
    <div class="demo"></div>
	<div class="btn btn-default voice">按住模拟语音搜索</div>
</div>

查看源代码：

	var settings = {
        crestHeight: [10, 14, 18],
        speed: .1
    };

	// JParticles.utils.extend 等同于 jQuery.extend，你也可以使用 Object.assign 替代。
	var effect = new JParticles.wave('#demo-2', JParticles.utils.extend({
        num: 3,
        lineColor: ['#e53d27', '#42e527', '#27C9E5'],
        lineWidth: [.7, .9, 1],
        offsetTop: .65,
        rippleNum: 2
    }, settings));

	// 波动效果
	document.querySelector('.voice').onmousedown = function () {
		clearInterval(this.timer);
        this.timer = setInterval(function () {
            var crestHeight = settings.crestHeight.map(function (item) {

                // 获取随机波动值
                item += JParticles.utils.limitRandom(20, -20);

                // 处理 (0, 1) 之间的值为整数
                if (item < 1 && item > 0) {
                    item = Math.ceil(item);
                }

                return item;
            });

			// 通过 setOptions() 来控制线条的波动
            effect.setOptions({
                crestHeight: crestHeight,
                speed: [.2, .14, .1]
            });
        }, 100);

		// 复原
		var self = this;
		document.onmouseup = function () {
			document.onmouseup = null;
		    clearInterval(self.timer);
		    effect.setOptions(settings);
		};
	};

### 水切面：

<div class="instance-3">
    <div class="demo"></div>
	<div class="ctrl">
		<div class="btn btn-default open">开启</div>
		<div class="btn btn-default pause">暂停</div>
	</div>
</div>

查看源代码：

	new JParticles.wave('#demo-3', {
	    num: 1,
		// 不绘制边框
        line: false,
		// 填充
        fill: true,
		// 填充颜色
        fillColor: '#27C9E5',
        offsetTop: .75,
        crestHeight: 8,
        rippleNum: 3,
        speed: .07
	});

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
	        <td>线条(波纹)个数。</td>
	    </tr>
	    <tr>
	        <td>fill</td>
	        <td>false</td>
	        <td>boolean</td>
	        <td>是否填充背景色，设置为 false 相关值无效。</td>
	    </tr>
	    <tr>
	        <td>fillColor</td>
	        <td>[]</td>
	        <td>string 或 array</td>
	        <td>
	            填充的背景色，当 fill 设置为 true 时生效。<br>
				使用方法与
	            <a class="dotted-line" href="#/examples/quick_start#默认配置" target="_blank">
	                color 规则相同
	            </a>。
				以下有雷同的属性，同理。
	        </td>
	    </tr>
	    <tr>
	        <td>line</td>
	        <td>true</td>
	        <td>boolean</td>
	        <td>是否绘制边框，设置为 false 相关值无效。</td>
	    </tr>
	    <tr>
	        <td>lineColor</td>
	        <td>[]</td>
	        <td>string 或 array</td>
	        <td>边框颜色，当 line 设置为 true 时生效，下同。</td>
	    </tr>
	    <tr>
	        <td>lineWidth</td>
	        <td>[]</td>
	        <td>number 或 array</td>
	        <td>
	            线条宽度，空数组则随机 [.2, 2) 的宽度。
	        </td>
	    </tr>
	    <tr>
	        <td>offsetLeft</td>
	        <td>[]</td>
	        <td>number 或 array</td>
	        <td>
				线条的横向偏移值，距离 Canvas 画布左边的偏移值。<br>
				(0, 1) 表示容器宽度的倍数，0 & [1, +∞) 表示具体数值。
			</td>
	    </tr>
	    <tr>
	        <td>offsetTop</td>
	        <td>[]</td>
	        <td>number 或 array</td>
	        <td>
				线条纵向偏移值，线条中点到 Canvas 画布顶部的距离。<br>
				(0, 1) 表示容器高度的倍数，[1, +∞) 表示具体数值。
			</td>
	    </tr>
	    <tr>
	        <td>crestHeight</td>
	        <td>[]</td>
	        <td>number 或 array</td>
	        <td>波峰高度，(0, 1) 表示容器高度的倍数，0 & [1, +∞) 表示具体数值。</td>
	    </tr>
	    <tr>
	        <td>rippleNum</td>
	        <td>[]</td>
	        <td>number 或 array</td>
	        <td>
				波纹个数，即正弦周期个数。<br>
				默认随机 [1, 0.2 * 容器宽度)
			</td>
	    </tr>
	    <tr>
	        <td>speed</td>
	        <td>[]</td>
	        <td>number 或 array</td>
	        <td>运动速度，默认随机 [.1, .4)</td>
	    </tr>
    </tbody>
</table>

### 方法及描述

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
	        <td>setOptions(newOptions)</td>
	        <td>newOptions: object</td>
	        <td>
				动态设置属性值。当前能设置的属性有: <br>
				opacity, fill, fillColor, line, lineColor, lineWidth, 
				offsetLeft, offsetTop, crestHeight, speed
			</td>
	    </tr>
    </tbody>
</table>