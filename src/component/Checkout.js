import React from 'react';
function Checkout() {
 return (
   <div className="checkout">
     <button className="btn-black btn-checkout1">Proceed to checkout</button>
     <div className="checkout__header">
       <h4 className="checkout__text checkout__text-bold"> Shipping</h4>
       <p className="checkout__text checkout__text-bold">$0.00</p>
     </div>
     <div className="checkout__totals">
       <div className="checkout__header">
         <h3 className="checkout__subtitle">Cart Totals</h3>
       </div>
       <div className="checkout__calc">
         <div className="checkout__subtotal">
           <p className="checkout__text">Subtotal</p>
           <p className="checkout__text checkout__text-bold">$23.80</p>
         </div>
         <div className="checkout__grandtotal">
           <p className="checkout__text">Grand Total</p>
           <p className="checkout__text checkout__text-bold">$23.80</p>
         </div>
         <button className="btn btn-black btn-checkout2">Proceed to checkout</button>
       </div>
     </div>
   </div>
 );
}
export default Checkout;