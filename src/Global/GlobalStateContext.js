import React, { useContext } from 'react'

const GlobalStateContext = React.createContext()

export const useGlobal = () => {
    return useContext(GlobalStateContext);
  };

export default GlobalStateContext