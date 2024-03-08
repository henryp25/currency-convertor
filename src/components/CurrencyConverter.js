import React, { useState } from 'react';
import currencyApi from './currencyApi';


function CurrencyConverter() {
    let conversion;
    const [input, setInput] = useState(0);
    const [conversionResult, setConverisonResult] = useState(0)
    const handleCurrencyInput = (e) => {
      setInput(e.target.value);
    };  
    const convertClick = () => {
      currencyApi(input, 'EUR', 'GBP')
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
            <label for="currency">Select the currency to convert from:</label>
                <select onchange={}id="currency" name="currency">
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="gbp">GBP</option>
                  <option value="jpy">JPY</option>
                  <option value="cad">CAD</option>
                  <option value="aud">AUD</option>
                  <option value="chf">CHF</option>
                  <option value="cny">CNY</option>
                </select>
          </tr>
          <tr className='user-input'>
              <label for="currency">Select the currency to convert to:</label>
              <select id="currency" name="currency">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
                <option value="jpy">JPY</option>
                <option value="cad">CAD</option>
                <option value="aud">AUD</option>
                <option value="chf">CHF</option>
                <option value="cny">CNY</option>
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
          <p>${conversionResult}</p>
        </div>

      </div>
      </div>

    </div>

  );
}
export default CurrencyConverter;







