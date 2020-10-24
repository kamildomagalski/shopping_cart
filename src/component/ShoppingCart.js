import React, {useState} from 'react';
import Product from "./Product";
import headphones from '../images/headphones.png'
import Checkout from "./Checkout";

function ShoppingCart() {
  //w prawdziwej sytuacji stan początkowy komponentu mógłby być przekazany z rodzica jako props,
  // na potzeby tego zadania, ustawiam stan 'na sztywno'
  const [cart, setCart] = useState([{
    id: 3467,
    productName: 'Headphones',
    unitPrice: 11.90,
    quantity: 2,
    img: headphones
  }])
  
  const deleteProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }
  const updateItem = (id, qty) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: qty
          }
        }
        return item
      })
    )
  }
  
  console.log(cart);
  return (
    <section className={'shoppingCart'}>
      <div className={'container'}>
        <div className={'cart'}>
          <h2 className={'cart__title'}>Shopping Cart</h2>
          <div className="cart__product">
            <div className="cart__header">
              <p className="cart__subtitle">Product Name</p>
              <p className="cart__subtitle">Unit Price</p>
              <p className="cart__subtitle">Qty</p>
            </div>
            {cart.map((el) => {
              return (
                <Product key={el.id} item={el} deleteProduct={deleteProduct} updateItem={updateItem}/>
              )
            })}
          </div>
        </div>
        <Checkout cart={cart}/>
      </div>
    </section>
  );
}

export default ShoppingCart;