import React, { Component } from 'react';

export default class Intro extends Component {
    constructor(props) {
        super(props);
    }

    _componentDidMount() {
        prettyPrint();

        bind( 0, ( demoElem ) => {
            return new Particleground.wave( demoElem, {
                num: 3,
                lineColor: ['rgba(0, 190, 112, .5)', 'rgba(0, 190, 112, .7)', 'rgba(0, 190, 112, .9)'],
                lineWidth: [.5, .7, .9],
                offsetLeft: [2, 1, 0],
                offsetTop: .75,
                crestHeight: [10, 14, 18],
                rippleNum: window.isMobile ? 1 : 2,
                speed: .1
            });
        });

        bind( 1, ( demoElem ) => {
            return new Particleground.wave( demoElem, {
                num: 1,
                fillColor: '#27C9E5',
                crestHeight: 8,
                offsetTop: .75,
                rippleNum: 3,
                fill: true,
                stroke: false,
                speed: .07
            });
        });

        bind( 2, ( demoElem ) => {
            let offsetTop = 0.999;
            let effect = new Particleground.wave( demoElem, {
                num: 1,
                fillColor: '#27C9E5',
                crestHeight: 4,
                offsetTop: offsetTop,
                rippleNum: 2,
                fill: true,
                stroke: false,
                speed: .3
            });

            let $instance = $('.instance-loading .instance');
            let $loadingText = $('.instance-loading-process');
            let $win = $(window);
            let timer = null;
            let runLoadingTimer = null;

            function render(){
                let process = ( ( 1 - offsetTop ) * 100 ).toFixed();
                if( offsetTop < 0 ){
                    process = '100';
                }
                $loadingText.html( process + '%' );
                effect.setOffsetTop( offsetTop );
            }

            function runLoading(){
                clearInterval( timer );
                timer = setInterval(function(){
                    offsetTop -= 0.012;

                    if( offsetTop < 0 ){
                        clearInterval( timer );
                        effect.pause();
                        offsetTop = -10;
                    }

                    render();
                }, 30 );
            }

            function checkInView(){
                clearTimeout( runLoadingTimer );
                runLoadingTimer = setTimeout(function(){

                    if( $instance.offset().top > $win.scrollTop() &&
                        $instance.offset().top + $instance.outerHeight() < $win.scrollTop() + $win.height() ){
                        $win.off('resize.runLoading scroll.runLoading');
                        runLoading();
                    }

                }, 200 );
            }

            checkInView();

            $win.on({
                'resize.runLoading': checkInView,
                'scroll.runLoading': checkInView
            });

            // restart
            setTimeout(() => {
                $('<div class="btn btn-default open">重新演示·RESTART</div>')
                    .appendTo('.instance-loading .ctrl')
                    .click(function(){
                        offsetTop = 0.999;
                        runLoading();
                    });
            }, 0);

            return effect;
        });
    }

    render() {
        return (
            <div className="cf">
                <div className="main">
                    <div className="main-content wave">
                        <div className="instance" data-ctrl="none">
                            <div className="demo"></div>
                        </div>

                        <div id="first-instance-ctrl">
                            <div className="btn btn-success open">开启·OPEN</div>
                            <div className="btn btn-success pause">暂停·PAUSE</div>
                        </div>

                        <div className="module">
                            <h5 className="caption">
                                <a id="源代码" href="#源代码">查看源代码：</a>
                            </h5>
                            <div className="content">
                                <pre className="prettyprint normal-text">{`new Particleground.wave( '#demo', {
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
});`}</pre>
                            </div>
                        </div>

                        <div className="instance-box">
                            <h5 className="caption">
                                <a id="水切面" href="#水切面">水切面特效：</a>
                            </h5>
                            <div className="instance">
                                <div className="demo"></div>
                            </div>
                        </div>

                        <div className="module">
                            <h5 className="caption">
                                <a id="源代码2" href="#源代码2">查看源代码：</a>
                            </h5>
                            <div className="content">
                                <pre className="prettyprint normal-text">{`new Particleground.wave( '#demo-2', {
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
});`}</pre>
                            </div>
                        </div>

                        <div className="instance-box instance-loading">
                            <h5 className="caption">
                                <a id="加载动画" href="#加载动画">水晶球loading动画：</a>
                            </h5>
                            <div className="instance">
                                <div className="demo"></div>
                                <div className="instance-loading-process text-center-vertical">
                                    0%
                                </div>
                            </div>
                        </div>

                        <div className="module">
                            <h5 className="caption">
                                <a id="源代码3" href="#源代码3">查看源代码：</a>
                            </h5>
                            <div className="content">
                                <pre className="prettyprint normal-text">{`var offsetTop = 0.999, timer;
var effect = new Particleground.wave( '#demo-3', {
    num: 1,
    fillColor: '#27C9E5',
    crestHeight: 4,
    offsetTop: offsetTop,
    rippleNum: 2,
    fill: true,
    stroke: false,
    speed: .3
});

timer = setInterval(function(){
    offsetTop -= 0.012;

    // 达到100%时，关闭定时器，停止动画
    if( offsetTop < 0 ){
        clearInterval( timer );
        effect.pause();
        offsetTop = -10;
    }

    // 通过 setOffsetTop() 方法不断地更改offsetTop属性值，达到loading的效果
    effect.setOffsetTop( offsetTop );
}, 30 );

// 注：样式方面需要将canvas设置成圆形，如：border-radius: 50%;`}</pre>
                            </div>
                        </div>

                        <div className="module module-api">
                            <h5 className="caption"><a id="参数" href="#参数">API参数配置</a></h5>
                            <div className="content">
                                <table className="table table-bordered-inner table-striped">
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
                                        <td>线条(波纹)个数</td>
                                    </tr>
                                    <tr>
                                        <td>fillColor</td>
                                        <td>[]</td>
                                        <td>string 或 array</td>
                                        <td>
                                            波纹背景颜色，当fill设置为true时生效，使用方法与
                                            <a className="dotted-line" href="/examples/quick-getting#默认配置参数" target="_blank">
                                                color规则相同
                                            </a>。下同的属性，其规则不再赘述
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>lineWidth</td>
                                        <td>[]</td>
                                        <td>number 或 array</td>
                                        <td>
                                            线条宽度，空数组则随机[.2, 2)的宽度，或依次定义线条的宽度
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>offsetLeft</td>
                                        <td>[]</td>
                                        <td>number 或 array</td>
                                        <td>线条的横向偏移值，(0, 1)表示容器宽度的倍数，[1, +∞)表示具体数值</td>
                                    </tr>
                                    <tr>
                                        <td>offsetTop</td>
                                        <td>[]</td>
                                        <td>number 或 array</td>
                                        <td>线条的纵向偏移值，线条中点到元素顶部的距离，(0, 1)表示容器高度的倍数，[1, +∞)表示具体数值</td>
                                    </tr>
                                    <tr>
                                        <td>crestHeight</td>
                                        <td>[]</td>
                                        <td>number 或 array</td>
                                        <td>波峰高度，(0, 1)表示容器高度的倍数，[1, +∞)表示具体数值</td>
                                    </tr>
                                    <tr>
                                        <td>rippleNum</td>
                                        <td>[]</td>
                                        <td>number 或 array</td>
                                        <td>波纹个数，即正弦周期个数，默认随机[1, 三分之倍容器宽度)</td>
                                    </tr>
                                    <tr>
                                        <td>speed</td>
                                        <td>[]</td>
                                        <td>number 或 array</td>
                                        <td>运动速度，默认随机[ .1, .4 )</td>
                                    </tr>
                                    <tr>
                                        <td>fill</td>
                                        <td>false</td>
                                        <td>boolean</td>
                                        <td>是否填充背景色，设置为false相关值无效</td>
                                    </tr>
                                    <tr>
                                        <td>stroke</td>
                                        <td>true</td>
                                        <td>boolean</td>
                                        <td>是否绘制边框，设置为false相关值无效</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="module module-api">
                            <h5 className="caption"><a id="方法" href="#方法">方法</a></h5>
                            <div className="content">
                                <ul className="margin-bottom-15">
                                    <li>
                                        <code className="normal-text">.setOffsetTop( offsetTopVal )</code>
                                    </li>
                                    <li>
                                        更改 offsetTop 属性值。
                                    </li>
                                </ul>
                                <table className="table table-bordered-inner table-striped">
                                    <thead>
                                    <tr>
                                        <th width="200">参数名</th>
                                        <th width="200">类型</th>
                                        <th width="600">描述</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>offsetTopVal</td>
                                        <td>number</td>
                                        <td>(0, 1)表示容器高度的倍数，[1, +∞)表示具体数值</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}