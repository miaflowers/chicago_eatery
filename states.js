const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://restaurants-near-me-usa.p.rapidapi.com/restaurants/all-state',
  headers: {
    'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com',
    'X-RapidAPI-Key': 'af093498d8mshd4e95e06b3ea3aap1d9410jsn8864d1b68297'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});