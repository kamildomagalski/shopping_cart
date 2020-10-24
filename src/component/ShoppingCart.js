import React, {useState} from 'react';
import Product from "./Product";
import headphones from '../images/headphones.png'

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
  
const deleteProduct= (id)=> {
    setCart(cart.filter((item) => item.id !== id))
}
  
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
            {cart.map((el, i) => {
              return (
                <Product key={i} item={el} deleteProduct={deleteProduct}/>
              )
            })}
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;