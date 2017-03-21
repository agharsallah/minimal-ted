import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
/*The name of municipality shapefiles is defined in the index file*/
import shapes from "./data/mun_shapes.js";
class MunicipalityMap extends Component{
	//this will define whether the component should render or not 
	//this component should rerender only onetime

	shouldComponentUpdate() {
		return false;
	}
/*--------------------------------------------------WHEN WE RECEIVE PROPS-------------------------------*/
	componentWillReceiveProps(nextProps) {
		var selectedetat=nextProps.value;
		this.mymap.remove()
		this.mymap = L.map(this.refs.map,{ zoomControl:false }).setView([35.50, 10.00], 9);

		L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGlA',
					{maxZoom:11,minZoom:10,dragging:false}
					).addTo(this.mymap);
		
		this.mymap.dragging.disable();
	    this.mymap.scrollWheelZoom.disable();
	    this.mymap.keyboard.disable();
	    this.mymap.doubleClickZoom.disable();
		this.mymap.boxZoom.disable();

			function getColor(d) {
				switch(selectedetat){
					case 'old':
			        return d == "old"  ? '#F9F181' :
		                    '#555';	 
			        break;
			        case 'new':
				        return d == "new"  ? '#874E12' :
			                   '#555';	
				        break;
			        case 'extended':
				        return d == "extended"  ? '#ffa500' :
			                   '#555';	
				        break;
			        default :
			        	return d == "old"  ? '#F9F181' :
					           d == "new" ? '#874E12' :
					           d == "extended" ? '#ffa500' :
					           '#555';
				}

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
		        fillColor: getColor(feature.properties.etat),
		        weight: 2,
		        opacity: 1,
		        color: 'white',
		        dashArray: '5',
		        fillOpacity: 0.5
		    };
		}	
		
		//------------onEachfeature
		function onEachFeature(feature, layer) {
			//control what happens on click
			layer.bindPopup('</h4></br>'+feature.properties.name_en);
		    layer.on({
		        mouseover: highlightFeature,
		        mouseout: resetHighlight
		    });
		}
	    var featuresLayer = new L.GeoJSON(shapes[this.props.munname], {
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
		    this._div.innerHTML = '<h2>Kairouan municipalities information</h2>' +  (props ?
		        '<h4 class="mapInfoText"><b>' + props.name_en + '</b> have : </h4></br><h4 class="mapInfoText">' + props.seats + ' seats</h4>'+ '</br><h4 class="mapInfoText">' + props.citizens + ' citizen</h4>'+ '</br><h4 class="mapInfoText">' + props.area + ' km² of area</h4>'
		        : 'Hover over a state');
		    };

			info.addTo(this.mymap);


	}
	
	/*------------------------------------------WHAT FIRST LOADS IN THE MAP ---------------------------------------*/
	//-------this is where we're going to insert the map to the dom
	componentDidMount() {
	console.log(this.props.munname)
	console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
	this.mymap = L.map(this.refs.map,{ zoomControl:false }).setView([35.50, 10.00], 9);
	
	var map = this.mymap ;
	map.createPane('labels');
	map.getPane('labels').style.zIndex = 650;

	L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGlA',
				{maxZoom:10,minZoom:10,dragging:false,pane: 'labels'}
				).addTo(this.mymap);
	
	//desactivating dragging
	    this.mymap.dragging.disable();
	//desactivating scrolzoom
	    this.mymap.scrollWheelZoom.disable();
	    this.mymap.keyboard.disable();
	    this.mymap.doubleClickZoom.disable();
	//delete boxzoom
		this.mymap.boxZoom.disable();

		function getColor(d) {
	    return d == "old"  ? '#F9F181' :
	           d == "new" ? '#874E12' :
	           d == "extended" ? '#ffa500' :
	                      'red';
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
	function clickfeature(e) {
		var layer = e.target;
		var map = layer._map
		console.log(layer)
		var point = new L.Tooltip();
        point.setLatLng(layer.getBounds().getCenter());
        console.log(point)
		map.fitBounds(point._latlng);
	}
	//--------Style of the map
	function style(feature) {
	    return {
	        fillColor: getColor(feature.properties.etat),
	        weight: 2,
	        opacity: 1,
	        color: 'white',
	        dashArray: '5',
	        fillOpacity: 0.5
	    };
	}	
	
	//------------onEachfeature


	function onEachFeature(feature, layer) {
		//control what happens on click
		//layer.bindPopup('</h4></br>'+feature.properties.name_en);
		layer.on('click', function(e) {
				var map = e.target._map
				map.fitBounds(layer.getBounds(),{animate:true});
					var link='/Municipalities/'+feature.properties.name_en;
 					//browserHistory.push('/Municipalities/all');
        });
		
		var label = new L.Tooltip();
        label.setLatLng(layer.getBounds().getCenter());
        /*adding permanent label { permanent: true }*/
        layer.bindTooltip(feature.properties.name_en,{ permanent: false }).openTooltip(label);
	    
	    layer.on({
	        mouseover: highlightFeature,
	        mouseout: resetHighlight,
	    });
	}

    var featuresLayer = new L.GeoJSON(shapes[this.props.munname], {
    		style: style,
			onEachFeature:onEachFeature
		}).addTo(this.mymap);

    	var info = L.control();
		info.onAdd = function (map) {
		    this._div = L.DomUtil.create('div', 'infoLegend'); // create a div with a class "info"
		    this.update();
		    return this._div;
		};

	// -------method that we will use to update the control based on feature properties passed

		info.update = function (props) {
		    this._div.innerHTML = '<h2>Kairouan municipality information</h2>' +  (props ?
		        '<h4 class="mapInfoText"><b>' + props.name_en + '</b> have : </h4></br><h4 class="mapInfoText">' + props.seats + ' seats</h4>'+ '</br><h4 class="mapInfoText">' + props.citizens + ' citizen</h4>'+ '</br><h4 class="mapInfoText">' + props.area + ' km² of area</h4>'
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
