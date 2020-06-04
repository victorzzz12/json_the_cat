const request = require('request');
let userInput = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput[0]}`, (error, response, body) => {

  if (error) {
    console.log('Error:', error);
    return;
  }

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("The search parameters are incorrect. No cats can be found. Please try again.");
    return;
  }

  console.log(`\n${data[0].description}\n`);

});
