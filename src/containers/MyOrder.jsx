import React, { useContext, useState } from "react";
import OrderItem from "../components/OrderItem";
import "../styles/MyOrder.scss";
import AppContex from "../context/AppContext";

import arrow from "../assets/icons/flechita.svg";

const MyOrder = () => {
  const { state } = useContext(AppContex);

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) =>
      accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    const sumR = sum.toFixed(2);
    return sumR;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product, i) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
