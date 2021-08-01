import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const MapStyle = {
    height: '50vh',
    width: '100%'  
  };

  const defaultCenter = {
    // lat: data?.lat, lng: data?.lng
    lat: 19.4267261, lng: -99.1718796
  };

  return (
    <LoadScript googleMapsApiKey='AIzaSyBEJ0GNMZeAs_JX2a3S9ROtBFgoMeVmEg4'>
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
