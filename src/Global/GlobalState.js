import GlobalStateContext from "./GlobalStateContext";
import React, { useState } from "react";

export const GlobalState = (props) => {
  const [restaurant, setRestaurant] = useState({});
  const [cart, setCart] = useState([])

  const global = {
    cart,
    setCart,
    restaurant,
    setRestaurant
  }

  return (
    <GlobalStateContext.Provider value={ global }>
      {props.children}
    </GlobalStateContext.Provider>
  );
};