import React, { useState } from "react";

//forma de iniciar el estado de context
const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  //funcion para crear o agregar valores al carrito, payload es el valor que recibimos
  const addToCart = (payload) => {
    setState({
      //mantenemos el estado
      ...state,
      //a cart agregamos lo que ya exista mas lo que le pasemos
      cart: [...state.cart, payload],
    });
  };

  //funcion para eliminar valores del carrito
  const removeFromCart = (payload) => {
    setState({
      //mantenemos el estado
      ...state,
      //validmaos que el items.id sea igual al valor payload.id que es el pasado por parametros
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  //retornamos el estado y la funcion
  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
