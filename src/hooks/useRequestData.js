import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../Constants/Urls'

const useRequestData = (path, result) => {
    const [data, setData] = useState(undefined)

    const getUserData = () => {
      axios.get (
        `${BASE_URL}/fourFoodA/${path}`,
        {
          headers: {
            auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imlkand4bEtLNDY3YlAyY0g4emFhIiwibmFtZSI6IkpvYW5hIiwiZW1haWwiOiJqb2FuYUBnbWFpbC5jb20iLCJjcGYiOiI3MjY1MjU2MTA3MyIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJBY2Vzc28gVWlyYXB1cnUgZG8gU2VydMOjbywgMjM2LCA3YiAtIENlbnRybyIsImlhdCI6MTYyODA0MTUyNn0.KJDc0EHnXIqTJ3KFVe5wH6P9zV5_dApZOsiatUGvk0k"
          }
        }
      )
      .then (response => {
        setData(response.data[result])
      })
      .catch (error => {
        console.log(error)
      })
    }
  
    useEffect(() => {
      getUserData()
    }, [])

    return data
}

export default useRequestData