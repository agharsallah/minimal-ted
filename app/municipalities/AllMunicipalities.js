import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class AllMunicipalities extends Component{
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

	L.tileLayer('https://api.mapbox.com/styles/v1/hunter-x/cixhpey8700q12pnwg584603g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGd5YzM2bHlydSJ9.jJxP2PKCIUrgdIXjf-RzlA', {
   				maxZoom: 15,
				id: 'mapbox.streets'
	}).addTo(this.mymap);
		


			function getColor(d) {
				console.log('here')
				switch(selectedetat){
					case 'old':
			        return d == "old"  ? '#deebf7' :
		                    '#555';	 
			        break;
			        case 'new':
				        return d == "new"  ? '#08519c' :
			                   '#555';	
				        break;
			        case 'extended':
				        return d == "extended"  ? '#6baed6' :
			                   '#555';	
				        break;
			        default :
			        	return d == "old"  ? '#deebf7' :
					           d == "new" ? '#08519c' :
					           d == "extended" ? '#6baed6' :
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
	    var featuresLayer = new L.GeoJSON(all, {
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
			    this._div.innerHTML = '<h2>Kairouan municipality information</h2>' +  (props ?
			        '<h4><b>' + props.name_en + '</b> have : </h4></br><h4>' + props.seats + ' seats</h4>'+ '</br><h4>' + props.citizens + ' citizen</h4>'+ '</br><h4>' + props.area + ' km² of area</h4>'
			        : 'Hover over a state');
			    };

			info.addTo(this.mymap);


	}
	
	/*------------------------------------------WHAT FIRST LOADS IN THE MAP ---------------------------------------*/
	//-------this is where we're going to insert the map to the dom
	componentDidMount() {
			this.mymap = L.map(this.refs.map,{ zoomControl:false }).setView([35.50, 10.00], 9);
	L.tileLayer('https://api.mapbox.com/styles/v1/hunter-x/cixhpey8700q12pnwg584603g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGd5YzM2bHlydSJ9.jJxP2PKCIUrgdIXjf-RzlA', {
   				maxZoom: 15,
				id: 'mapbox.streets'
	}).addTo(this.mymap);
	var featuresLayer = new L.GeoJSON(all, {
	style: stylemunicipality

	}).addTo(this.mymap);
	var featuresLayer = new L.GeoJSON(districts, {
				style: style

	}).addTo(this.mymap);
		function style(feature) {
		    return {
		        weight: 2,
		        color: 'black',
		        dashArray: '5',
		        fillOpacity: 0
		        
		    };
		}	
				function stylemunicipality(feature) {
		    return {
		        weight: 1,
		        color: 'blue',
		        fillOpacity: 0
		        
		    };
		}	
	}//end component did mount

    
	render(){
		return(
			<div>
			<div id="mymap" ref="map" style ={{height:'700px',zIndex: "1"}} />
			</div>
		);
	}
};

export default AllMunicipalities
