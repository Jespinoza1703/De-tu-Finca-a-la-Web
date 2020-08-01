import React from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, withLeaflet } from "react-leaflet";

// My Components
import ReactLeafletSearchWithoutLeaflet from "react-leaflet-search/lib/Search-v1";
import "../index.css";

const ReactLeafletSearch = withLeaflet(ReactLeafletSearchWithoutLeaflet);

const MapContainer = props => (
    <Map
        className="map"
        scrollWheelZoom={true}
        bounds={props.options.bounds}
        maxZoom={props.options.maxZoom}
        maxBounds={props.options.maxBounds}
    >
        {props.children}
    </Map>
);


export class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            maxZoom: 16,
            maxBounds: [
                [-90, -180],
                [90, 180]
            ],
            bounds: [
                {
                    lat: -1.22,
                    lng: -78.62
                }
            ]
        };


    }

    render() {
        return (

            <div className="mapContainer">
                {/**
                 * SEARCH
                 */}

                <h3 align="center">
                   Ingrese su ubicación en la barra de búsqueda
                </h3>
                <MapContainer options={this.state}>
                    <TileLayer
                        noWrap={true}
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <ReactLeafletSearch
                        className="custom-style"
                        position="topleft"
                        mapStateModifier="flyTo"
                        inputPlaceholder="The default text in the search bar"
                        showMarker={true}
                        showPopup={true}
                        openSearchOnLoad={false}
                        closeResultsOnClick={true}
                    />
                </MapContainer>

                <footer></footer>
            </div>
        );
    }
}
