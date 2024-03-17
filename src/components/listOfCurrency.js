import React from 'react'

function listOfCurrency() {
    const apiKey =  "fca_live_YOHb38QeHG0e1gmE6iu8TcTyKLbMPByQlycD4quh"
    var url = 'https://api.freecurrencyapi.com/v1/currencies?apikey=' + apiKey
    axios.get(url).then((res) => {
        const data = JSON.parse(JSON.stringify(res.data));
    }).catch((err) => {
        console.log(err)
    } )

  return (
    <tr className='user-input'>
    <label for="fromCurrency">Select the currency to convert from:</label>
        <select onChange={handleFromCurrency} id="currency" name="currency">
            <option value="USD">United States Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">British Pound Sterling (GBP)</option>
            <option value="JPY">Japanese Yen (JPY)</option>
            <option value="CAD">Canadian Dollar (CAD)</option>
            <option value="AUD">Australian Dollar (AUD)</option>
            <option value="CHF">Swiss Franc (CHF)</option>
            <option value="CNY">Chinese Yuan (CNY)</option>
        </select>
    </tr>
  )
}

export default listOfCurrency