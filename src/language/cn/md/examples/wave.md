<div class="instance-1">
    <div class="demo"></div>
	<div class="ctrl">
		<div class="btn open">开启</div>
		<div class="btn pause">暂停</div>
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
	<div class="ctrl">
		<div class="btn open">开启</div>
		<div class="btn pause">暂停</div>
	</div>
</div>

查看源代码：



### 水切面：

<div class="instance-3">
    <div class="demo"></div>
	<div class="ctrl">
		<div class="btn open">开启</div>
		<div class="btn pause">暂停</div>
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

