import React, { useState, useEffect } from 'react'
import RestaurantCard from '../../Components/RestaurantCard/RestaurantCard';
import useProtectedPage from '../../hooks/useProtectedPage'
import Footer from '../../Components/Footer/Footer'
import { BASE_URL } from '../../Constants/Urls';
import useRequestData from '../../hooks/useRequestData';
import Load from '../../assets/loading.gif'
import { RestaurantContainer } from './styled'
import SearchComponent from '../../Components/Search/SearchComponent';
import Category from '../../Components/Category/Category';
import Header from '../../Components/Header/Header';

const FeedPage = () => {
  useProtectedPage();
  const restaurants = useRequestData(`${BASE_URL}/restaurants`, {})
  const [choice, setChoice] = useState("")
  const categoria = []
  const filteredRestaurants = restaurants.restaurants && restaurants.restaurants
      .filter(products => products.category.includes(choice))

  const listOfCategory = restaurants.restaurants && restaurants.restaurants.map((el, i, arr) => {
      const index = categoria.findIndex((categoryName) => {
          if (categoryName === el.category) {
              return true
          } else {
              return false
          }
      })
      if (index === -1) {
          categoria.push(el.category)

      }
  })

  const test = { restaurants: filteredRestaurants }
 
  return (
      <RestaurantContainer>
          <Header/>
          <SearchComponent />
          <Category categoria={categoria} setChoice={setChoice} choice={choice} />
          {restaurants.restaurants ? <RestaurantCard restaurants={test} /> : <img className={"loading"} src={Load} alt={"loading"} />}
          <Footer />
      </RestaurantContainer>
  )
}


export default FeedPage;