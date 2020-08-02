import React, {useEffect} from 'react';
import { Map, TileLayer, useLeaflet } from 'react-leaflet';
import * as L from 'leaflet';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch'

// make new leaflet element
const Search = (props) => {
    const { map } = useLeaflet(); // access to leaflet map
    const { provider } = props;

    useEffect(() => {
        const searchControl = new GeoSearchControl({
            style: 'bar', // optional: bar|button  - default button
            provider,
            openSearchOnLoad: true,
            closeResultsOnClick: true,
            marker: {
                // optional: L.Marker    - default L.Icon.Default
                icon: new L.Icon.Default(),
                draggable: true,
            },
            keepResult: true,
            autoClose: true
        });

        map.addControl(searchControl); // this is how you add a control in vanilla leaflet
        return () => map.removeControl(searchControl)
    }, [props]);

    return null // don't want anything to show up from this comp
};

const styles = {
    wrapper: {
        height: 400,
        width: '80%',
        margin: '0 auto',
        display: 'flex'
    },
    map: {
        flex: 1
    }
};

const MapTest = props => {
    return (
        <div style={styles.wrapper}>
            <Map style={styles.map} center={props.center} zoom={props.zoom}>
                <TileLayer url={props.url} />
                <Search provider={new OpenStreetMapProvider()} />
            </Map>
        </div>
    );
};

MapTest.defaultProps = {
    center: [-1, -78],
    zoom: 7,
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
};

export default MapTest;
