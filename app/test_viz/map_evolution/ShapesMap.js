import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';

class ShapesMap extends Component{
	
    shouldComponentUpdate() {
		return false;
	}
	componentWillReceiveProps(nextProps) {
				this.mymap.remove()
				this.mymap = L.map(this.refs.map,{ zoomControl:false }).setView([34.32, 9.90], 7);
        L.tileLayer('https://api.mapbox.com/styles/v1/hunter-x/cixhpey8700q12pnwg584g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGd5YzM2bHlydSJ9.jJxP2PKCIUrgdIXjf-RzlA', {
   				    maxZoom: 9
	    }).addTo(this.mymap);
	
		this.mymap.dragging.disable();
	    this.mymap.scrollWheelZoom.disable();
	    this.mymap.keyboard.disable();
	    this.mymap.doubleClickZoom.disable();
		this.mymap.boxZoom.disable();

        var featuresLayer = new L.GeoJSON(nextProps.shape, {
                    style: style,
                    onEachFeature:onEachFeature
        }).addTo(this.mymap);
	
        function style(feature) {
                return {
                    fillColor:"grey",
                    weight: 2,
                    color: 'black',
                    dashArray: '1',
                    fillOpacity: 0.3
                };
        }
	
		function onEachFeature(feature, layer) {
			//control what happens on click
			layer.bindPopup('</h4></br>'+feature.properties.NAME_1);
			layer.on('click', function(e) {
				var map = e.target._map
				map.fitBounds(layer.getBounds(),{animate:true});
				var link='/Municipalities/'+feature.properties.NAME_1;
 				browserHistory.push(link);
        	});
		}
	}
	componentDidMount() {
	    this.mymap = L.map(this.refs.map,{ zoomControl:false }).setView([34.32, 9.90], 7);
        L.tileLayer('https://api.mapbox.com/styles/v1/hunter-x/cixhpey8700q12pnwg584g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGd5YzM2bHlydSJ9.jJxP2PKCIUrgdIXjf-RzlA', {
   				    maxZoom: 9
	    }).addTo(this.mymap);
	
		this.mymap.dragging.disable();
	    this.mymap.scrollWheelZoom.disable();
	    this.mymap.keyboard.disable();
	    this.mymap.doubleClickZoom.disable();
		this.mymap.boxZoom.disable();

        var featuresLayer = new L.GeoJSON(this.props.shape, {
                    style: style,
                    onEachFeature:onEachFeature
        }).addTo(this.mymap);
		
	
        function style(feature) {
			var color="green"
                return {
                    fillColor:color,
                    weight: 2,
                    color: 'black',
                    dashArray: '1',
                    fillOpacity: 0.3
                };
        }
	
		function onEachFeature(feature, layer) {
			//control what happens on click
			layer.bindPopup('</h4></br>'+feature.properties.NAME_1);
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
export default ShapesMap
