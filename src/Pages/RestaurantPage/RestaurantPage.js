import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../Constants/Urls';
import ProductList from '../../Components/RestaurantProducts/ProductList';
import { RestaurantDetails, Text } from './styled';
import { useGlobal } from '../../Global/GlobalStateContext';
import Header from '../../Components/Header/Header';

function RestaurantPage () {
  const restaurantId = useParams()
  const restaurantDetails = useRequestData(`${BASE_URL}/restaurants/${restaurantId.id}`)
  const { setRestaurant } = useGlobal()

  if(restaurantDetails) {
    setRestaurant(restaurantDetails.restaurant)
  }

  return (
    <div>
      <Header/>
      
      {restaurantDetails ? 
      <RestaurantDetails>
        <img className={"img"} src={restaurantDetails.restaurant.logoUrl}/> 
        <h1>{restaurantDetails.restaurant.name}</h1>
        <h3>{restaurantDetails.restaurant.category}</h3>
        <p>{restaurantDetails.restaurant.deliveryTime} min Frete R${restaurantDetails.restaurant.shipping}</p>
        <p>{restaurantDetails.restaurant.address}</p>

        <ProductList products={restaurantDetails.restaurant.products}/>
      </RestaurantDetails>
      : <h1>Carregando</h1>}

    </div>
  );
}

export default RestaurantPage;