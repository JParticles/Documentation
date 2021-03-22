<div class="instance i1">
    <div class="demo"></div>
    <div class="handlebar">
        <div class="btn btn-default open">开启</div>
        <div class="btn btn-default pause">暂停</div>
    </div>
</div>

源代码：

```javascript
new JParticles.Line('#demo')
```

### 固定角度

<div class="instance i2">
    <div class="demo"></div>
    <div class="handlebar">
        <div class="btn btn-default open">开启</div>
        <div class="btn btn-default pause">暂停</div>
    </div>
</div>

源代码：

```javascript
new JParticles.Line('#demo', {
	reservedLines: 12,
	// 设置最大角度与最小角度一致即可
	maxDegree: 70,
	minDegree: 70,
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
	        <td>
	            线条个数，`(0, 1)` 显示为容器宽度相应倍数的个数，`0 & [1, +∞)` 显示具体个数。
	        </td>
	    </tr>
	    <tr>
	        <td>color</td>
	        <td>[]</td>
	        <td>string 或 array</td>
	        <td>线条的颜色，规则参考：[`color`](/examples/quick-start#H7)。</td>
	    </tr>
	    <tr>
	        <td>maxWidth</td>
	        <td>2</td>
	        <td>number</td>
	        <td>线条最大边框宽度。</td>
	    </tr>
	    <tr>
	        <td>minWidth</td>
	        <td>1</td>
	        <td>number</td>
	        <td>线条最小边框宽度。</td>
	    </tr>
	    <tr>
	        <td>maxSpeed</td>
	        <td>3</td>
	        <td>number</td>
	        <td>最大运动速度。</td>
	    </tr>
	    <tr>
	        <td>minSpeed</td>
	        <td>1</td>
	        <td>number</td>
	        <td>最小运动速度。</td>
	    </tr>
	    <tr>
	        <td>maxDegree</td>
	        <td>90</td>
	        <td>number</td>
	        <td>最大偏移角度，3 点钟方向为 0 度，逆时针计算，12 点钟方向为 90 度。</td>
	    </tr>
	    <tr>
	        <td>minDegree</td>
	        <td>80</td>
	        <td>number</td>
	        <td>最小偏移角度。</td>
	    </tr>
	    <tr>
	        <td>createOnClick</td>
	        <td>true</td>
	        <td>boolean</td>
	        <td>鼠标点击是否创建新的线条。</td>
	    </tr>
	    <tr>
	        <td>numberOfCreations</td>
	        <td>3</td>
	        <td>number</td>
	        <td>点击事件触发的时候创建的线条个数。</td>
	    </tr>
	    <tr>
	        <td>removeOnOverflow</td>
	        <td>true</td>
	        <td>boolean</td>
	        <td>当线条溢出画布时是否移除。</td>
	    </tr>
	    <tr>
	        <td>overflowCompensation</td>
	        <td>20</td>
	        <td>number</td>
	        <td>溢出补偿值，即多溢出多少像素才移除，最小值为 0。</td>
	    </tr>
	    <tr>
	        <td>reservedLines</td>
	        <td>6</td>
	        <td>number</td>
	        <td>画布内保留的线条个数。</td>
	    </tr>
    </tbody>
</table>
