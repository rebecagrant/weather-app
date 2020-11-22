// DISPLAY DATE
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let day = date.getDay();
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let weekDay = weekDays[day];

  return `${weekDay} ${hours}:${minutes}`;
}

let date = document.querySelector("#date");
let currentTime = new Date();
date.innerHTML = formatDate(currentTime);

// DISPLAY CITY INPUT

function weatherDisplay(response) {
  document.querySelector("#city-input").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
 
  let currentCity = document.querySelector("#current-city");
  let cityInput = document.querySelector("#city-input");
  currentCity.innerHTML = cityInput.value;

  document.querySelector("#status").innerHTML =
    response.data.weather[0].main;
}

function search(event) {
  event.preventDefault();
  let apiKey = "3f4a81b7800c9c7008887814c1af70f7";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(weatherDisplay);
}

let searchForm = document.querySelector("#search-form1");
searchForm.addEventListener("submit", search);

// CHANGE UNIT FAHRENHEIT

function changeUnitF(event) {
  let temperature = document.querySelector("#temperature").value;

  event.preventDefault();
  temperature.innerHTML = `temperature * 1.8 + 32`;
  document.querySelector("#fahrenheit").style.color = "gray";
  document.querySelector("#celsius").style.color = "black";
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", changeUnitF);

// CURRENT LOCATION

function showLocation(position) {
  let apiKey = `3f4a81b7800c9c7008887814c1af70f7`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showLocation);

function showTemperature(response) {
  console.log(Math.round(response.data.main.temp));

  let temperature = Math.round(response.data.main.temp);
  let h1 = document.querySelector("#current-city");
  h1.innerHTML = `${h1}`;
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${temperature}°`;
}