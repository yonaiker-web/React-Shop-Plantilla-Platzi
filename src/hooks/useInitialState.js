import React, { useState } from "react";

//forma de iniciar el estado de context
const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  //funcion para crear o agregar valores, payload es el valor que recibimos
  const addToCart = (payload) => {
    setState({
      //mantenemos el estado
      ...state,
      //a cart agregamos lo que ya exista mas lo que le pasemos
      cart: [...state.cart, payload],
    });
  };

  //retornamos el estado y la funcion
  return {
    state,
    addToCart,
  };
};

export default useInitialState;
