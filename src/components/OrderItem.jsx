import React from "react";
import "../styles/OrderItem.scss";
import close from "../assets/icons/icon_close.png";

const OrderItem = ({ product }) => {
  return (
    <div className="OrderItem">
      <figure>
        <img src={product.image[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img src={close} alt="close" />
    </div>
  );
};

export default OrderItem;
