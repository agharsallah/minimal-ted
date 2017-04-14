import React, { Component } from 'react';
import { Map, Popup, TileLayer } from 'react-leaflet';
import Markers from './Markers'
class TabarkaMap extends Component {
    constructor(props){
        super(props);
        
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
                   <Markers/> 
                </Map>
            </div>
        );
    }
}

export default TabarkaMap;
