import axios from "axios";
import { BASE_URL } from "../Constants/Urls";


export const getSearch = (setRestaurants) => {
    axios
        .get(`${BASE_URL}/restaurants`,  {
            headers: {
                auth: localStorage.getItem("token"),
            },
        })
        .then(response => {
            setRestaurants(response.data.restaurants)
        })
        .catch(error => {
            console.log(error.message)
        })
}