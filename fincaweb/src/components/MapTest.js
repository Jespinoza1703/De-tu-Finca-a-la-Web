import React, {useEffect, useState} from 'react';
import { Map, TileLayer, useLeaflet } from 'react-leaflet';
import * as L from 'leaflet';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch'

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
            marker: {
                icon: new L.Icon.Default(),
                draggable: true,
                id: 'marker'
            },
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
                phone: props.registerForm.phone,
                role: props.registerForm.role,
                x: e.location.x, // longitude
                y: e.location.y, // latitude
                region: props.registerForm.region
            });
            console.log(props.registerForm);
        };

        map.on('geosearch/showlocation', onFoundLocation);



        return () => map.removeControl(searchControl)
    }, [props]);

    return null // don't want anything to show up from this component
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


export default MapTest;
