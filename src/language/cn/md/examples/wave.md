<div class="instance-1">
    <div class="demo"></div>
	<div class="ctrl">
		<div class="btn btn-success open">开启</div>
		<div class="btn btn-success pause">暂停</div>
	</div>
</div>

查看源代码：

	new JParticles.wave('#demo', {
	    num: 3,
	    // 三条线依次的颜色
	    lineColor: ['rgba(0, 190, 112, .5)', 'rgba(0, 190, 112, .7)', 'rgba(0, 190, 112, .9)'],
	    // 三条线依次的宽度
	    lineWidth: [.5, .7, .9],
	    // 三条线依次的向左偏移值
	    offsetLeft: [2, 1, 0],
	    // 三条线都向上偏移容器高度的0.75倍
	    offsetTop: .75,
	    // 三条线依次的波峰高度
	    crestHeight: [10, 14, 18],
	    // 三条线都只有两个波峰（波纹）
	    rippleNum: 2,
	    speed: .1,
	    // 隐藏填充，默认false
	    fill: false,
	    // 显示边框，即线条效果，默认true
	    stroke: true
	});

### 水切面：
<div class="instance-2">
    <div class="demo"></div>
	<div class="ctrl">
		<div class="btn btn-success open">开启</div>
		<div class="btn btn-success pause">暂停</div>
	</div>
</div>

查看源代码：

	new JParticles.wave('#demo-2', {
	    num: 1,
	    // 波纹填充的颜色
	    fillColor: '#27C9E5',
	    crestHeight: 8,
	    offsetTop: .75,
	    rippleNum: 3,
	    speed: .07,
	    // 显示填充，即波纹效果
	    fill: true,
	    // 隐藏边框
	    stroke: false
	});