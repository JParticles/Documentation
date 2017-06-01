import React, {Component} from 'react';
import {createEffect} from 'js/create_effect';
import Base from './base';

export default class QuickStart extends Base {
    beforeComponentDidMount() {
        const $instance = $('.instance');
        createEffect($instance, demoElem => {
            return new JParticles.particle(demoElem, {
                distance: 60,
                num: 30
            });
        });

        $('.instance-ctrl')
            .find('.open').click(() => {
                $instance
                    .data('useClickPaused', false)
                    .data('effect').open();
            })
            .end().find('.pause').click(() => {
                $instance
                    .data('useClickPaused', true)
                    .data('effect').pause();
            });
    }
}