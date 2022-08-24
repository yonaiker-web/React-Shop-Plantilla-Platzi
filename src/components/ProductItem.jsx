import React, { useState } from "react";
import "../styles/ProductItem.scss";

import addToCard from "../assets/icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const [cart, setCart] = useState([product]);

  const handleCart = () => {
    setCart([]);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleCart}>
          <img src={addToCard} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
