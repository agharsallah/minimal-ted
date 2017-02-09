import React, { Component } from 'react';
import MunicipalityMap from './MunicipalityMap';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import AllMunicipalities from './AllMunicipalities.js';
	
export default class ChooseMunicipality extends Component{

	constructor(props){
		super(props);
		this.state={munstate:'old'}
		this.handleMunState = this.handleMunState.bind(this);

	}
	
	handleMunState (event){ 
    let value =event.target.value; this.setState({munstate:value})};
	render(){
        switch (this.props.params.municipalitymap){
        	case 'all':
        	return(
				<div style={{position:"relative"}}>  
	                <div style={{position:"absolute",zIndex: "3",marginTop:"100px",width:'100px',marginLeft:'40px',fontSize:'25px',fontFamily:'Georgia'}}>
	                	<RadioButtonGroup onChange={this.handleMunState}  name="etatmun" defaultSelected="all" style={{height:'55px !important'}} >
					    	<RadioButton
					      	labelStyle={{color:'black'}}
					        value="all"
					        label="all"
					      />
					      <RadioButton
					      	labelStyle={{color:'#874E12'}}
					        value="old"
					        label="old"				        
					      />
					      <RadioButton
					      	labelStyle={{color:'#EBD792'}}
					        value="new"
					        label="new"
					      />
					      	<RadioButton
					      	labelStyle={{color:'#E6AA09'}}
					        value="extended"
					        label="extended"
					      />
					    </RadioButtonGroup>
	                </div>	
	                <div style={{position:"absolute",zIndex: "2",marginTop:"50px",float: 'right !important',width:'100%'}}>
	                	<h1 style={{float:'right',width:'40%'}} className="municipalityTitle" >State Representation Of Tunisian Municipalities  </h1>
	                </div>
	                <AllMunicipalities  style={{position:"absolute"}} value={this.state.munstate} />
	            </div> 
			);
			break; 

			default:
        		return(
					<div style={{position:"relative"}}>  
		                <div style={{position:"absolute",zIndex: "3",marginTop:"100px",width:'100px',marginLeft:'40px',fontSize:'25px',fontFamily:'Georgia'}}>
		                	<RadioButtonGroup onChange={this.handleMunState}  name="etatmun" defaultSelected="all" style={{height:'55px !important'}} >
						    	<RadioButton
						      	labelStyle={{color:'black'}}
						        value="all"
						        label="all"
						      />
						      <RadioButton
						      	labelStyle={{color:'#874E12'}}
						        value="old"
						        label="old"				        
						      />
						      <RadioButton
						      	labelStyle={{color:'#F9F181'}}
						        value="new"
						        label="new"
						      />
						      	<RadioButton
						      	labelStyle={{color:'#E6AA09'}}
						        value="extended"
						        label="extended"
						      />
						    </RadioButtonGroup>
		                </div>	
		                <div style={{position:"absolute",zIndex: "2",marginTop:"400px",float: 'right !important',width:'100%'}}>
		                	<img src="../img/kairouan.png" alt="kairouan" style={{float:'right',width:'10%'}} />
		                </div>
		                <MunicipalityMap  style={{position:"absolute"}} value={this.state.munstate} />
		            </div> 
			);
        }/*end switch*/
		
	}//end render
}
	
