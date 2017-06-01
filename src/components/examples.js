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
        this.state = {
            Component: null
        };
    }

    componentDidMount() {
        import(`./examples/${this.props.params.instance}`).then((Component) => {
            this.setState({Component});
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
                            {this.state.Component && <this.state.Component/>}
                        </div>
                        <Comment/>
                    </div>
                </Body>
                <Footer/>
            </div>
        )
    }
}