import React from 'react'
import { render } from 'react-dom'
import App from './App'
import About from './About'
import Projects from './Projects'

import { Router, Route, browserHistory } from 'react-router';

render((
    <Router history={ browserHistory }>
        <Route path="/" component={App}/>
        <Route path="/About" component={About}/>
        <Route path="/Projects" component={Projects}/>

    </Router>
    ),document.querySelector('#root'));