import '../App.css';
import { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';


function App() {
  return (
    <div className="App">
      <div class="header">
        <h1>Currency Converter</h1>
      </div>
    <div className='productDescription'>
      <p>
        Our Currency Converter tool is designed to provide users with fast, accurate, and real-time currency exchange rates. Whether you're planning a trip abroad, conducting international business, or simply exploring financial markets, this tool is your go-to resource for all currency conversion needs. It supports a wide range of global currencies, offering the flexibility to compare and convert between them effortlessly. <br></br>
        <br></br>With an intuitive interface, users can easily select their desired currencies, input the amount to be converted, and instantly receive the equivalent value in the target currency. Our converter updates continuously to reflect the latest market rates, ensuring you have the most current information at your fingertips. Perfect for travelers, traders, and anyone looking to make informed financial decisions across borders.
      </p>
    </div>
      <div>
        <p>
        </p>
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
