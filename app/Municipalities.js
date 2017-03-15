import React, { Component } from 'react';
import Layout from './Layout';
import Translate from 'react-translate-component';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import city from'./municipalities/data/city_list'
import AllMunicipalitiesCopy from './municipalities/AllMunicipalitiesCopy'

class Municipalities extends Component{
	constructor(props) {
		super(props);
		this.changetomap = this.changetomap.bind(this);
	}
	changetomap(chosenRequest){
		var link='/Municipalities/'+chosenRequest;
 		browserHistory.push(link);
	}
	render(){
		return(
		<div>
			<Layout />
			<div style={{marginTop:"20px"}}>
				<p className="municipalityTitle">Dive into the municipalities info</p>
				<p className="municipalitysubTitle">Choose your city</p>
			</div>
			<div style={{ marginLeft:"15%",marginTop:'40px'}}>
				 <AutoComplete
				 	style={{display: "inline-block",width:'250px',color:'red'}}
				      floatingLabelText="Type a city name"
				      filter={AutoComplete.fuzzyFilter}
				      dataSource={city}
				      maxSearchResults={5}
				      onNewRequest	={this.changetomap}
				    />
			</div>
{/*				<div  className='col-md-6'  >
					<ul className="list-group">{city.map(function(object, i){
						return <li className="list-group-item"  key={i}>{object}</li>
								  		   										  		   		
					})}</ul>
				</div>*/}
				<div className='col-md-12' >
			<AllMunicipalitiesCopy zoom={6}/>
			</div>
		</div>
		);
	}
};


export default Municipalities
