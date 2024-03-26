import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CurrencyContext from './CurrencyContext'
import { v4 as uuidv4 } from 'uuid';



function CurrencyProvider({children}) {
  const [currencies, setCurrencies] = useState([]);
  const apiKey =  process.env.REACT_APP_CURRENCY_API_KEY
  

  useEffect(() => {
    var url = 'https://api.freecurrencyapi.com/v1/currencies?apikey=' + apiKey
    axios.get(url).then((res) => {
      const data = res.data.data;
      let currencyList = Object.entries(data).map(([code,details]) => ({
        id:  uuidv4(),
        code,
        ...details
      }))
      setCurrencies(currencyList)
    }).catch((err) => {
      console.log(err)
    } )
  } , [])

  return (
    <CurrencyContext.Provider value={{currencies}}>
      {children}
    </CurrencyContext.Provider>
  )
}

export default CurrencyProvider
