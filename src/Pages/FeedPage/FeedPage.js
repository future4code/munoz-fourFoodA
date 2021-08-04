import React from 'react';
import CardRestaurants from '../../Components/CardRestaurants/CardRestaurants';
import useRequestData from '../../hooks/useRequestData';

const FeedPage = () => {
  const feed = useRequestData("restaurants", "restaurants")
  console.log("teste", feed)

  return (
    <div>
      <h1>Restaurantes</h1>
      <CardRestaurants/>
    </div>
  );
}

export default FeedPage;