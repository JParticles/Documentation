import React, {Component} from 'react';
import {isMobile} from 'store';
import {createEffect} from 'js/create_effect';
import Base from './base';

export default class Wave extends Base {
    beforeComponentDidMount() {
        createEffect('.instance-1', demoElem => {
            return new JParticles.wave(demoElem, {
                num: 3,
                lineColor: ['rgba(0, 190, 112, .5)', 'rgba(0, 190, 112, .7)', 'rgba(0, 190, 112, .9)'],
                lineWidth: [.5, .7, .9],
                offsetLeft: [2, 1, 0],
                offsetTop: .75,
                crestHeight: [10, 14, 18],
                rippleNum: isMobile() ? 1 : 2,
                speed: .1
            });
        });

        // voice search
        createEffect('.instance-2', demoElem => {
            const settings = {
                crestHeight: [10, 14, 18],
                speed: .1
            };

            const effect = new JParticles.wave(demoElem, JParticles.utils.extend({
                num: 3,
                lineColor: ['#e53d27', '#42e527', '#27C9E5'],
                lineWidth: [.7, .9, 1],
                offsetTop: .65,
                rippleNum: isMobile() ? 1 : 2
            }, settings));

            $('.instance-2 .voice')
                .on('mousedown.voice, touchstart.voice', function () {
                    clearInterval(this.timer);
                    this.timer = setInterval(() => {
                        const crestHeight = [10, 14, 18].map(item => {

                            // 获取随机波动值
                            item += JParticles.utils.limitRandom(20, -20);

                            // 处理 (0, 1) 之间的值为整数
                            if (item < 1 && item > 0) {
                                item = Math.ceil(item);
                            }

                            return item;
                        });

                        // 控制线条波动
                        effect.setOptions({
                            crestHeight,
                            speed: [.2, .14, .1]
                        });
                    }, 100);

                    $(document).on('mouseup.voice, touchend.voice', () => {
                        $(document).off('mouseup.voice, touchend.voice');
                        clearInterval(this.timer);
                        effect.setOptions(settings);
                    });
                });

            return effect;
        });

        // water wave
        createEffect('.instance-3', demoElem => {
            return new JParticles.wave(demoElem, {
                num: 1,
                line: false,
                fill: true,
                fillColor: '#27C9E5',
                offsetTop: .75,
                crestHeight: 8,
                rippleNum: 3,
                speed: .07
            });
        });
    }
}