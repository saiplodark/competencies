import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from './components/Main';
import Cars from './components/Cars'
import Login from './components/Login'

export default <Switch>
        <Route exact path = "/" component={Main}/>
        <Route path = "/cars" component={Cars}/>
        <Route path = "/login" component={Login}/>
</Switch>
