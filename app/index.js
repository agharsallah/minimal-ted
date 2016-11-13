import React from 'react'
import { render } from 'react-dom'
import App from './App'
import About from './About'
import Projects from './Projects'
import MapComp from './MapComp'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router, Route, browserHistory } from 'react-router';

render((
    <MuiThemeProvider>
    <Router history={ browserHistory }>
        <Route path="/" component={App}/>
        <Route path="/About" component={About}/>
        
        <Route path="/Projects" component={Projects}/>
	   	    <Route path="/Projects/:mapId" component={MapComp}/>


    </Router>
    </MuiThemeProvider>
    ),document.querySelector('#root'));