import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToRestaurant } from "../routes/coordinator"

export const login = (body, clear,history, setRightButtonText) => {
    axios.post(`${BASE_URL}/{{appName}}/login`, body)
    .then((res)=> {
    localStorage.setItem("token", res.data.token)
    clear()
    goToRestaurant(history)
    setRightButtonText("Logout")
  })
    .catch((err)=> alert(err.response.data.message))
  }

  export const signUp = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/{{appName}}/signup`, body)
    .then((res)=> {
      localStorage.setItem("token", res.data.token)
      clear()
      goToRestaurant(history)
      setRightButtonText("Logout")
    })
    .catch((err)=> alert(err.response.data.message))
  }