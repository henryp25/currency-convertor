import React from 'react'
import axios from 'axios'
import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_YOHb38QeHG0e1gmE6iu8TcTyKLbMPByQlycD4quh');


export default async function currencyApi(amount, fromCurrency, toCurrency) {
  // const apiKey = process.env.CURRENCY_API_KEY
  const apiKey =  "fca_live_YOHb38QeHG0e1gmE6iu8TcTyKLbMPByQlycD4quh"
  fromCurrency = encodeURIComponent(fromCurrency);
  toCurrency = encodeURIComponent(toCurrency);
  
  var url = 'https://api.freecurrencyapi.com/v1/latest?apikey=' + apiKey + `&currencies=${toCurrency}&base_currency=${fromCurrency}`
  return await axios.get(url)
  .then(
    function(res){  
        var val = JSON.parse(JSON.stringify(res.data.data[toCurrency]));
        console.log(val)
        if(val){
          var total = amount * val;
          return Math.round(total);
        } else {
          var err = new Error("Value not found for " + fromCurrency);
          console.log(err);
        }
    })
    .catch(function(err){
      console.log(err);
    });
  
}
