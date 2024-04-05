import React, { useState , useContext } from 'react';
import currencyApi from './currencyApi';
import CurrencyProvider from '../components/currencyComponents/CurrencyProvider';
import CurrencyOutputComponent from '../components/currencyComponents/CurrencyOutputComponent';
import CurrencySelectionComponent from '../components/currencyComponents/CurrencySelectionComponent';

function CurrencyConverter() {
  
    let conversion;
    //Setting state for user input
    const [input, setInput] = useState(0);
    const [conversionResult, setConverisonResult] = useState(0)
      //Setting state for user input
    const handleCurrencyInput = (e) => {
        setInput(e.target.value);
      }; 
    const convertClick = () => {
        currencyApi(input, fromCurrency, toCurrency)
        .then((res) => {
          conversion = res;
          setConverisonResult(conversion)
          })
          .catch((err) => {
            console.log(`error in conversion: ${err}`);
          });;
      }
    //Setting state for conversion result
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('GBP');

    const handleFromCurrency = (e) => {
      setFromCurrency(e.target.value);
    }
    const handleToCurrency = (e) => {
      setToCurrency(e.target.value);
    }
  return (  
    <CurrencyProvider>
    <div className='currency-converter'>
        <CurrencySelectionComponent handleCurrencyInput={handleCurrencyInput} input={input} handleFromCurrency={handleFromCurrency} handleToCurrency={handleToCurrency} />       

        <CurrencyOutputComponent convertClick={convertClick} conversionResult={conversionResult} currencyName={toCurrency} />
    </div>
      {/* //Currency Results */}
    </CurrencyProvider>
  );
}
export default CurrencyConverter;







