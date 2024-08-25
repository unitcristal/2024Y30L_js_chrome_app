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
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather_info = `${data.weather[0].main} / ${data.main.temp}°C`;
      const location_info = data.name;
      document.querySelector(
        "#location_info"
      ).innterText = `Location: ${location_info}`;
      document.querySelector(
        "#weather_info"
      ).innterText = `Location: ${weather_info}`;
    })
    .catch((error) => {
      console.error("error fetching weather data", error);
    });
}

function error() {
  console.log("error callback triggered");
  console.log("location not found, weather not provided");
}

document.querySelector("#get_location").addEventListener("click", () => {
  console.log("Button clicked"); // 버튼이 클릭되었을 때 로그 확인
  navigator.geolocation.getCurrentPosition(success, error);
});
// pr err

// navigator.geolocation.getCurrentPosition(success, error);

// //   what pr ?
// const btn = document.querySelector("#weather button");

// function get_location() {
//   console.log("getlocation function called");
//   const location = document.querySelector(".wheather_location");
//   const status = document.querySelector(".wheather_status");

//   if (navigator.geolocation) {
//     status.textContent = "locating...";
//     console.log("requesting location...");

//     navigator.geolocation.getCurrentPosition(success, error);
//   } else {
//     status.textContent = "Geolocation is not supported by your browser";
//     console.log("Geolocation is not supported by your browser");
//   }
//   function success(position) {
//     console.log("geolocation success");
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     status.textContent = "";
//     location.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
//   }
//   function error(err) {
//     console.log("geolocation error", err);
//     status.textContent = "unable to retrieve your location";
//   }
// }

// btn.addEventListener("click", get_location);
