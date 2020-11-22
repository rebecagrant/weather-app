function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let weekDay = weekDays[dayIndex];

  return `${weekDay} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

//

function changeUnitF(event) {
  let temperature = document.querySelector("#temperature");
  let select = document.querySelector("#select");

  event.preventDefault();
  temperature.innerHTML = 54;
  document.querySelector("#fahrenheit").style.color = "gray";
  document.querySelector("#celsius").style.color = "black";
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", changeUnitF);

function changeUnitC(event) {
  event.preventDefault();
  temperature.innerHTML = 12;
  document.querySelector("#celsius").style.color = "gray";
  document.querySelector("#fahrenheit").style.color = "black";
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", changeUnitC);

function search(event) {
  event.preventDefault();
  let apiKey = "3f4a81b7800c9c7008887814c1af70f7";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function showLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = `3f4a81b7800c9c7008887814c1af70f7`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showLocation);

function showTemperature(response) {
  console.log(Math.round(response.data.main.temp));

  let temperature = Math.round(response.data.main.temp);
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${temperature}°C`;
}

let positionForm = document.querySelector("#currentLocation");
positionForm.addEventListener("submit", search);





// DISPLAY LOCATION

function showLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = `3f4a81b7800c9c7008887814c1af70f7`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showLocation);

let currentLocation = document.querySelector("#currentLocation");
currentLocation.addEventListener("click", showLocation);

function showTemperature(response) {
  console.log(Math.round(response.data.main.temp));

  let temperature = Math.round(response.data.main.temp);
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${temperature}°`;
}


// CHANGE UNITS FAHRENHEIT

function changeUnitF(event) {
  let temperature = document.querySelector("#temperature");
  let select = document.querySelector("#select");

  event.preventDefault();
  temperature.innerHTML = 56;
  document.querySelector("#fahrenheit").style.color = "gray";
  document.querySelector("#celsius").style.color = "black";
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", changeUnitF);

// CHANGE UNITS CELSIUS

function changeUnitC(event) {
  event.preventDefault();
  temperature.innerHTML = 12;
  document.querySelector("#celsius").style.color = "gray";
  document.querySelector("#fahrenheit").style.color = "black";
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", changeUnitC);
