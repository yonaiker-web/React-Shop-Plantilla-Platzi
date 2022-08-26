import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import AppContext from "../context/AppContext";
import "../styles/ProductItem.scss";

import addToCartImage from "../assets/icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  //importamos la funcion que contiene todo el contexto
  const { addToCart } = useContext(AppContext);

  const image = useMemo(
    () => [
      `https://api.lorem.space/image?w=500&h=500&r=${Math.random() * 2000}`,
      `https://api.lorem.space/image?w=500&h=500&r=${Math.random() * 2000}`,
      `https://api.lorem.space/image?w=500&h=500&r=${Math.random() * 2000}`,
      `https://api.lorem.space/image?w=500&h=500&r=${Math.random() * 2000}`,
    ],
    []
  );

  const handleClick = (item) => {
    addToCart({ ...item, image });
  };

  return (
    <div className="ProductItem">
      <img src={image[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartImage} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
