import React, {useState} from 'react';

function ShoppingCart() {
  
  const [cart, setCart] = useState([{
    productName: 'Headphones',
    unitPrice: 11.90,
    quantity: 2,
    img: 'images/x-img.png'
  }])
  return (
    <section className={'shoppingCart'}>
      <div className={'container'}>
        <div className={'cart'}>
          <h2 className={'cart__title'}>Shopping Cart</h2>
          <div className="product">
            <div className="product__header">
              <p className="product__subtitle">Product Name</p>
              <p className="product__subtitle">Unit Price</p>
              <p className="product__subtitle">Qty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;