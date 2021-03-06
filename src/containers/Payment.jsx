import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';

import '../styles/components/Payment.css'

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();

  const paypalOptions = {
    clientId: 'AWFB3zLVyGM5Oa1Tw1aCTJdKSEuBjw1vFuJ3SsX5alA8bgZBayJC8aSNa-A85-TeRSny-NYJ4Yu6WWfB',
    intent: 'capture',
    currency: 'USD'
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  };

  const handlePaymentSuccess = (data) => {
    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del Pedido:</h3>
        {
          cart.map((item) => (
            <div className="Payment-item" key={ item?.title }>
              <div className="Payment-element">
                <h4>{ item?.title}</h4>
                <span>$ { item?.price }</span>
              </div>
            </div>
          ))
        }
        <div className="Payment-button">
          <PayPalButton 
            paypalOptions={ paypalOptions }
            buttonStyles={ buttonStyles }
            amount={ handleSumTotal() }
            onPaymentStart={() => console.log('start Payment')}
            onPaymentSuccess={ data => handlePaymentSuccess(data)}
            onPaymentError={ error => console.log(error)}
            onPaymentCancel={ data => console.log(data)}
          />
        </div>    
      </div>
    </div>
  );
};

export default Payment;