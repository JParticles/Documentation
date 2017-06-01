import React, {Component} from 'react';
import {language} from 'store';
import {createEffect, throttle, clearThrottle} from 'js/create_effect';

// https://codepen.io/anon/pen/pPmQve?editors=0010
export default class QuickStart extends Component {
    constructor() {
        super();
        const content = require(`language/${language.language}/md/examples/quick_start.md`);
        if (this.content = remarkable.render(content)) {
            this.content = this.content
                .replace(/(<a href=".*?")>/g, '$1 target="_blank">')
                .replace(/(<pre)>/g, '$1 class="prettyprint">');
        }
    }

    componentDidMount() {
        prettyPrint();

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

        throttle();
    }

    componentWillUnMount() {
        clearThrottle();
    }

    render() {
        return (
            <div className="quick-start"
                 dangerouslySetInnerHTML={{
                    __html: this.content
                 }}>
            </div>
        )
    }
}