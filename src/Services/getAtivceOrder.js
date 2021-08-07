import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { authHeader } from "../constants/authHeader";

export const getActiveOrder = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/active-order`, authHeader());
    const { order } = response.data;

    return {
      order,
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