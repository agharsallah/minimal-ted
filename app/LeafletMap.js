import React,{Component} from 'react';

class LeafletMap extends Component{
	//this will define whether the component should render or not 
	//this component should rerender only onetime
	shouldComponentUpdate() {
		return false;
	}
	//this is where we're going to insert the map to the dom
	componentDidMount() {
	var mymap = L.map(this.refs.map).setView([51.505, -0.09], 13);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhwOHJ5MDAzOTJ1cGtrZnRoa2NmdSJ9.o51MXiJLy8-6cE5InXp77A', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);
	}

	render(){
		return(
			<div id="mapid" ref="map" style ={{height:'550px'}} >

			</div>
		);
	}
};

export default LeafletMap
