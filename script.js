const apiKey = "f836e4fa43mshed66421df134f2bp1aeb83jsn8fc126544755";
const apiHost = "weather-by-api-ninjas.p.rapidapi.com";

const getWeather = (city) => {
  const url = `https://${apiHost}/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": apiHost,
    },
  };

  cityName.innerHTML = city;

  fetch(url, options)
    .then((response) => response.json()) // Parse response as JSON
    .then((result) => {
      console.log(result);
      
      // cloud_pct.innerHTML = result.cloud_pct;
      temp.innerHTML = result.temp;
      temp2.innerHTML = result.temp;
      feels_like.innerHTML = result.feels_like;
      humidity.innerHTML = result.humidity;
      humidity2.innerHTML = result.humidity;
      min_temp.innerHTML = result.min_temp;
      max_temp.innerHTML = result.max_temp;
      wind_speed.innerHTML = result.wind_speed;
      wind_speed2.innerHTML = result.wind_speed;
      wind_degrees.innerHTML = result.wind_degrees;
      sunrise.innerHTML = result.sunrise;
      sunset.innerHTML = result.sunset;


      
    })
    .catch((error) => console.error(error));
};

const Submit = document.getElementById("Submit"); // Assuming you have an HTML button element with the ID "Submit"
const cityInput = document.getElementById("city"); // Assuming you have an HTML input element with the ID "city"

Submit.addEventListener("click", (e) => {
  e.preventDefault();
  const city = cityInput.value;
  getWeather(city);
});

// Example usage
getWeather("Delhi");
