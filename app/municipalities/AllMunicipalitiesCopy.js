/*map of governorate municipality appears in http://localhost:8080/Municipalities*/
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import gouvernorate_shape from "./data/gouvernorates_shape";
import municipalities_shape from "./data/municipalities_shape";

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
	this.mymap = L.map(this.refs.map,{ zoomControl:false }).setView([34.32, 9.90], zoom);
L.tileLayer('https://api.mapbox.com/styles/v1/hunter-x/cixhpey8700q12pnwg584g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGd5YzM2bHlydSJ9.jJxP2PKCIUrgdIXjf-RzlA', {
   				maxZoom: 9,
				id: 'mapbox.streets'
	}).addTo(this.mymap);
	
		this.mymap.dragging.disable();
	    this.mymap.scrollWheelZoom.disable();
	    this.mymap.keyboard.disable();
	    this.mymap.doubleClickZoom.disable();
		this.mymap.boxZoom.disable();
	var featuresLayer = new L.GeoJSON(municipalities_shape, {
				style: stylemunicipality,
				onEachFeature:onEachFeature

	}).addTo(this.mymap);
	var featuresLayer = new L.GeoJSON(gouvernorate_shape, {
				style: style,
				onEachFeature:onEachFeature

	}).addTo(this.mymap);
	function style(feature) {
		    return {
		        weight: 2.5,
		        color: 'black',
		        fillOpacity: 0
		    };
	}	
	
	function stylemunicipality(feature) {
		    return {
		        weight: 1,
		        color: '#337ab7',
		        fillOpacity: 0
		    };
	}	
	
		function onEachFeature(feature, layer) {
			//control what happens on click
			layer.bindPopup('</h4></br>'+feature.properties.NAME_1);
			console.log(feature.properties)
			layer.on('click', function(e) {
				var map = e.target._map
				map.fitBounds(layer.getBounds(),{animate:true});
				var link='/Municipalities/'+feature.properties.NAME_1;
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
