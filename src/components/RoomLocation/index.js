import React, { useEffect, useState } from 'react';
import { Map, Marker } from 'google-maps-react';

function RoomLocation({ address }) {
    const [mapCenter, setMapCenter] = useState({ lat: -34.397, lng: 150.644 });

    useEffect(() => {
        const handleSearch = () => {
            const geocoder = new window.google.maps.Geocoder();

            geocoder.geocode({ address: address }, (results, status) => {
                if (status === 'OK' && results.length > 0) {
                    const location = results[0].geometry.location;
                    setMapCenter({ lat: location.lat(), lng: location.lng() });
                } else {
                    console.error('Không thể xác định vị trí.');
                }
            });
        };

        handleSearch();
    }, [address]);

    return (
        <div id="htlfndr-gallery-tab-2">
            <div className="htlfndr-iframe-wrapper">
                <Map google={window.google} zoom={8} initialCenter={mapCenter} center={mapCenter}>
                    <Marker position={mapCenter} />
                </Map>
            </div>
        </div>
    );
}

export default RoomLocation;
