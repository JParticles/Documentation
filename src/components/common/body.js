import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Body extends Component {

    static defaultProps = {
        addClass: ''
    };

    static propTypes = {
        addClass: PropTypes.string
    };

    render() {
        const className = `com-body ${this.props.addClass.trim()}`;
        return (
            <div className={className}>
                {this.props.children}
            </div>
        )
    }
}