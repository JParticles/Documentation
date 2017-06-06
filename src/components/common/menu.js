import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {language, isMobile} from 'store';
import {parseRouter, splitPath} from 'js/parse_router';

const menu = [
    {
        "to": "/examples/intro"
    },
    {
        "to": "/examples/quick_start"
    },
    {
        "to": "/examples/particle"
    },
    {
        "to": "/examples/wave"
    },
    {
        "to": "/examples/wave_loading"
    },
    {
        "to": "/examples/snow"
    }
];

const quickStartKey = 'read_quick_start';
const quickStartPath = '/examples/quick_start';

class Menu extends Component {
    constructor() {
        super();
        const curRouter = parseRouter();
        this.menu = JParticles.utils.extend(true, [], menu);
        this.menu.forEach((item, i) => {
            item.title = language.examples.menu[i];
            if (curRouter.hasLanguage) {
                item.to = `/${curRouter.language}/${splitPath(item.to)}`;
            }
        });

        // require flag
        if (curRouter.path != quickStartPath && !localStorage.getItem(quickStartKey)) {
            this.required = true;
        } else {
            this.required = false;
            localStorage.setItem(quickStartKey, true);
        }
    }

    componentDidMount() {
        const $win = $(window);
        const $main = $('.main');
        const $menu = $('.menu');
        this.triggerEventName = 'resize.menu, scroll.menu';
        $win.on(this.triggerEventName, () => {
            $menu[$win.scrollTop() > $main.offset().top ? 'addClass' : 'removeClass']('fixed');
        });
    }

    componentWillUnmount() {
        $(window).off(this.triggerEventName);
    }

    render() {
        return (
            <aside className="menu fl pr">
                <ul className="list-unstyled">
                    {
                        this.menu.map(item => {
                            return <li key={item.to}>
                                <NavLink
                                    activeClassName="active"
                                    to={item.to}>
                                    {item.title}
                                    {
                                        this.required && item.to.indexOf(quickStartPath) != -1 &&
                                        <i className="emulate-icon-required">{language.examples.required}</i>
                                    }
                                </NavLink>
                            </li>
                        })
                    }
                </ul>
            </aside>
        )
    }
}

export default class MenuAgency extends Component {
    componentDidMount() {
        $(window).on('resize.MenuAgency', () => {
            this.setState({});
        });
    }

    componentWillUnmount() {
        $(window).off('resize.MenuAgency');
    }

    render() {
        return isMobile() ? null : <Menu/>
    }
}