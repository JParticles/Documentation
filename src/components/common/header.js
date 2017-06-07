import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {language, setLanguage, isMobile} from 'store';
import languageList from 'language/list';
import {parseRouter, createHash, splitPath} from 'js/parse_router';
import menus from 'js/menus_config';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.init();
    }

    init() {
        const router = this.router = parseRouter();
        this.navigation = JParticles.utils.extend(true, [], menus.navigation).map((item, i) => {

            // add language at route of link
            if (!/^https?/i.test(item.href)) {
                if (router.hasLanguage || language.language != 'cn') {
                    item.href = item.href.replace(/(\/)(.*)/i, `$1${language.language}/$2`);
                }

                // active navigation
                if (/\/examples\/?/.test(router.path) && /\/examples\/?/.test(item.href)) {
                    item.className = 'active';
                } else {
                    item.className = item.href == router.fullPath ? 'active' : '';
                }

                // assign "#" to href
                item.href = '#' + item.href;
            }

            // showing text
            const lang = language.header.common[i];
            if (JParticles.utils.isPlainObject(lang)) {
                Object.assign(item, lang);
            } else {
                item.name = lang;
            }
            return item;
        });
        this.menu = JParticles.utils.extend(true, [], menus.sideMenu);
        this.menu.forEach((item, i) => {
            item.name = language.examples.menu[i];
            if (router.hasLanguage) {
                item.to = `/${router.language}/${splitPath(item.to)}`;
            }
        });

        this.languageList = JParticles.utils.extend(true, [], languageList);
        this.languageList.some((item, i, array) => {
            if (item.field == language.language) {
                array.splice(i, 1);
                return this.curLanguage = item;
            }
        });
        this.languageList.unshift(this.curLanguage);
    }

    componentDidMount() {
        $(window).on('resize.switchMenu', () => {
            this.setState({});
        });
    }

    componentWillUnmount() {
        $(window).off('resize.switchMenu');
    }

    render() {
        const {languageList, curLanguage, navigation, menu} = this;
        const props = {
            rootRouter: this.router.hasLanguage ? `/${this.router.language}/` : '/',
            languageList,
            curLanguage,
            navigation,
            menu
        };
        return (
            <header className="com-header pr">
                {
                    isMobile()
                        ? <SmallScreen {...props}/>
                        : <LargeScreen {...props}/>
                }
            </header>
        )
    }
}

class SmallScreen extends Component {
    constructor(props) {
        super(props);
        this.quickStartKey = 'read_quick_start';
        this.quickStartPath = '/examples/quick_start';

        // require flag
        const router = parseRouter();
        if (router.path != this.quickStartPath && !localStorage.getItem(this.quickStartKey)) {
            this.required = true;
        } else {
            this.required = false;
            localStorage.setItem(this.quickStartKey, true);
        }
    }

    componentDidMount() {
        const showingClass = 'show';
        this.$menu = $('.small-screen .mobile-menu');
        this.$nav = $('.small-screen .nav');
        this.$menu.on('click', () => {
            this.$nav[this.$nav.hasClass(showingClass) ? 'removeClass' : 'addClass'](showingClass);
        });
        $(document).on('click.smallScreen', (e) => {
            if (
                e.target !== this.$menu[0]
                && e.target !== this.$nav[0]
                && !$.contains(this.$menu[0], e.target)
                && !$.contains(this.$nav[0], e.target)
            ) {
                this.$nav.removeClass(showingClass);
            }
        });
    }

    componentWillUnmount() {
        this.$menu.off('click');
        $(document).off('click.smallScreen');
    }

    onSwitchLang(lang) {
        if (language.language != lang.field) {
            const router = parseRouter();
            const LANGUAGE = require(`language/${lang.field}/${lang.field}`);
            setLanguage(LANGUAGE, lang.field);
            location.hash = createHash(lang.field, router.path);
        }
    }

    render() {
        const {quickStartPath} = this;
        const {rootRouter, navigation, menu, languageList, curLanguage} = this.props;
        return (
            <div className="small-screen cf">
                <div className="mobile-menu fl">
                    <i className="icon icon-menu"></i>
                    {language.header.smallScreen.menu}
                </div>
                <figure className="switch-language fr pr">
                    <div className="display">
                        <span>{curLanguage.name}</span>
                        <img
                            src={require(`language/${splitPath(curLanguage.flag)}`)}
                            alt="Flag"
                        />
                    </div>
                    <ul className="list list-unstyled">
                        {
                            languageList.map((lang, i) => {
                                return <li key={i}
                                    className="display"
                                    onClick={this.onSwitchLang.bind(this, lang)}>
                                    <span>{lang.name}</span>
                                    <img
                                        src={require(`language/${splitPath(lang.flag)}`)}
                                        alt="Flag"
                                    />
                                </li>
                            })
                        }
                    </ul>
                </figure>
                <nav className="nav">
                    {
                        navigation.map((item, i) => {
                            return <a
                                key={i}
                                {...item}>
                                {item.name}
                            </a>
                        })
                    }
                    <div className="divider"></div>
                    {
                        menu.map((item, i) => {
                            return <NavLink
                                key={i}
                                activeClassName="active"
                                to={item.to}>
                                {item.name}
                                {
                                    this.required && item.to.indexOf(quickStartPath) != -1 &&
                                    <i className="emulate-icon-required">{language.examples.required}</i>
                                }
                            </NavLink>
                        })
                    }
                </nav>
            </div>
        )
    }
}

class LargeScreen extends Component {
    setBlockPosition() {
        if (!isMobile()) {
            const $screen = $('.com-header .large-screen');
            const $activeNav = $screen.find('.nav a.active');
            const left = $activeNav.position().left + parseInt($activeNav.css('paddingLeft'));
            $screen.find('.slide-block')
                .css({
                    width: $activeNav.width(),
                    transform: `translate(${left}px, 0)`
                })
                .removeClass('hidden');
        }
    }

    changeActive($active) {
        $active.addClass('active').siblings().removeClass('active');
        this.setBlockPosition();
    }

    movingBlock() {
        const self = this;
        const $screen = $('.com-header .large-screen');
        const $activeNav = $screen.find('.nav a.active');

        $screen.find('.nav a')
            .hover(function () {
                self.changeActive($(this));
            }, () => {
                self.changeActive($activeNav);
            });
    }

    resize() {
        $(window)
            .on('resize.LargeScreen', () => {
                setTimeout(() => {
                    this.setState({}, () => {
                        this.setBlockPosition();
                        this.movingBlock();
                    });
                }, 400);
            });
    }

    componentDidMount() {
        this.setBlockPosition();
        this.movingBlock();
        this.resize();
    }

    componentWillUnmount() {
        $(window).off('resize.LargeScreen');
    }

    onSwitchLang(lang) {
        if (language.language != lang.field) {
            const router = parseRouter();
            const LANGUAGE = require(`language/${lang.field}/${lang.field}`);
            setLanguage(LANGUAGE, lang.field);
            location.hash = createHash(lang.field, router.path);
        }
    }

    render() {
        const {rootRouter, navigation, languageList, curLanguage} = this.props;
        return (
            <div className="large-screen cf">
                <div className="logo fl">
                    <Link to={rootRouter}>JParticles</Link>
                </div>
                <nav className="nav fr pr">
                    {
                        navigation.map((item, i) => {
                            return <a
                                key={i}
                                {...item}>
                                {item.name}
                            </a>
                        })
                    }
                    <figure className="switch-language pr">
                        <div className="display">
                            <span>{curLanguage.name}</span>
                            <img
                                src={require(`language/${splitPath(curLanguage.flag)}`)}
                                alt="Flag"
                            />
                        </div>
                        <ul className="list list-unstyled">
                            {
                                languageList.map((lang, i) => {
                                    return <li key={i}
                                               className="display"
                                               onClick={this.onSwitchLang.bind(this, lang)}>
                                        <span>{lang.name}</span>
                                        <img
                                            src={require(`language/${splitPath(lang.flag)}`)}
                                            alt="Flag"
                                        />
                                    </li>
                                })
                            }
                        </ul>
                    </figure>
                    <div className="slide-block pa hidden"></div>
                </nav>
            </div>
        )
    }
}