import React, { Component } from 'react';
import Layout from './Layout';
import Translate from 'react-translate-component';
import Paper from 'material-ui/Paper';

const Municipalities = (props)=>{
	
	return(
		<div>
			<Layout />
			<div className='col-md-1'></div>
			<Paper className='col-md-10' style={{height:'500px',marginTop:'20px'}} zDepth={1} >
				<p>municipalities</p>
			</Paper>
			 <div className='col-md-1'></div>
		</div>
	);

}
export default Municipalities
