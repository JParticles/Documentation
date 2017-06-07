import React from 'react';
import {Route} from 'react-router-dom';
import {parseRouter} from 'js/parse_router';

export default (Component, collection) => (
    class SyncComponent extends React.Component {
        render() {
            const router = parseRouter();
            if (/:lang/.test(collection.path) && !router.hasLanguage) {
                location.hash = '#/404';
                return null;
            }
            return <Component {...this.props} {...collection}/>
        }
    }
)