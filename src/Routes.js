 import React, {Component} from 'react';
import {BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './containers/Home';
import User from './components/user/user.component';
import Plant from './containers/Plant';
import Notfound from './containers/Notfound';



    export default () => {
        return (
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/user' component = {User} />
                    <Route exact path='/plant/:data' component = {Plant} />
                    <Route component={Notfound} />
                    <Redirect from='*' to='/' />
                </Switch>
        );
    }

