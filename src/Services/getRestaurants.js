import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { authHeader } from "../constants/authHeader";

export const getRestaurants = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/restaurants`, authHeader());

    const { restaurants } = response.data;

    return {
      restaurants,
      status: true,
    };
  } catch (error) {
    const { message } = error.response.data;
    return {
      message,
      status: false,
    };
  }
};
