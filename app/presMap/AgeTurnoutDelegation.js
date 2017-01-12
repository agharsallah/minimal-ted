/*Turnout percentage-organized by age(dropdown meny) per delagation */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Highchart from '../Highchart';

class AgeTurnoutDelegation extends Component{
	//this will define whether the component should render or not 
	//this component should rerender only onetime

	shouldComponentUpdate() {
		return false;
	}
/*--------------------------------------------------WHEN WE RECEIVE PROPS-------------------------------*/
	componentWillReceiveProps(nextProps) {
		var parameter = nextProps.value;
		var stringGeojson = 'feature.properties.'+parameter ;
		this.mymap.remove()
		console.log(parameter);
	
	this.mymap = L.map(this.refs.map).setView([35.00, 11.90], 7);
	L.tileLayer('https://api.mapbox.com/styles/v1/hunter-x/cixhpey8700q12pnwg584603g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGd5YzM2bHlydSJ9.jJxP2PKCIUrgdIXjf-RzlA', {
   				maxZoom: 9,
				id: 'mapbox.streets'
	}).addTo(this.mymap);
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
	function resetHighlight(e) {
    	featuresLayer.resetStyle(e.target);
    	info.update();
	}
	function style(feature) {
	    return {
	        fillColor: getColor(feature.properties[parameter]),
	        weight: 2,
	        opacity: 1,
	        color: 'white',
	        dashArray: '3',
	        fillOpacity: 0.5
	    };
	}	
	function getColor(d) {
	    return d > 20 ? '#CDDC39' :
	           d > 15  ? '#4CAF50' :
	           d > 10  ? '#FFFF00' :
	           d > 5  ? '#FF6F00' :
	           d == 'inexistant'? '#FFFFFF' :
	                      '#f60707';
	}
	function onEachFeature(feature, layer) {
		layer.bindPopup(feature.properties.NAME_EN +'</h4></br>'+feature.properties[parameter]+' %' );
	    layer.on({
	        mouseover: highlightFeature,
	        mouseout: resetHighlight
	    });
	}
	 //-----------Dynamic hover info
		var info = L.control();

		info.onAdd = function (map) {
		    this._div = L.DomUtil.create('div', 'infoLegend'); // create a div with a class "info"
		    this.update();
		    return this._div;
		};
    /*--custom legend on hover*/

    		info.update = function (props) {
		    this._div.innerHTML = '<h2>Turnout Level</h2>' +  (props ?
		        '<b>' + props.NAME_EN + '</b><h1>' + props[parameter] + ' % </h1>'
		        : 'Hover over a state');
		 //    if (props) {
			// 		    var cnt = 2; // Count of the array should be here
			// 			var pntr = 0;
			// 		   	return(Highcharts.chart(this._div, {
			//         chart: {
			//             type: 'bar'
			//         },
			//         title: {
			//             text: ' Turnout percentage in '+ props.NAME_EN+' for people between '+parameter
			//         },
			//         labels: {
			//              overflow: 'justify'
			//         },
			//         plotOptions: {
			//             bar: {
			//                 dataLabels: {
			//                     enabled: true,
			//                     formatter:function() 
			// 					{
	
			//                             return  props[parameter] +' %';

			// 					}
			//                 }
			//             }
			//         },
			//         legend: {
			//             layout: 'vertical',
			//             align: 'right',
			//             verticalAlign: 'top',
			//             x: -40,
			//             y: 80,
			//             floating: true,
			//             borderWidth: 1,
			//             backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
			//             shadow: true
			//         },
			//         xAxis: {
			//             categories: ['Votes']
			//         },
			//         yAxis: {
			//             title: {
			//                 text: 'Percentage'
			//             }
			//         },
			//         series: [{
			//             name: parameter,
			//             data: [props[parameter]]
			//         }],
			//         credits: false
			//     })
			// )
			// }

		};
		info.addTo(this.mymap);

    var featuresLayer = new L.GeoJSON(OldDelegationTurnout, {
    		style: style,
			onEachFeature:onEachFeature
		}).addTo(this.mymap);

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
	        grades = [0, 5, 10, 15,20],
	        labels = [];

	    div.innerHTML +='<p>Canceled ballots Percentage </p>'
	    // loop through our canceled intervals and generate a label with a colored square for each interval
	    for (var i = 0; i < grades.length; i++) {
	        div.innerHTML +=
	            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
	            grades[i]+" %" + (grades[i + 1] ? ' &ndash; ' + grades[i + 1]+ ' % <br>' : '+');
	    }

	    return div;
	};

	legend.addTo(this.mymap);
	}
	
	/*------------------------------------------WHAT FIRST LOADS IN THE MAP ---------------------------------------*/
	//-------this is where we're going to insert the map to the dom
	componentDidMount() {
	this.mymap = L.map(this.refs.map).setView([35.00, 11.70], 7);
	
	L.tileLayer('https://api.mapbox.com/styles/v1/hunter-x/cixhpey8700q12pnwg584603g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGd5YzM2bHlydSJ9.jJxP2PKCIUrgdIXjf-RzlA', {
   				maxZoom: 9,
				id: 'mapbox.streets'
	}).addTo(this.mymap);

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
	        fillColor: getColor(feature.properties._18_21),
	        weight: 2,
	        opacity: 1,
	        color: 'white',
	        dashArray: '3',
	        fillOpacity: 0.5
	    };
	}	
	
	//------------onEachfeature
	function onEachFeature(feature, layer) {
		layer.bindPopup(feature.properties.NAME_EN +'</h4></br>'+feature.properties._18_21+' percent');
	    layer.on({
	        mouseover: highlightFeature,
	        mouseout: resetHighlight
	    });
	}
    var featuresLayer = new L.GeoJSON(OldDelegationTurnout, {
    		style: style,
			onEachFeature:onEachFeature
		}).addTo(this.mymap);
    
    //-------------search feature
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
    
    //-----------Dynamic hover info
		var info = L.control();

		info.onAdd = function (map) {
		    this._div = L.DomUtil.create('div', 'infoLegend'); // create a div with a class "info"
		    this.update();
		    return this._div;
		};

	// -------method that we will use to update the control based on feature properties passed

		info.update = function (props) {
		    this._div.innerHTML = '<h3>18-21 Turnout Level</h3>' +  (props ?
		        '<b>' + props.NAME_EN + '</b><h1>' + props._18_21 + ' %</h1>'
		        : 'Hover over a state');
// 		    if (props) {
// 		    var cnt = 1; // Count of the array should be here
// 			var pntr = 0;
// 		   	return(Highcharts.chart(this._div, {
//         chart: {
//             type: 'bar'
//         },
//         title: {
//             text: 'Turnout Percentage in '+ props.NAME_EN + "for people between 18-21"
//         },
//         labels: {
//              overflow: 'justify'
//         },
//         plotOptions: {
//             bar: {
//                 dataLabels: {
//                     enabled: true,
//                     formatter:function() 
// 					{
//                               return  props._18_21 +' % '
                        
// 					}
//                 }
//             }
//         },
//         legend: {
//             layout: 'vertical',
//             align: 'right',
//             verticalAlign: 'top',
//             x: -40,
//             y: 80,
//             floating: true,
//             borderWidth: 1,
//             backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
//             shadow: true
//         },
//         xAxis: {
//             categories: ['Votes']
//         },
//         yAxis: {
//             title: {
//                 text: 'Percentage'
//             }
//         },
//         series: [{
//             name: 'canceled',
//             data: [props._18_21]
//         }],
//         credits: false
//     })
// )
// }

		};

		info.addTo(this.mymap);

    //----------Legend control feature;
    var legend = L.control({position: 'bottomright'});
		legend.onAdd = function (map) {

	    var div = L.DomUtil.create('div', 'infoLeg legend'),
	        grades = [0, 5, 10, 15,20],
	        labels = [];

	    div.innerHTML +='<p>Canceled ballots Percentage </p>'
	    // loop through our canceled intervals and generate a label with a colored square for each interval
	    for (var i = 0; i < grades.length; i++) {
	        div.innerHTML +=
	            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
	            grades[i]+" %" + (grades[i + 1] ? ' &ndash; ' + grades[i + 1]+ ' % <br>' : '+');
	    }

	    return div;
	};

	legend.addTo(this.mymap);
	
	}//end component did mount
	render(){
		return(
			<div>
			<div id="mymap" ref="map" style ={{height:'550px',zIndex: "1"}} />
			</div> 
		);
	}
};

export default AgeTurnoutDelegation
