const API_KEY = "44efc639b73e18591d0a418f623fd702";

function onGeoPass(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log(url);
  fetch(url);
}

function onGeoError() {
  alert("location not found, weather not provided");
}

navigator.geolocation.getCurrentPosition(onGeoPass, onGeoError);
