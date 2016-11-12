import React, { Component } from 'react';
import Layout from './Layout';
import Paper from 'material-ui/Paper';
import Widget from './Widget'


const Projects = (props)=>{
	
	return(
		<div>
			<Layout/>
					<Widget title ='full' subtitle='full' />					
					<Widget title ='full' subtitle='full' />
					<Widget title ='full' subtitle='full' />
					<Widget title ='full' subtitle='full' />
					
		</div>
	);

}

export default Projects