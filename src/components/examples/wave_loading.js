import React, {Component} from 'react';
import {language} from 'store';
import Base from './base';

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

export default class WaveLoading extends Base {
    instance_one() {
        let loading = null;

        function createLoading() {
            loading = null;
            loading = new JParticles.waveLoading('.instance-1 .demo', {
                font: 'normal 900 16px Arial',
                smallFont: 'normal 900 14px Arial',
                resize: false
            });

            loading
                .onProgress(progress => {

                    loading.setOptions({
                        color: progress >= 60 ? '#fff' : '#333'
                    });

                    return language.progressText + Math.ceil(progress) + '%';
                });
        }

        createLoading();

        $('.instance-1 .done').click(() => {
            loading && loading.done();
        });

        $('.instance-1 .reload').click(createLoading);
    }

    instance_two() {
        const imgUrl = 'https://barrior.github.io/storage/love.jpg';
        const $instance = $('.instance-2');
        const $demo = $instance.find('.demo');
        const $container = $instance.find('.container .frame');
        let loading = null;

        function createLoading() {
            loading = new JParticles.waveLoading($demo[0], {

                // [font style][font weight][font size][font family]
                // 文本样式，同css一样，必须包含 [font size] 和 [font family]
                font: 'normal 900 16px Arial',
                easing: 'easeOutBounce',
                resize: false
            });

            loading
                .onProgress(progress => {

                    // set text color to white if the progress more than 60%
                    if (progress >= 60) {
                        loading.setOptions({
                            color: '#fff'
                        });
                    }

                    return language.progressText + Math.ceil(progress) + '%';
                })
                .onFinished(() => {
                    setTimeout(() => {
                        $instance.find('.mask').add($demo).css('display', 'none');
                    }, 50);
                });
        }

        function createImg() {
            $('<img>')
                .attr('src', imgUrl)
                .on('load', () => {
                    loading.done();
                })
                .appendTo($container);
        }

        $demo.click(() => {
            createLoading();
            createImg();
        });

        $instance.find('.reload').click(() => {
            $container.empty();
            $instance.find('.mask').add($demo).removeAttr('style');
            $demo.trigger('click');
        });
    }

    beforeComponentDidMount() {
        this.instance_one();
        this.instance_two();
    }
}