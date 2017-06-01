import React, {Component} from 'react';
import {language} from 'store';

export default class Intro extends Component {

    constructor() {
        super();
        const content = require(`language/${language.language}/md/examples/intro.md`);
        if (this.content = remarkable.render(content)) {
            this.content = this.content.replace(/(<a href=".*?")>/g, '$1 target="_blank">');
        }
    }

    render() {
        return (
            <div className="intro"
                 dangerouslySetInnerHTML={{
                    __html: this.content
                 }}>
            </div>
        )
    }
}