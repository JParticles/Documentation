import React, {Component} from 'react';
import {language, isMobile} from 'store';
import {createEffect, throttle, clearThrottle} from 'js/create_effect';

export default class Particle extends Component {
    constructor() {
        super();
        const content = require(`language/${language.language}/md/examples/particle.md`);
        if (this.content = remarkable.render(content)) {
            this.content = this.content
                .replace(/(<a href=".*?")>/g, '$1 target="_blank">')
                .replace(/(<pre)>/g, '$1 class="prettyprint">');
        }
    }

    componentDidMount() {
        prettyPrint();

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

        throttle();
    }

    componentWillUnmount() {
        clearThrottle();
    }

    render() {
        return (
            <div className="particle"
                 dangerouslySetInnerHTML={{
                    __html: this.content
                 }}>
            </div>
        )
    }
}