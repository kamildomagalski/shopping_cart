import React from "react";
import { Link } from "react-router-dom";

function Checkout({ cart }) {
  const totalValue = cart
    .map((item) => item.quantity * item.unitPrice)
    .reduce((total, price) => total + price);
  const shippingValue = () => {
    if (totalValue < 100) {
      return 23.8;
    } else {
      return 0.0;
    }
  };
  const grandTotal = totalValue + shippingValue();
  return (
    <div className="checkout">
      <Link to={"/checkoutSuccess"}>
        <button className="btn-black btn-checkout1">Proceed to checkout</button>
      </Link>
      <div className="checkout__header">
        <h4 className="checkout__text checkout__text-bold"> Shipping</h4>
        <p className="checkout__text checkout__text-bold">
          ${shippingValue().toFixed(2)}
        </p>
      </div>
      <div className="checkout__totals">
        <div className="checkout__header">
          <h3 className="checkout__subtitle">Cart Totals</h3>
        </div>
        <div className="checkout__calc">
          <div className="checkout__subtotal">
            <p className="checkout__text">Subtotal</p>
            <p className="checkout__text checkout__text-bold">
              ${totalValue.toFixed(2)}
            </p>
          </div>
          <div className="checkout__grandtotal">
            <p className="checkout__text">Grand Total</p>
            <p className="checkout__text checkout__text-bold">
              ${grandTotal.toFixed(2)}
            </p>
          </div>
          <Link to={"/checkoutSuccess"}>
            <button className="btn btn-black btn-checkout2">
              Proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
