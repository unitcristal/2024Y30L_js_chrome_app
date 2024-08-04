// import API_KEY from "./config.js";

const API_KEY = "44efc639b73e18591d0a418f623fd702";

function success(position) {
  console.log("please response");
  const crd = position.coords;
  const lat = crd.latitude;
  const lon = crd.longitude;
  console.log("lat : ", lat);
  console.log("lon : ", lon);
  // console.log("lat : ", lat);
  // console.log("lon : ", lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const weather = document.querySelector("#weather span:first-child");
  //     const city = document.querySelector("#weather span:last-child");
  //     city.innerText = data.name;
  //     // weather.innerText = data.weather[0].main;
  //     weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  //   });
}

function error() {
  console.log("location not found, weather not provided");
}

navigator.geolocation.getCurrentPosition(success, error);
