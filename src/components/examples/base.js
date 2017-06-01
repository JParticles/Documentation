import React, {Component} from 'react';
import {language} from 'store';
import {throttle, clearThrottle} from 'js/create_effect';
import {parseRouter} from 'js/parse_router';

export default class Base extends Component {
    constructor() {
        super();
        this.router = parseRouter();
        this.filename = this.router.path.substring(10);
        const content = require(`language/${language.language}/md/examples/${this.filename}.md`);
        if (this.content = remarkable.render(content)) {
            this.content = this.content
                .replace(/(<a href=".*?")>/g, '$1 target="_blank">')
                .replace(/(<pre)>/g, '$1 class="prettyprint">');
        }
    }

    componentDidMount() {
        if (JParticles.utils.isFunction(this.beforeComponentDidMount)) {
            this.beforeComponentDidMount();
        }

        prettyPrint();
        throttle();
    }

    componentWillUnmount() {
        if (JParticles.utils.isFunction(this.beforeComponentWillUnMount)) {
            this.beforeComponentWillUnMount();
        }
        clearThrottle();
    }

    render() {
        return (
            <div className={this.filename}
                 dangerouslySetInnerHTML={{
                    __html: this.content
                 }}>
            </div>
        )
    }
}