import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {language, isMobile} from 'store';
import Header from './common/header';
import Body from './common/body';
import Footer from './common/footer';

export default class Index extends Component {

    componentDidMount() {
        const settings = isMobile()
            ? {
                num: .25,
                range: 200,
                proximity: 160,
                maxSpeed: .7
            }
            : {
                proximity: .1
            };

        new JParticles.particle('.page-index .bg', Object.assign({
            lineShape: 'cube',
            eventElem: document,
            parallax: true,
            parallaxStrength: 1,
            parallaxLayer: [1, 3, 5, 7]
        }, settings));
    }

    render() {
        const {description, seeMore, quickStart} = language.home;
        return (
            <div id="container" className="page-index">
                <Header/>
                <Body addClass="overflow-hidden">
                    <section className="bg"></section>
                    <section className="intro">
                        <div className="title">JParticles</div>
                        <div className="description">
                            {description}
                            <Link className="readmore" to="/examples/intro">
                                {seeMore}
                            </Link>
                        </div>
                        <div className="quick-start">
                            <Link className="btn btn-success pr"
                                  to="/examples/quick_start">
                                <span className="pa">{quickStart}</span>
                            </Link>
                        </div>
                    </section>
                </Body>
                <Footer/>
            </div>
        )
    }
}