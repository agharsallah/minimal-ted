import React, { Component } from 'react';
import {render} from 'react-dom';

import Layout from './Layout';
import Counter from './Counter';
import LocalSwitcher  from './LocalSwitcher';
import Greeter  from './Greeter';

//setting language support
import counterpart  from 'counterpart';
import Translate    from 'react-translate-component';
counterpart.registerTranslations('en', {
  example: {
    greeting: 'Hello %(name)s! How are you today?'
  }
});

counterpart.registerTranslations('de', {
  example: {
    greeting: 'Hallo, %(name)s! Wie geht\'s dir heute so?'
  }
});

export default class App extends Component {
  render() {
    return (
      <Layout>
      	 <LocalSwitcher />
      	 <Greeter with={{ name: "Martin" }} component="h1" />
        <Counter />
      </Layout>
    );
  }
}
render(<App />, document.getElementById('root'));
