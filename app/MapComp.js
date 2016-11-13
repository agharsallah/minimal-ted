import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Layout from './Layout';
import LeafletMap from './LeafletMap';

const MapComp = (props)=>{
  
  return(
   		<div style={{height:'auto'}}>
   			<Layout/>
   			<LeafletMap/>
   		</div>
  );

}

export default MapComp