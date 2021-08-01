import { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import page from '../page';

const userGoogleAddress = (address) => {
  const [ map, setMap ] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${page.constants?.key_google}`;

  useEffect( async () => {
    await fetch(API)
    .then(response => response.json())
    .then(data => setMap(data.results[0].geometry.location))
  }, [])
  return map;
};

export default userGoogleAddress;


