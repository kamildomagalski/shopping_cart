import React, { useState } from 'react';
function Product() {
 return (
   <div className="product">
     <div className="iconContainer">
       <img src="../images/x-img.png" alt="close button"/>
     </div>
     <div className="imgContainer">
       <img src="" alt="headphones"/>
     </div>
     <p className="product__text">Headphones</p>
     <p className="product__text">$11.90</p>
     <div className="qtyWrapper">
       <button className="btn">-</button>
       <input className="input" type="text" name="price" value="2"/>
         <button className="btn">+</button>
         <div className="iconContainer">
           <img src="../images/edit-img.png" alt="pencil"/>
         </div>
     </div>
   </div>
 );
}
export default Product;