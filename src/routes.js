import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Projects from './components/projects/index';
import About from './components/about/index';
import Home from './components/home/index';
import Contact from './components/contact/index';

export default (
    <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/projects' component={Projects}/>
        <Route exact path ='/about' component={About}/>
        <Route exact path ='/contact' component={Contact}/>
    </Switch>
);