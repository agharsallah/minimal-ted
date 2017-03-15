import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';

class AllMunicipalitiesCopy extends Component{
	//this will define whether the component should render or not 
	//this component should rerender only onetime

	shouldComponentUpdate() {
		return false;
	}

	
	/*------------------------------------------WHAT FIRST LOADS IN THE MAP ---------------------------------------*/
	//-------this is where we're going to insert the map to the dom
	componentDidMount() {
		var zoom = this.props.zoom
	this.mymap = L.map(this.refs.map,{ zoomControl:false }).setView([31.32, 11.50], zoom);
L.tileLayer('https://api.mapbox.com/styles/v1/hunter-x/cixhpey8700q12pnwg584603g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGd5YzM2bHlydSJ9.jJxP2PKCIUrgdIXjf-RzlA', {
   				maxZoom: 9,
				id: 'mapbox.streets'
	}).addTo(this.mymap);
	
	
	var featuresLayer = new L.GeoJSON(districts, {
				style: style,
				onEachFeature:onEachFeature

	}).addTo(this.mymap);
	
	function style(feature) {
		    return {
		        weight: 2,
		        color: 'black',
		        dashArray: '1',
		        fillOpacity: 0
		    };
	}	
	
		function onEachFeature(feature, layer) {
			//control what happens on click
			layer.bindPopup('</h4></br>'+feature.properties.name_en);
			console.log(feature.properties)
			layer.on('click', function(e) {
				var map = e.target._map
				map.fitBounds(layer.getBounds(),{animate:true	});
				var link='/Municipalities/'+feature.properties.NAME_EN;
 				browserHistory.push(link);
        	});

		}


	}//end component did mount
    
	render(){
		return(
			<div id="mymap" ref="map" style ={{height:'700px',zIndex: "1"}} />
		);
	}
};
export default AllMunicipalitiesCopy
