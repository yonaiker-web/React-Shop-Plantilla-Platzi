import React, { useContext } from "react";
import "../styles/OrderItem.scss";
import close from "../assets/icons/icon_close.png";
import AppContext from "../context/AppContext";

const OrderItem = ({ product }) => {
  //traemos la funcion para eliminar de las ordenes
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.image[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
