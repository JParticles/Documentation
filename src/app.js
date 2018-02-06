import React, {Component, createElement} from 'react';
import {render} from 'react-dom';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import AsyncComponent from './components/common/async_component';
import SyncComponent from './components/common/sync_component';

import 'sass/build.scss';

render(
    <HashRouter>
        <Switch>
            <Route exact path="/404" component={AsyncComponent(()=>import('./components/not_found'))}/>

            <Route exact path="/" component={({match}) => (
                createElement(SyncComponent(require('./components/index'), match))
            )}/>
            <Route exact path="/changelog" component={({match}) => (
                createElement(SyncComponent(require('./components/changelog'), match))
            )}/>
            <Route exact path="/examples/:instance" component={({match}) => (
                createElement(SyncComponent(require('./components/examples'), match))
            )}/>
            <Redirect from="/examples" to="/examples/intro"/>
            <Redirect from="/download" to="/examples/quick_start"/>

            {/* language */}
            <Route exact path="/:lang/" component={({match}) => (
                createElement(SyncComponent(require('./components/index'), match))
            )}/>
            <Route exact path="/:lang/changelog" component={({match}) => (
                createElement(SyncComponent(require('./components/changelog'), match))
            )}/>
            <Route exact path="/:lang/examples/:instance" component={({match}) => (
                createElement(SyncComponent(require('./components/examples'), match))
            )}/>
            <Redirect from="/:lang/examples" to="/:lang/examples/intro"/>
            <Redirect from="/:lang/download" to="/:lang/examples/quick_start"/>

            {/* 404 */}
            <Redirect to="/404"/>
        </Switch>
    </HashRouter>,
    document.getElementById('app')
);
