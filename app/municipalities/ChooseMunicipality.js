import React, { Component } from 'react';
import MunicipalityMap from './MunicipalityMap';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import AllMunicipalities from './AllMunicipalities.js';
import NameList from './NameList.js';
import Layout from './../Layout';
	
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
        switch (city){
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
					      	labelStyle={{color:'#F9F181'}}
					        value="old"
					        label="old"				        
					      />
					      <RadioButton
					      	labelStyle={{color:'#E6AA09'}}
					        value="extended"
					        label="extended"
					      />
					      <RadioButton
					      	labelStyle={{color:'#874E12'}}
					        value="new"
					        label="new"
					      />
					    </RadioButtonGroup>
	                </div>	
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
		                <div style={{position:"absolute",zIndex: "9000",marginTop:"300px",right:'15%',fontSize:'25px',fontFamily:'Georgia'}}>
		                	<RadioButtonGroup onChange={this.handleMunState}  name="etatmun" defaultSelected="all" style={{height:'55px !important'}} >
						    	<RadioButton
						      	labelStyle={{color:'black'}}
						        value="all"
						        label="all"
						      />
						      <RadioButton
						      	labelStyle={{color:'#F9F181'}}
						        value="old"
						        label="old"				        
						      />
						      <RadioButton
						      	labelStyle={{color:'#874E12'}}
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
						<div style={{position:"absolute",zIndex: "3",marginTop:"20px",width:'300px',marginLeft:'40px',fontSize:'25px',fontFamily:'Georgia'}}>
							{/*<NameList Gouvernorate_name = {this.props.params.municipalitymap}/>*/}
   							<div>
							  	<ul className="list-group">{namesJson.map(function(object, i){
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
{/*		                <div style={{position:"absolute",zIndex: "2",marginTop:"400px",float: 'right !important',width:'100%'}}>
		                	<img src="../img/kairouan.png" alt="kairouan" style={{float:'right',width:'10%'}} />
		                </div>*/}
		                <MunicipalityMap  style={{position:"absolute"}} value={this.state.munstate} />
		            </div> 
			);
        }/*end switch*/
		
	}//end render
}
	
