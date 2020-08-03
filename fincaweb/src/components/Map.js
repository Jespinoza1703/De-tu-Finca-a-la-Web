import React, {useEffect} from 'react';
import { Map, TileLayer, useLeaflet } from 'react-leaflet';
import * as L from 'leaflet';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch'

let marker;
// make new leaflet element
const Search = (props) => {
    const { map } = useLeaflet(); // access to leaflet map

    useEffect(() => {
        const searchControl = new GeoSearchControl({
            style: 'bar', // optional: bar|button  - default button
            provider: new OpenStreetMapProvider(),
            openSearchOnLoad: true,
            closeResultsOnClick: true,
            showPopup: true,
            showMarker: false,
            keepResult: true,
            autoClose: true
        });

        map.addControl(searchControl); // this is how you add a control in vanilla leaflet

        const onFoundLocation=(e)=>{

            props.setForm({
                name: props.registerForm.name,
                lastName: props.registerForm.lastName,
                email: props.registerForm.email,
                password: props.registerForm.password,
                telephone: props.registerForm.telephone,
                role: props.registerForm.role,
                x: e.location.x, // longitude
                y: e.location.y, // latitude
                region: props.registerForm.region
            });

            if(marker){
                map.removeLayer(marker);
            }
            marker = L.marker([e.location.y, e.location.x], {draggable: true}) // <== Coordinates order in Leaflet is [lat, lng]
                .addTo(map);

            marker.on('dragend', function (e) {
                props.setForm({
                    name: props.registerForm.name,
                    lastName: props.registerForm.lastName,
                    email: props.registerForm.email,
                    password: props.registerForm.password,
                    telephone: props.registerForm.telephone,
                    role: props.registerForm.role,
                    x: marker.getLatLng().lng, // longitude
                    y: marker.getLatLng().lat, // latitude
                    region: props.registerForm.region
                });
            });

        };

        map.on('geosearch/showlocation', onFoundLocation);



        return () => map.removeControl(searchControl)
    }, [props]);

    return null // don't want anything to show up from this component
};

const styles = {
    wrapper: {
        height: '80vw',
        width: '100%',
        margin: '0 auto',
        display: 'flex'
    },
    map: {
        marginTop: 20,
        flex: 1
    }
};

const MapComponent = props => {
    const center = [-1, -78];
    const zoom = 7;
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    return (
        <div style={styles.wrapper}>
            <Map style={styles.map} center={center} zoom={zoom}>
                <TileLayer url={url} />
                <Search registerForm={props.registerForm} setForm={props.setForm} />
            </Map>
        </div>
    );
};


export default MapComponent;
