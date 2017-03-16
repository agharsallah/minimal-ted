import React from 'react'
import { render } from 'react-dom'
import App from './App'
import About from './About'
import Test from './Test'
import TreeContainer from './test_viz/TreeContainer.js'
import Projects from './Projects'
import ElectoralResult from './ElectoralResult'
import ElectoralData from './ElectoralData'
import MapComp from './MapComp'
import Parlamantary from './Parlamantary'
import Nca from './Nca'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory } from 'react-router';

import Municipalities from './Municipalities'
import ChooseMunicipality from './municipalities/ChooseMunicipality';

render((
    <MuiThemeProvider>
    <Router history={ browserHistory }>
        <Route path="/ted/" component={App}/> 
        <Route path="/ted/About/" component={About}/>
        <Route path="/ted/test/" component={Test}/>
       {/* <Route path="/ddj" component={Mother}/>*/}
        <Route path="/ted/test1/" component={TreeContainer}/>
        
        <Route path="/ted/Municipalities/" component={Municipalities}/>
        <Route path="/ted/Municipalities/:municipalitymap/" component={ChooseMunicipality}/>
        
        <Route path="/ted/data/" component={ElectoralData}/>
        <Route path="/ted/data/par14/:mapId/" component={MapComp}/>
       
        <Route path="/ted/result/" component={ElectoralResult}/>
        <Route path="/ted/result/par14/:mapId/" component={MapComp}/>

{/*        <Route path="/Projects" component={Projects}/>
        <Route path="/Projects/pre14/:mapId" component={MapComp}/>

     <Route path="/Parlamantary" component={Parlamantary}/>
     <Route path="/Projects/par14/:mapId" component={MapComp}/>

     <Route path="/Nca" component={Nca}/>
     <Route path="/Projects/nca11/:mapId" component={MapComp}/>
*/}
    </Router>
    </MuiThemeProvider>
    ),document.querySelector('#root'));