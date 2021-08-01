import { useState, useEffect } from 'react';
import fetch from 'node-fetch';

const userGoogleAddress = (address) => {
  const [ map, setMap ] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBEJ0GNMZeAs_JX2a3S9ROtBFgoMeVmEg4`;

  useEffect( async () => {
    await fetch(API)
    .then(response => response.json())
    .then(data => setMap(data.results[0].geometry.location))
  }, [])
  return map;
};

export default userGoogleAddress;


