import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../Constants/Urls';
import ProductList from '../../Components/RestaurantProducts/ProductList';
import { useGlobal } from '../../Global/GlobalStateContext';

function RestaurantPage () {
  const restaurantId = useParams()
  const restaurantDetails = useRequestData(`${BASE_URL}/restaurants/${restaurantId.id}`)
  const { setRestaurant } = useGlobal()

  if(restaurantDetails) {
    setRestaurant(restaurantDetails.restaurant)
  }

  return (
    <div>
      <h1>RestaurantPage</h1>
      
      {restaurantDetails ? 
      <div>
        <img src={restaurantDetails.restaurant.logoUrl}/> 
        <h2>{restaurantDetails.restaurant.name}</h2>
        <p>{restaurantDetails.restaurant.category}</p>
        <p>{restaurantDetails.restaurant.deliveryTime} min Frete R${restaurantDetails.restaurant.shipping}</p>
        <p>{restaurantDetails.restaurant.address}</p>

        <ProductList products={restaurantDetails.restaurant.products}/>
      </div>
      : <h1>Carregando</h1>}

    </div>
  );
}

export default RestaurantPage;