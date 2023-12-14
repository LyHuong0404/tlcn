import React, { useState, useEffect } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const Address = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [distance, setDistance] = useState(null);

    const handleOriginChange = (address) => {
        setOrigin(address);
    };

    const handleDestinationChange = (address) => {
        setDestination(address);
    };

    const handleSelect = async (address, stateSetter) => {
        try {
            const results = await geocodeByAddress(address);
            const latLng = await getLatLng(results[0]);
            stateSetter(latLng);
        } catch (error) {
            console.error('Error geocoding address:', error);
        }
    };

    const calculateDistance = () => {
        const originLatLng = new window.google.maps.LatLng(origin.lat, origin.lng);
        const destinationLatLng = new window.google.maps.LatLng(destination.lat, destination.lng);

        const distanceMatrixService = new window.google.maps.DistanceMatrixService();
        const request = {
            origins: [originLatLng],
            destinations: [destinationLatLng],
            travelMode: 'DRIVING',
        };
        distanceMatrixService.getDistanceMatrix(request, (response, status) => {
            console.log('Distance Matrix API Response:', response);
            if (status === 'OK') {
                const distanceValue = response.rows[0].elements[0].distance.text;
                setDistance(distanceValue);
            } else {
                console.error('Error calculating distance:', status);
            }
        });
    };

    useEffect(() => {
        if (origin && destination) {
            calculateDistance();
        }
    }, [origin, destination, window.google.maps]);

    return (
        <div>
            <PlacesAutocomplete
                value={origin}
                onChange={(address) => handleOriginChange(address)}
                onSelect={(address) => handleSelect(address, setOrigin)}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input {...getInputProps({ placeholder: 'Origin Address' })} />
                        <div>
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => (
                                <div key={suggestion.id} {...getSuggestionItemProps(suggestion)}>
                                    {suggestion.description}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>

            <PlacesAutocomplete
                value={destination}
                onChange={(address) => handleDestinationChange(address)}
                onSelect={(address) => handleSelect(address, setDestination)}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input {...getInputProps({ placeholder: 'Destination Address' })} />
                        <div>
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => (
                                <div key={suggestion.id} {...getSuggestionItemProps(suggestion)}>
                                    {suggestion.description}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>

            <button onClick={calculateDistance}>Tính Khoảng Cách</button>
            {distance && <p>Khoảng cách: {distance}</p>}
            <Map google={window.google} zoom={8} center={{ lat: 10.7769, lng: 106.7009 }} />
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAMooLF6b7-0vuI_sBt6NWuokJS9ehlKqY',
})(Address);
