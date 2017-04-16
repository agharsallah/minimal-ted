import React, { Component } from 'react';
import { Map, Popup, TileLayer, GeoJSON, FeatureGroup, Tooltip,LayersControl } from 'react-leaflet';
import Markers from './Markers'
import shapes from "./../data/mun_shapes.js";
import Control from 'react-leaflet-control';

class TabarkaMap extends Component {
    constructor(props){
        super(props);
        this.state={feature:""}
    }
     getColor(d) {
	    return d > 30 ? '#000000' :
	           d > 20  ? '#2c7fb8' :
	           d > 18  ? '#81D4FA' :
	           d > 12  ? '#B3E5FC' :
	           d == 'inexistant'? '#FFFFFF' :
	                      '#B2DFDB';
	}
    style(feature) {
	    return {
	        fillColor: this.getColor(feature.properties.seats),
	        weight: 2,
	        opacity: 1,
	        color: 'white',
	        fillOpacity: 0.4
	    };
	}
    highlightFeature(e) {
	    var layer = e.target;
     this.setState({feature:layer.feature.properties.seats});
    return layer.setStyle( {
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
	}
    resetFeature(e) {
	    var layer = e.target;
	    layer.setStyle({
	        weight: 5,

	    });
        this.setState({feature:""});
	}
    render() {
	
        const position = [36.955360, 8.749795];
        return (
            <div >
                <Map center={position} zoom={14}  style={{height:"600px"}}>
                    <TileLayer
                    url='https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhqMHJrMDAxcDJ1cGd5YzM2bHlydSJ9.jJxP2PKCIUrgdIXjf-RzlA'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Markers selectedMarkers={this.props.selectedMarker}/>

                    <GeoJSON data= {shapes["Kairouan"]}   
                            style={this.style.bind(this)}    
                            onEachFeature={
                                (feature, layer) => {
                                    layer.bindPopup(feature.properties.name_en);
                                    layer.on({mouseover: this.highlightFeature.bind(this)});
                                    layer.on({mouseout: this.resetFeature.bind(this)});
                                }
                            }
                    >
                        <Tooltip>
                            <span>{this.state.feature}</span>
                        </Tooltip>
                    </GeoJSON>
                    <Control position="topright" >
                        <p>
                        {this.state.feature}
                        </p>
                    </Control>
                </Map>
            </div>
        );
    }
}

export default TabarkaMap;
