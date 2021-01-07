import axios from 'axios'
import { useState, useEffect } from 'react'
export const useField = (type) => {
  const [value, setValue] = useState('')
  const onChange = (event) => {
    setValue(event.target.value)
  }
  return {
    type,
    value,
    onChange,
  }
}

export const useCountry = (name) => {
  const [country, setCountry] = useState(null)
  useEffect(() => {
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
      )
      .then((response) => {
        setCountry({ found: 'yes', data: response.data[0] })
        console.log('successful')
      })
      .catch((error) => {
        console.log('not successful')
        setCountry({ found: null, data: null })
      })
  }, [name])
  return country
}
