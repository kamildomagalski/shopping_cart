import React from 'react';
import {Link} from "react-router-dom";
function CheckoutConfirmation() {
 
 return (
  <section className={'checkoutSuccess'}>
    <div className={'container'}>
      <div className={'checkoutSuccess__wrapper'}>
        <h1 className={'checkoutSuccess__text'}>Your order has been submitted successfully</h1>
        <Link to={'/'}><button className={'btn'}>Go back to cart</button></Link>
      </div>
    </div>
  </section>
 );
}
export default CheckoutConfirmation;