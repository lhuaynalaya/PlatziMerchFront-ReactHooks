import { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import initialState from '../initialState';


// const API = 'http://localhost:1337/products';
const API2 = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api';

const useInitialState = () => {
  const [ state, setState ] = useState(initialState);
  const [ products, setProducts ] = useState([]); 

  useEffect( async () => {
    await fetch(API2)
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id)
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      order: [...state.orders, payload]
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    products,
    state
  };

};

export default useInitialState;