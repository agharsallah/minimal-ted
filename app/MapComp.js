import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Layout from './general_component/Layout';
import ChooseMap from './ChooseMap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const MapComp = (props)=>{
  
  return(

   		<div style={{height:'auto'}}>
   		{console.log(props.params)}
   			<Layout/>
   			<MuiThemeProvider>
   			<ChooseMap param={props.params}/>
   			</MuiThemeProvider>
   		</div>
  );

}

export default MapComp