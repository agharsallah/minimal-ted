import React, { Component } from 'react';
import Layout from './Layout';
import Translate from 'react-translate-component';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';
import MunicipalityMap from './municipalities/MunicipalityMap';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

const district = ["Ariana","Tunis","Kairouan","Sousse","Monastir"]

class Municipalities extends Component{
	constructor(props) {
		super(props);
		this.changetomap = this.changetomap.bind(this);
	}
	changetomap(chosenRequest){
		var link='/Municipalities/'+chosenRequest;
 		browserHistory.push(link);
		console.log(chosenRequest)
	}
	render(){
		return(
		<div>
			<Layout />
			<div style={{marginTop:"120px"}}>
				<p className="municipalityTitle">Dive into the municipalities info</p>
				<p className="municipalitysubTitle">Choose your city</p>
			</div>
			<div style={{ textAlign: 'center',marginTop:'30px'}}>
				 <AutoComplete
				 	style={{display: "inline-block",width:'250px',color:'red'}}
				      floatingLabelText="Type a city name"
				      filter={AutoComplete.fuzzyFilter}
				      dataSource={district}
				      maxSearchResults={5}
				      onNewRequest	={this.changetomap}
				    />
			</div>
			<MunicipalityMap name=''/>
		</div>
		);
	}
};


export default Municipalities
