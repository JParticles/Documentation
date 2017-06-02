import React, {Component} from 'react';
import {createEffect} from 'js/create_effect';
import Base from './base';

export default class Snow extends Base {
    beforeComponentDidMount() {
        createEffect('.instance', demoElem => {
            return new JParticles.snow(demoElem);
        });
    }
}