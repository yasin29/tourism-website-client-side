import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
    const containerStyle = {
        width: '80vw',
        height: '50vh',
        margin: 'auto'
    };

    const center = {
        lat: 24.0825538915482,
        lng: 90.27261077220113
    };
    const onLoad = marker => {
        console.log('marker: ', marker)
    }

    const position = {
        lat: 24.0825538915482,
        lng: 90.27261077220113
    }
    return (
        <div className="my-3 bg-light p-3 rounded" >
            <h2> Our Location</h2>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                >
                    <Marker
                        onLoad={onLoad}
                        position={position}
                    />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;