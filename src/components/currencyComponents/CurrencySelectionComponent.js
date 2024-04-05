import React , { useContext } from 'react'
import CurrencyContext from './CurrencyContext';

function CurrencySelectionComponent({handleFromCurrency, handleToCurrency, handleCurrencyInput, input}) {
    const { currencies } = useContext(CurrencyContext);


  return (
    <div class="currency-box" >
      <h2>Select Currency you wish to convert</h2>
      <table className='selectionTable'>
        <tbody className="input-box">
            <tr className='user-input'>
              <input type="text"  value={input} onChange={handleCurrencyInput} />
            </tr>
              <tr className='user-input'>
                <label for="fromCurrency">Select the currency to convert from</label>
                    <select onChange={handleFromCurrency} id="currency" name="currency">
                      {
                        currencies.map( currency => (<option key={currency.id}  value={currency.code}>{currency.name}</option>))
                      }
                    </select>
              </tr>
              <tr className='user-input'>
                  <label for="toCurrency">Select the currency to convert to</label>
                  <br></br>
                  <select onChange={handleToCurrency} id="currency" name="currency">
                    {
                          currencies.map( currency => (<option key={currency.id} value={currency.code}>{currency.name}</option>))
                        }
                  </select>
              </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CurrencySelectionComponent