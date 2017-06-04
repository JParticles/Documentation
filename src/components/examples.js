import React, {Component} from 'react';
import Remarkable from 'remarkable';
import {language} from 'store';
import Header from './common/header';
import Body from './common/body';
import Footer from './common/footer';
import Menu from './common/menu';
import Comment from './common/comment';

import 'provider/prettify/prettify.min';
import 'provider/prettify/prettify.min.scss';

// register global variable used by example pages.
window.remarkable = new Remarkable({
    html: true
});

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.Component = null;
    }

    componentDidMount() {
        const $loading = $('.page-examples .loading');
        const wrapHeight = $(window).height() - $('.com-header').outerHeight();

        $loading.css('top', (wrapHeight - $loading.outerHeight()) / 2);

        const loading = new JParticles.waveLoading($loading[0], {
            font: 'normal 900 12px Arial',
            duration: 2000
        });

        loading
            .onFinished(() => {
                setTimeout(() => {
                    this.setState({Component});
                }, 50);
            });

        import(`./examples/${this.props.params.instance}`).then((Component) => {
            this.Component = Component;
            loading.done();
        });
    }

    render() {
        return (
            <div id="container" className="page-examples">
                <Header/>
                <Body>
                    <Menu/>
                    <div className="main md-syntax-highlight">
                        <div className="content text-justify">
                            {
                                this.Component
                                    ? <this.Component/>
                                    : <div className="loading-wrap">
                                        <div className="loading"></div>
                                      </div>
                            }
                        </div>
                        <Comment/>
                    </div>
                </Body>
                <Footer/>
            </div>
        )
    }
}