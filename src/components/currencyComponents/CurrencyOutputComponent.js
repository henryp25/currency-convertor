import { useContext, useEffect, useState } from 'react';
import React from 'react'
import CurrencyContext from './CurrencyContext';



function CurrencyOutputComponent({ convertClick, currencyName, conversionResult }) {
  
  const { currencies } = useContext(CurrencyContext);
  const [currencySymbol, setCurrencySymbol ] = useState('$')
  
  useEffect(() => {
    console.log('testing')
    currencies.map((currency) => {
      console.log(currency.code)
      if (currency.code === currencyName) {
        setCurrencySymbol(currency.symbol)
      }
    })
  }, [currencyName])
  return (
    <div class="output">
        <tr className='button'>
        <button onClick={convertClick}>Convert</button>
        </tr>
        <h2>Amount in USD is equal to </h2>
        <br></br>
        <div className='conversion-box'>
          <p>{currencySymbol}{conversionResult}</p>
        </div>
    </div>
  )
}

export default CurrencyOutputComponent