import axios from "axios";
import { useState, useEffect } from "react";

const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState);


  useEffect(() => {
    axios
      .get(url, {
        headers: {
          auth: localStorage.getItem('token')
        },
      })
      .then((res) =>  { 
        setData(res.data)})
      .catch((err) => {
        if(err.response.data.message){
        alert(err.response.data.message)
        } else{
          alert(err)
        }
      })
  }, [url,initialState]);

  return data;
}

export default useRequestData