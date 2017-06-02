import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {language, setLanguage, isMobile} from 'store';
import languageList from 'language/list';
import {parseRouter, createHash, splitPath} from 'js/parse_router';

const navigation = [
    {
        href: "/"
    },
    {
        href: "/examples/particle"
    },
    {
        href: "https://github.com/Barrior/JParticles",
        target: "_blank"
    },
    {
        href: "http://shang.qq.com/wpa/qunwpa?idkey=f548e3f94e0040a2ac5adfe4fec6915ef67c8c1b6ba5784ff6d5049c6135a759",
        title: "172839150",
        target: "_blank"
    },
    {
        href: "/changelog"
    }
];

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.init();
    }

    init() {
        const router = this.router = parseRouter();
        this.navigation = JParticles.utils.extend(true, [], navigation).map((item, i) => {

            // add language at route of link
            if (!/^https?/i.test(item.href)) {
                if (router.hasLanguage || language.language != 'cn') {
                    item.href = item.href.replace(/(\/)(.*)/i, `$1${language.language}/$2`);
                }
            }

            // active navigation
            if (/\/examples\/?/.test(router.path) && /\/examples\/?/.test(item.href)) {
                item.className = 'active';
            } else {
                item.className = item.href == router.fullPath ? 'active' : '';
            }

            // assign "#" to href
            item.href = '#' + item.href;

            // showing text
            const lang = language.header[i];
            if (JParticles.utils.isPlainObject(lang)) {
                Object.assign(item, lang);
            } else {
                item.name = lang;
            }
            return item;
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
            .on('resize.header', () => {
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
        $(window).off('resize.header');
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
        const rootRouter = this.router.hasLanguage ? `/${this.router.language}/` : '/';
        return (
            <header className="com-header pr">
                {
                    isMobile()
                        ?
                        <div className="small-screen">
                            <div className="mobile-menu">
                                <i className="icon icon-menu"></i>
                                菜单
                            </div>
                        </div>
                        :
                        <div className="large-screen cf">
                            <div className="logo fl">
                                <Link to={rootRouter}>JParticles</Link>
                            </div>
                            <nav className="nav fr pr">
                                {
                                    this.navigation.map((item, i) => {
                                        return <a
                                            key={i}
                                            {...item}>
                                            {item.name}
                                        </a>
                                    })
                                }
                                <figure className="switch-language pr">
                                    <div className="display">
                                        <span>{this.curLanguage.name}</span>
                                        <img
                                            src={require(`language/${splitPath(this.curLanguage.flag)}`)}
                                            alt="Flag"
                                        />
                                    </div>
                                    <ul className="list list-unstyled">
                                        {
                                            this.languageList.map((lang, i) => {
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
                }
            </header>
        )
    }
}