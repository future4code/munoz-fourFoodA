import axios from "axios"
import { BASE_URL } from "../Constants/Urls"
import { goToFeed } from "../Routes/Coordinator"
import { goToAddress } from "../Routes/Coordinator"

export const login = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/login`, body)
    .then((res)=> {
    localStorage.setItem("token", res.data.token)
    clear()
    if(res.data.user.hasAddress){    
      goToFeed(history)
    } else {
      goToAddress(history)
    }

    // setRightButtonText("Logout")
  })
    .catch((err)=> alert(err.response.data.message))
  }

  export const signUp = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/signup`, body)
    .then((res)=> {
      localStorage.setItem("token", res.data.token)
      console.log(res)
      clear()
      goToAddress(history)
      // setRightButtonText("Logout")
    })
    .catch((err)=> alert(err.response.data.message))
  }