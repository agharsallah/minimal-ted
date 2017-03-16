import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class CommMarker extends Component{
	//this will define whether the component should render or not 
	//this component should rerender only onetime

	shouldComponentUpdate() {
		return false;
	}
	
	//this is where we're going to insert the map to the dom
	componentDidMount() {
	var gender = this.props.genderTurnout;

	var mymap = L.map(this.refs.map).setView([35.00, 9.90], 7);

	L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGd5YzM2bHlydSJ9.jJxP2PKCIUrgdIXjf-RzlA').addTo(mymap);

    var geojson = L.geoJson(marker_comm, {style: style,onEachFeature: onEachFeature}).addTo(mymap);
    
    var info = L.control();

		info.onAdd = function (mymap) {
		    this._div = L.DomUtil.create('div', 'in'); // create a div with a class "info"
		    this.update();
		    return this._div;
		};
		
		// method that we will use to update the control based on feature properties passed
		info.update = function (props) {
		    this._div.innerHTML = '<h4>Female Turnout per destrict</h4>' +  (props ?
		        '<b>' + props.NAME_EN + '</b><br/>' +'<h3>'+ props.NAME_EN+'</h3>'
		        : '<p>'+'Hover over a city'+'<p />');
		};

		//info.addTo(mymap);
		var legend = L.control({position: 'bottomright'});
		legend.onAdd = function (map) {

    	var div = L.DomUtil.create('div', 'in legend'),
        grades = [20,25,30,35,40,45,50,55,60,65,+70],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

		
		function getColor (d)  {
   		 	return d < 20 ? '#f7f4f9' :
	           d < 25  ? '#e7e1ef' :
	           d < 30  ? '#d4b9da' :
	           d < 35  ? '#c994c7' :
	           d < 40   ? '#df65b0' :
	           d < 45  ? '#e7298a' :
	           d < 50   ? '#ce1256' :
	           d < 55   ? '#c7e9c0' :
	           d < 60   ? '#a1d99b' :
	           d < 65   ? '#74c476' :
	                      	'#41ab5d';
		}
	 	
	 	function style(feature) {
		    return {
		        fillColor: getColor(feature.properties.NAME_EN),
		        weight: 2,
		        opacity: 1,
		        color: 'white',
		        dashArray: '3',
		        fillOpacity: 0.7
		    };
		}	
		
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

					        info.update(layer.feature.properties);
		}	

		function resetHighlight(e) {
	    	geojson.resetStyle(e.target);
	    	    info.update();
		}
		
		function zoomToFeature(e) {
	    	map.fitBounds(e.target.getBounds());
		}
		function onEachFeature(feature, layer) {
		    layer.on({
		        mouseover: highlightFeature,
		        mouseout: resetHighlight,
		        click: zoomToFeature,
		        tap:highlightFeature
		    });
		}
	
	}
	render(){
		return(
			<div>
			<div id="mymap" ref="map" style ={{height:'550px'}} />
			</div>
		);
	}
};

export default CommMarker
