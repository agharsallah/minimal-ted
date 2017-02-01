import React, { Component } from 'react';
import MunicipalityMap from './MunicipalityMap';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
	
export default class ChooseMunicipality extends Component{

	constructor(props){
		super(props);
		this.state={munstate:'old'}
		this.handleMunState = this.handleMunState.bind(this);

	}
	
	handleMunState (event){ 
    console.log(event.target.value);let value =event.target.value; this.setState({munstate:value})};
	render(){
		return(
			<div style={{position:"relative"}}>                    
                <div style={{position:"absolute",zIndex: "2",marginTop:"100px",width:'60px'}}>
                	<RadioButtonGroup onChange={this.handleMunState}  name="etatmun" defaultSelected="new">
				      <RadioButton
				      	labelStyle={{color:'blue'}}
				        value="old"
				        label="old"				        
				      />
				      <RadioButton
				      	labelStyle={{color:'green'}}
				        value="new"
				        label="new"
				      />
				    </RadioButtonGroup>
                </div>	
                <div style={{position:"absolute",zIndex: "2",marginTop:"400px",float: 'right !important',width:'100%'}}>
                	<img src="../img/kairouan.png" alt="kairouan" style={{float:'right',width:'10%'}} />
                </div>
                <MunicipalityMap  style={{position:"absolute"}} value={this.state.munstate} />
                </div> 
		);
	}
}
	
