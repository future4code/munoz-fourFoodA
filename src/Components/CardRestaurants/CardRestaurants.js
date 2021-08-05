import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";

const CardRestaurants = (props) => {
  const history = useHistory();
  const { dataRestaurant, setDataRestaurant, restaurant, setRestaurant} = useContext(
    GlobalStateContext
  )

  
  return (
    <div>
      
        <img
          src={props.restaurants && props.restaurants.logoUrl}
          alt={props.restaurants.name}
        />
        <div>{props.restaurants.name}</div>
      
    </div>
  )
}

export default CardRestaurants;