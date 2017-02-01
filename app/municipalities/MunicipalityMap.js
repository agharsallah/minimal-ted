import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class MunicipalityMap extends Component{
	//this will define whether the component should render or not 
	//this component should rerender only onetime

	shouldComponentUpdate() {
		return false;
	}
	
	//this is where we're going to insert the map to the dom
	componentDidMount() {
	this.mymap = L.map(this.refs.map,{ zoomControl:false }).setView([37.15, 10.15], 10);

	L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGlA',
				{maxZoom:11,minZoom:10,dragging:false}
				).addTo(this.mymap);
	
	//desactivating zoom
	    this.mymap.dragging.disable();
	//delete boxzoom
		this.mymap.boxZoom.disable();

		function getColor(d) {
	    return d > 20 ? '#CDDC39' :
	           d > 15  ? '#4CAF50' :
	           d > 10  ? '#FFFF00' :
	           d > 5  ? '#FF6F00' :
	           d == 'inexistant'? '#FFFFFF' :
	                      '#f60707';
	}	
    //--------style applied when mouse hover
	function highlightFeature(e) {
	    var layer = e.target;
	    layer.setStyle({
	        weight: 5,
	        color: '#666',
	        dashArray: '',
	        fillOpacity: 0.7
	    });

	    info.update(layer.feature.properties);
	    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        layer.bringToFront();
	    }
	}

	//--------style applied when mouseout
	function resetHighlight(e) {
    	featuresLayer.resetStyle(e.target);
    	 info.update();
	}

	//--------Style of the map
	function style(feature) {
	    return {
	        fillColor: getColor(feature.properties._name_en),
	        weight: 2,
	        opacity: 1,
	        color: 'white',
	        dashArray: '3',
	        fillOpacity: 0.5
	    };
	}	
	
	//------------onEachfeature
	function onEachFeature(feature, layer) {
		layer.bindPopup(feature.properties.seats +'</h4></br>'+feature.properties.name_en+' percent');
	    layer.on({
	        mouseover: highlightFeature,
	        mouseout: resetHighlight
	    });
	}
    var featuresLayer = new L.GeoJSON(ariana, {
    		style: style,
			onEachFeature:onEachFeature
		}).addTo(this.mymap);
    var draggable = new L.Draggable(this.mymap);
draggable.disable();
   
    var info = L.control();

		info.onAdd = function (map) {
		    this._div = L.DomUtil.create('div', 'infoLegend'); // create a div with a class "info"
		    this.update();
		    return this._div;
		};

	// -------method that we will use to update the control based on feature properties passed

		info.update = function (props) {
		    this._div.innerHTML = '<h3>municipality information</h3>' +  (props ?
		        '<b>' + props.name_en + '</b><h1>' + props.seats + ' %</h1>'
		        : 'Hover over a state');
		    };

		info.addTo(this.mymap);

	
	}//end component did mount

    
	render(){
		return(
			<div>
			<div id="mymap" ref="map" style ={{height:'700px'}} />
			</div>
		);
	}
};

export default MunicipalityMap
