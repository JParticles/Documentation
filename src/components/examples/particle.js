import React, {Component} from 'react';
import {isMobile} from 'store';
import {createEffect} from 'js/create_effect';
import Base from './base';

export default class Particle extends Base {
    beforeComponentDidMount() {
        let settings = {
            proximity: 90,
            range: 100
        };

        if (isMobile()) {
            settings.proximity = 30;
        }

        createEffect('.instance-1', demoElem => {
            return new JParticles.particle(demoElem, settings);
        });

        createEffect('.instance-2', demoElem => {
            return new JParticles.particle(demoElem, {
                color: '#25bfff',
                lineShape: 'cube',
                range: 2000,
                proximity: 100,
                parallax: true
            });
        });

        createEffect('.instance-3', demoElem => {
            return new JParticles.particle(demoElem, {
                range: 0,
                num: 18,
                maxR: 20,
                minR: 10,
                maxSpeed: 3
            });
        });
    }
}