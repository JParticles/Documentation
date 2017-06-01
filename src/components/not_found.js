import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {language, themeColor} from 'store';

import img404 from 'img/not_found/404.png';
import imgInfo from 'img/not_found/info.png';

export default class NotFound extends Component {
    getOptions() {
        const clientWidth = $(window).width();
        if (clientWidth <= 1024 && clientWidth > 414) {
            return {
                crestHeight: [6, 10, 14],
                offsetTop: .5,
                rippleNum: 2
            }
        } else if (clientWidth <= 414) {
            return {
                crestHeight: [4, 8, 12],
                offsetTop: .5,
                rippleNum: 1
            }
        }
    }

    componentDidMount() {
        new JParticles.wave('.not-found .below', Object.assign({
            num: 3,
            lineColor: [
                'rgba(255, 255, 255, .5)',
                'rgba(255, 255, 255, .7)',
                'rgba(255, 255, 255, .9)'
            ],
            lineWidth: [.6, .8, 1],
            crestHeight: [8, 12, 16],
            offsetLeft: [2, 1, 0],
            offsetTop: 18,
            rippleNum: 3,
            speed: .07
        }, this.getOptions()));
    }

    render() {
        return (
            <div className="not-found pr overflow-hidden">
                <div className="wrap">
                    <img src={img404} alt="404"/>
                    <div className="text">
                        <img src={imgInfo} alt="Not Found"/>
                        <strong>
                            <Link to={`/${language.language}/`} replace>
                                {language.notFound.toHomePage}
                            </Link>
                            <a href="javascript:history.back()">
                                {language.notFound.toPrevPage}
                            </a>
                        </strong>
                    </div>
                </div>
                <div className="below"></div>
            </div>
        )
    }
}