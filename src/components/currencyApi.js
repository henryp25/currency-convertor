import React from 'react'
import axios from 'axios'

export default async function currencyApi(amount, fromCurrency, toCurrency) {
  // const apiKey = process.env.CURRENCY_API_KEY
  const apiKey =  "dbb52aab83891f78fa6e"
  fromCurrency = encodeURIComponent(fromCurrency);
  toCurrency = encodeURIComponent(toCurrency);
  var query = fromCurrency + '_' + toCurrency;

  var url = 'https://free.currconv.com/api/v7/convert?q='
            + query + '&compact=ultra&apiKey=' + apiKey;
  return await axios.get(url)
  .then(
    function(res){
        var val = res.data[query];
        if(val){
          var total = val * amount;
          return Math.round(total * 100) / 100;
        } else {
          var err = new Error("Value not found for " + query);
          console.log(err);
        }
    })
    .catch(function(err){
      console.log(err);
    });
  
}