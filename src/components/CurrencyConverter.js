import React, { useState } from 'react';


function CurrencyConverter() {
    let conversion;
    const [input, setInput] = useState(0);
    const [conversionResult, setConverisonResult] = useState(0)
    const handleCurrencyInput = (e) => {
      setInput(e.target.value);
    };
    const convertClick = () => {
      const conversion =  Math.trunc(input * 0.85);
      console.log(`The value of input is ${conversion}`);
      setConverisonResult(conversion)
    }
  return (
    <div >
      {/* //Currency Converter */}
      <div class="currency-box">
        <input type="text"  value={input} onChange={handleCurrencyInput} />
        <button onClick={convertClick}>Convert</button>
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







