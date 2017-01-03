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
	
	L.tileLayer('https://api.mapbox.com/styles/v1/hunter-x/cixhpey8700q12pnwg584603g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGd5YzM2bHlydSJ9.jJxP2PKCIUrgdIXjf-RzlA', {
   				maxZoom: 9,
				id: 'mapbox.streets'
	}).addTo(this.mymap);

	function getColor(d) {
	    return d > 1000 ? '#462066' :
	           d > 500  ? '#FFB85F' :
	           d > 200  ? '#FF7A5A' :
	           d > 100  ? '#00AAA0' :
	           d == 'inexistant'? '#FFFFFF' :
	                      '#CC99CC';
	}

	//style applied when mouse hover
	function highlightFeature(e) {
	    var layer = e.target;
	    layer.setStyle({
	        weight: 5,
	        color: '#666',
	        dashArray: '',
	        fillOpacity: 0.7
	    });

	    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        layer.bringToFront();
	    }
	}

	//style applied when mouseout
	function resetHighlight(e) {
    	featuresLayer.resetStyle(e.target);
	}

	//Style of the map
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
	
	//onEachfeature
	function onEachFeature(feature, layer) {
		layer.bindPopup(feature.properties.NAME_EN +'</h4></br>'+feature.properties.canceled+' canceled ballot'+'</br>'+feature.properties.canceledPercentage+'% canceled of total voters' );
	    layer.on({
	        mouseover: highlightFeature,
	        mouseout: resetHighlight
	    });
	}
    var featuresLayer = new L.GeoJSON(OldDelegationData, {
    		style: style,
			onEachFeature:onEachFeature
		}).addTo(this.mymap);
    
    //search feature
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
		if(e.layer._popup)
			e.layer.openPopup();
	})
	this.mymap.addControl( searchControl );  //inizialize search control
    
    //Legend control feature;
    var legend = L.control({position: 'bottomright'});
		legend.onAdd = function (map) {

	    var div = L.DomUtil.create('div', 'infoLeg legend'),
	        grades = [0, 100, 200, 500, 1000],
	        labels = [];

	    div.innerHTML +='<p>Caneled ballots</p>'
	    // loop through our canceled intervals and generate a label with a colored square for each interval
	    for (var i = 0; i < grades.length; i++) {
	        div.innerHTML +=
	            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
	            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
	    }

	    return div;
	};

	legend.addTo(this.mymap);
	
	}//end component did mount
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