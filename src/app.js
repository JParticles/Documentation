import React, {Component, createElement} from 'react';
import {render} from 'react-dom';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import AsyncComponent from './components/common/async_component';

import 'sass/build.scss';

render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={AsyncComponent(()=>import('./components/index'))}/>
            <Route path="/changelog" component={AsyncComponent(()=>import('./components/changelog'))}/>
            <Route path="/examples/:instance" component={({match}) => (
                createElement(AsyncComponent(()=>import('./components/examples'), match))
            )}/>
            <Redirect from="/examples" to="/examples/intro"/>

            <Route exact path="/en/" component={AsyncComponent(()=>import('./components/index'))}/>
            <Route path="/en/changelog" component={AsyncComponent(()=>import('./components/changelog'))}/>
            <Route path="/en/examples/:instance" component={({match}) => (
                createElement(AsyncComponent(()=>import('./components/examples'), match))
            )}/>
            <Redirect from="/en/examples" to="/en/examples/intro"/>

            <Route exact path="/cn/" component={AsyncComponent(()=>import('./components/index'))}/>
            <Route path="/cn/changelog" component={AsyncComponent(()=>import('./components/changelog'))}/>
            <Route path="/cn/examples/:instance" component={({match}) => (
                createElement(AsyncComponent(()=>import('./components/examples'), match))
            )}/>
            <Redirect from="/cn/examples" to="/cn/examples/intro"/>

            <Route path="/404" component={AsyncComponent(()=>import('./components/not_found'))}/>
            <Redirect to="/404"/>
        </Switch>
    </HashRouter>,
    document.getElementById('app')
);
