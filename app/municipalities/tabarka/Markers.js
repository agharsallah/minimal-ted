import React, { Component } from 'react';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import Chart from "./Chart";

class Markers extends Component {

    render() {
        const markers = [[36.955360, 8.749795,"municipal"],[36.9551, 8.789795,"party"],[36.94360, 8.749795,"municipal"],[36.955360, 8.89795,"party"]]
        const municipal = L.icon({
            iconUrl: 'http://localhost:8080/img/marker-municipal.png',
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });
        const party = L.icon({
            iconUrl: 'http://localhost:8080/img/marker-party.png',
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });

        var rows = [];
        for (var i = 0; i < markers.length; i++) {
            var lat=markers[i][0];
            var long = markers[i][1];
            var type=markers[i][2];
            var affectedmarker;
            if(type=="municipal") {affectedmarker=municipal}else{affectedmarker=party}
            rows.push(<Marker position={[lat, long]} icon={affectedmarker} key={i}>
                            <Popup >
                            <Chart/>
                            </Popup>
                        </Marker>
                        )
		}
        return (
            <div>
                    {rows}
            </div>
        );
    }
}

export default Markers;