import React, { Component } from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Layout from './Layout';
import Counter from './Counter';
import Greeter  from './Greeter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//setting language support
import counterpart  from 'counterpart';
import Translate    from 'react-translate-component';
counterpart.registerTranslations('en',require('./../locales/en'));
counterpart.registerTranslations('fr',require('./../locales/fr'));

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Layout>
        	 <Greeter with={{ name: "Martin" }} component="h1" />
          <Counter />
        </Layout>
      </MuiThemeProvider>
    );
  }
}