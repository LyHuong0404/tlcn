import React, { useState } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function Test() {
    const [address, setAddress] = useState('');
    const [mapCenter, setMapCenter] = useState({ lat: -34.397, lng: 150.644 });

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

    return (
        <div>
            <input
                type="text"
                value={address}
                placeholder="Nhập địa chỉ"
                onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={handleSearch}>Tìm Kiếm</button>

            <Map google={window.google} zoom={8} initialCenter={mapCenter} center={mapCenter}>
                <Marker position={mapCenter} />
            </Map>
        </div>
    );
}

export default Test;
