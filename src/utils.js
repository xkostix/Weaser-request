const fetch = require("node-fetch");

const domain = "https://www.metaweather.com";

const searchCity = ["Moscow", "London", "St Petersburg"];

function getCity(index) {
  return fetch(`${domain}/api/location/search/?query=${searchCity[index]}`)
    .then(e => e.json())
    .then(data => data)
    .catch();
}

function getWeather(id) {
  return fetch(`${domain}/api/location/${id}/`)
    .then(e => e.json())
    .then(data => {
      var imgTitle = data.consolidated_weather[0].weather_state_abbr;
      return {
        city: data.title,
        temp: Math.floor(data.consolidated_weather[0].the_temp),
        img: `https://www.metaweather.com/static/img/weather/${imgTitle}.svg`
      };
    })
    .catch();
}

async function weatherRequest(index) {
  const cities = await getCity(index);
  const cityID = cities[0].woeid;
  const weather = await getWeather(cityID);
  return weather;
}

module.exports = weatherRequest;
