import React, { Component } from 'react';
import MunicipalityMap from './MunicipalityMap';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import AllMunicipalities from './AllMunicipalities.js';
import Radio_state from './Radiobutton_state.js';
import Layout from './../Layout';
import namesJson from'./data/mun_names'
export default class ChooseMunicipality extends Component{

	constructor(props){
		super(props);
		this.state={munstate:'all'}
		this.handleMunState = this.handleMunState.bind(this);
	}
	
	handleMunState (event){ 
    let value =event.target.value; this.setState({munstate:value})};
   	
  capitalizeFirstLetter(string) {
    	return string.charAt(0).toUpperCase() + string.slice(1);
	}
	
	render(){
		let munstate = this.state.munstate;
		let city = this.props.params.municipalitymap;
		if (city=="Kébili"||city=="Tataouine")
			{var zoom = 8 }
		else {var zoom = 9 }
      switch (city){
        case 'all':
        	return(
							<div style={{position:"relative"}}>  
	                <Layout/>
									<Radio_state handleMunState={this.handleMunState} style="allmunradio"/>
	                <div style={{position:"absolute",zIndex: "2",marginTop:"50px",width:"40%",right:"2%"}}>
	                	<h1 style={{float:'right'}} className="municipalityTitle" >State Representation Of Tunisian Municipalities  </h1>
	                </div>
	                <AllMunicipalities  style={{position:"absolute"}} value={this.state.munstate} />
	            </div> 
					);
			break; 

			default:
        		return(
					<div style={{position:"relative"}}>  
		               <Layout/>
						<h2 className="hometitle"style={{marginTop:"10px",marginBottom:"10px"}} >Municipalities of {city} gouvernorate</h2>
						<Radio_state handleMunState={this.handleMunState} style="munradio"/>

						<div style={{position:"absolute",zIndex: "3",marginTop:"20px",marginLeft:'40px',fontSize:'25px',fontFamily:'Georgia'}}>
   							<div>
							  	<ul className="list-group" style={{width:'105%'}} >
											{namesJson.map(function(object, i){
							  		        if (munstate == 'all' ) {
							  		   		 	if(object.circ==city){
							  		   		 		let munname = object.name_en
							  		   		 		return <li className="list-group-item"  key={i}>{munname.charAt(0).toUpperCase() + munname.slice(1)}</li>
							  		   		 	}
							  		   		}else if (object.circ==city && object.etat==munstate ) {
							  		   			let munname = object.name_en
							  		   			return <li className="list-group-item"  key={i}>{munname.charAt(0).toUpperCase() + munname.slice(1)}</li>
							  		   		}
							  		   		
							  	})}</ul>
					   		</div>
						</div>
		                <MunicipalityMap  style={{position:"absolute"}} value={this.state.munstate} munname={city} zoom={zoom} />
		            </div> 
			);
        }/*end switch*/
		
	}//end render
}
	
