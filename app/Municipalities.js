import React, { Component } from 'react';
import Layout from './general_component/Layout';
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

			<div  className='col-md-1'></div>
			<div className='col-md-6' style={{top:"50px"}} >
				<AllMunicipalitiesCopy zoom={7}/>
			</div>
			<div className='col-md-5'  >
				<div style={{marginTop:"70px"}}>
					<p className="municipalityTitle">The 350 municipalities of Tunisia</p>
				</div>
				<div style={{top:"70px",marginLeft:"100px"}}>
					<AutoComplete
					animated={true}
						textFieldStyle={{display: "inline-block",width:'350px',fontSize:'20px'}}
						floatingLabelText="Type a city name Or click on the map"
						filter={AutoComplete.fuzzyFilter}
						dataSource={city}
						maxSearchResults={5}
						onNewRequest	={this.changetomap}
						/>
				</div>
			</div>

{/*				<div  className='col-md-6'  >
					<ul className="list-group">{city.map(function(object, i){
						return <li className="list-group-item"  key={i}>{object}</li>
								  		   										  		   		
					})}</ul>
				</div>*/}

		</div>
		);
	}
};


export default Municipalities
