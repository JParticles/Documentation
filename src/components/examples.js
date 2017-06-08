import React, {Component} from 'react';
import Remarkable from 'remarkable';
import {language, themeColor} from 'store';
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

const Components = [];

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Component: null
        };
    }

    componentDidMount() {
        const {instance} = this.props.params;
        let exist = null;
        Components.some(item => {
            if (item.instance === instance) {
                return exist = item;
            }
        });

        if (exist) {
            return this.setState({
                Component: exist.Component
            });
        }

        const $loading = $('.page-examples .loading');
        const wrapHeight = $(window).height() - $('.com-header').outerHeight();
        const top = (wrapHeight - $loading.outerHeight()) / 2 - parseInt($('.com-body').css('paddingTop'));
        $loading.css('top', top);

        const loading = new JParticles.waveLoading($loading[0], {
            font: 'normal 900 12px Arial',
            smallFont: 'normal 900 12px Arial',
            smallFontOffsetTop: 0,
            fillColor: themeColor,
            duration: 2000
        });

        loading
            .onProgress(progress => {
                if (progress >= 60) {
                    loading.setOptions({
                        color: '#fff'
                    });
                }
                return {
                    text: Math.ceil(progress),
                    smallText: '%'
                };
            })
            .onFinished(() => {
                setTimeout(() => {
                    this.setState({});
                }, 50);
            });

        import(`./examples/${instance}`).then((Component) => {
            Components.push({instance, Component});
            this.state.Component = Component;
            loading.done();
        });
    }

    render() {
        return (
            <div id="container" className="page-examples">
                <Header/>
                <Body>
                    <Menu/>
                    <div className="main markdown-syntax">
                        <div className="content text-justify">
                            {
                                this.state.Component
                                    ? <this.state.Component/>
                                    : <div className="loading-wrap">
                                        <div className="loading"></div>
                                      </div>
                            }
                        </div>
                        {this.state.Component && <Comment/>}
                    </div>
                </Body>
                {this.state.Component && <Footer/>}
            </div>
        )
    }
}