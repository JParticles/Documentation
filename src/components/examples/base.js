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
                .replace(/(<pre)>/g, '$1 class="prettyprint">')
                .replace(/(<table.*?>)((.|\s)*?)(?=<\/table>)/g, ($0, $1, $2) => {
                    return $1 + $2.replace(/`((.|\s)*?)`/g, '<code>$1</code>');
                })
                .replace(/<h3>((.|s)*?)(?=<\/h3>)/g, ($0, $1) => {
                    const id = $1.replace(/[.,\s]+/g, '_');
                    return `<h3 id="${id}">${$1}`;
                })
                .replace(/<h4>((.|s)*?)(?=<\/h4>)/g, ($0, $1) => {
                    const id = $1.replace(/[.,\s]+/g, '_');
                    return `<h4 id="${id}">${$1}`;
                })
        }
    }

    componentDidMount() {

        // page scroll to anchor via router hash
        if (this.router.hash) {
            const $elem = $('#' + this.router.hash);
            if ($elem.length) {
                $(window).scrollTop($elem.offset().top);
            }
        }

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