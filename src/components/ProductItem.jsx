import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import "../styles/ProductItem.scss";

import addToCard from "../assets/icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  //importamos la funcion que contiene todo el contexto
  const { addToCart } = useContext(AppContext);

  product.image = [
    `https://api.lorem.space/image?w=500&h=500&r=${Math.random() * 2000}`,
    `https://api.lorem.space/image?w=500&h=500&r=${Math.random() * 2000}`,
    `https://api.lorem.space/image?w=500&h=500&r=${Math.random() * 2000}`,
    `https://api.lorem.space/image?w=500&h=500&r=${Math.random() * 2000}`,
  ];

  const handleCart = () => {
    setCart([]);
  };

  return (
    <div className="ProductItem">
      <img src={product.image[0]} alt={product.title} />
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
