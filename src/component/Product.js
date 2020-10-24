import React, {useState} from 'react';
import x_img from '../images/x-img.png'
import edit_img from '../images/edit-img.png'

function Product({item, deleteProduct}) {
  const [quantity, setQuantity]= useState(item.quantity);
  

  const handleAddQuantity= ()=>{
    setQuantity(prevState => prevState + 1)
  }
  const handleSubtractQuantity= ()=>{
    setQuantity(prevState => prevState - 1)
  }
  const handleDelete= () =>{
    deleteProduct(item.id)
  }
 return (
   <div className="product">
     <div className="iconContainer">
       <img src={x_img} alt="close button" onClick={handleDelete}/>
     </div>
     <div className="imgContainer">
       <img src={`../${item.img}`} alt={`${item.productName}`}/>
     </div>
     <p className="product__text">{item.productName}</p>
     <p className="product__text">${item.unitPrice}</p>
     <div className="qtyWrapper">
       <button className="btn" onClick={handleSubtractQuantity} disabled={quantity === 1}>-</button>
       <input className="input" type="text" name="quantity" value={quantity}/>
         <button className="btn" onClick={handleAddQuantity}>+</button>
         <div className="iconContainer">
           <img src={edit_img} alt="pencil"/>
         </div>
     </div>
   </div>
 );
}
export default Product;