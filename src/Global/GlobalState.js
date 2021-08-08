import GlobalStateContext from "./GlobalStateContext";
import { useCartState } from "../hooks/useCartState";
import { getRestaurants } from "../services/getRestaurants";
import { getActiveOrder } from "../services/getActiveOrder";
import React, { useContext, useEffect, useState } from "react";
import { getUserData } from "../services/user";

export const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [carrinho, setCarrinho] = useState([])
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  const [
    cartState,
    addItemCart,
    removeItemCart,
    infoRest,
    setInfoRest,
    clearCart,
  ] = useCartState();


    const cart = {
      cartState,
      addItemCart,
      removeItemCart,
      infoRest,
      setInfoRest,
      clearCart,
    };

    
  const [orders, setOrders] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getRestaurants();

      if (res.status) {
        setRestaurants(res.restaurants);
      } else {
        console.log(res.message);
      }
      setIsUpdate(false);
    })();
  }, [isUpdate]);

  useEffect(() => {
    (async () => {
      const res = await getActiveOrder();

      res.status && setOrders(res.order);
    })();
  }, []);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      getUserData(setUser);
    }
  }, []);
  const states = {
    carrinho,
    data,
    user,
    restaurants,
  };
  const setters = {
    setCarrinho,
    setData,
    setUser,
    setRestaurants,
  };

  return (
    <GlobalStateContext.Provider value={{ states, setters, cart }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalStateContext);
};

export const useGlobalStates = () => {
  const { states } = useGlobal();
  return states;
};

export const useGlobalSetters = () => {
  const { setters } = useGlobal();
  return setters;
};
