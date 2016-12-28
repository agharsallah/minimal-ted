import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class TestBallot extends Component{
	//this will define whether the component should render or not 
	//this component should rerender only onetime

	shouldComponentUpdate() {
		return false;
	}
	
	//this is where we're going to insert the map to the dom
	componentDidMount() {
	this.mymap = L.map(this.refs.map).setView([35.00, 9.90], 7);
	
	L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGd5YzM2bHlydSJ9.jJxP2PKCIUrgdIXjf-RzlA', {
   				maxZoom: 9,
				id: 'mapbox.streets'
	}).addTo(this.mymap);

	function getColor(d) {
	    return d > 1000 ? '#800026' :
	           d > 500  ? '#BD0026' :
	           d > 200  ? '#E31A1C' :
	           d > 100  ? '#FC4E2A' :
	                      '#FD8D3C';
	}

	function style(feature) {
	    return {
	        fillColor: getColor(feature.properties.canceled),
	        weight: 2,
	        opacity: 1,
	        color: 'white',
	        dashArray: '3',
	        fillOpacity: 0.5
	    };
	}

    //var geojson = L.geoJson(OldDelegationData,{style: style}).addTo(this.mymap);
    
    var featuresLayer = new L.GeoJSON(OldDelegationData, {
    		style: style,
			onEachFeature: function(feature, marker) {
				marker.bindPopup(feature.properties.NAME_EN +'</h4>');
			}
		}).addTo(this.mymap);

	//this.mymap.addLayer(featuresLayer);
    
    var searchControl = new L.Control.Search({
    	layer:featuresLayer,
		propertyName: 'NAME_EN',
		circleLocation: false,
		moveToLocation: function(latlng, title, map) {
			//map.fitBounds( latlng.layer.getBounds() );
			var zoom = map.getBoundsZoom(latlng.layer.getBounds());
  			map.setView(latlng, zoom); // access the zoom
		}
	});

	searchControl.on('search:locationfound', function(e) {
		
		//e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
		if(e.layer._popup)
			e.layer.openPopup();

	})
	
	this.mymap.addControl( searchControl );  //inizialize search control
    
	
	}
	render(){
		return(
			<div>
			<div id="mymap" ref="map" style ={{height:'550px'}} />
			</div>
		);
	}
};

export default TestBallot

/*
add names to each geojson
	function onEachFeature(feature, layer) {
	    var center = layer.getBounds().getCenter();

	    L.marker([center.lat, center.lng], {
	        icon: L.divIcon({
	            className: 'text-labels',
	            html: feature.properties.NAME_EN
	        }),
	        zIndexOffset: 1000
	    }).addTo(mymap);
	}

*/