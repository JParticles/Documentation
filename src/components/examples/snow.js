import React, { Component } from 'react';

export default class Intro extends Component {
    constructor(props) {
        super(props);
    }

    _componentDidMount() {
        prettyPrint();

        bind( 0, function( demoElem ){
            return new Particleground.snow( demoElem );
        });
    }

    render() {
        return (
            <div className="cf">
                <div className="main">
                    <div className="main-content">
                        <div className="instance snow" data-ctrl="none">
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
                                <pre className="prettyprint normal-text">{`new Particleground.snow( '#demo' );`}</pre>
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
                                        <td>color</td>
                                        <td>'#fff'</td>
                                        <td>string 或 array</td>
                                        <td>
                                            雪花的颜色，
                                            <a className="dotted-line" href="/examples/quick-getting#默认配置参数" target="_blank">
                                                查看更多规则
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>maxR<sup>1.1.0+</sup></td>
                                        <td>6.5</td>
                                        <td>number</td>
                                        <td>雪花最大半径</td>
                                    </tr>
                                    <tr>
                                        <td>minR<sup>1.1.0+</sup></td>
                                        <td>.4</td>
                                        <td>number</td>
                                        <td>雪花最小半径</td>
                                    </tr>
                                    <tr>
                                        <td>maxSpeed<sup>1.1.0+</sup></td>
                                        <td>.6</td>
                                        <td>number</td>
                                        <td>雪花飘落速度最大运动速度</td>
                                    </tr>
                                    <tr>
                                        <td>minSpeed<sup>1.1.0+</sup></td>
                                        <td>0</td>
                                        <td>number</td>
                                        <td>雪花飘落速度最小运动速度</td>
                                    </tr>
                                    <tr className="api-del">
                                        <td><del>max</del><sup>1.1.0-</sup></td>
                                        <td><del>6.5</del></td>
                                        <td><del>number</del></td>
                                        <td><del>雪花最大半径</del></td>
                                    </tr><tr className="api-del">
                                        <td><del>min</del><sup>1.1.0-</sup></td>
                                        <td><del>.4</del></td>
                                        <td><del>number</del></td>
                                        <td><del>雪花最小半径</del></td>
                                    </tr>
                                    <tr className="api-del">
                                        <td><del>speed</del><sup>1.1.0-</sup></td>
                                        <td><del>.4</del></td>
                                        <td><del>number</del></td>
                                        <td><del>雪花飘落速度</del></td>
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