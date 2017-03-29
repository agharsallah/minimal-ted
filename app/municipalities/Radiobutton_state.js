import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Translate from 'react-translate-component';

const Radio_state = (props)=>{
	return(
			<div className={props.style}>
	            <RadioButtonGroup onChange={props.handleMunState}  name="etatmun" defaultSelected="all" style={{height:'55px !important'}} >
					<RadioButton
					labelStyle={{color:'black',marginTop:"10px"}}
					value="all"
					label={<Translate content="radioComp.all"/>}
					 />
					<RadioButton
					labelStyle={{color:'#808080',marginTop:"10px"}}
					value="old"
					label={<Translate content="radioComp.old"/>}				        
					/>
					<RadioButton
					labelStyle={{color:'#21759b',marginTop:"10px"}}
					value="extended"
					label={<Translate content="radioComp.extended"/>}
					/>
					<RadioButton
					labelStyle={{color:'#3aaf85',marginTop:"10px"}}
					value="new"
					label={<Translate content="radioComp.new"/>}
					/>
				</RadioButtonGroup>
	        </div>	
	);
}
export default Radio_state