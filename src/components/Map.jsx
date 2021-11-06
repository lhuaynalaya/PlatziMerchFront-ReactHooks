import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import page from '../page';

const Map = () => {
  const MapStyle = {
    height: '50vh',
    width: '100%'  
  };

  const defaultCenter = {
    // lat: data?.lat, lng: data?.lng
    lat: 19.4267261, lng: -99.1718796
  };

  return (
    <LoadScript googleMapsApiKey={ page.constants?.key_google }>
      <GoogleMap
        // MapStyle={ MapStyle }
        mapContainerStyle={ MapStyle }
        zoom={ 9 }
        center={ defaultCenter }
      >
        <Marker
          position={ defaultCenter }
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map;
