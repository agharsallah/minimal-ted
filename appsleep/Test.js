import React, { Component } from 'react';
import {render} from 'react-dom';

import Layout from './Layout';
import ParallaxPic from './ParallaxPic'
import Paper from 'material-ui/Paper';
import HomeWidget from './HomeWidget';

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
      <div >
      <ParallaxPic height='250px' header="home.first" subheader="home.firstSub" classname="backgrAirbaloon" url = "url(img/MohamedMessaraEPA.jpg)"/>      
      </div>

         <div className='col-md-12' style = {{marginBottom:'20px',marginTop:'50px'}}>
              <section className="tiles col-md-12" >
                  <HomeWidget name="Local Elections" description="Giving insight about municipality election" idd='Municipalities' styles='style1' links ='/img/MohamedMessaraEPA.jpg' width='col-md-4'  />
                  <HomeWidget name="Election Data" description="Presenting 2011-2014 election result from delegation overview" idd='data' styles='style2' links ='/img/MohamedMessaraEPA.jpg' width='col-md-4'  />
                  <HomeWidget name="Election Results" description="2011-2014 election results" idd='result' styles='style3' links='/img/MohamedMessaraEPA.jpg' width='col-md-4'/>
              </section>
          </div>
     </div>
    );
  }
}