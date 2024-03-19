import React, { useState } from 'react';
import currencyApi from './currencyApi';
import axios from 'axios';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const fetchCurrencyData = (setCurrencyList) => {
    const apiKey =  "fca_live_YOHb38QeHG0e1gmE6iu8TcTyKLbMPByQlycD4quh"
    var url = 'https://api.freecurrencyapi.com/v1/currencies?apikey=' + apiKey
    axios.get(url).then((res) => {
        const data = res.data.data;
        let currencyList = Object.entries(data).map(([code,details]) => ({
            id: uuidv4(),
            code,
            ...details
        }))
        setCurrencyList(currencyList)
    }).catch((err) => {
        console.log(err)
    } )
}


function CurrencyConverter() {
    let conversion;
    //setting state for different currencies
    const [currencies, setCurrencies] = useState([]);
    useEffect(() =>{
        fetchCurrencyData(setCurrencies)
    }, [])

    //Setting state for user input
    const [input, setInput] = useState(0);
    const [conversionResult, setConverisonResult] = useState(0)
    const [currencySymbol, setCurrencySymbol] = useState('$') //['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY'

    //Setting state for conversion result
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('GBP');

    const handleCurrencyInput = (e) => {
      setInput(e.target.value);
    }; 

    const handleFromCurrency = (e) => {
      setFromCurrency(e.target.value);
    }
    const handleToCurrency = (e) => {
      if (e.target.value === 'USD') {
        setCurrencySymbol('$');
      } else if (e.target.value === 'EUR') {
        setCurrencySymbol('€');
      } else if (e.target.value === 'GBP') {
        setCurrencySymbol('£');
      } else if (e.target.value === 'JPY') {
        setCurrencySymbol('¥');
      } else if (e.target.value === 'CAD') {
        setCurrencySymbol('C$');
      } else if (e.target.value === 'AUD') {
        setCurrencySymbol('A$');
      } else if (e.target.value === 'CHF') {
        setCurrencySymbol('Fr');
      } else if (e.target.value === 'CNY') {
        setCurrencySymbol('¥');
      }
      setToCurrency(e.target.value);
    }

    const convertClick = () => {
      currencyApi(input, fromCurrency, toCurrency)
      .then((res) => {
        conversion = res;
        console.log(`The value of input is ${conversion}`);
        setConverisonResult(conversion)
        })
        .catch((err) => {
          console.log(`error in conversion: ${err}`);
        });;
    }
  return (
    <div >
      {/* //Currency Converter */}
      <div>

      </div>
      <div class="currency-box">
        <h2>Enter the amount in USD</h2>
        <tbody class="input-box">
          <tr className='user-input'>
            <label for="fromCurrency">Select the currency to convert from:</label>
                <select onChange={handleFromCurrency} id="currency" name="currency">
                  {
                    currencies.map( currency => (<option value={currency.code}>{currency.name}</option>))
                  }
                </select>
          </tr>
          <tr className='user-input'>
              <label for="toCurrency">Select the currency to convert to:</label>
              <select onChange={handleToCurrency} id="currency" name="currency">
                {
                      currencies.map( currency => (<option value={currency.code}>{currency.name}</option>))
                    }
              </select>
          </tr>
          <tr className='user-input'>
              <input type="text"  value={input} onChange={handleCurrencyInput} />
          </tr>
          <tr className='button'>
            <button onClick={convertClick}>Convert</button>
          </tr>
        </tbody>
      </div>
      {/* //Currency Results */}
      <div>
      <div class="output">
        <h2>Amount in USD is equal to </h2>
        <br></br>
        <div className='conversion-box'>
          <p>{currencySymbol}{conversionResult}</p>
        </div>

      </div>
      </div>

    </div>

  );
}
export default CurrencyConverter;







