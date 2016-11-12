import React, { Component } from 'react';
import Layout from './Layout';
import Paper from 'material-ui/Paper';
import Widget from './Widget'
import Translate from 'react-translate-component';

//we get the title nd sub of the widget from the localTranslate file
const Tfull = <Translate type="text" content="pred2014.Tfull"/>
const Sfull = <Translate type="text" content="pred2014.Sfull"/>

const TGender = <Translate type="text" content="pred2014.TGender"/>
const SGender = <Translate type="text" content="pred2014.SGender"/>

const Projects = (props)=>{
	
	return(
		<div>
			<Layout/>
					{/*the widget component accepts the title  sub img link and map link */}
					<div className='col-md-12' >
					<Widget title ={Tfull} subtitle={Sfull} imgsrc="full.png" />					
					<Widget title ={TGender} subtitle={SGender} imgsrc="pre-by-gender.png" />					
					<Widget title ={TGender} subtitle={SGender} imgsrc="turnout-by-age.png" />					
					<Widget title ={TGender} subtitle={SGender} imgsrc="turnout-by-age2.png" />					
					</div>
					<div className='col-md-12' >
					<Widget title ={TGender} subtitle={SGender} imgsrc="Beji-R2.png" />					
					<Widget title ={TGender} subtitle={SGender} imgsrc="marzouki-r2.png" />					
					<Widget title ={TGender} subtitle={SGender} imgsrc="marzouki-r1.png" />					
					<Widget title ={TGender} subtitle={SGender} imgsrc="beji-r1.png" />					
					</div>
		</div>
	);

}

export default Projects