import axios from "axios";
import React, { useEffect, useState } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import { BASE_URL } from "../constants/urls";

const GlobalState = (props) => {
    const [nameRestaurant, setNameRestaurant] = useState([])
    const [dataRestaurant, setDataRestaurant] = useState([])
    const [restaurant, setRestaurant] = useState([])	
   
    useEffect(() => {
        getNameRestaurant()
    }, [])


    useEffect(() => {
        const listRestaurant = []
        nameRestaurant.forEach((item) => {
            axios.get(`${BASE_URL}/${item.name}`)
                .then((response) => {
                    listRestaurant.push(response.data.restaurants)
			const orderList = listRestaurant.sort((a, b) => {
                            return a.id - b.id
                        })
                    	
                        setDataRestaurant(orderList)
                    }
                )
                .catch((err) => console.log(err.message))
        })

    }, [nameRestaurant])


    const getNameRestaurant= () => {
        axios.get(`${BASE_URL}/restaurants`)
            .then((response) => {
                setNameRestaurant(response.data.results)
            })
            .catch((err) => console.log(err.message))
    }


    const data = { dataRestaurant, setDataRestaurant, restaurant, setRestaurant}


    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}
export default GlobalState