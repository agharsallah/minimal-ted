import React, { Component } from 'react';
import Layout from './Layout';
import Paper from 'material-ui/Paper';
import Widget from './Widget'
import Translate from 'react-translate-component';

const title1 = <Translate type="text" content="pred2014.title1"/>
const sub1 = <Translate type="text" content="pred2014.sub1"/>

const Projects = (props)=>{
	
	return(
		<div>
			<Layout/>
					<Widget title ={title1} subtitle={sub1} />					
					<Widget title ='full' subtitle='full' />
					<Widget title ='full' subtitle='full' />
					<Widget title ='full' subtitle='full' />
					<Widget title ='full' subtitle='full' />
					
		</div>
	);

}

export default Projects