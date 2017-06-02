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
            const effect = new JParticles.wave(demoElem, {
                num: 3,
                lineColor: ['rgba(0, 0, 0, .5)', 'rgba(0, 0, 0, .7)', 'rgba(0, 0, 0, .9)'],
                lineWidth: [.7, .9, 1],
                offsetTop: .75,
                crestHeight: [10, 14, 18],
                rippleNum: isMobile() ? 1 : 2,
                speed: .1
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