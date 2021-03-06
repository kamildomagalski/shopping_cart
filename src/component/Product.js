import React, { useState, useEffect } from "react";
import x_img from "../images/x-img.png";
import edit_img from "../images/edit-img.png";

function Product({ item, deleteProduct, updateProduct, update }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [error, setError] = useState({
    wrongQty: "",
    tooMuch: "",
  });
  useEffect(() => {
    if (!validate()) return;
    updateProduct(item.id, quantity);
    clearError();
  }, [update]);

  const handleChange = (e) => {
    setQuantity(
      parseInt(e.target.value) ? parseInt(e.target.value) : e.target.value
    );
  };
  const handleAddQuantity = () => {
    if (quantity === "" || quantity < 0 || typeof quantity !== "number") {
      return setQuantity(1);
    }
    setQuantity((prevState) => prevState + 1);
  };
  const handleSubtractQuantity = () => {
    setQuantity((prevState) => prevState - 1);
  };
  const handleDelete = () => {
    deleteProduct(item.id);
  };

  function handleUpdateProduct() {
    if (!validate()) return;
    updateProduct(item.id, quantity);
    clearError();
  }

  function validate() {
    let isValid = true;
    if (quantity <= 0 || typeof quantity !== "number" || quantity === "") {
      isValid = false;
      setError((prevState) => ({
        ...prevState,
        wrongQty: "Wrong quantity!",
      }));
    } else if (quantity > 99) {
      isValid = false;
      setError((prevState) => ({
        ...prevState,
        tooMuch: "Max qty is 99",
      }));
    }
    return isValid;
  }

  function clearError() {
    setError({
      wrongQty: "",
      tooMuch: "",
    });
  }

  return (
    <div className="product">
      <div className="iconContainer" onClick={handleDelete}>
        <img src={x_img} alt="close button" />
      </div>
      <div className="imgContainer">
        <img src={`../${item.img}`} alt={`${item.productName}`} />
      </div>
      <p className="product__text">{item.productName}</p>
      <p className="product__text">${item.unitPrice.toFixed(2)}</p>
      <div className="qtyWrapper">
        <button
          className="btn"
          onClick={handleSubtractQuantity}
          disabled={
            quantity <= 1 || quantity === "" || typeof quantity !== "number"
          }
        >
          -
        </button>
        <input
          className="input"
          type="text"
          name="quantity"
          value={quantity}
          onChange={handleChange}
        />
        <button
          className="btn"
          onClick={handleAddQuantity}
          disabled={quantity >= 99}
        >
          +
        </button>
        <div className="iconContainer" onClick={handleUpdateProduct}>
          <img src={edit_img} alt="pencil" />
        </div>
        <p className={"product__error"}>
          {error.wrongQty}
          {error.tooMuch}
        </p>
      </div>
    </div>
  );
}

export default Product;
