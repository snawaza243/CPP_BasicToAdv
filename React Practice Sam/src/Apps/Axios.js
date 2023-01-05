const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://healthwise.p.rapidapi.com/body/diseases/%7Bbodypart%7D',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'healthwise.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});