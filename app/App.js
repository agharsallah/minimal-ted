import React, { Component } from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Layout from './Layout';
import ParallaxPic from './ParallaxPic'

/*import Counter from './Counter';
import Greeter  from './Greeter';*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//setting language support
import counterpart  from 'counterpart';
import Translate    from 'react-translate-component';
counterpart.registerTranslations('en',require('./../locales/en'));
counterpart.registerTranslations('fr',require('./../locales/fr'));
counterpart.registerTranslations('ar',require('./../locales/ar'));

export default class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      direction : 'left-to-right'
    };
    this.handleSend= this.handleSend.bind(this);
  }
    /*need to know which language is chosen to send to son widget 'rtl' or 'ltr' */
    handleSend(value){
      if (value == 'ar') {
         this.setState({direction : 'right-to-left'});
      }else{
         this.setState({direction : 'left-to-right'});
      }
    }
 render() {
    return (
      <div>
      <MuiThemeProvider>
      <Layout SendToFather={this.handleSend} type='electoral_data'/>
      </MuiThemeProvider>
      <ParallaxPic header="home.first" subheader="home.firstSub" classname="backgrAirbaloon" url = "url(img/MohamedMessaraEPA.jpg)"/>      
      <ParallaxPic header="home.second" subheader="home.secondSub" classname="backgrGirl" url = "url(img/tunisias-first-presidentialPhotobyAPHasseneDridi.jpg)" />      

     </div>
    );
  }
}