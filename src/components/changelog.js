import React, {Component} from 'react';
import Remarkable from 'remarkable';
import {language} from 'store';
import Header from './common/header';
import Body from './common/body';
import Footer from './common/footer';

const md = new Remarkable();

export default class Changelog extends Component {
    constructor() {
        super();
        this.content = md.render(require(`language/${language.language}/md/changelog.md`));
    }

    render() {
        return (
            <div id="container" className="page-changelog">
                <Header/>
                <Body>
                    <div className="inner markdown-syntax"
                         dangerouslySetInnerHTML={{
                            __html: this.content
                         }}>
                    </div>
                </Body>
                <Footer/>
            </div>
        )
    }
}