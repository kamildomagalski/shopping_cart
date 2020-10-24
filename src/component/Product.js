import React, {useState} from 'react';
import x_img from '../images/x-img.png'
import edit_img from '../images/edit-img.png'

function Product({item, deleteProduct, updateItem}) {
  const [quantity, setQuantity]= useState(item.quantity);
  
const handleChange= (e) =>{
  setQuantity(parseFloat(e.target.value))
}
  const handleAddQuantity= ()=>{
    setQuantity(prevState => prevState + 1)
  }
  const handleSubtractQuantity= ()=>{
    setQuantity(prevState => prevState - 1)
  }
  const handleDelete= () =>{
    deleteProduct(item.id)
  }
  const handleCart= () =>{
  
  }
  const handleUpdateItem= () =>{
  updateItem(item.id, quantity)
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
       <input className="input" type="text" name="quantity" value={quantity} onChange={handleChange}/>
         <button className="btn" onClick={handleAddQuantity} disabled={quantity === 9}>+</button>
         <div className="iconContainer" onClick={handleUpdateItem}>
           <img src={edit_img} alt="pencil"/>
         </div>
     </div>
   </div>
 );
}
export default Product;