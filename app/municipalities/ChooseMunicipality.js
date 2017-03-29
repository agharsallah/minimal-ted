import React, { Component } from 'react';
import MunicipalityMap from './MunicipalityMap';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import AllMunicipalities from './AllMunicipalities.js';
import Radio_state from './Radiobutton_state.js';
import Layout from './../Layout';
import namesJson from'./data/mun_names';
import Translate from 'react-translate-component';

export default class ChooseMunicipality extends Component{

	constructor(props){
		super(props);
		this.state={munstate:'all',
		     		 direction : 'left-to-right',
     				 arabicstyle:'hometitle',
					  munMapTitle:'city'
					}
		this.handleMunState = this.handleMunState.bind(this);
		this.handleSend = this.handleSend.bind(this);
	}
	handleSend(value){
		if (value == 'ar') {
			this.setState({direction : 'right-to-left',arabicstyle:"arabicstyle",munMapTitle:"nameMunAr"});
	}else{
			this.setState({direction : 'left-to-right',arabicstyle:"hometitle",munMapTitle:"city"});
		}
    }
	handleMunState (event){ 
    let value =event.target.value; this.setState({munstate:value})};
   	
  capitalizeFirstLetter(string) {
    	return string.charAt(0).toUpperCase() + string.slice(1);
	}
	
	render(){
		let munstate = this.state.munstate;
		let city = this.props.params.municipalitymap;
		var nameMunAr="";
		const MunAreaHover = <Translate type="text" content="map.MunAreaHover"/>
		namesJson.map(function(object, i){					  		        
		if(object.circ==city){
			nameMunAr = object.circar
		}
		})
		  		   		
		if (city=="Kébili"||city=="Tataouine")
			{var zoom = 8 }
		else {var zoom = 9 }
      switch (city){
        case 'all':
        	return(
				<div style={{position:"relative"}}>  
	                <Layout SendToFather={this.handleSend}/>
					<Radio_state handleMunState={this.handleMunState} style="allmunradio"/>
	                <div style={{position:"absolute",zIndex: "2",marginTop:"50px",width:"40%",right:"2%"}}>
	                	{
						this.state.munstate=="all"?<h1 style={{float:'right'}} className="hometitle" ><Translate content="map.allcount"/></h1>:
						this.state.munstate=="old"?<h1 style={{float:'right'}} className="hometitle" ><Translate content="map.oldcount"/></h1>:
						(this.state.munstate=="extended")?<h1 style={{float:'right'}} className="hometitle" ><Translate content="map.extendedcount"/></h1>:
						<h1 style={{float:'right'}} className="hometitle" ><Translate content="map.newcount"/> </h1>
						}  
	                </div>
{/*					<div style={{position:"absolute",zIndex: "2",marginTop:"250px",width:"40%",right:"2%"}}>
						 <RaisedButton label="Download Pdf file" primary={true}  />
	                </div>*/}
	                <AllMunicipalities  style={{position:"absolute"}} value={this.state.munstate} />
	            </div> 
					);
			break; 

			default:
        		return(
					<div style={{position:"relative"}}>  
		               <Layout SendToFather={this.handleSend}/>
						<h2 className="hometitle"style={{color:'black',marginTop:"10px",marginBottom:"10px"}} ><Translate content="map.allMunTitle1"/> {nameMunAr}<Translate content="map.allMunTitle2"/> </h2>
					<div >
						<Radio_state handleMunState={this.handleMunState} style="munradio"/>
	                </div>
{/*						<div style={{position:"absolute",zIndex: "3",marginTop:"20px",marginLeft:'40px',fontSize:'25px',fontFamily:'Georgia'}}>
   							<div>
							  	<ul className="list-group" style={{width:'105%'}} >
											{namesJson.map(function(object, i){
							  		        if (munstate == 'all' ) {
							  		   		 	if(object.circ==city){
							  		   		 		let munname = object.name_en
														  console.log(object)
							  		   		 		return <li className="list-group-item"  key={i}>{munname.charAt(0).toUpperCase() + munname.slice(1)}</li>
							  		   		 	}
							  		   		}else if (object.circ==city && object.etat==munstate ) {
							  		   			let munname = object.name_en
							  		   			return <li className="list-group-item"  key={i}>{munname.charAt(0).toUpperCase() + munname.slice(1)}</li>
							  		   		}
							  		   		
							  	})}</ul>
					   		</div>
						</div>*/}
		                <MunicipalityMap  style={{position:"absolute"}} value={this.state.munstate} munname={city} zoom={zoom} MunAreaHover={MunAreaHover} />
		            </div> 
			);
        }/*end switch*/
		
	}//end render
}
	
