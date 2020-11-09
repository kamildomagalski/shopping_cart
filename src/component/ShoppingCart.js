import React, { useState } from "react";
import Product from "./Product";
import headphones from "../images/headphones.png";
import Checkout from "./Checkout";

function ShoppingCart() {
  //in real life situation initial state could by passed from parent as a prop, for this project I set it 'hard-way'
  const [cart, setCart] = useState([
    {
      id: 3467,
      productName: "Headphones",
      unitPrice: 11.9,
      quantity: 2,
      img: headphones,
    },
    {
      id: 3468,
      productName: "Cheap headphones",
      unitPrice: 5.9,
      quantity: 2,
      img: headphones,
    },
    {
      id: 3469,
      productName: " Super headphones",
      unitPrice: 29.9,
      quantity: 2,
      img: headphones,
    },
  ]);
  const [update, setUpdate] = useState(false);

  const deleteProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const updateProduct = (id, qty) => {
    setCart((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: qty,
          };
        }
        return item;
      })
    );
  };
  //toggle state to force child component update
  const updateCart = () => {
    setUpdate((prevState) => !prevState);
  };

  return (
    <section className={"shoppingCart"}>
      <div className={"container"}>
        <div className={"cart"}>
          <h2 className={"cart__title"}>Shopping Cart</h2>
          <div className="cart__product">
            <div className="cart__header">
              <p className="cart__subtitle">Product Name</p>
              <p className="cart__subtitle">Unit Price</p>
              <p className="cart__subtitle">Qty</p>
            </div>
            {cart.map((el) => {
              return (
                <Product
                  key={el.id}
                  item={el}
                  deleteProduct={deleteProduct}
                  updateProduct={updateProduct}
                  update={update}
                />
              );
            })}
            <div className="cart__footer">
              <button className=" btn btn-black" onClick={updateCart}>
                Update Shopping Cart
              </button>
            </div>
          </div>
        </div>
        <Checkout cart={cart} />
      </div>
    </section>
  );
}

export default ShoppingCart;
